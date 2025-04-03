import Login from "./Login"
import { Route, Routes ,BrowserRouter} from "react-router-dom"

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Login></Login>
    </div>
  )
}
