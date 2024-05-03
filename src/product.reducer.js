const intialstate = {
    cart:[]
}
function productReducer(state=intialstate,action){
    if(action.type==='addtocart'){
        return {...state,cart:[...state.cart,action.payload]}
    }
    return state
}
export default productReducer;