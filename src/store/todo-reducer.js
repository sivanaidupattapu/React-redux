const intialstate = {
    todos: ['Adi Siva Naidu', 'Sai Ram Edupoly', 'Sai kumar Edupoly', 'Dinesh']
}
function todoreducer(state = intialstate, action) {
    if (action.type === 'Addtolist') {
        return { ...state, todos: [...state.todos, action.payload] }
    }
    return state
}
export default todoreducer