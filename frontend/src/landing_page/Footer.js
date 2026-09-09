import React from 'react'

const Footer = () => {
  return (
    <footer className='border-top mt-5 p-5' style={{ backgroundColor: '#f8f9fa'}}>
    <div className='container ' >
      <div className='row '>
        <img src="media/images/InvesTrack_logo.png" alt="InvesTrack Logo" className='col-2 ' style={{backgroundColor:"#f8f9fa",color:""}} />
        <br></br>
        <p className='text-muted mb-5 mt-3'>A stock trading platform built as a full-stack
web development project.</p>
        <div className='col-4 '>
          <p>QUICK LINKS</p>
          <div className='nav-link'>
          <a href="#" >Home</a>
          <br></br>
          <a href="#">About</a>
          <br></br>
          <a href="#">Dashboard</a>
          <br></br>
          <a href= '#'>Signup</a>
          </div>
        </div>
        <div className='col-4'>
          <p>TECHNOLOGIES</p>
          <div className='nav-link'>
            <a href="#">React</a>
          <br></br>
          <a href="#">Node.js</a> 
          <br></br>
          <a href="#">Express</a>
          <br></br>
          <a href="#" >MongoDB</a>
          </div>
        </div>
        <div className='col-4'>
          <p>CONNECT WITH US</p>
          <div className='nav-link '>
            <a href="#">GitHub</a>
          <br></br>
          <a href="#">LinkedIn</a>
          <br></br>
          <a href="#">Email</a>
          </div>
        </div>
      </div>
    </div>
    <div className='border-top mt-5'></div>
    <div className='container '>
      
        <p className=' text-muted mt-4'>&copy; 2026 InvesTrack. All rights reserved.</p>
        <p className='text-muted '>This project is for educational purposes only and
does not provide real trading or financial advice.</p>
        
      </div>
    
    </footer>
  )
}

export default Footer