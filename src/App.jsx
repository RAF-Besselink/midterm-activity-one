import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import {Route, Routes} from 'react-router';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation />
    <div>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/studentdetails" element={<StudentDetails />} />
      <Route path="/students" element={<Students />} />
      <Route path="/studentdetails/:id" element={<StudentDetails />} />
      </Routes>
    </div>
    </>
  )
}

export default App
