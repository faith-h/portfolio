import React from 'react'

const Projects = () => (
  <>
    <div class='section'>
      <p class='header' style={{ paddingTop: '5rem' }}>  projects:  </p>
      <div class='grid'>
        <div class='proj-div'>
          <p class='proj-title'> 01. Utoob </p>
          <p class='proj-text'> A DevPoint Labs hackathon project written in React/Rails. </p>
          <a
            class='proj-link'
            href='https://github.com/faith-h/utoob-2'
            target='_blank'
            rel='noopener noreferrer'
          >
            source code
          </a>
          <a
            class='proj-link'
            href='https://u-toob.herokuapp.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            demo
          </a>
        </div>

        <div class='proj-div'>
          <p class='proj-title'> 02. Cat Tinder </p>
          <p class='proj-text'> Find your cat soulmate, written in React and Ruby on Rails. </p>
          <a
            class='proj-link'
            target="_blank"
            rel='noopener noreferrer'
            href='https://github.com/faith-h/cat-tinder'
          >
            source code
          </a>
          <a
            class='proj-link'
            target='_blank'
            rel='noopener noreferrer'
            href='https://cat-tinder-app.herokuapp.com/'
          >
            demo
          </a>
        </div>

        <div class='proj-div'>
          <p class='proj-title'> 03. Studio Ghibli API </p>
          <p class='proj-text'> View every Studio Ghibli film and character, written in React. </p>
          <a
            class='proj-link'
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/faith-h/ghibli'
          >
            source code
          </a>
          <a
            class='proj-link'
            target='_blank'
            rel='noopener noreferrer'
            href='https://ghibli-api.netlify.app/'
          >
            demo
          </a>
        </div>

      </div>
    </div>
  </>
)

export default Projects