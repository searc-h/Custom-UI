import React , {useState} from 'react'
import styles from './SoundBtn.module.less'
interface SoundBtnProps {
  children : any,
  nameToRef : any
}
export default function SoundBtn(props:SoundBtnProps) {

  let {nameToRef ,children} = props

  let [currentPlay,setCurrentPlay] = useState('applause')

  let [btnList] = useState([
    {
      title: "applause",
      id: '1',
    },
    {
      title: "boo",
      id: '2'
    },
    {
      title: "gasp",
      id: '3'
    },
    {
      title: "tada",
      id: '4'
    },
    {
      title: "victory",
      id: '5'
    },
    {
      title: 'wrong',
      id: '6'
    }
  ])

  let playMusic = (item:any) => {
    nameToRef[currentPlay].current.pause()
    nameToRef[currentPlay].current.currentTime = 0
    nameToRef[item.title].current.play()
    setCurrentPlay(item.title)
  }

  return (
    <div className={styles.container}>
      {children}

      <div id={styles.buttons}>
            {
              btnList.map((btn) => {
                return (
                  <button className={styles.btn} key={btn.id} onClick={()=>{playMusic(btn)}}>{btn.title}</button>
                )
              })
            }
          </div>
    </div>
  )
}
