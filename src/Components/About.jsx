import React from 'react'
import img1 from '../assets/jatin.png'

function About() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}> Who am I ?</h1>

      <div style={{ backgroundColor: 'grey', display: 'flex', gap: '10px', color: 'white', padding: '10px' }}>
           
        {/* Left part image */}
        <div style={{ width: '50%', height: '400px', backgroundColor: 'black', textAlign: 'center' }}>
          <img src={img1} alt="Jatin" style={{ width: '100%', height: '350px', objectFit: 'contain' }}/>
          {/* Changed color from black to white so your name is visible */}
          <h3 style={{ color: 'white', marginTop: '10px' }}>
            Jatin Pandey
          </h3>
        </div>

        {/* Right */}
        <div style={{ width: '50%', height: '400px', backgroundColor: 'black', padding: '20px' }}>
          <section style={{ fontSize: '18px', lineHeight: '1.5' }}>
            "I am a computer science student at Dr. A.P.J. Abdul Kalam Technical University with a passion for bridging theoretical foundations and practical software development. 
            My technical focus centers on Java programming, where I enjoy working with abstraction and class structures, alongside a strong interest in software engineering design principles like decoupling. 
            I am dedicated to writing clean, modular code and continually expanding my understanding of complex systems."
          </section>
        </div>

      </div>
    </div>
  )
}

export default About