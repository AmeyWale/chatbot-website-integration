import React from 'react'

function Header() {
  return (
    <header className="header">
        <div className="header-container">
          {/* <h1 className="logo">Company Name</h1> */}
          <img src="/clgLogo.png" alt="Company Logo" className="logo" />
          <nav className="navigation">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#aboutUs">About Us</a></li>
              <li><a href="#academics">Academics</a></li>
              <li><a href="#examCell">Exam Cell</a></li>
              <li><a href="#research">Research </a></li>
              <li><a href="#department">Department</a></li>
              <li><a href="#admission">Admission</a></li>
              <li><a href="#campusLife">Campus Life</a></li>
              <li><a href="#facilities">Facilities</a></li>
              <li><a href="#placement">Placement</a></li>
              <li><a href="#eOffice">e-office</a></li>
              <li><a href="#career">Career</a></li>
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default Header