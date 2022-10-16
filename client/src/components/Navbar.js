import React from 'react'
import { Link } from 'react-router-dom'
import '../res/nav.css'

function Navbar() {
  return (
    <>
     <header>
        
        <a href="#" className="logo">Jua.KE</a>
    
        <nav className="navbar">
          <ul>
             <li><Link to={"/"} >Home</Link></li>
             
             <li><Link to={"/"} >today's special</Link> </li>

             <li><Link to={"/"} >contact us</Link></li>

              <li><Link to={"/add-story"} > Add Story</Link> </li> 
              
                  <li><Link to={"/login"} >Login</Link>
                  <ul>
                           <li> <Link to={"/"} >logout</Link></li>
                         </ul>
                  </li>
           </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar