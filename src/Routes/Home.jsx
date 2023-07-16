import './Home.css'

import { BiRightArrowAlt } from 'react-icons/bi';

function Home() {
  return (
    <>
      <div className='home-container'>
        <div className="hello-tag">Hello! I am Tuvshinbayar, I am a Full Stack Engineer
          living in Washington DC, who loves to work on all things
          web.
        </div>
        <div className="hello-tag-2">
          This my personal website where I can display my experience and
          interests to anyone who wants to see! From 
          work experience to what I love to do away from work,
          I hope you enjoy exploring
          who I am and what I have done so far in my journey.
        </div>
      </div>
      <div className='home-project-container'>
        <div className='home-projects'>
          <div>Latest Projects</div>

          <button className='home-project-button'>
            All Projects
            <BiRightArrowAlt className='rightarrow'/>
          </button>

        </div>

        <hr className='break'></hr>

      </div>

    </>
  )
}

export default Home