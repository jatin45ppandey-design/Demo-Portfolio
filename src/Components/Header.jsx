import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <section style={{backgroundColor:'black'}} >
       
  <ul style={{display:'flex',gap:'150px',padding:'10px',margin:'10px',cursor:'pointer',color:'wheat',listStyle:'none',textDecoration: 'none'}}>
    
         <Link to = '/' style={{textDecoration: 'none'}}>
          <li style={{color:'wheat'}}>Home</li>
         </Link>
         <Link to = '/details' style={{textDecoration: 'none'}}>
          <li style={{color:'wheat'}}>Details</li>
         </Link>
         <Link to = '/education' style={{textDecoration: 'none'}}>
          <li style={{color:'wheat'}}>Education</li>
         </Link>
         <Link to = '/projects' style={{textDecoration: 'none'}}>
            <li style={{color:'wheat'}}>Projects </li>

          </Link>
         <Link to = '/certificates' style={{textDecoration: 'none'}}>
          <li style={{color:'wheat'}}>Certificates </li>

         </Link>
          
        </ul>
      </section>
    </div>
  )
}