import React, { useRef ,Suspense} from 'react'
import {Outlet }from 'react-router-dom'
import Loading from '../../component/Loading'
import MyMenu from '../MyMenu'
import './index.css'

export default function Main() {
  let left = useRef()
  let right = useRef()
  return (
    <div className='main'>
      <div className="left" ref={left}>
        <MyMenu left={left} right={right}></MyMenu>
      </div>
      
      <div className="right" ref={right}>
        {/* <ExpandingCard></ExpandingCard> */}
        {/* 二级路由入口 */}
        <Suspense fallback={<Loading/>}>
           < Outlet/>
        </Suspense>
      </div>
    </div>
  )
}
