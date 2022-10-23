import React, { useState } from 'react'
import { Model } from '../../../ui-components'
import './MyModel.less'
export default function MyModel() {

    let [showModel, setShowModel] = useState<boolean>(true)
    let changeShowModel = () => {
        setShowModel(!showModel)
    }
    let cancelShowModel = ()=>{
        setShowModel(false)
    }

    return (
        <div className='mymodel'>

            <Model
                showModel={showModel}
            >
                <button onClick={cancelShowModel}>关闭model</button>
            </Model>

            <button onClick={changeShowModel}>打开Model</button>
        </div>
    )
}
