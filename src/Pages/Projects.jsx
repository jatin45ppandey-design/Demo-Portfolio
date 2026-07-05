import React from 'react';

function Projects() {
  return (
    <div>
      <section style={{ textAlign: 'center' }}>
        
        <h1>My Projects & Repositories</h1>
        <p>Here are some of the projects and practice repositories I have built on GitHub.</p>
        <br />

        {/* --- Project 1 --- */}
        <div>
          <h2>Spring Boot & JDBC Example</h2>
          <p>Learned about Spring Boot and JDBC, including how they work together to connect to a PostgreSQL database.</p>
          <p><strong>Technology:</strong> Java</p>
          {/* target="_blank" makes the link open in a new tab */}
          <a href="https://github.com/jatin45ppandey-design/SpringJDBCeg" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>

        <br />
        <hr style={{ width: '50%' }} />
        <br />

        {/* --- Project 2 --- */}
        <div>
          <h2>Exploring Spring Framework</h2>
          <p>Explored Inversion of Control (IoC) and Dependency Injection concepts using XML-based configuration.</p>
          <p><strong>Technology:</strong> Java</p>
          <a href="https://github.com/jatin45ppandey-design/ExplorinSpringFramework" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>

        <br />
        <hr style={{ width: '50%' }} />
        <br />

        {/* --- Project 3 --- */}
        <div>
          <h2>Hibernate Practice Projects</h2>
          <p>My first and second independent projects using Hibernate through Maven on IntelliJ to practice database mapping.</p>
          <p><strong>Technology:</strong> Java</p>
          <a href="https://github.com/jatin45ppandey-design/HibernatePro_Program-1" target="_blank" rel="noopener noreferrer">View Repo 1</a>
          {' | '} {/* This just adds a little line between the two links */}
          <a href="https://github.com/jatin45ppandey-design/HIBERNATEPRO_2" target="_blank" rel="noopener noreferrer">View Repo 2</a>
        </div>

        <br />
        <hr style={{ width: '50%' }} />
        <br />

        {/* --- Project 4 --- */}
        <div>
          <h2>Advanced Java Programs</h2>
          <p>A collection of advanced Java programs built to deepen my understanding of the language.</p>
          <p><strong>Technology:</strong> Java</p>
          <a href="https://github.com/jatin45ppandey-design/JAVA-ADVANCE" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>

        <br />
        <hr style={{ width: '50%' }} />
        <br />

        {/* --- Project 5 --- */}
        <div>
          <h2>Java Quiz Demo</h2>
          <p>A basic quiz application created to practice foundational Java logic.</p>
          <p><strong>Technology:</strong> Java</p>
          <a href="https://github.com/jatin45ppandey-design/Java-Quiz-Demo" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>

        <br />
        <hr style={{ width: '50%' }} />
        <br />

        {/* --- Project 6 --- */}
        <div>
          <h2>Core Java Programs</h2>
          <p>A collection of core Java programs built while mastering the fundamentals of the language.</p>
          <p><strong>Technology:</strong> Java</p>
          <a href="https://github.com/jatin45ppandey-design/Java-Core" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>

        <br />
        <hr style={{ width: '50%' }} />
        <br />

        {/* --- Project 7 --- */}
        <div>
          <h2>Demo Portfolio & ICT Website</h2>
          <p>Practice websites including this current portfolio, built to learn and practice frontend development.</p>
          <p><strong>Technologies:</strong> React, JavaScript, HTML</p>
          <a href="https://github.com/jatin45ppandey-design/Demo-Portfolio" target="_blank" rel="noopener noreferrer">Portfolio Repo</a>
          {' | '}
          <a href="https://github.com/jatin45ppandey-design/ICT-Demo-Website" target="_blank" rel="noopener noreferrer">ICT Website Repo</a>
        </div>

      </section>

      {/* --- Closing Message --- */}
      <section style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '15px', 
        padding: '40px 20px' 
      }}>
        <h1 style={{ textAlign: 'center', margin: 0 ,fontSize: '2.2rem' }}>
          There are no real world or main projects right now.
        </h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', margin: 0 }}>
          But I will be working and trying to make some in the coming days.
        </p>
      </section>
    </div>
  );
}

export default Projects;