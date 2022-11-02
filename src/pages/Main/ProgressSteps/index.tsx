import React  from 'react'
import styles from  './index.module.less'
import { Progress ,Description ,Card ,Table ,ColumnsType} from '../../../ui-components/index'

interface dataSourceType {
    key: string | number,
    attribute: string,
    describe : string,
    type : string,
    default?: any
}
export default function ProgressSteps() {

    const dataSource:dataSourceType[] = [
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
        '丝滑的进度条往往能提高用户体验'
    ]

    return (
        <div className={styles.progresssteps}>
            <Description
                tips={tips} 
                title='ProgressSteps 进度条' 
                height='800px'
                api={api}>
                <Card width='50%' height='200px' title='说明' content={"nihao"} shadow={false}/>
            </Description>
            
            <Progress total={5} preText={"PRE"} nextText={"NXET"}/>
        </div>
    )
}
