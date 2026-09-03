import React from 'react'

const Hero = () => {
  return (
     <div style={{ backgroundColor: "#EAF4FF" }} className="p-5 mb-5">
      
     <div className='container p-4 mb-4'>
      <div className='row text-center'>
       
        <h1 className='mt-3 '>Products</h1>
        <h2 className='text-muted mt-3 fs-4'>Invest smarter. Track every move.</h2>
        <p className='text-muted mt-2 fs-5'>Explore tools designed to help you understand your investments, <br></br>follow market movements, and make more informed decisions.</p>
        <p className='text-muted mt-3 '>Explore our 
          <a href=''style={{textDecoration: 'none'}}> InvesTrack tools <i class='fa fa-long-arrow-right' aria-hidden="true" ></i></a></p>
       
      </div>
    </div>
    </div>
    
  )
}

export default Hero