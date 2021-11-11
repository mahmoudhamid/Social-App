import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/Home.js";
import Profile from "./pages/profile/Profile";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react'
function App() {
  const getData = async () => {
    const userData = JSON.parse(localStorage.getItem("loginuser" || '[]'));
  }
  useEffect(() => {
    getData();
  }, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
