import React from 'react';
import img1 from '../assets/jatin.png';

function About() {
  return (
    <div style={{ padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Who am I?</h1>

      <div 
        style={{
          backgroundColor: '#2c3e50', // A nice dark slate color
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
          color: 'white',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
          maxWidth: '900px',
          margin: '0 auto' // Centers the box on the page
        }}
      >
        {/* Left part image */}
        <div style={{ width: '45%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img 
            src={img1} 
            alt="Jatin Pandey"
            style={{ 
              width: '100%', 
              height: '350px', 
              objectFit: 'cover', // Keeps the image from distorting
              borderRadius: '8px' 
            }}
          />
          <h3 style={{ marginTop: '15px', letterSpacing: '1px' }}>
            Jatin Pandey
          </h3>
        </div>

        {/* Right part details */}
        <div 
          style={{
            width: '55%', 
            padding: '20px', 
            backgroundColor: '#34495e', // Slightly lighter background for contrast
            borderRadius: '8px'
          }}
        >
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, lineHeight: '2', fontSize: '1.05rem' }}>
            <li><strong>Name:</strong> Jatin Pandey</li>
            <li><strong>Education:</strong> B.Tech CSE (3rd Year) – SRMCEM, Lucknow (AKTU)</li>
            <li><strong>Focus Areas:</strong> Full-Stack Development, DSA, and OOP.</li>
            <li><strong>Technologies:</strong> Java, Python, React, Spring Boot, Hibernate, PostgreSQL.</li>
            <li><strong>Key Training:</strong> SRDT Python Full Stack Development.</li>
            <li><strong>Strengths:</strong> Team collaboration, logical reasoning, and adaptable coding.</li>
            <li><strong>Hobbies:</strong> Avid volleyball player and fitness enthusiast.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default About;