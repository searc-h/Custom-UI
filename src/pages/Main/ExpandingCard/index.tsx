import React from 'react'
import './index.less'
import { SwitchCard,Description,Card ,PanelItem } from '../../../ui-components'

import img1 from '../../../assets/ImgList/0.jpg'
import img2 from '../../../assets/ImgList/1.jpg'
import img3 from '../../../assets/ImgList/2.jpg'
import img4 from '../../../assets/ImgList/3.jpg'
import img5 from '../../../assets/ImgList/4.jpg'
export default function ExpandingCard() {

    let panelList:PanelItem[]  = [
        {
            title: 'Explore The World',
            id: '1',
            defaultActive: true,
            imgUrl : img1
        },
        {
            title: 'Wild Forest',
            id: '2',
            defaultActive: false,
            imgUrl : img2
        },
        {
            title: 'Finding Beauty',
            id: '3',
            defaultActive: false,
            imgUrl : img3
        },
        {
            title: 'Seaching Map',
            id: '4',
            defaultActive: false,
            imgUrl : img4
        },
        {
            title: 'Explore The World',
            id: '5',
            defaultActive: false,
            imgUrl : img5
        }
    ]

    return (
        <div className="expandingCard">
            <Description tips={['这里应该传入数组',"让我们来测试一下吧"]} title='SwitchCard 扩张卡片' height='500px'>
                <Card width='80%' height='200px' title='说明' content={"nihao"} shadow={false}/>
            </Description>
            <SwitchCard height={"400px"} panelList={panelList} />
        </div>
    )
}
