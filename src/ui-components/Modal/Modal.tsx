import React, { useEffect }  from 'react'

import {createPortal} from 'react-dom'

import styles from './Modal.module.less'
interface PropsType {
  children : any,
  showModel : boolean,
  changeShowModel : (tag :boolean)=>void
}
const modalRoot = document.querySelector("#modal-root") as Element

export default function Modal(props :PropsType) {
  let {changeShowModel} = props
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
            style={{display:props.showModel ?'block':"none"}} 
            className={styles.modelmask +' animate__animated animate__fadeIn'}>
        </div>
        {/* model-content */}
        <div 
            className={styles.model} 
            style={{display:props.showModel ?'flex':"none"}}>
            <div className={`animate__animated ${props.showModel ?"animate__zoomIn":""}`}>
                {/* title */}
                <div className="modeltitle">
                    这里是modal的标题
                </div>
                {/* content */}
                <div className="modelcontent">
                    {props.children}
                </div>
                
                {/* footer */}
                <div className="modelfooter">
                    <button onClick={()=>{changeShowModel(false)}}>关闭</button>
                </div>
            </div>
        </div>
        
    </div>

    return createPortal(
            modal,
            el
        )
         
    
}

