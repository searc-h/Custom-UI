import React, { useState,useEffect } from 'react'
import { Modal } from '../../../ui-components'
import styles from './MyModel.module.less'
import {Card} from '../../../ui-components'
export default function MyModel() {

    let [showModel, setShowModel] = useState<boolean>(false)
    let [count , setCount] = useState(0)

    let changeShowModel = (tag : boolean)=>{

        setCount((count)=>{
            return count+1
        })
        console.log(count , showModel)
        setShowModel(tag)
    }

    return (
        <div className={styles.container}>

            <button onClick={()=>{changeShowModel(true)}}>Show modal</button>
        
            {
                <Modal showModel={showModel} changeShowModel={changeShowModel}>
                    <Card />
                </Modal>
            }

        </div>
        
    )
}
