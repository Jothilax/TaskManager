import React from 'react'
import styles from './sidebar.module.css'
export default function SideBar() {
  return (
    <div className={styles.side}>
        <ul className={styles.listItems}>
            <li className={styles.items}>Home</li>
        </ul>
    </div>
  )
}
