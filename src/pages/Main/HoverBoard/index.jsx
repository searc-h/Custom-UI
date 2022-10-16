import React from 'react'
import './index.css'

function createDiv(num) {
  let color = ['#e74c3c', '#8e33ad', '#3298db', 'e67e22', '#ecc71']
  let arr = Array.apply(null, { length: num })
  let mouseOver = (e) => {
    let newColor = color[Math.floor(Math.random() * color.length)]
    e.target.style.backgroundColor = newColor
    e.target.style.boxShadow = `0 0 2px ${newColor},0 0 10px ${newColor}`

  }
  let mouseOut = (e) => {
    e.target.style.backgroundColor = '#1d1d1d'
    e.target.style.boxShadow = '0 0 2px #000'
  }

  return arr.map((item, index) => {
    return <div key={index} className='square ' onMouseOver={(e) => { mouseOver(e) }} onMouseOut={(e) => { mouseOut(e) }}></div>
  })
}

export default function HoverBoard() {
  return (
    <div className='hoverBoard'>
      <div className="container" id="container">
        {
          createDiv(500)
        }
      </div>
    </div>
  )
}
