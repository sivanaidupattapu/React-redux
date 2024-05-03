import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import Todo from './store/todolist';
import Product from './product';

function App() {
  return (
    <div className="border border-2 border-info p-2">
      <h2>App</h2>
    <Counter></Counter>
    <Todo></Todo>
    <Product></Product>
    </div>
  );
}

export default App;
