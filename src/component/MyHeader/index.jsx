import React, { useRef, useState } from 'react'
import './index.less'
import {observer} from 'mobx-react-lite'

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
    <div className='header' ref={headerRef}>
        <div className="title" >
            This Is My Custom Component Of React 
        </div>

        <div className="rightSide">
          <div className="backHome" onClick={backHome}>首页</div>
          <div className="noteBook">
            <a href="http://116.205.128.108:888/content/myopen">共享记事本</a>
          </div>
          <button ref={btnRef} className="darkMode" onClick={changeTheDark} disabled={isPressed}>{isDark?'明亮模式':'夜间模式'}</button>
        </div>
        
    </div>
  )
}

export default observer(MyHeader)
