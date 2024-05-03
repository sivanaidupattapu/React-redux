import React from "react";
import { connect } from "react-redux";
function Counter(props){
    console.log(props)
    return <div className='m-2 border border-2 border-danger p-2'>
        <h2><i className='bg-primary text-light'>Counter Component</i></h2>
        <h2>Count :{props.counterreducer.count}</h2>
        <button className='btn btn-success' onClick={()=>{props.dispatch({type:'Inc'})}}>Increment</button>
        <span>{' '}</span>
        <button  className='btn btn-danger' onClick={()=>{props.dispatch({type:'Dec'})}}>Decrement</button>

    </div>
}
export default connect(store=>store)(Counter)