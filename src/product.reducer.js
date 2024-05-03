function productReducer(state,action){
    if(action.type==='addtocart'){
        return {...state,item:[...state.item,action.payload]}
    }
    return state
}
export default productReducer;