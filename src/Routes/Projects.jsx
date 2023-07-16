import Card from './Card';
import './Projects.css'
import citypop from '../assets/citypop.jpg'
import premirepro from '../assets/premierepro.jpg'
import yt from '../assets/paintb.png'
import excel from '../assets/excel.png'

function Projects() {
  return (
    <>
      <div className='project-container'>
        <div className='card-grid'>
          <div className='project-tag'>Projects</div>
          <p className='project-explain'>
            Many of my projects are linked to my freelancing career. You'll see the tools that
            I created to improve my workflow and automate common procedures along with a few passion projects.
          </p>
          <Card imgSrc={citypop} project="Welcome To CityPop" explaination="Genre specific music player of one of my favorite genres" />
          <Card imgSrc={premirepro} project="Automatic Video Censoring" explaination="Script that censors videos for you in Premiere Pro " />
          <Card
            imgSrc={yt}
            project="Canvas on YouTube"
            explaination="Paint over Youtube videos" />
          <Card imgSrc={excel} project="Convert Youtube Data to Excel" explaination="Converts Youtube data into excel sheets" />
        </div>
      </div>



    </>
  )
}

export default Projects