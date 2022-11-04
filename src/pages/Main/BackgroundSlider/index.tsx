import React from 'react'
import './index.less'
import { Slider, Description , Table ,ColumnsType} from '../../../ui-components'
import img1 from '../../../assets/ImgList/15.jpg'
import img2 from '../../../assets/ImgList/14.jpg'
import img3 from '../../../assets/ImgList/13.jpg'
import img4 from '../../../assets/ImgList/12.jpg'
import img5 from '../../../assets/ImgList/11.jpg'
import img6 from '../../../assets/ImgList/10.jpg'
interface dataSourceType {
    key: string | number,
    attribute: string,
    describe : string,
    type : string,
    default?: any
}
// urlList : string[],
//     bgSlide: boolean //背景是否同步切换
//     width ?: string,
//     height ?: string
export default function BackgroundSlider() {

    let urlList = [img1 , img2 ,img3 , img4 ,img5, img6]

    const dataSource:dataSourceType[] = [
        {
            key: '1',
            attribute: 'urlList',
            describe : "图片数组",
            type : "string[]",
        },
        {
            key: '2',
            attribute: 'bgSlide',
            describe : "是否需要父容器展示背景图片",
            type : "boolean",
        },
        {
            key: '3',
            attribute: 'width',
            describe : "图片宽度（可选）",
            type : "string",
            default : "'75%'"
        },
        {
            key: '4',
            attribute: 'height',
            describe : "图片高度（可选）",
            type : "string",
            default : "'75%'"
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
            width : '300px',
            dataIndex : "describe"
        },
        {
            key : "类型",
            title :"类型",
            width : '300px',
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
        '丝滑的进度条往往能提高用户体验'
    ]
    return (
        <div className='backgroundSlider'>

            <Description
                tips={tips} 
                title='ProgressSteps 进度条' 
                height='600px'
                api={api}>
                <code>Code</code>
            </Description>

            <Slider urlList={urlList} bgSlide={true}/>
        </div>
    )
}
