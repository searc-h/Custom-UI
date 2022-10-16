import { useEffect } from "react";
import { useStore } from "../store";

// 统一处理夜间模式的切换功能（多个组件都会使用这个功能--Header,Menu,Footer）
function useDark(props){
    let {headerStore} = useStore()    
    let {isDark,changeDark} = headerStore

    let { refElement=[] ,darkBackgroundColor=[] ,lightBackgroundColor=[], darkColor=[], lightColor=[]} = props
    useEffect(()=>{
        for(let i =0;i<refElement.length;i++){
          if(isDark){
            // 夜间模式
            refElement[i].current.style.background = darkBackgroundColor[i] || '#000'
            refElement[i].current.style.color = darkColor[i] ||  '#fff'
          }else{
            
            // 明亮模式
            refElement[i].current.style.background = lightBackgroundColor[i] || '#fff'
            refElement[i].current.style.color = lightColor[i] || '#000'
          }
        }
      },[isDark])

    return {
        isDark,
        changeDark
    } 
}

export default useDark