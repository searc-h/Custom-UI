import React, { useEffect, useState }  from 'react'

import {createPortal} from 'react-dom'

import styles from './Modal.module.less'
interface PropsType {
  children : any,
  showModal : boolean,
  changeShowModal : (tag :boolean)=>void
}
const modalRoot = document.querySelector("#modal-root") as Element

export default function Modal(props :PropsType) {
  let {changeShowModal,showModal} = props
    let modal
    // 容器元素
    const el = document.createElement("div")
    el.className = "outer"
    useEffect(()=>{
        console.log("挂载")
        modalRoot.appendChild(el)
        return ()=>{
            console.log("卸载")
            modalRoot.removeChild(el)
        }
    },[props])



    modal =  
    <div>
        {/* mask */}
        <div 
            style={{display:props.showModal ?'block':`none`}} 
            className={styles.modelmask + ` animate__animated ${props.showModal?"animate__fadeIn":""}`}>
        </div>
        {/* model-content */}
        <div 
            className={styles.model} 
            style={{display:props.showModal ?'flex':`none`}}>
            <div className={`${styles.modelInner} animate__animated ${props.showModal ?"animate__zoomIn":""}`}>
                {/* title */}
                <div className={styles.modeltitle}>
                    这里是modal的标题
                    <div className={styles.shutdown}>x</div>
                </div>
                {/* content */}
                <div className={styles.modelcontent}>
                    {props.children}
                </div>
                
                {/* footer */}
                <div className={styles.modelfooter}>
                    <button onClick={()=>{changeShowModal(false)}}>关闭</button>
                </div>
            </div>
        </div>
        
    </div>

    return createPortal(
            modal,
            el
        )
         
    
}

