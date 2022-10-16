import React, { useState ,useRef} from 'react'
import './index.less'
import applause from '../../../assets/sounds/applause.mp3'
import boo from '../../../assets/sounds/boo.mp3'
import gasp from '../../../assets/sounds/gasp.mp3'
import tada from '../../../assets/sounds/tada.mp3'
import victory from '../../../assets/sounds/victory.mp3'
import wrong from '../../../assets/sounds/wrong.mp3'
export default function SoundBoard() {

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

  let Myapplause = useRef(null)
  let Myboo = useRef(null)
  let Mygasp = useRef(null)
  let Mytada = useRef(null)
  let Myvictory = useRef(null)
  let Mywrong = useRef(null)

  let nameToRef = {
    applause:Myapplause,
    boo:Myboo,
    gasp:Mygasp,
    tada:Mytada,
    victory:Myvictory,
    wrong:Mywrong
  }
  let [currentPlay,setCurrentPlay] = useState('applause')
  let playMusic = (item) => {
    nameToRef[currentPlay].current.pause()
    nameToRef[currentPlay].current.currentTime = 0
    nameToRef[item.title].current.play()
    setCurrentPlay(item.title)
  }

  return (
    <div className='soundboard'>
      <div className="container">
        <audio src={applause} id="applause" ref={Myapplause}></audio>
        <audio src={boo} id="boo" ref={Myboo}></audio>
        <audio src={gasp} id="gasp"  ref={Mygasp}></audio>
        <audio src={tada} id="tada"  ref={Mytada}></audio>
        <audio src={victory} id="victory"  ref={Myvictory}></audio>
        <audio src={wrong} id="wrong" ref={Mywrong}></audio>

        <div id="buttons">
          {
            btnList.map((btn) => {
              return (
                <button className='btn' key={btn.id} onClick={()=>{playMusic(btn)}}>{btn.title}</button>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
