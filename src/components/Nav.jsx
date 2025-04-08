
import { IsLoginAtom } from "../atoms/IsLoginAtom";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function Nav() {
  const [login, setLogin] = useAtom(IsLoginAtom);
  const handleclick = () => { 
    setLogin(false);
    localStorage.removeItem("email");

  }
  useEffect(() => {
    console.log("Login state changed:", login);
  }, [login]);
  
  return (
    <div className=" w-full h-full bg-green-100 flex justify-around items-center">
        <Link to="/">
        <div className="bg-green-200  hover:bg-green-300   rounded-lg  sm:w-auto px-5 py-2.5 text-center">Home</div>
        </Link>
        {login && <Link to="/subway">
        <div className="bg-green-200  hover:bg-green-300   rounded-lg  sm:w-auto px-5 py-2.5 text-center">Subway</div>
        </Link>}
        
        { login ? <div className="bg-green-200  hover:bg-green-300   rounded-lg  sm:w-auto px-5 py-2.5 text-center" onClick={handleclick}>Logout</div>
          : <div className="bg-green-200  hover:bg-green-300   rounded-lg  sm:w-auto px-5 py-2.5 text-center" >Login</div>}
    </div>
  )
}
