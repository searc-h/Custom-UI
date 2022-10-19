import React from 'react'

import stlyes from  './index.module.less'
import { Button }from '../../ui-components'
import { useNavigate } from 'react-router-dom'

export default function Start() {
  const navigate = useNavigate()

  return (
    <>
      <div className={stlyes.start}>
        <Button size='large' clickTo={() => { navigate('/main/expanding-card') }} color={"#000"}>
          Start
        </Button>
      </div>
    </>
  )
}
