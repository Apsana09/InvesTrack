import React from 'react'

const Education = () => {
  return (
    <div className='container'>
      <div className='row m-5'>
        <div className='col-6'>
          <img src='media/images/education.svg' alt='Education' style={{width:'70%', }} />
        </div>
        <div className='col-6 '>   
        <h1 className='fs-2'>Free and open market education </h1>
        <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.s</p>
        <a href=''style={{textDecoration: 'none'}}>Varsity <i class='fa fa-long-arrow-right' aria-hidden="true" ></i></a>
        <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>  
        <a href=''style={{textDecoration: 'none'}}>Trading Q&A <i class='fa fa-long-arrow-right' aria-hidden="true" ></i></a>
        </div>
      </div>
    </div>
  )
}

export default Education