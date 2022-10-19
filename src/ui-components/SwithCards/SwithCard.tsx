import React, { useState } from 'react'
import panelItem = SwithCard.panelItem
import styles from './SwithCard.module.less'
interface SwithCardPropsType {
    panelList: panelItem[],
}
export default function SwithCard(props: SwithCardPropsType) {

    let { panelList } = props
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

        <div className={styles.switchCard} >
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
