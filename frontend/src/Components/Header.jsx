import React from 'react'
import styles from '../../styles/page.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
        <nav>
            <ul>
                <li>INQUIRE</li>
                <li>APPLY</li>
                <li>SUPPORT US</li>
                <div></div>
                <li>PARENTS</li>
                <li>ALUMS</li>
            </ul>
        </nav>
        <section>
            <div>
                <h1>MADE</h1>
                <h1><i>at</i></h1>
                <h1>MADE</h1>
                <h1>IRA</h1>
            </div>
        </section>
    </header>
  )
}
import Header from '../SubComponent/Header'
