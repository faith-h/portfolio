import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const Projects = () => (
  <>
    <div class='section'>
      <div class='grid'>
        <div class='proj-div'>
          <img alt='utoob' class='proj-img' src='https://res.cloudinary.com/dddst4ppd/image/upload/v1595787821/user_mo23jq.png' />
          <p class='proj-title'> utoob </p>
          <p>
            <FontAwesomeIcon class='proj-icon' icon={faReact} /> <FontAwesomeIcon class='proj-icon' icon={faGem} />
          </p>
          <p> recreating youtube </p>
          <a
            class='proj-link'
            href='https://github.com/faith-h/utoob-2'
            target="_blank"
            rel="noopener noreferrer"
          >
            source code
          </a>
          &nbsp;
          <a
            class='proj-link'
            href='https://u-toob.herokuapp.com'
            target="_blank"
            rel="noopener noreferrer"
          >
            demo
          </a>
        </div>

        <div class='proj-div'>
          <img alt='cat tinder' class='proj-img' style={{ borderRadius: '0' }} src='https://image.flaticon.com/icons/svg/57/57162.svg' />
          <p class='proj-title'> cat tinder </p>
          <p>
            <FontAwesomeIcon class='proj-icon' icon={faReact} /> <FontAwesomeIcon class='proj-icon' icon={faGem} />
          </p>
          <p> find your cat soulmate </p>
          <a
            class='proj-link'
            target="_blank"
            rel="noopener noreferrer"
            href='https://github.com/faith-h/cat-tinder'
          >
            source code
          </a>
          &nbsp;
          <a
            class='proj-link'
            target="_blank"
            rel="noopener noreferrer"
            href='https://cat-tinder-app.herokuapp.com/'
          >
            demo
          </a>
        </div>

        <div class='proj-div'>
          <img alt='studio ghibli' class='proj-img' src='https://res.cloudinary.com/dddst4ppd/image/upload/v1596588990/anime_i9jdea.png' />
          <p class='proj-title'> studio ghibli </p>
          <p class='proj-text'>
            <FontAwesomeIcon class='proj-icon' icon={faReact} />
          </p>
          <p class='proj-text'> an api project </p>
          <a
            class='proj-link'
            target="_blank"
            rel="noopener noreferrer"
            href='https://github.com/faith-h/ghibli'
          >
            source code
          </a>
          &nbsp;
          <a
            class='proj-link'
            target="_blank"
            rel="noopener noreferrer"
            href='https://ghibli-api.netlify.app/'
          >
            demo
          </a>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <p class='header' style={{ margin: '3rem', marginBottom: '0' }}> currently building </p>
        <hr style={{ width: '20%', marginBottom: '3rem', marginTop: '1rem' }} />
        <div class='proj-div' style={{ maxWidth: '27rem', margin: 'auto' }}>
          <img alt='utoob' class='proj-img' src='https://res.cloudinary.com/dddst4ppd/image/upload/v1597025001/chiro_iprrmq.jpg' />
          <p class='proj-title'> slc chiropractic </p>
          <p> <FontAwesomeIcon class='proj-icon' icon={faReact} /> </p>
          <p> draper chiropractor </p>
          <a
            class='proj-link'
            href='https://github.com/faith-h/slc-chiro'
            target="_blank"
            rel="noopener noreferrer"
          >
            source code
          </a>
          &nbsp;
          <a
            class='proj-link'
            href='https://infallible-brahmagupta-6f7e64.netlify.app/'
            target="_blank"
            rel="noopener noreferrer"
          >
            demo
          </a>
        </div>
      </div>
    </div>
  </>
)

export default Projects