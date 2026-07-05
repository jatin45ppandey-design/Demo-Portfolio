import React from 'react';
import zeal from '../assets/zeal.png';
import rr from '../assets/rr.png';
import gen from '../assets/gen.png';




function Certificates() {
  return (
    <div>
      <section style={{ textAlign: 'center' }}>
        
        <h1>My Certificates</h1>
        <br />

        {/* --- Certificate 1 --- */}
        <div>
          
          <img src={gen} alt="AI Certificate" width="650px" />
         
          <h2>Generative AI Essentials</h2>
        </div>

        <br /><br /> 

        {/* --- Certificate 2 --- */}
        <div>
          <img src={zeal} width="650px" />
          <h2>1st Position - Volleyball</h2>
        </div>

        <br /><br />

        {/* --- Certificate 3 --- */}
        <div>
          <img src={rr} alt="Second Place Volleyball" width="650px" />
          <h2>2nd Position - Volleyball (Boys)</h2>
        </div>

      </section>
    </div>
  );
}

export default Certificates;