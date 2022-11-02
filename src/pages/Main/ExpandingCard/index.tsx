import React from 'react'
import './index.less'
import { SwitchCard,Description,Card ,PanelItem ,Table ,ColumnsType} from '../../../ui-components'

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

    const dataSource = [
        {
            key: '1',
            attribute: 'panelList',
            describe : "图片数组",
            type : "panelItem[]",
        },
        {
            key: '2',
            attribute: 'height',
            describe : "图片高度",
            type : "string",
            default : "'400px'"
        },
    ]
    const columns :ColumnsType = [
        {
            key : "属性",
            title : "属性",
            width : '100px',
            dataIndex : "attribute",
        },
        {
            key : "说明",
            title : "说明",
            width : '100px',
            dataIndex : "describe"
        },
        {
            key : "类型",
            title :"类型",
            width : '100px',
            dataIndex : "type"
        },
        {
            key : "默认值",
            title : "默认值",
            width : '100px',
            dataIndex : "default",
        }
    ]
    let api = <Table dataSource={dataSource} columns={columns} size='large'/>
    let tips = [
        '当你需要在展示全部图片以及重点突出某个内容的时候，或许这是一个不错的选择。',
        '当你希望一次只展示一张图片的时候，不妨可以考虑用轮播图BackGround Slider '
    ]
    return (
        <div className="expandingCard">
            <Description
                tips={tips} 
                title='SwitchCard 扩张卡片' 
                height='500px' 
                api={api}>
                <code>这里放代码</code>
            </Description>

            <SwitchCard height={"400px"} panelList={panelList} />
        </div>
    )
}
