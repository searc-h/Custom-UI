import React, { useRef, useState } from 'react'
import './index.css'
import imgs from '../../../assets/images/click.jpg'
// 这里有onDoubleClick事件，可以直接使用

export default function DoubleClickHeart() {

  // 双击次数
  let [times , setTimes] = useState(0)
  // 点击时间
  let [clickTime , setClickTime] = useState(0)
  let getClick = (e)=>{
    if(clickTime===0){
      clickTime = new Date().getTime()
    }else{
      if(new Date().getTime() - clickTime < 500){
        setTimes(times+1)
        clickTime = 0
        createHeart(e)
      }
      else{
        clickTime = new Date().getTime()
      }
    }
  }
  
  let imgBoxRef = useRef(null)
  let createHeart = (e)=>{
    let heart = document.createElement('i')
    heart.classList.add('fa')
    heart.classList.add('fa-heart')
    let {offsetX , offsetY} = e.nativeEvent
    heart.style.left = offsetX + 'px'
    heart.style.top = offsetY + 'px'
    imgBoxRef.current.appendChild(heart)

    // 效果消失后立即清除元素---这里既要响应式添加，又要响应式删除，仅仅用ref没有想到好的解决办法
    setTimeout(() => {
        heart.remove()
    }, 500);
  }
  return (
    <div className='doubleClickHeart'>
        <div className="container">
        <div className="title">
            <div className="topbar">Double Click on the image to <i className="fa fa-heart" aria-hidden="true"></i> it</div>
            <div className="bottombar">you liked it <span className="times">{times}</span> times</div>
        </div>

        <div className="imgbox" onClick={(e)=>{getClick(e)}} ref={imgBoxRef}>
            <img src={imgs} width="350px" height="450px" alt="图片"/>
        </div>
        </div>
    </div>
  )
}
