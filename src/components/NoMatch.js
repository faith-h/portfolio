import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => (
  <>
    <div class='section'>
      <p class='home-text'>
        Page not found. Return to <Link to='/' style={{ textDecoration: 'none' }}> home? </Link>
      </p>
    </div>
  </>
)

export default NoMatch