import React, { useEffect, useRef, useState } from 'react'
import styles from  './Progress.module.less'

export interface ProgressPropsType {
  current: number,
  setCurrent: React.Dispatch<React.SetStateAction<number>>
  total : number,
  nextText ? : string,
  preText ? : string,
  isBtn ?: boolean
}
export interface circleType {
  title :string,
  id : string | number,
  active : boolean
}

export default function Progress(props :ProgressPropsType) {

  const {total , nextText="next", preText="pre" ,current ,setCurrent ,isBtn=true} = props

  let arr = [ ...new Array(total).keys()] //此语法只有在es6以后能用
  const listArr :circleType[] = arr.map((item,index)=>{
    if(item===0)
      return {
          title: `${item}`,
          id: index,
          active: true
      }
    else 
      return {
          title: `${item}`,
          id: index,
          active: false
      }
  })

  // 当前激活下标【注意这里的下标就是能够引起页面改变的下标】

  let [circleList, setCircleList] = useState<circleType[]>(listArr)


  // 修改当前激活的下标【点击事件触发回调---修改currentActive---useEffect监听改变作出相应---页面修改】
  let changeCurrent = (tag:boolean) => {
      if (tag && (current < circleList.length)) {
          setCurrent((current)=>current+1)
          return
      }
      if (!tag && (current > 0)) {
          setCurrent((current)=>current-1)
          return
      }
  }
  
  let barRef = useRef(null)
  // 修改progress-bar宽度
  let changeProBar = ()=>{
      (barRef.current as any).style.width = `${(current)/(circleList.length-1) * 100}`+'%';
  }
  // 当前激活的下标改变，就会修改circleList数据，从而驱动页面刷新
  useEffect(() => {
      setCircleList(
          circleList.map((item) => {
              if (item.id <= current) {
                  item.active = true
                  return item
              } else {
                  item.active = false
                  return item
              }
          })
      )
      changeProBar()
  }, [current])

  return (
    <div className={styles.container}>
        <div className={styles.progressContainer}>
            <div className={styles.progressBar} ref={barRef}></div>

            {
                circleList.map((circle) => {
                    return <div className={`${styles.circle} ${circle.active ? `${styles.active}` : ''}`} key={circle.id}>{circle.title}</div>
                })
            }
        </div>

        { isBtn && 
            <>
                <button onClick={() => { changeCurrent(false) }} className={styles.btn} id="pre" disabled={current === 0 ? true : false}>{preText}</button>
                <button onClick={() => { changeCurrent(true) }} className={styles.btn} id="next" disabled={current === circleList.length-1 ? true : false}>{nextText}</button>
            </>
        }
        
    </div>
  )
}
