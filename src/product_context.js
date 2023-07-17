import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './products_reducer'
import { single_product_url as url } from './constants';

const initialState = {
    products_loading: false,
    products_error: false,
    products: [],
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state,dispatch] = useReducer(reducer,initialState)
  const fetchProducts = async(url) => {
    dispatch({ type: 'GET_PRODUCTS_BEGIN' })
    try{
      const response = await axios.get(url)
      dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: response.data })
    }catch(error){
      dispatch({ type: 'GET_PRODUCTS_ERROR' })
    }
  }
  useEffect(() => {
    fetchProducts(url)
  }, [])
  return (
    <ProductsContext.Provider value={{
      ...state,
    }}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}