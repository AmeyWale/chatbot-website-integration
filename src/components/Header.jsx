import React from 'react'

function Header() {
  return (
    <header className="header">
        <div className="header-container">
          <h1 className="logo">Company Name</h1>
          <nav className="navigation">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default Header