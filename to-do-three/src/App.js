
import './App.css';
import Header from './components/Header'
import TodoItem from './components/TodoItem';
import BUtton from './components/BUtton'

function App() {
  return (
    <div className="Todo-container">
      <Header/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <BUtton/>
    </div>
  );
}

export default App;
