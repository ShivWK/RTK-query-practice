import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoList from './components/todoList/TodoList';
import './App.css';

function App() {
  const [isLoading , setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(()=> {
    setLoading(true);
    axios.get('https://dummyjson.com/todos')
    .then(response => {
      setData(prev => {
        return [
          ...prev,
          ...response?.data?.todos
        ]
      })
    })
    .catch((e) => {
      console.log("error");
      setError("Error occured")
    })
    .finally(()=> {
      setLoading(false)
    })
  }, []);

 return <>
    {
      isLoading 
      ? <h1>Loading...</h1> 
      : error 
      ? <h1>some error occured</h1>
      : <TodoList todos={data}/>
    }
 </>
}

export default App
