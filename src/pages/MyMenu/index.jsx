import React, { useEffect, useState ,useRef} from 'react'
import { useNavigate , useLocation } from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import './index.less'
import useDark from '../../hooks/useDark'
  

// icon选择函数
function checkTheIcon(item) {
  if (item.open) {
    return <i className="fa fa-chevron-right open" aria-hidden="true"></i>
  } else {
    return <i className='fa fa-chevron-left' aria-hidden="true"></i>
  }
}

function MyMenu({ left, right }) {

  let menuRef = useRef(null)

  useDark(
    {
      refElement :[menuRef],
      darkBackgroundColor :['rgb(39, 39, 39)','#fff'],
      lightBackgroundColor:['#fff','#000'], 
      darkColor:['rgb(246, 240, 240)','#000'], 
      lightColor:['#000','#fff']
    }
  )
  
  // 当前选择的下标【注意这里的下标改变并不能让页面改变，liArr改变才可以让页面改变】
  let [currentIndex, setCurrentIndex] = useState('01')
  // 侧边导航 
  let [liArr, setLiArr] = useState([
    {
      title: 'Expanding Card',
      open: true,
      id: '01',
      element: '/main/expanding-card'
    },
    {
      title: 'Progress Steps',
      open: false,
      id: '02',
      element:'/main/progress-steps'
    },
    {
      title: 'Sound Board',
      open: false,
      id: '03',
      element:'/main/sound-board'
    },
    {
      title: 'Random Choice',
      open: false,
      id: '04',
      element:'/main/random-choice'
    },
    {
      title: 'Background Slider',
      open: false,
      id: '05',
      element:'/main/background-slider'
    },
    {
      title: 'Drag And Drop',
      open: false,
      id: '06',
      element:'/main/drag-and-drop'
    },
    {
      title: 'Drawing Pad',
      open: false,
      id: '07',
      element:'/main/drawing-pad'
    },
    {
      title: 'Double Click Heart',
      open: false,
      id:'08',
      element: '/main/double-click-heart'
    },
    {
      title: 'Password Generatore',
      open: false,
      id: '09',
      element:'/main/password-generator'
    },
    {
      title: 'Hover Board',
      open: false,
      id: '10',
      element:'/main/hover-board'
    },
    {
      title: 'Verify Account',
      open: false,
      id: '11',
      element:'/main/verify-account'
    },
    {
      title: 'Feeback Design',
      open: false,
      id: '12',
      element:'/main/feeback-design'
    },
    {
      title: 'CustomSlider',
      open: false,
      id: '13',
      element:'/main/custom-slider'
    },
    {
      title: 'NetFlix Navigation',
      open: false,
      id: '14',
      element:'/main/netflix-navigation'
    },
    {
      title: 'My Model',
      open: false,
      id: '15',
      element : "/main/my-model"
    },
    {
      title: 'My Table',
      open: false,
      id: '16',
      element : "/main/my-table"
    },
    {
      title: '奔跑的滚444',
      open: false,
      id: '17'
    }
  ])
  let navigate = useNavigate()
  // 修改open状态【点击事件触发回调---判断点击的小标是否是当前的下标---修改下标、liArr---页面改动】
  let changeOpen = (item) => {
    if (currentIndex === item.id) {
      return
    }

    setCurrentIndex(item.id)
    let open = !item.open
    let newItem = { ...item, open }

    setLiArr(
      // 这里用解构赋值会出现问题
      liArr.map((li) => {
        if (li.id === newItem.id) {
          return newItem
        } else {
          li.open = false
          return li
        }
      })
    )
    navigate(item.element)

  }

  // 是否收起
  let [isRotate, setIsRotate] = useState(false)
  let changeRotate = () => {
    setIsRotate(!isRotate)
    left.current.classList.toggle('hidden')
    right.current.classList.toggle('hidden')
  }

  let {pathname} = useLocation()
  useEffect(()=>{
    let item = liArr.find((item)=>{
      return item.element === pathname
    })
    
    changeOpen(item)
  },[pathname])
  return (
    <div className='mymenu' ref={menuRef}>
      <div className="top">
        <div className="title">UI Lists</div>
        <div className="dirBar" onClick={changeRotate}>
          <i className={`fa fa-chevron-left ${isRotate ? 'rotate' : ''}`} aria-hidden="true"></i>
        </div>
      </div>
      <div className="content">

        {
          liArr.map((item) => {
            return <li onClick={() => { changeOpen(item) }} className={`item ${item.open ? 'open' : ''}`} key={item.id}>
              <span>{item.title}</span>
              <span >
                {checkTheIcon(item)}
              </span>

            </li>
          })
        }

      </div>
    </div>
  )
}
export default observer(MyMenu) 