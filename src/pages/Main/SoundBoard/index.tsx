import React, { useState ,useRef} from 'react'
import  styles from  './index.module.less'
import applause from '../../../assets/sounds/applause.mp3'
import boo from '../../../assets/sounds/boo.mp3'
import gasp from '../../../assets/sounds/gasp.mp3'
import tada from '../../../assets/sounds/tada.mp3'
import victory from '../../../assets/sounds/victory.mp3'
import wrong from '../../../assets/sounds/wrong.mp3'
import { SoundBtn } from '../../../ui-components'
import { Description ,Card ,Table , ColumnsType} from '../../../ui-components/index'

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

  const dataSource = [
    {
        key: '1',
        attribute: 'nameToRef',
        describe : "Ref[]",
        type : "panelItem[]",
    },
    {
        key: '2',
        attribute: 'children',
        describe : "图片高度",
        type : "string",
        default : "'400px'"
    },
  ]
  const columns :ColumnsType<typeof dataSource[0]> = [
      {
          key : "属性",
          title : "属性",
          width : '100px',
          dataIndex : "attribute",
      },
      {
          key : "说明",
          title : "说明",
          width : '100px',
          dataIndex : "describe"
      },
      {
          key : "类型",
          title :"类型",
          width : '100px',
          dataIndex : "type"
      },
      {
          key : "默认值",
          title : "默认值",
          width : '100px',
          dataIndex : "default",
      }
  ]

  let api = <Table dataSource={dataSource} columns={columns}></Table>

  return (
    <div className={styles.soundboard}>
      <Description 
        tips={['当你想要为某些按钮添加音效时','切记传递Ref数组']} 
        title='SoundBoard 音板' 
        height='700px' 
        api={api}>

        <Card 
          width='80%' 
          height='200px'
          title='说明' 
          content={"nihao"} 
          shadow={false}/>

      </Description>
      <SoundBtn nameToRef={nameToRef} btnList={btnList}>
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
