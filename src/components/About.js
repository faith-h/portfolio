import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => (
  <>
    <div class='section'>
      <p class='header'> about: </p>
      <img class='avatar' src='https://res.cloudinary.com/dddst4ppd/image/upload/v1597778524/Avatar-Maker_1_o4kuza.svg' />
      <p class='text'>
        I'm a DevPoint Labs graduate and full-stack web developer powered by coffee.
        Recently I've been doing freelance work for small businesses.
        I enjoy the process of creating web applications from front to back and doing honest work for ambitious clients.
        When I'm not taking care of my plants or hiking, I'm working to improve my technical skills every day, one problem at a time. Check out my work and give me a shout!
        </p>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p style={{ fontSize: '2.5rem' }}> skills: </p>
        <div class='ab-grid'>
          <span class='list-item'> <FontAwesomeIcon icon={faHtml5} class='ab-icon' /> HTML </span>
          <span class='list-item'> <FontAwesomeIcon icon={faCss3Alt} class='ab-icon' /> CSS </span>
          <span class='list-item'> <FontAwesomeIcon icon={faJs} class='ab-icon' /> Javascript / ES6 </span>
          <span class='list-item'> <FontAwesomeIcon icon={faGem} class='ab-icon' /> Ruby on Rails </span>
          <span class='list-item'> <FontAwesomeIcon icon={faReact} class='ab-icon' /> React </span>
        </div>
      </div>
    </div>
  </>
)

export default About