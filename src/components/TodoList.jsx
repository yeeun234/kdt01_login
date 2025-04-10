import { useEffect, useState } from "react"
import axios from "axios"
import TodoItem from "./TodoItem"
import TodoForm from "./TodoForm"

const baseurl = "http://localhost:3005/todos"
export default function TodoList() {
  const [tdata,setTdata] = useState();
  const getData = async() => {
    const resp = await axios.get(baseurl) ;
    console.log(resp.data)
    setTdata(resp.data)
  }

  useEffect(()=>{
    getData();
  } ,[]);
  return (
    <div className="w-8/10 flex flex-col justify-start items-center">
      <TodoForm/>
      {tdata && tdata.map(item => <TodoItem key={item.id} todos={item}/>)}
    </div>
  )
}