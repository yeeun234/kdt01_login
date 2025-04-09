import { useEffect,useState } from "react"
import axios from "axios"
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem"
export default function TodoList() {
    const [todos,SetTodos] = useState([]);
    const baseurl="http://localhost:3005/todos";
    const getFetch =async ()=>{
        const resp = await axios.get(baseurl);
        const data = resp.data;
        console.log("data",data);
        SetTodos(data);
    }

    useEffect(()=>{
        getFetch();
    },[]);
  return (
    <div className="w-full h-full bg-amber-100 flex flex-col justify-start items-center">
      <TodoForm/>
      <TodoItem insert={todos}/>
    </div>
  )
}
