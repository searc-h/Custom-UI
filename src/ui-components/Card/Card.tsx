import React from 'react'
import styles from './Card.module.less'
export default function Card() {
  return (
    <div className={styles.Card}>
        <div className={styles.header}>这里是Card头部</div>
        <div className={styles.content}>这里是Card内容</div>
    </div>
  )
}
