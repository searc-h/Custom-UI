import React, { ReactNode , useEffect,useState } from 'react'
import styles from './Table.module.less'

export interface ColumnsItem<T> {
    key:number | string,  // 唯一标识

    title : string ,  // 表头表体

    dataIndex  : keyof T,  // 对应数据项的下标

    width : string  // 宽度

    render?:([...args])=>ReactNode  // render返回dom节点
}
interface PropsType {
    dataSource : any[],
    columns : ColumnsItem<any>[],
    size?: "small" | "middle" | "large"
    align?: 'start' | "center" | "end"
}

export default function Table(props: PropsType) {

    let { columns = [], dataSource = [] , align = "start" ,size = "middle"} = props
    let [lineHeight , setLineHeight ] = useState<string>(size)  
    useEffect(()=>{
        switch (size) {
            case "small":
                setLineHeight("20px")
                break;
            case "middle":
                setLineHeight("30px")
                break
            case "large":
                setLineHeight("40px")
                break
            default:
                break;
        }
    } , [size])


    return (
        <div className={styles.Table} >
            <table cellPadding={0} cellSpacing={0}>
                <thead >
                <tr className={styles.tableRow} >
                    {
                        columns.map((item)=>{
                            return (
                                <th style={{textAlign:align ,lineHeight,width:item.width}} key={item.key}>{item.title}</th>
                            )
                        })
                    }             
                </tr>

                </thead>

                <tbody>
                        {
                            dataSource.map((data)=>{
                                return (
                                    <tr className={styles.tableCol} key={data.key} >
                                        {
                                            columns.map(item=>{
                                                if(item.render){
                                                    return <td 
                                                            style={{textAlign:align ,lineHeight}} 
                                                            key={item.key}>
                                                                {item.render([data.key,data])}
                                                            </td>
                                                }
                                                return <td 
                                                        style={{textAlign:align ,lineHeight}}
                                                        key={item.key}>
                                                            {data[item.dataIndex]}
                                                        </td>
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
