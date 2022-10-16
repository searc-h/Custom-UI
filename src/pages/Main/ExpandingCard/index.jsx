import React, { useState } from 'react'
import './index.css'
export default function ExpandingCard() {

    let [panelList, setPanelList] = useState([
        {
            title: 'Explore The World',
            id: '1',
            active: true
        },
        {
            title: 'Wild Forest',
            id: '2',
            active: false
        },
        {
            title: 'Finding Beauty',
            id: '3',
            active: false
        },
        {
            title: 'Seaching Map',
            id: '4',
            active: false
        },
        {
            title: 'Explore The World',
            id: '5',
            active: false
        }
    ])

    let selectPanel = (panel) => {
        let active = !panel.active
        let newPanel = { ...panel, active }

        // 这里同样要用map形式遍历，而不能直接[...panelList,newPanel]
        setPanelList(
            panelList.map((item) => {
                if (item.id === panel.id) {
                    return newPanel
                } else {
                    item.active = false
                    return item
                }
            })
        )
    }

    return (
        <div className="expandingCard">
            <div className="container">
                {
                    panelList.map((panel) => {
                        return (
                            <div onClick={() => { selectPanel(panel) }} className={`panel ${'panel' + panel.id} ${panel.active ? "active" : ''}`} key={panel.id}>
                                <h3>{panel.title}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
