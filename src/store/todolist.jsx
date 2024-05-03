import React from "react";
import { connect } from "react-redux";
function Todo(props) {
    console.log(props)
    return <div className='m-2 p-2 border border-2 border-warning'>
        <h2><i className='bg-primary text-light'>Todolist Component</i></h2>
        <input type="text" id="d1" />
        <span>{' '}</span>
        <button  className='btn btn-success' onClick={()=>{props.dispatch({type:'Addtolist',payload:document.getElementById('d1').value})}}>Add Todo</button>
        <ul> {props.todoreducer.todos.map((todo,i) => { return <li key={i}>{todo}</li> })} </ul>
    </div>
}
export default connect(store => store)(Todo)