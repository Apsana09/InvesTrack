import React from 'react'

const Pricing = () => {
  return (
    <div className='container'>
      <div className='row '>
        <div className='col-4 p-5'>
          <h1 className='fs-2'>Unbeatable Pricing</h1>
          <p className='mt-4'>We offer the most competitive pricing in the market, ensuring you get the best value for your investments. Our transparent fee structure means no hidden costs, allowing you to maximize your returns.</p>
          <a href=''style={{textDecoration: 'none'}}>See Pricing <i class='fa fa-long-arrow-right' aria-hidden="true" ></i></a>
        </div>
        <div className='col-2'></div>
        <div className='col-6 p-5'>
          <div className='row text-center'>
            <div className='col p-3 border '>
              <h1 className='mb-3 fs-3'><i class="fa fa-inr" aria-hidden="true"></i> 0 </h1>
              <p>Free equity delivery and
                <br/> direct mutual funds</p>
            </div>
            <div className='col p-3 border'>
              <h1 className='mb-3 fs-3'><i class="fa fa-inr" aria-hidden="true" ></i> 20 </h1>
              <p> Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing