import Card from './Card';
import './VideoEditing.css'
import lcs from '../assets/lcs.jpg'
import ls from '../assets/lslogo.png'
import './Projects.css'

function VideoEditing() {
  return (
    <>
      <div className='project-container'>
        <div className='card-grid'>

          <div className='project-tag'>Video Editing</div>
          <p className='project-explain'>
            I am currently a freelance video editor and manager for 
          </p>

          <Card imgSrc={lcs} project="LCS" explaination="I edited a few videos for the League Of Legends Championship Series." />
          <Card imgSrc={ls} project="LS" explaination="Edited and Managed for LS, a streamer and youtuber for League of Legends." />

        </div>
      </div>
    </>
  )
}

export default VideoEditing