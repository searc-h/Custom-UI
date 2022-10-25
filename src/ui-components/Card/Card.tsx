import React , {Ref, useEffect, useRef ,MutableRefObject} from 'react'
import styles from './Card.module.less'

interface CardProps {
  /**
   * 标题
   */
  title : string 
  content : any  //内容
  shadow?: boolean //是否显示阴影
  width?: string
  height? :string
  direction? : 'column' | 'row',  //纵向排列 |  横向排列
}

export default function Card(props : CardProps) {
  let {title ,content ,shadow=true , direction="column" ,width="400px" , height="200px"} = props

  return (
    <div 
      className={styles.Card}
      style={{boxShadow:`${shadow?"0px 0px 5px rgba(0, 0, 0, 0.5)":"0"}` , flexDirection:`${direction}` ,width ,height}}

      >
        <div
          className={styles.header}
          // 设置边框
          style={{borderStyle:`${direction==='column'?"none none solid none":"none  solid none none"}`}}
          >{title}</div>

        <div className={styles.content}>{content}</div>
    </div>
  )
}
