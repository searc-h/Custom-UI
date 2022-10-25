import React, { ReactNode } from 'react'
import styles from './Table.module.less'

export interface ColumnsItem {
    key:number | string,
    title : string ,
    dataIndex  : string,
    render?:([...args])=>ReactNode
    align?: 'right' | "center" | "lefts",
}

interface PropsType {
    columns : ColumnsItem[],
    dataSource : any[],
    size?: "middle" | "large"
}

export default function Table(props: PropsType) {

    let { columns = [], dataSource = [] } = props
    console.log(dataSource)
    return (
        <div className={styles.Table} >
            <table cellPadding={0} cellSpacing={0}>
                <thead >
                <tr className={styles.tableRow}>
                    {
                        columns.map((item)=>{
                            return (
                                <th key={item.key}>{item.title}</th>
                            )
                        })
                    }             
                </tr>

                </thead>

                <tbody>
                        {
                            dataSource.map((data)=>{
                                return (
                                    <tr className={styles.tableCol} key={data.key}>
                                        {
                                            columns.map(item=>{
                                                if(item.render){
                                                    return <td key={item.key}>{item.render([data.key,data])}</td>
                                                }
                                                return <td key={item.key}>{data[item.dataIndex]}</td>
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                </tbody>
            </table>
        </div>
    )
}
