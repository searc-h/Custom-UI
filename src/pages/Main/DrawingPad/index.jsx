import React, { useRef, useState } from 'react'
import './index.less'
export default function DrawingPad() {
    let [isPressed,setIsPressed] = useState(false)
    let [x,setX] = useState(0)
    let [y,setY] = useState(0)
    let mouseUp = ()=>{
        setIsPressed(false)
        // 鼠标按下时，记录鼠标位置，即为起始位置
        setX(undefined) 
        setY(undefined)
    }
    let mouseDown = (e)=>{
        setIsPressed(true)
        // 鼠标按下时，记录鼠标位置，即为起始位置
        setX(e.nativeEvent.offsetX) 
        setY(e.nativeEvent.offsetY)
    }
    let mouseMove = (e)=>{
        if(isPressed){
            // 鼠标滑动时，记录鼠标位置，即为画线路径
            const x2 = e.nativeEvent.offsetX
            const y2 =  e.nativeEvent.offsetY
    
            dragCircle(x,y)
            dragLine(x,y, x2 ,y2)
    
            x = x2
            y = y2
        }
    }

    let ctxRef = useRef(null)
    
    let dragCircle = (x,y)=>{
        const ctx = ctxRef.current.getContext('2d')
        // 绘制完整圆
        ctx.beginPath();
        ctx.arc(x, y, num, 0, Math.PI * 2);

        ctx.fillStyle = color
        ctx.fill()
        // context.stroke();
    }
    let dragLine = (x1 ,y1 ,x2 ,y2)=>{
        const ctx = ctxRef.current.getContext('2d')
        ctx.beginPath()
        ctx.moveTo(x1, y1)
    
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = color
        ctx.lineWidth = num * 2
        ctx.stroke()
    }

    let [num , setNum] = useState(10)
    let plusClick = ()=>{
        if(num<20){
            setNum(num+1)
        }
    }
    let desClick = ()=>{
        if(num>5){
            setNum(num-1)
        }
    }
    let [color, setColor] = useState('#000')
    let changeColor = (e)=>{
        setColor(e.target.value)
    }
    let clearClick = ()=>{
        const ctx = ctxRef.current.getContext('2d')
        ctx.clearRect(0,0, 600, 600);
    }
    return (
        <div className='drawingPad'>
            <div className="container">
                <canvas ref={ctxRef} id="canvns" width="600px" height="600px" onMouseUp={mouseUp} onMouseDown={(e)=>{mouseDown(e)}} onMouseMove={(e)=>{mouseMove(e)}}></canvas>

                <div className="btnDivs">
                    <div className="puls" onClick={plusClick}>+</div>
                    <div className="num" >{num}</div>
                    <div className="des" onClick={desClick}>-</div>
                    <div className="color"><input type="color" onChange={(e)=>{changeColor(e)}} /></div>
                    <div className="clear" onClick={clearClick}>x</div>
                </div>
            </div>
        </div>
    )
}
