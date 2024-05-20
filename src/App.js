import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
function App(props) {
  return (
    <div className="border border-2 border-info p-2">
      <h2 className='text-center text-success'>Redux Components</h2>

      <div className=''>
        <Link to='/todo'>Todolist</Link>
        <Link to='/counter'>Counter</Link>
        <Link to='/products'>Products</Link>
      </div>
    <Outlet></Outlet>
    </div>
  );
}

export default connect(store => store)(App);
