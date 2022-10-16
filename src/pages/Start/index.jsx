import React from 'react'
import './index.less'

import { useNavigate } from 'react-router-dom'

export default function Start() {
  const navigate = useNavigate()

  return (
    <>
      <div className='start'>
        <button onClick={() => { navigate('/main/expanding-card') }}>Start</button>
      </div>
    </>
  )
}
