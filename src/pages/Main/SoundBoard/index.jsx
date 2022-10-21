import React, { useState ,useRef} from 'react'
import './index.less'
import applause from '../../../assets/sounds/applause.mp3'
import boo from '../../../assets/sounds/boo.mp3'
import gasp from '../../../assets/sounds/gasp.mp3'
import tada from '../../../assets/sounds/tada.mp3'
import victory from '../../../assets/sounds/victory.mp3'
import wrong from '../../../assets/sounds/wrong.mp3'
import { SoundBtn } from '../../../ui-components'


export default function SoundBoard() {

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

  return (
    <div className='soundboard'>
      <SoundBtn nameToRef={nameToRef}>
          <audio src={applause} id="applause" ref={Myapplause}></audio>
          <audio src={boo} id="boo" ref={Myboo}></audio>
          <audio src={gasp} id="gasp"  ref={Mygasp}></audio>
          <audio src={tada} id="tada"  ref={Mytada}></audio>
          <audio src={victory} id="victory"  ref={Myvictory}></audio>
          <audio src={wrong} id="wrong" ref={Mywrong}></audio>
      </SoundBtn>
    </div>
  )
}
