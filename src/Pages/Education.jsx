import React from 'react';

function Education() {
  return (
    <div>
      <section style={{ textAlign: 'center' }}>
        
        <h1>My Education & Skills</h1>
        <br />

        {/* --- College --- */}
        <div>
          <h2>B.Tech in Computer Science and Engineering (3rd Year)</h2>
          <p>Shri Ramswaroop Memorial College of Engineering and Management (AKTU), Lucknow </p>
          <p>
            <strong>SGPA:</strong> 1st Sem: 8.1 | 2nd Sem: 8.3 | 3rd Sem: 8.0 | 4th Sem: 7.83
          </p>
        </div>

        <br />
        <hr style={{ width: '50%' }} />
        <br />

        {/* --- 12th Grade --- */}
        <div>
          <h2>Class 12 (Intermediate)</h2>
          <p>Sunbeam School, Ayodhya</p>
          <p><strong>Percentage:</strong> 88.8%</p>
        </div>

        <br />
        <hr style={{ width: '50%' }} />
        <br />

        {/* --- 10th Grade --- */}
        <div>
          <h2>Class 10 (High School)</h2>
          <p>Sunbeam School, Ayodhya</p>
          <p><strong>Percentage:</strong> 88.0%</p>
        </div>

        <br />
        <hr style={{ width: '50%' }} />
        <br />

        {/* --- Early Schooling --- */}
        <div>
          <h2>Primary & Middle School (Class 2 to 8)</h2>
          <p>HPMPS Salarpur, Ayodhya</p>
        </div>

        <br />
        <hr style={{ width: '50%' }} />
        <br />

        {/* --- Skills & Learning --- */}
        <div>
          <h2>Current Focus & Skills</h2>
          <p><strong>Languages:</strong> Java (Focusing on Data Structures and Algorithms)</p>
          <p><strong>Technologies:</strong> Exploring Spring Boot and Spring AI</p>
        </div>

      </section>
    </div>
  );
}

export default Education;