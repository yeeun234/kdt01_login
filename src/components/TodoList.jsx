import { useEffect, useState } from "react"
import axios from "axios"
import TodoItem from "./TodoItem"

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
    <div><TodoItem todos={tdata}/></div>
  )
}