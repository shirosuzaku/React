import React from 'react'
import Hero from './Hero'
import BlogHome from './BlogHome'
import ProjectsHome from './ProjectsHome'
import CollabHome from './CollabHome'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <ProjectsHome header={"Projects"} />
        <div className="breakLine"><div></div></div>
        <ProjectsHome header={"Blogs"}/>
        <div className="breakLine"><div></div></div>
        <CollabHome header={"Collaborators"}/>
    </div>
  )
}

export default HomePage