import React from 'react'
import panelItem = SwithCard.panelItem

interface SwithCardPropsType {
    panelList : panelItem[],
    selectPanel : (panel:panelItem)=>void
}
export default function SwithCard(props:SwithCardPropsType) {

    let {panelList , selectPanel} = props

    return (
        <>
            {
                panelList.map((panel) => {
                    return (
                        <div onClick={() => { selectPanel(panel) }} className={`panel ${'panel' + panel.id} ${panel.active ? "active" : ''}`} key={panel.id}>
                            <h3>{panel.title}</h3>
                        </div>
                    )
                })
            }
        </>
    )
}
