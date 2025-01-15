import { Route,Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Signup from "./pages/signup/Signup";

export default function App() {
  return (
    <div className="p-0 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </div>
  )
}