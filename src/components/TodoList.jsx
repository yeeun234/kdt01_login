import { useEffect } from "react"
import axios from "axios"
export default function TodoList() {
    const baseurl="http://localhost:3005/todos";
    const getFetch =async ()=>{
        const resp = await axios.get(baseurl);
        const data = resp.data;
        console.log(data);
    }
    useEffect(()=>{
        getFetch();
    },[]);
  return (
    <div>
      
    </div>
  )
}
