import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
      <div>
      <section style={{backgroundColor:'black'}} >
       
  <ul style={{display:'flex',gap:'150px',padding:'10px',margin:'10px',cursor:'pointer',color:'wheat',listStyle:'none',textDecoration: 'none'}}>
    
         <Link to = 'https://github.com/jatin45ppandey-design' style={{textDecoration: 'none'}}>
          <li style={{color:'wheat'}}>Github</li>
         </Link>
         <Link to = 'https://www.linkedin.com/in/jatin-pandey-pandey-a1654237a/' style={{textDecoration: 'none'}}>
          <li style={{color:'wheat'}}>Linkedin</li>
         </Link>
         <Link to = 'https://leetcode.com/u/Jatin45_Pandey/' style={{textDecoration: 'none'}}>
          <li style={{color:'wheat'}}>Leetcode</li>
         </Link>
         <Link to = 'https://www.instagram.com/jatin45p/' style={{textDecoration: 'none'}}>
            <li style={{color:'wheat'}}>Whatsapp </li>

          </Link> 
        </ul>
      </section>
    </div>
    
  )
}

export default Footer