
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Chat from './pages/chat';
import Auth from './hocs/auth';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/chat" element={<Auth children={<Chat/>}></Auth>}></Route>
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
