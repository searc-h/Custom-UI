import React from 'react'

import { Table, ColumnsType  } from '../../../ui-components'

export default function MyTable() {
    const dataSource1  = [
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

    const columns1 :ColumnsType = [
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
        },
    ]

    const dataSource2 = [
        {
            key: '1',
            name: '小张',
            age : "13",
            stuNumber : "202020002"
        },
        {
            key: '2',
            name: '小张',
            age : "13",
            stuNumber : "202020003"
        },
        {
            key: '3',
            name: '小张',
            age : "13",
            stuNumber : "202020001"
        },

    ]

    const columns2 :ColumnsType = [
        {
            key : "姓名",
            title : "姓名",
            width : '100px',
            dataIndex : "name",
        },
        {
            key : "年龄",
            title : "年龄",
            width : '100px',
            dataIndex : "age"
        },
        {
            key : "性别",
            title :"性别",
            width : '100px',
            dataIndex : "age"
        },
        {
            key : "学号",
            title : "学号",
            width : '240px',
            dataIndex : "stuNumber",
        },
        {
            key:"",
            title : "操作" ,
            width : "200px",
            dataIndex  : "attribute",
            render:([...args])=><button onClick={()=>{alert(args[1].name+args[1].stuNumber)}}>{"查看"}</button>  // render返回dom节点
        }
    ]

    return (
        <div>
            <Table dataSource={dataSource1} columns={columns1} size='large' align={"center"}/>

            <hr />
            <Table dataSource={dataSource2} columns={columns2} size='large' align={"center"}/>
        </div>
    )
}
