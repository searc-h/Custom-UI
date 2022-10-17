import React, { useEffect, useRef, useState } from 'react'
import styles from  './index.module.less'
export default function ProgressSteps() {

    // 当前激活下标【注意这里的下标就是能够引起页面改变的下标】
    let [currentActive, setCurrentActive] = useState(1)
    let [circleList, setCircleList] = useState([
        {
            title: '1',
            id: '1',
            active: true
        },
        {
            title: '2',
            id: '2',
            active: true
        },
        {
            title: '3',
            id: '3',
            active: true
        },
        {
            title: '4',
            id: '4',
            active: false
        }
    ])
    // 修改当前激活的下标【点击事件触发回调---修改currentActive---useEffect监听改变作出相应---页面修改】
    let changeCurrent = (tag:boolean) => {
        if (tag && (currentActive < circleList.length)) {
            let current = currentActive + 1
            setCurrentActive(current)
            return
        }
        if (!tag && (currentActive > 1)) {
            let current = currentActive - 1
            setCurrentActive(current)
            return
        }

    }
    
    
    let barRef = useRef(null)
    // 修改progress-bar宽度
    let changeProBar = ()=>{
        (barRef.current as any).style.width = `${(+currentActive-1)/(circleList.length-1) * 100}`+'%';
    }
    // 当前激活的下标改变，就会修改circleList数据，从而驱动页面刷新
    useEffect(() => {
        setCircleList(
            circleList.map((item) => {
                if (+item.id <= currentActive) {
                    item.active = true
                    return item
                } else {
                    item.active = false
                    return item
                }
            })
        )
        changeProBar()
    }, [currentActive])

    return (
        <div className={styles.progresssteps}>
            <div className={styles.container}>

                <div className={styles.progressContainer}>
                    <div className={styles.progressBar} ref={barRef}></div>

                    {
                        circleList.map((circle) => {
                            return <div className={`circle ${circle.active ? 'active' : ''}`} key={circle.id}>{circle.title}</div>
                        })
                    }
                </div>

                <button onClick={() => { changeCurrent(false) }} className={styles.btn} id="pre" disabled={currentActive === 1 ? true : false}>Pre</button>
                <button onClick={() => { changeCurrent(true) }} className={styles.btn} id="next" disabled={currentActive === 4 ? true : false}>Next</button>
            </div>
        </div>
    )
}
