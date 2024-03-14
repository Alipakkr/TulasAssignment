import React from 'react'
import styles from '../../styles/subComp.module.css'

export default function CardComponent({heading, description, source}) {
  return (
    <div className={styles.CardComponent} style={{backgroundImage: `url(${source})`}}>
      <div>
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
