import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoList from './components/todoList/TodoList';
import { useGetAllTodosQuery } from './store/apiSlice';
import './App.css';

function App() {
  // const [isLoading , setLoading] = useState(false);
  // const [data, setData] = useState([]);
  // const [error, setError] = useState("");
 
  const [show , setShow] = useState(true);

  function handleShow() {
    setShow(!show); // Toggeling the value
  }
  // console.log(result)

  // useEffect(()=> {
  //   setLoading(true);
  //   axios.get('https://dummyjson.com/todos')
  //   .then(response => {
  //     setData(prev => {
  //       return [
  //         ...prev,
  //         ...response?.data?.todos
  //       ]
  //     })
  //   })
  //   .catch((e) => {
  //     console.log("error");
  //     setError("Error occured")
  //   })
  //   .finally(()=> {
  //     setLoading(false)
  //   })
  // }, []);

  // let i = 0;
  // while(i < 1000000000) {
  //   i++;
  // }

  // let j = 0;
  // while(j < 1000000000) {
  //   j++;
  // }

  // let k = 0;
  // while(k < 1000000000) {
  //   k++;
  // }

  // let l = 0;
  // while(l < 1000000000) {
  //   l++;
  // }

 return <>
    <div>
      {show && <TodoList />}
    <button onClick={handleShow}>{show ? "Hide Todos" : "Show Todos"}</button>
    </div>
 </>
}

export default App
