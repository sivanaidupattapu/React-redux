const intialstate = {
    count: 0
}
function counterreducer(state = intialstate, action) {
    if (action.type === 'Inc') {
        return { ...state, count: state.count + 1 }
    }
    if (action.type === 'Dec') {
        return { ...state, count: state.count - 1 }
    }
    return state
}

export default counterreducer
