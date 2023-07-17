const products_reducer = (state, action) => {
    if(action.type === 'GET_PRODUCTS_BEGIN'){
      return{...state, products_loading:true}
    }
    if(action.type === 'GET_PRODUCTS_SUCCESS'){
      return {
        ...state,
        products_loading: false,
        products: action.payload,
      }
    }
    throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer