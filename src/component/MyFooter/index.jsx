import React, { useRef} from 'react'
import {observer} from 'mobx-react-lite'

import useDark from '../../hooks/useDark'
import './index.less'

function MyFooter() {

  let footerRef = useRef(null)

  useDark(
    {
      refElement :[footerRef],
      darkBackgroundColor :['rgb(39, 39, 39)','#fff'],
      lightBackgroundColor:['rgb(246, 249, 251)','#000'], 
      darkColor:['rgb(246, 240, 240)','#000'], 
      lightColor:['#000','#fff']
    }
  )
  return (
    <div className='footer' ref={footerRef}>
      I hope you can find fun in programming
    </div>
  )
}
export default observer(MyFooter)
