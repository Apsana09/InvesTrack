import React from 'react'

const Hero = () => {
  return (
  <>
  <section className='container-fluid' id="supportHero" >
    <div  className="p-5" id="supportWrapper">
      <h2>Support </h2>
       <a href='#'>Create Ticket</a>
    </div>
    
    <div className='row p-5 ms-5'>
      <div className='col-5 p-5 ms-4'>
        <h1 className='fs-3 mb-3'>How can we help you?</h1>
        <p className='fs-5 '>Search our help center or browse topics to find the answers you need.</p>
        <input placeholder='Eg: how do i open my account...' className='p-3 mb-3 mt-3  ' style={{borderRadius:'10px',border:'none',width:'100%',fontSize:'18px'}}/>
        <br></br>
        <a href='#' style={{marginRight:'10px',}}>Track account opening </a>
        <a href='#'>Intraday margins</a>
      </div>
      <div className='col-1'></div>
      <div className='col-5 p-5 '>
        <h1 className='fs-3 mb-3'>Featured</h1>
        <a href="#">Latest Intraday leverages - MIS & CO</a>
        

      </div>


    </div>
    
  </section>

  </>
  )
}

export default Hero