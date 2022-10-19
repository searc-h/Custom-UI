import styles from  './Button.module.less'

interface ButtonProps {
  color? : string,  // 文字颜色
  bgColor ? : string,  // 背景颜色
  size ? : "small" | "normal" | "large"   // 字体大小
  clickTo?: ()=>void   //点击回调
  children ?: any    //子节点
}
// 字体颜色默认：白色 
// 背景颜色默认：黑色
export default function Button(props : ButtonProps) {

  let { color="#fff", bgColor="#000" ,clickTo ,children ,size="normal"} = props
  let widthStyle = {
    "small" : "80px",
    "normal" : "150px",
    "large" : "200px"
  }
  let displayEle :any

  displayEle = <button style={{ borderColor:bgColor??"" ,color ,width:widthStyle[size]}} className={styles.button} onClick={clickTo}>{children}</button>
 

  return (
    <>
     {displayEle}
    </>
  )
}
