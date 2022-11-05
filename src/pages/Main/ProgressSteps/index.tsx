import React, { useState }  from 'react'
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

    let [current , setCurrent ] = useState<number>(0)

    const dataSource:dataSourceType[] = [
        {
            key: '1',
            attribute: 'current',
            describe : "当前数值",
            type : "number",
        },
        {
            key: '2',
            attribute: 'setCurrent',
            describe : "修改当前值函数",
            type : "function",
        },
        {
            key: '3',
            attribute: 'total',
            describe : "总数",
            type : "number",
        },
        {
            key: '4',
            attribute: 'nextText',
            describe : "当你需要按钮时，按钮文字（可选）",
            type : "string",
            default : "'next'"
        },
        {
            key: '5',
            attribute: 'preText',
            describe : "当你需要按钮时，按钮文字（可选）",
            type : "string",
            default : "'pre'"
        },
        {
            key: '6',
            attribute: 'isBtn',
            describe : "是否需要按钮（可选）",
            type : "boolean",
            default : "true"
        }
    ]

    const columns :ColumnsType<dataSourceType> = [
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
        <div className={styles.progresssteps}>
            <Description
                tips={tips} 
                title='Progress 进度条' 
                height='800px'
                api={api}>
                <code>Code</code>
            </Description>
            
            <Progress isBtn={true} current={current}  setCurrent={setCurrent}  total={6} preText={"PRE"} nextText={"NXET"}></Progress>
        </div>
    )
}
