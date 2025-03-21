import {React,useRef,useEffect} from 'react'
import '../css/projectHome.css'
import ScrollItem from './ScrollItem'

export const ProjectsHome = ({header}) => {

  const clip = useRef(null)
  const pre = useRef(null)
  const nxt = useRef(null)
  const scrollItems = useRef(null)
  const cafes = [
    { img: "1", name: "Cafe Mocha", location: "Downtown" },
    { img: "2", name: "Brew & Beans", location: "Midtown" },
    { img: "3", name: "Espresso Express", location: "Uptown" },
    { img: "4", name: "Espresso Express", location: "Uptown" },
    { img: "5", name: "Espresso Express", location: "Uptown" },
    { img: "6", name: "Espresso Express", location: "Uptown" },
  ];
  let offset = 345
  let pointer = 0 

  const scrollTo = (dir) => {
    console.log(dir,clip)
    let itemWidth = clip.current.children[0].offsetWidth
    if (dir == "prev"){
      itemWidth *= -1
      pre.current.classList.remove('animate-prev')
      pre.current.classList.add('animate-prev')
      setTimeout(() => {
        pre.current.classList.remove('animate-prev')
      }, 350);
    }else{
      nxt.current.classList.remove('animate-next')
      nxt.current.classList.add('animate-next')
      setTimeout(() => {
        nxt.current.classList.remove('animate-next')
      }, 350);

    }
    scrollItems.current.scrollBy({
      left: itemWidth,
      behavior: 'smooth'
  });
  }

  useEffect(() => {
    return () => {
      // Runs on Unmount
    };
  });


  return (
    <div className='projectHome'>
      <div className="container">
        <h3>{header}</h3>
        <div className="display">
          
          <div ref={pre} className="prev" onClick={()=>{scrollTo("prev")}} ></div>
          <div ref={scrollItems} className="scrollItems">
            <div  ref={clip} className="clip">
              {cafes.map( (i,id) => (
                <ScrollItem key={id} title={i.name} details={i.location} uri={i.img}/>
              ))}
            </div>
          </div>
          <div ref={nxt} className="next" onClick={()=>{scrollTo("next")}} ></div>
        
        </div>
        <div></div>
      </div>
    </div>
  )
}
export default ProjectsHome