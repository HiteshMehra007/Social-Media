import Feed from './components/Feed'
import Login from './components/Login'
import SingUp from './components/SingUp'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
      </Routes>
    </>
  )
}

export default App
