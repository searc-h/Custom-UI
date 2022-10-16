import React, { useRef } from 'react'
import './index.less'
import logo from '../../../assets/images/logo.png'
export default function NetFlixNavigation() {

    let slide1Ref = useRef(null)
    let slide2Ref = useRef(null)
    let slide3Ref = useRef(null)
    let refArr = [slide1Ref,slide2Ref,slide3Ref]

    let showBtn = useRef(null)
    let closeNav = ()=>{
        refArr.forEach((slide)=>{
            slide.current.style.transform = 'translateX(-100%)'
        })
        setTimeout(() => {
            showBtn.current.style.display = 'block'
        }, 1000);
    }
    let showNav = ()=>{
        refArr.forEach((slide)=>{
            slide.current.style.transform = 'translateX(0)'
        })
        
        showBtn.current.style.display = 'none'
      
    }

  return (
    <div className='netFlixNavigation'>
        <div className="container">
        <div className="btnDiv" ref={showBtn}>
            <button className="btn">
                <i className="fa fa-bars" aria-hidden="true" onClick={showNav}></i>
            </button>
        </div>


        <div className="logo">
            <img src={logo} alt="logo" width="150px"/>
            <div className="title">NetFlix Mobile Navigation</div>
        </div>

        <div className="slides">
            <div className="slide slide1" ref={slide1Ref}>
                <div className="back">
                    <i className="fa fa-times" aria-hidden="true" onClick={closeNav}></i>
                </div>
                <div className="content">
                    this is cool Navigation Right?
                </div>
                
            </div>
            <div className="slide slide2" ref={slide2Ref}></div>
            <div className="slide slide3" ref={slide3Ref}></div>
        </div>
    </div>
    </div>
  )
}
