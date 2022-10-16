import React, { useState } from 'react'
import './index.css'

function submitRes({faceList,activeIndex,setActiveIndex,isSubmit,setIsSubmit,submitBtn}){
    if(isSubmit){
        return (
            <div className="resultSide">
                <div className="tips">
                    Thanks for your choice:
                    <br />
                    <span>
                        {faceList[activeIndex].title}
                    </span>
                </div>
                <div className='submitDiv'>
                    <button onClick={()=>{setIsSubmit(false)}}>Back</button>
                </div>
            </div>
        )
    }else{
        return (
            <div className="inputSide">
                    <div className="title">
                        How satisfied are you with our
                        <br />
                        customer support performance?
                    </div>

                    <div className="content">
                        
                        {
                            faceList.map((item,index)=>{
                                return (
                                    <div onClick={()=>{setActiveIndex(index)}} className={`face ${activeIndex===index?'active':''}`} key={index}>
                                        <div>
                                            <i className={item.icon} aria-hidden="true"></i>
                                        </div>
                                        <div className="tip">{item.title}</div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="submitDiv">
                        <button onClick={submitBtn}>Send Review</button>
                    </div>
                </div>
        )
    }
}

export default function FeeBackDesign() {
    let faceList = [
        {
            icon:"fa fa-smile-o",
            title:'Satisfied'
        },
        {
            icon:"fa fa-meh-o",
            title:"Netural"
        },
        {
            icon:"fa fa-frown-o",
            title:"Unhappy"
        }
    ]
    let [activeIndex , setActiveIndex] = useState(-1)

    let [isSubmit,setIsSubmit] = useState(false)
    let submitBtn = ()=>{
        if(activeIndex===-1){
            return
        }
        setIsSubmit(true)
    }
    return (
        <div className='feebackDesign'>
            <div className="container">
                {
                    submitRes({faceList,activeIndex,setActiveIndex,isSubmit,setIsSubmit,submitBtn})
                }
                
            </div>
        </div>
    )
}
