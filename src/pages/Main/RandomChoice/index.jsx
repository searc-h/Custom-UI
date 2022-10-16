import React, { useEffect, useState } from 'react'
import './index.less'

export default function RandomeChoice() {
    
    // tag数组
    let [tagArr , setTagArr] = useState([])

    // 实现输入框数据的双向绑定
    let [textValue, setTextValue] = useState('')
    let changeTextValue = (e)=>{
        setTextValue(e.target.value)
    }
    // 监听textValue变化，增加Tag
    useEffect(()=>{
        let tagArr = textValue.split(',')
        .filter((tag)=>{
            return tag.trim()!==''
        })
        .map((tag)=>{
            return tag.trim()
        })
        .map((tag,index)=>{
            return {
                value:tag,
                id:index
            }
        })
        
        setTagArr(tagArr)

    },[textValue])

    // 输入Enter就触发随机抽取函数
    let enterTheEnter = (e)=>{
        if(e.key==='Enter'){
            startRandom()
            return 
        }
    }

    
    // 高亮下标，当高亮下标与id相等时，添加类名
    let [activeIndex , setActiveIndex] = useState(-1)
    // 开始随机抽取下标作为高亮下标
    let startRandom = ()=>{
        if(tagArr.length===0){
            return
        }
        
        // 开始
        let timer = setInterval(()=>{
            let activeIndex = Math.floor(Math.random() * tagArr.length)
            setActiveIndex(activeIndex)
        },100)

        // 停止
        setTimeout(()=>{

            clearInterval(timer)

            // 在结束之后再抽取最后一次，不会显得停止很突兀
            setTimeout(() => {
                let activeIndex = Math.floor(Math.random() * tagArr.length)
                setActiveIndex(activeIndex)

                
                console.log(activeIndex)
            }, 100);

            
        },100 * tagArr.length * 2)
        
    }

    return (
        <div className='randomeChoice'>
            <div className="container">
                <div className="title-box">

                    <div className="title">Enter all of the choices divided by a comma ",".</div>
                    <div className="title">Press enter when you're done</div>
                </div>

                <textarea id="textarea" cols="30" rows="5" maxLength='40' placeholder="enter choices here..." onKeyUp={(e)=>{enterTheEnter(e)}} onInput={(e)=>{changeTextValue(e)}} value={textValue}></textarea>

                <div className="tags">
                    {
                        tagArr.map(tag=>{
                            return (
                                <div className={`tag ${tag.id===activeIndex?'highlight':''}`} key={tag.id}>{tag.value}</div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
