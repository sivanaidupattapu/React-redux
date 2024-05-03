import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import Todo from './store/todolist';
import Product from './product';
import { connect } from 'react-redux';
function App(props) {
  return (
    <div className="border border-2 border-info p-2">
      <h2 className='text-center text-success'>Redux Components</h2>
    <Counter></Counter>
    <Todo></Todo>
    <div className='border border-2 border-success p-3'>
    <Product></Product>
    </div> 
    </div>
  );
}

export default connect(store=>store)(App);
