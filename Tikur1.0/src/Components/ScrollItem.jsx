import React from 'react'

const ScrollItem = ({title,details,uri}) => {
    // for working on dev
    // let imglink = `./src/assets/${uri}.jpg`;
    let imglink = `./assets/${uri}.jpg`;
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