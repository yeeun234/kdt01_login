import Login from "./Login"
import { useAtom } from "jotai"
import { IsLoginAtom } from "../atoms/IsLoginAtom"
import { useEffect } from "react"

export default function Home() {
    const [isLogin,setLogin] = useAtom(IsLoginAtom);
    //atom only stores the value in memory, so when the page is refreshed, the value is lost.
    // To prevent this, we need to use localStorage to store the value.
    // We can use useEffect to check if the value is in localStorage when the component mounts.
    // If it is, we can set the value of the atom to true.
    //session storage is used to store the value only for the current session.
    // When the session ends, the value is lost.
    useEffect(() => {
        const tm = localStorage.getItem("email")
        if(tm !== null){
            setLogin(true);
        }
    },[]);
    return (
        <div className="w-full h-full flex justify-center items-center">
           {isLogin ? `Hi` : <Login/>}
        </div>
    )
}
