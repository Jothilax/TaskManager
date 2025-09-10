import React from 'react'
import SideBar from '../SideBar/SideBar'
import styles from './home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
export default function Home() {
  return (
    <div className={styles.home}>
      <SideBar/>
      <div className={styles.container}>
          <h1 className={styles.tit}>Task Manager</h1>
          <button className={styles.addbtn} > <FontAwesomeIcon icon={faPlus} /> Add Task</button>
          <div className={styles.taskContainer}>
              <table border={1}>
                <tr>
                <th>Task No</th>
                <th>Title</th>
                <th>Desc</th>
                <th></th>
                </tr>
                  
              </table>
          </div>
      </div>
    </div>
  )
}
