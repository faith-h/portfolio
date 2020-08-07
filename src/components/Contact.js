import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => (
  <>
    <div class='section'>
      <div class='grid'>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href='mailto:faithhafen@gmail.com'
          class='con-link'
        >
          <div class='grid-item'>
            <FontAwesomeIcon icon={faEnvelope} class='con-icon' />
            <p>faithhafen@gmail.com </p>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href='https://github.com/faith-h'
          class='con-link'
        >
          <div class='grid-item'>
            <FontAwesomeIcon icon={faGithubSquare} class='con-icon' />
            <p> github </p>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href='https://www.linkedin.com/in/faith-hafen/'
          class='con-link'
        >
          <div class='grid-item'>
            <FontAwesomeIcon icon={faLinkedin} class='con-icon' />
            <p> linkedIn </p>
          </div>
        </a>
      </div>
    </div>
  </>
)

export default Contact