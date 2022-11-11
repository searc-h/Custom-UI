import React, { useState,useEffect } from 'react'
import { Modal ,Description ,Table , ColumnsType  } from '../../../ui-components'
import styles from './MyModel.module.less'
import {Card} from '../../../ui-components'
interface dataSourceType {
    key: string | number,
    attribute: string,
    describe : string,
    type : string,
    default? : string
}
export default function MyModel() {

    let [showModal, setShowModal] = useState<boolean>(false)
    let [count , setCount] = useState(0)

    let changeShowModal = (tag : boolean)=>{

        setCount((count)=>{
            return count+1
        })
        console.log(count , showModal)
        setShowModal(tag)
    }

    const dataSource:dataSourceType[] = [
        {
            key: '1',
            attribute: 'children',
            describe : "Modal现实展示内容",
            type : "panelItem[]",
        },
        {
            key: '2',
            attribute: 'showModal',
            describe : "是否显示modal",
            type : "boolean",
        },
        {
            key: '3',
            attribute: 'changeShowModel',
            describe : "改变showModal时的回调",
            type : "React.Dispatch<React.SetStateAction<boolean>>",
        }
    ]
    const columns :ColumnsType<dataSourceType> = [
        {
            key : "属性",
            title : "属性",
            width : '150px',
            dataIndex : "attribute",
        },
        {
            key : "说明",
            title : "说明",
            width : '200px',
            dataIndex : "describe"
        },
        {
            key : "类型",
            title :"类型",
            width : '100px',
            dataIndex : "type"
        },
    ]

    let api = <Table dataSource={dataSource} columns={columns} size='large'/>
    let tips = [
        '当你需要交互性较强的场景时可以选择模态框进行对话',
        '你可以在模态框里面嵌入任何你想嵌入的组件'
    ]
    let code = `<Modal showModal={showModal} changeShowModal={changeShowModal}>

                    <Card title='展示头部' content="展示内容" shadow={false} />
                    
                </Modal>`

    return (
        <div className={styles.container}>

            <Description
                tips={tips} 
                title='Modal 模态框' 
                height='700px' 
                api={api}
                >{code}
            </Description>

            <div className={styles['modal-btn']}>
                <button onClick={()=>{changeShowModal(true)}}>Show modal</button>
            </div>
        
            {
                <Modal showModal={showModal} changeShowModal={changeShowModal}>
                    <Card title='展示头部' content="展示内容" shadow={false} />
                </Modal>
            }

        </div>
        
    )
}
