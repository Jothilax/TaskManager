import styles from'./App.module.css'
import {Routes, Route , Link}  from 'react-router-dom'
import Home from './components/Home/Home'
import Task from './components/Task/Task'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function App() {

  return (
    <div className={styles.App}>
       
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/task' element={<Task />} />

      
     </Routes>
    </div>
  )
}

export default App
