import React from 'react'
import '../css/footer.css'
const Footer = () => {

  const openLink = (i) => {
    switch (i) {
      case 1:
        
        break;
      case 2:
        
        break;
      case 3:
        
        break;
      case 4:
        
        break;
      default:
        break;
    }
  }

  return (
    <div className='footer'>
      <div className="footerGrid">
        
        <div className="brand">
          <svg fill="#ffffff" width="80px" height="80px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <path d="M128 220c-50.81 0-92-41.19-92-92s41.19-92 92-92 92 41.19 92 92-41.19 92-92 92zm-.5-139.23c27.094 0 36.41 18.143 43.998 31.187 10.798 18.56 11.931 31.154 35.889 40.868C210 140.22 210 141.57 210 127.5c0-45.563-36.937-82.5-82.5-82.5S45 81.937 45 127.5c0 11.61-1.603 13.593 2.549 25.325 20.955-6.887 30.758-29.192 34.67-39.144 5.526-14.056 18.187-32.91 45.281-32.91zm.5 24.615c-17.128 0-31.173 32.022-34.929 39.68-3.756 7.659-16.584 25.445-34.306 29.902 14.782 22.217 40.049 36.858 68.735 36.858 28.448 0 53.532-14.398 68.364-36.305-14.832-10.778-22.641-15.315-33.531-30.455-8.994-12.504-17.205-39.68-34.333-39.68z" fillRule="evenodd"/>
          </svg>
          <p className="name"> Tikur Misil</p>
        </div>

        <div className="socialList">
          <img src="/src/assets/youtube.svg" width="40px" height="40px" onClick={()=>{openLink(1)}}/>
          <img src="/src/assets/insta.svg" width="40px" height="40px"   onClick={()=>{openLink(2)}}/>
          <img src="/src/assets/linked.svg" width="40px" height="40px"  onClick={()=>{openLink(3)}}/>
          <img src="/src/assets/tiktok.svg" width="40px" height="40px"  onClick={()=>{openLink(4)}}/>
        </div>

        <p className="date">
          © 2025 ColibriWP Blog. Built using WordPress.
        </p>

      </div>
    </div>
  )
}

export default Footer