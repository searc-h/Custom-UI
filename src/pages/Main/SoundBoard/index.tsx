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

  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园2号',
    },
    {
      key: '3',
      name: '胡彦文',
      age: 52,
      address: '西湖区湖底公园3号',
    },
    {
      key: '4',
      name: '胡彦武',
      age: 62,
      address: '西湖区湖底公园4号',
    },
  ];
  
  const columns:ColumnsType = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render:([name, item])=>{
        return <p>{name + item.name}</p>
      },
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];


  return (
    <div className={styles.soundboard}>
      <Description tips={['这里应该传入数组',"让我们来测试一下吧"]} title='SoundBoard 音板' height='500px'>
                <Card width='80%' height='200px' title='说明' content={"nihao"} shadow={false}/>
      </Description>
      <SoundBtn nameToRef={nameToRef}>
          <audio src={applause} id="applause" ref={Myapplause}></audio>
          <audio src={boo} id="boo" ref={Myboo}></audio>
          <audio src={gasp} id="gasp"  ref={Mygasp}></audio>
          <audio src={tada} id="tada"  ref={Mytada}></audio>
          <audio src={victory} id="victory"  ref={Myvictory}></audio>
          <audio src={wrong} id="wrong" ref={Mywrong}></audio>
      </SoundBtn>
      <Table dataSource={dataSource} columns={columns}></Table>
    </div>
  )
}
