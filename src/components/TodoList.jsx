import { useEffect } from "react"
import axios from "axios"
 

const baseurl = "http://localhost:3005/todos"
export default function TodoList() {

  const getData = async() => {
    const resp = await axios.get(baseurl) ;
    console.log(resp.data)
  }

  useEffect(()=>{
    getData();
  } ,[]);
  return (
    <div>TodoList</div>
  )
}