import React,{useEffect, useRef,useState} from 'react'
import styles from './Slider.module.less'
interface PropsType {
    urlList : string[],
    bgSlide: boolean //背景是否同步切换
    width ?: string,
    height ?: string
}

export default function Slider(props :PropsType) {

    let {urlList ,bgSlide , width="75%" , height="75%"} = props

    let [activeIndex , setActiveIndex]= useState<number>(0)
    
    let changeActive = (tag:boolean)=>{
        if(tag && activeIndex<=urlList.length-1){
            if(activeIndex===urlList.length-1){
                setActiveIndex(0)
                return
            }
            setActiveIndex((activeIndex)=>{
                return activeIndex+1
            })
            return
        }
        if(!tag && activeIndex>=0){
            if(activeIndex===0){
                setActiveIndex(urlList.length-1)
                return
            }
            setActiveIndex((activeIndex)=>{
                return activeIndex-1
            })
            return
        }
    }

    let Outer = useRef(null) //外层容器
    useEffect(()=>{
        // 给外层元素设置图片
        if(bgSlide)
            (Outer.current as any).style.backgroundImage = `url(${urlList[activeIndex]})`
    },[activeIndex])

    return (
        <div className={styles.container}  ref={Outer}>

            <div className={styles.leftbox} onClick={() => { changeActive(false) }}>◁</div>

            <div className={styles.imgcontainer} style={{width,height}}>

                {
                    urlList.map((item,index) => {
                        return (
                            <div key={index}  style={{backgroundImage:`url(${item})` }} className={`${styles.slide}  ${activeIndex === index ? `${styles.active}` : ''}`}></div>
                        )
                    })
                }

            </div>

            <div className={styles.rightbox} onClick={() => { changeActive(true) }}> ▷</div>
        </div>
    )
}
