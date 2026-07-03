import React from 'react'
import img1 from '../assets/jatin.png'

function About() {
  return (
    <div >
    <h1> Who am I ?</h1>

    <div style={{backgroundColor:'grey',display:'flex',justifyContent:'center',alignItems:'center',gap:'10px',color:'white'}}
    >
           {/* Left part image */}
           
    <div style={{width:'50%',height:'400px',backgroundColor:'black'}}>
        <img src={img1} style={{width:'100%',height:'400px'}}/>
        <h3 style={{color:'black'}}>
            Jatin Pandey
        </h3>
    
    </div>

    {/* Right */}
    <div style={{width:'50%',height:'400px',backgroundColor:'black',textDecorationColor:'black'}}>
     <section>
      "I am a computer science student at Dr. A.P.J. Abdul Kalam Technical University with a passion for bridging theoretical foundations and practical software development. 
       My technical focus centers on Java programming, 
      where I enjoy working with abstraction and class structures, alongside a strong interest in software engineering design principles like decoupling. 
      I am dedicated to writing clean, modular code and continually expanding my understanding of complex systems."
     </section>

    </div>

    </div>
        
     </div>
  )
}

export default About