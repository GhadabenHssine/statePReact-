import React from 'react'
import "./nav.css"

const NavP = () => {
    return (
        <nav>
            <div className='logo'>Folio <b>.</b></div>
            <ul className='navItems'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Skils</a></li>


            </ul>
            <div className='links'>
                <a href="https://github.com/GhadabenHssine">  <i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/ghada-ben-hssine-7a5372242">   <i className="fa-brands fa-linkedin"></i></a>


            </div>

        </nav>
    )
}

export default NavP