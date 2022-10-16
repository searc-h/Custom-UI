import React, { useEffect, useRef, useState } from 'react'
import './index.less'
export default function BackgroundSlider() {

    let [activeIndex , setActiveIndex]=useState(1)
    
    let changeActive = (tag)=>{
        if(tag && activeIndex<=5){
            if(activeIndex===5){
                setActiveIndex(1)
                return
            }
            setActiveIndex((activeIndex)=>{
                return activeIndex+1
            })
            return
        }
        if(!tag && activeIndex>=1){
            if(activeIndex===1){
                setActiveIndex(5)
                return
            }
            setActiveIndex((activeIndex)=>{
                return activeIndex-1
            })
            return
        }
    }

    let Outer = useRef(null) //外层容器
    let urlList = [
        "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
        "url('https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80')",
        "url('https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
        "url('https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80')",
        " url('https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
    ]
    useEffect(()=>{
        Outer.current.style.backgroundImage = urlList[activeIndex-1] 
    },[activeIndex])
    
    return (
        <div className='backgroundSlider' ref={Outer}>
            <div className="container">

                <div className="leftbox" onClick={()=>{changeActive(false)}}>◁</div>

                <div className="imgcontainer">

                    {
                        [1,2,3,4,5].map((index)=>{
                            return (
                                <div  key={index} className={`slide slide${index} ${activeIndex===index?'active':''}`}></div>
                            )
                        })
                    }

                </div>

                <div className="rightbox" onClick={()=>{changeActive(true)}}> ▷</div>
            </div>
        </div>
    )
}
