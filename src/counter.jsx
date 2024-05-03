import React from "react";
import { connect } from "react-redux";
function Counter(props) {
    console.log(props)
    return <div className='m-2 border border-2 border-danger p-2'>
        <h2 className='text-primary-emphasis text-center'>Counter Component</h2>
        <h2 className='text-center'>Count :{props.counterreducer.count}</h2>
        <p className='text-center'>
            <button className='btn btn-success' onClick={() => { props.dispatch({ type: 'Inc' }) }}>Increment</button>
            <span>{' '}</span>
            <button className='btn btn-danger' onClick={() => { props.dispatch({ type: 'Dec' }) }}>Decrement</button>
        </p>

    </div>
}
export default connect(store => store)(Counter)