import React from 'react'
import './Hero.css'
import Header from '../Header/Header'

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header/>

        {/* The Best Fit Club Ad */}
        <div className="the-best-ad">
          <div></div>
          <span>The Best Fitness Club in The Town</span>
        </div>
      </div>
      <div className="right-h">Right Side</div>
    </div>
  )
}

export default Hero