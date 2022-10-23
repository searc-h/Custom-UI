import React, { useEffect }  from 'react'
import {createPortal} from 'react-dom'

import styles from './Model.module.less'
interface PropsType {
    children : any ,
    showModel: boolean
}
export default function Model(props :PropsType) {
    let {children , showModel} = props
    // 添加根元素
    const modelRoot = document.querySelector("#model-root") as Element

    // 容器元素
    const el = document.createElement("div")

    useEffect(()=>{
        console.log("挂载")
        modelRoot.appendChild(el)
        return ()=>{
            console.log("卸载")
            modelRoot.removeChild(el)
        }
    },[])

    
 
    return createPortal(
        <div className={styles.model} >
            <div className={styles.modelMask} style={{display:`${showModel?"block":"none"}`}}>
                <div>{children}</div>
            </div>
        </div>,
        el
    );
}
