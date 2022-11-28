import React from 'react'
import { LazyLoadImg  ,Description,Table ,ColumnsType } from '../../../ui-components'
import styles from './index.module.less'
interface dataSourceType{
      key: string,
      attribute: string
      describe :string
      type : string,
      default? :string | number
}
export default function LazyImg() {

  const imgList = [
    {
      url:'https://img.gouka.la/i/2022/11/25/11a514h.webp',
      title : "图片1"
    },
    {
      url:"https://img0.baidu.com/it/u=1052270130,197263411&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=706",
      title : "图片2"
    },
    {
      url:"https://img.gouka.la/i/2022/11/24/gwrhqa.webp",
      title : "图片3"
    }
  ]
  const dataSource:dataSourceType[] = [
    {
        key: '1',
        attribute: 'placeholder',
        describe : "等待中动态效果组件",
        type : "()=>JSX.Element",
        default : "LoadingSvg Component"
    },
    {
        key: '2',
        attribute: 'children',
        describe : "只有放一个img元素时才有效",
        type : "boolean",
    },
  ]

  const columns :ColumnsType<dataSourceType> = [
      {
          key : "属性",
          title : "属性",
          width : '100px',
          dataIndex : "attribute",
      },
      {
          key : "说明",
          title : "说明",
          width : '300px',
          dataIndex : "describe"
      },
      {
          key : "类型",
          title :"类型",
          width : '300px',
          dataIndex : "type"
      },
      {
          key : "默认值",
          title : "默认值",
          width : '300px',
          dataIndex : "default",
      }
  ]
  let api = <Table dataSource={dataSource} columns={columns} size='large'/>

  let tips = [
      '当你希望加载大图时需要过渡效果，而不是生硬地做等待与呈现之间的切换;',
      '你也可以自定义等待效果，封装成组件传入;'
  ]
  let code =`
  <LazyLoadImg >
  \t  <img height="300px" width="200px" src={""} alt="头像" />
  </LazyLoadImg>
  <LazyLoadImg >
  \t  <img height="300px" width="200px" src={"https://img.gouka.la/i/2022/11/25/11a514h.webp"} alt="头像" />
  </LazyLoadImg>
  <LazyLoadImg >
  \t  <img height="300px" width="200px" src={"https://img0.baidu.com/it/u=1052270130,197263411&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=706"} alt="头像" />
  </LazyLoadImg>
  <LazyLoadImg >
  \t  <img height="300px" width="200px" src={"https://img.gouka.la/i/2022/11/24/gwrhqa.webp"} alt="头像" />
  </LazyLoadImg>
  `
  return (
    <div className={styles['container']}>

      <Description
          tips={tips} 
          title='LazyLoadImg 图片懒加载' 
          api={api}>
          {code}
      </Description>

      <div className={styles['lazy-outer']}>

        <div className={styles['lazy-img']} >
          <LazyLoadImg >
            <img height="400px" width="300px" src={""} alt="头像" />
          </LazyLoadImg>
        </div>

        {
          imgList.map((item , index)=>{
            return (
              <div className={styles['lazy-img']} key={index}>
                <LazyLoadImg >
                  <img height="300px" width="200px" src={item.url} alt="头像" />
                </LazyLoadImg>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
