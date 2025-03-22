import React from 'react'
import '../css/collab.css'

const CollabHome = ({header}) => {

  const collabs = [
    { id: "1", img: "./assets/1.jpg", location: "Downtown" },
    { id: "2", img: "./assets/2.jpg", location: "Midtown" },
    { id: "3", img: "./assets/3.jpg", location: "Uptown" },
    { id: "4", img: "./assets/4.jpg", location: "Uptown" },
    { id: "5", img: "./assets/5.jpg", location: "Uptown" },
    { id: "6", img: "./assets/6.jpg", location: "Uptown" },
    { id: "7", img: "./assets/6.jpg", location: "Uptown" },
    { id: "8", img: "./assets/6.jpg", location: "Uptown" },
  ];

  return (
    <div className='collabHome'>
      <h3>{header}</h3>
      <div className="collabGrid">
        {collabs.map( (i,id) => (
          <div key={id} className="collabImg" style={{ backgroundImage: `url("${i.img}")` }}></div>        
        ))}
      </div>
      <div></div>
    </div>
  )
}

export default CollabHome