import { useReducer } from 'react';
import './App.css';
import toDoReducer from './reducers/toDoReducer';
import initialState from './data/initialStateData';
import ToDoList from './Components/ToDoList';


function App() {
  const[todos,dispatch] = useReducer(toDoReducer,initialState)

  return (
    <div className="App">
      
      <h1> To Do List</h1>
      <ToDoList todos={todos} dispatch={dispatch} />
     

    </div>
  );
}

export default App;
