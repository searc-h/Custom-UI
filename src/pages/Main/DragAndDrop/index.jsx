import React, { useRef } from 'react'
import './index.less'
export default function DragAndDrop() {
    
    // 首先dragStart 拖动开始
    // 其次dragEnter 进入某一个元素
    // 紧接着dragOver 在这个元素上拖动
    // 然后dragLeave 从这个元素离开
    // 或者drop 放在这个元素上
    // 最后dragEnd 整个过程结束
    let dragOver = (e)=>{
        e.preventDefault()
    }
    let dragEnter = (e)=>{
        e.preventDefault();
        e.target.className += ' hovered'
    }
    let dragLeave = (e)=>{
        e.target.className = 'empty'
    }
    let drop = (e)=>{
        e.target.className = 'empty'
        e.target.append(
            myRef.current
        )
    }
    
    let myRef = useRef(null)
    let dragStart = ()=>{
        myRef.current.className += ' hold'
        setTimeout(() => {
            myRef.current.className = 'empty'
        }, 0);
    }
    let dragEnd = ()=>{
        myRef.current.className= 'fill'
    }
    return (
        <div className='dragAndDrop'>
            <div className="container">
                <div className="empty" onDragOver={(e)=>{dragOver(e)}} onDragEnter={(e)=>{dragEnter(e)}} onDragLeave={(e)=>{dragLeave(e)}} onDrop={(e)=>{drop(e)}}>
                    <div ref={myRef} onDragStart={dragStart} onDragEnd={dragEnd} className="fill" draggable="true"></div>
                </div>
                {
                    [1,2,3].map((item)=>{
                        return (
                            <div key={item} className="empty" onDragOver={(e)=>{dragOver(e)}} onDragEnter={(e)=>{dragEnter(e)}} onDragLeave={(e)=>{dragLeave(e)}} onDrop={(e)=>{drop(e)}}>
                                {

                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
