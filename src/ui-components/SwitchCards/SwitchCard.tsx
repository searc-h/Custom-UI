import React, { useState } from 'react'

import styles from './SwitchCard.module.less'
 
export interface panelItem {
    title : string,  // 标题
    id : string,   // 唯一id
    defaultActive? : boolean ,   //是否默认展开
    imgUrl: string
}
interface SwithCardPropsType {
    panelList: panelItem[],
    height : string
}

export default function SwitchCard(props: SwithCardPropsType) {

    let { panelList,height } = props
    let [panelLists, setPanelLists] = useState<panelItem[]>([...panelList])

    let selectPanel = (panel: panelItem) => {
        let defaultActive = !panel.defaultActive
        let newPanel = { ...panel, defaultActive }

        // 这里同样要用map形式遍历，而不能直接[...panelList,newPanel]
        setPanelLists(
            panelLists.map((item) => {
                if (item.id === panel.id) {
                    return newPanel
                } else {
                    item.defaultActive = false
                    return item
                }
            })
        )
    }
    return (

        <div className={styles.switchCard}  style={{height}}>
            {
                panelLists.map((panel) => {
                    return (
                        <div 
                        style={{ backgroundImage: `url(${panel.imgUrl})` }}
                        onClick={() => { selectPanel(panel) }} 
                        className={`${styles.panel} ${panel.defaultActive ? `${styles.active}` : ''}`} 
                        key={panel.id}>

                            <h3>{panel.title}</h3>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}
