export default function TodoItem({insert}) {
  return (
    <div>
        <div className="w-full h-full ">
        {/* {todos.map(item => <div>{item["text"]}</div>)} */}
            {insert.map((item,idx) => ( 
                <ul key={item.id} className="flex justify-between">
                    <input type="checkbox" />
                    <li className="p-1 m-1 bg-white" >{item.text}</li>
                    <button className="cursor-pointer bg-amber-200 rounded-2xl" >{idx}삭제</button>
                </ul>
                ))}
        </div>
    </div>
  )
}
