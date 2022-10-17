import styles from  './Button.module.less'
interface ButtonProps {
  content : string,
  color? : string,
  bgColor ? : string,

  clickTo?: ()=>void

  children ?: any
}
export default function Button(props : ButtonProps) {

  let { content , color="#fff", bgColor="#000" ,clickTo ,children} = props

  let displayEle :any

  if(children?.length>0){
    displayEle = children
  }else{
    displayEle = <button style={{borderColor:bgColor??"" ,color}} className={styles.button} onClick={clickTo}>{content}</button>
  }

  return (
    <>
     {displayEle}
    </>
  )
}
