import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Link, Element } from 'react-scroll'
import ScrollAnimation from 'react-animate-on-scroll'

class Section extends React.Component {
  render() {
    return (
      <div>
        
        <nav>
          <ul className='nav-list'>
            <li><Link className='nav-link' to='about' spy={true} smooth={true} duration={500}>about</Link></li>
            <li><Link className='nav-link' to='projects' spy={true} smooth={true} duration={500} >projects</Link></li>
            <li><Link className='nav-link' to='contact' spy={true} smooth={true} duration={500}>contact</Link></li>
          </ul>
        </nav>

        <Element className='element'>
          <ScrollAnimation animateIn='fadeIn'>
            <Home />
          </ScrollAnimation>
        </Element>

        <Element name='about' className='element' style={{ marginTop: '23rem' }}>
          <ScrollAnimation animateIn='fadeIn'>
            <About />
          </ScrollAnimation>
        </Element>

        <Element name='projects' className='element'>
          <ScrollAnimation animateIn='fadeIn'>
            <Projects />
          </ScrollAnimation>
        </Element>

        <Element name='contact' className='element'>
          <ScrollAnimation animateIn='fadeIn'>
            <Contact />
          </ScrollAnimation>
        </Element>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Section />
  </React.StrictMode>,
  document.getElementById('root')
)
