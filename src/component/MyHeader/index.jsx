import React, { useRef, useState } from 'react'
import styles from  './index.module.less'
import {observer} from 'mobx-react-lite'
import { Button } from '../../ui-components'
import { useNavigate } from 'react-router-dom'
import useDark from '../../hooks/useDark'
function MyHeader() {

  // 模拟节流，防止用频繁点击
  let [isPressed,setIsPressed]=useState(false)

  let changeTheDark = ()=>{
    changeDark(!isDark)
    setIsPressed(true)
    setTimeout(() => {
      setIsPressed(false)
    }, 2000);
  }

  let headerRef = useRef(null)
  let btnRef = useRef(null)

  let {isDark,changeDark} = useDark(
    {
      refElement :[headerRef ,btnRef],
      darkBackgroundColor :['rgb(39, 39, 39)','#fff'],
      lightBackgroundColor:['#fff','#000'], 
      darkColor:['rgb(246, 240, 240)','#000'], 
      lightColor:['#000','#fff']
    }
  )

  const  navigate =  useNavigate()
  let backHome = ()=>{
    navigate('/')
  }
  return (
    <div className={styles.header} ref={headerRef}>
        <div className={styles.title} >
            This Is My Custom Component Of React 
        </div>

        <div className={styles.rightSide}>
          <div className={styles.backHome} onClick={backHome}>首页</div>
          <div className={styles.noteBook}>
            <a href="http://116.205.128.108:888/content/myopen">志愿活动管理系统</a>
          </div>
          <button className={styles.darkMode} ref={btnRef} onClick={changeTheDark} disabled={isPressed}>{isDark?'明亮模式':'夜间模式'}</button> 
          
        </div> 
    </div>
  )
}

export default observer(MyHeader)
