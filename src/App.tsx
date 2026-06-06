import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/LoginPage'
import Home from './pages/HomePage'

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}


