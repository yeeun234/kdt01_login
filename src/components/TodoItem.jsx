import TailButton from "../ui/TailButton"
export default function TodoItem({todos}) {
  return (
    <li className="w-full border border-gray-300 rounded-lg
                    flex justify-between items-center
                    m-1 px-4 py-1">
      <div className="flex justify-center items-center">
        <span className="text-3xl ">
           {todos.text}
        </span>
        <TailButton caption="취소" color="blue" onClick={()=>{}}/> 
      </div>
      
    </li>
  )
}