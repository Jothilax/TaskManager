import './App.module.css'
import {Routes, Route , Link}  from 'react-router-dom'
import Home from './components/Home/Home'
import Task from './components/Task/Task'
function App() {

  return (
    <div>
     <Home />
     
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/task' element={<Task />} />

      
     </Routes>
    </div>
  )
}

export default App
