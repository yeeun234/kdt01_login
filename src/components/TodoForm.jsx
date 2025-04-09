import { useEffect } from "react"
import { useRef } from "react";
export default function TodoForm() {
    useEffect(()=>{
        inputRef.current.focus();
    },[]);
    const inputRef = useRef();
  return (
    <div className="flex justify-center p-10 items-center w-8/10 ">
        <select className=" text-center border-amber-50 mr-5 cursor-pointer"name="sel" id="sel">
            <option value="x">x</option>
            <option value="o">o</option>
        </select>
      <input className="w-5/12 h-full bg-white ml-1 mr-5" ref={inputRef} type="text" name="todo" id="todoinput" />
      <button className="ml-1 mr-1 bg-amber-500 p-2 rounded-xl cursor-pointer">확인</button>
      <button className="ml-1 mr-1 bg-amber-500 p-2 rounded-xl cursor-pointer">취소</button>
    </div>
  )
}
