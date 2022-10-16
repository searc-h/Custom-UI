import React, { useRef } from 'react'
import './index.css'
export default function CustomSlider() {
    let tipRef = useRef(null)
    let changeBar = (e)=>{
        tipRef.current.innerText = e.target.value
        tipRef.current.style.left = `${+e.target.value}%`
    }
    return (
        <div className='customSlider'>
            <div className="container">
                <div className="title">
                    Custom Range Slider
                </div>

                <div className="slider">
                    <div className="tip" ref={tipRef}>50</div>

                    <input onInput={(e)=>{changeBar(e)}} className="bar" type="range" name="range" id="range"/>
                </div>

            </div>
        </div>
    )
}
