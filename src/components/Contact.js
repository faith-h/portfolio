import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => (
  <>
    <div class='section'>
      <p class='home-text' style={{ fontSize: '6rem' }}> I'm always looking for new projects. Feel free to get in touch! </p>
    </div>
    <div class='section' style={{ background: '#7fcd91', paddingTop: '6rem' }}>
      <div class='grid'>

        <a
          target='_blank'
          rel='noopener noreferrer'
          href='mailto:faithhafen@gmail.com'
          class='con-link'
        >
          <FontAwesomeIcon icon={faEnvelope} class='con-icon' />
          <p>faithhafen@gmail.com </p>
        </a>

        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/faith-h'
          class='con-link'
        >
          <FontAwesomeIcon icon={faGithubSquare} class='con-icon' />
          <p> github </p>
        </a>

        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.linkedin.com/in/faith-hafen/'
          class='con-link'
        >
          <FontAwesomeIcon icon={faLinkedin} class='con-icon' />
          <p> linkedIn </p>
        </a>

      </div>
    </div>
  </>
)

export default Contact