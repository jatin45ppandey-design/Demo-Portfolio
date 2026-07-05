import React from 'react';
import img1 from '../assets/jatin.png';


function Home() {
  return (
    <div>
      <section style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        padding: '60px 20px',
        gap: '20px'
      }}>
        
        {/* Profile Picture */}
        <img 
          src={img1}
          alt="Jatin Pandey" 
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid #333'
          }}
        />

        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>
          Hi, I'm Jatin Pandey
        </h1>
        
        <h2 style={{ margin: 0, fontWeight: 'normal', color: '#555', fontSize: '1.5rem', textAlign: 'center' }}>
          Computer Science Student at AKTU & Developer
        </h2>
        
       
        <div style={{ maxWidth: '650px', textAlign: 'center', lineHeight: '1.6', marginTop: '10px' }}>
          
          <p style={{ margin: '0 0 15px 0', fontSize: '1.1rem' }}>
            Welcome to my portfolio! I am a passionate developer currently building a strong foundation in theoretical computer science and software engineering. 
          </p>
          
          <p style={{ margin: 0, fontSize: '1.1rem' }}>
            On the practical programming side, I actively work with Java, focusing on Backend Development. I am also currently learning React to build clean, modern user interfaces just like this one. I am excited to keep learning and will be showcasing my projects here soon!
          </p>
        </div>

      </section>
    </div>
  );
}

export default Home;