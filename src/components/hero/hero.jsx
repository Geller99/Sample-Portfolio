import React from 'react'
import './hero.css';

export const Hero = () => {
  return (
    <div className='Hero'>
        <h1>Geller Micael</h1>
        <h2> Software Engineer, Product Leader, Author...</h2>
        <div className='Hero-Buttons'> 
            <button className='Hero-btn'>Explore</button>
            <button className='Hero-btn'>Contact Me</button>
        </div>
    </div>
  )
}
