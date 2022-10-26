import React from 'react'
import styles from './Description.module.less'
interface PropsType {
  
  title : string, // 名称

  height? : string, //高度

  tips? : string[],  // 作用提示

  api ? : JSX.Element, // Table组件

  code ? : any,  // 使用代码

  children ? : any  

}
export default function Description(props : PropsType) {
  
  let { height="450px" , title , tips ,children=null , api} = props

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
        <div className={styles.apiTitle} >API</div>
        
        {api}
        
      </div>


      <div className="code">
        {children && children }
      </div>

    </div>
  )
}
