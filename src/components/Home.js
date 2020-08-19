import React from 'react'
import arrow from '../images/down-arrow.svg'

const Home = () => (
  <>
    <p class='home-text' style={{ marginBottom: '0', paddingTop: '4rem' }}>
      Hey.
    </p>
    <p class='home-text' style={{ marginBottom: '1rem' }}> I'm Faith. </p>
    <p class='home-text' style={{ fontSize: '2rem' }}>
      A full stack web developer based in Salt Lake City.
    </p>
    <span class='side-text'>
      <img src={arrow} class='side-img' />
      <p class='rotate'> start scrolling </p>
    </span>
  </>
)

export default Home