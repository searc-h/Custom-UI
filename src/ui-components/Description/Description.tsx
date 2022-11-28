import React from 'react'
import styles from './Description.module.less'
interface PropsType {
  
  title : string, // 名称

  height? : string, //高度

  tips? : string[],  // 作用提示

  api : JSX.Element, // Table组件

  code ? : any,  // 使用代码

  children ? : any  

}
export default function Description(props : PropsType) {
  
  let { height , title , tips ,children=null , api } = props
  let codeArr :string[] = []
  if(children && children.length){
    codeArr  = children.split("\n")
    console.log(codeArr)
  }

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
        <div className={styles.apiTable}>
          {api}
        </div>
      </div>


      <div className={styles.code}>
        <div className={styles.codeTitle}>
          Code:
        </div>
        {!!children && 
        <code>
          {codeArr.map((item,index)=>{
            if(item.includes("\t"))
            return <li key={index}> &nbsp;  &nbsp;  { item}</li>
            else
            return <li key={index}>{item}</li>
          })}
        </code> 
        }
      </div>

    </div>
  )
}
