import React from 'react'

const ScrollItem = ({title,details,uri}) => {
    let imglink = `./src/assets/${uri}.jpg`;
    return (
      <div className="scrollitem">
        <div className="img" style={{ backgroundImage: `url("${imglink}")` }} ></div>
        <div className="black">
            <p className='title'>{title}, {details}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
  )
}

export default ScrollItem