import React, { useRef, useState } from 'react'
import './index.css'
export default function PasswordGenerator() {


    let [numLength , setNumLength] = useState(6)
    let [isUpper , setIsUpper] = useState(false)
    let [isLower , setIsLower] = useState(false)
    let [isNumber , setIsNumber] = useState(false)
    let [isSymbol , setIsSymbol] = useState(false)
    let changeLength = ()=>{
        if(numLength<6){
            setNumLength(6)
            return
        }
        if(numLength>20){
            setNumLength(20)
            return
        }
        if(isNaN(numLength)){
            setNumLength(6)
            return
        }
        
    }
    
    let resultRef = useRef(null)
    let generatePass = ()=>{
        resultRef.current.value = CreatePassword({isUpper,isLower,isNumber,isSymbol,numLength})
    }
        
    return (
        <div className='passwordGenerator'>
            <div className="container">
                <div className="title">Password Generator</div>
                <div className="midinput">
                    <div className="inputbox">
                        <input className="result" type="text" ref={resultRef}/>
                        <i className="fa fa-clipboard icon" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="conditions">

                    <div className="pass">
                        <div>Password Length (6-20)</div>
                        <div>
                            <input className="passinput" type="text" onBlur={()=>{changeLength(numLength)}} value={numLength} onChange={(e)=>{setNumLength(+e.target.value)}}/>
                        </div>
                    </div>

                    <div className="upper">
                        <div>Include uppercase letters</div>
                        <div><input type="checkbox" className="upperInput input" value={isUpper} onChange={(e)=>{setIsUpper(e.target.checked)}}/></div>
                    </div>

                    <div className="lower">
                        <div>Include lowercase letters</div>
                        <div><input type="checkbox" className="lowerInput input" onChange={(e)=>{setIsLower(e.target.checked)}}/></div>
                    </div>

                    <div className="numb">
                        <div>Include numbers</div>
                        <div><input type="checkbox" className="numbInput input" onChange={(e)=>{setIsNumber(e.target.checked)}}/></div>
                    </div>

                    <div className="symb">
                        <div>Include symbols</div>
                        <div><input type="checkbox" className="symbInput input" onChange={(e)=>{setIsSymbol(e.target.checked)}}/></div>
                    </div>
                </div>

                <div className="Pasfooter" >
                    <button className="passwordSubmit" onClick={generatePass}>Generator Password</button>
                </div>
            </div>
        </div>
    )
}

// 思考如下代码如何改造成自定义hook
/*
 *  问题：
        1.点击事件驱动该hook触发的条件？
        2.没有响应式数据如何驱动它触发？
    类比useDark：
        1.点击事件修改响应式数据isDark:true || false
        2.响应式数据（mobx）改动触发useEffect调用，useDark逻辑调用---页面修改
    解决思路：
        1.新建仓库passwordStore,储存一个响应式数据，以及修改方法
        2.click事件触发，修改该响应式数据
        3.useCreatePassword使用useEffect监听该数据
    总结：不如直接写出工具类
 * 
 */
function getLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

function getUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}
function gerNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

function getRandomSymbol(){
    const symbols = '~!@#$%^&*()_+-{}|:"<>?[];,./'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
const createChar = {
    isLower:getLower,
    isUpper:getUpper,
    isNumber:gerNumber,
    isSymbol:getRandomSymbol
}

let createPassowrd = (Arr, length)=>{
    let password = ''
    // 以Arr.length为步长，以length为外层循环长度
    for(let i=0; i<length; i=i+Arr.length){
        // 因为这里需要执行Arr.length次
        Arr.forEach((item)=>{
            let key = Object.keys(item)[0]
            password += createChar[key]()
        })
    }
    return password.slice(0,length)
}

function CreatePassword(props) {
    let {isUpper , isLower , isNumber , isSymbol,numLength} = props
    
    const conditionArr = [
        {
            isUpper
        },
        {
            isLower
        },
        {
            isNumber
        },
        {
            isSymbol
        }
    ]
    // 筛选后的数组
    let newArr = conditionArr.filter((item)=>{
        return (Object.values(item)[0])
    })

    if(newArr.length===0){
        return '! ! Please Select at least one option ! !'
    }else{
        return createPassowrd(newArr , numLength)
    }
}
