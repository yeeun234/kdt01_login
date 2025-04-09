export default function TodoItem({insert}) {
  return (
    <div>
        <ul className="w-full h-full ">
        {/* {todos.map(item => <div>{item["text"]}</div>)} */}
            {insert.map(item => ( 
                <li className="p-1 m-1 bg-white" key={item.id}>{item.text}</li>
                
                ))}
        </ul>
    </div>
  )
}
