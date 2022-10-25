import React from 'react'
import styles from './Description.module.less'
interface PropsType {
  height? : string, //高度
  title : string, // 名称
  tips? : string[],  // 作用提示
  api ? : any[],
  code ? : any,
  children ? : any

}
export default function Description(props : PropsType) {
  
  let { height="450px" , title , tips ,children} = props

  return (
    <div className={styles.description} style={{height}}>
      <div className={styles.title}>
        {title}
      </div>

      {
      tips && 
        <div className={styles.tips}>
          <div className={styles.tipTitle}>
            如何使用：
          </div>
          {
            tips.map((tip , index)=>{
              return <li key={index}>{tip}</li>
            })
          }
        </div>
      }

      <div className={styles.api}>
        <div className={styles.apiTitle}>Api</div>
      </div>


      <div className="card">
        {children}
      </div>

    </div>
  )
}
