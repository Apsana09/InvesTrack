import React from 'react'

const Awards = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6 p-5'>
          <img src='media/images/largestBroker.svg' alt='Largest Broker' />
          </div> 
        <div className='col-6 p-5'>
          <h1 className='mt-5'>Largest Stock Broker in India</h1>
          <p className='mb-5'>We are the largest stock broker in India with over 5 million customers and a strong presence in over 2000 cities.</p>
          <div className='row'>
            <div className='col-6'>
              <ul>
                <li><p>Future and Options</p></li>
                <li><p>Commodity</p></li>
                <li><p>Currency</p></li>
              </ul>

            </div>
             <div className='col-6'>
              <li><p>Stocks and IPOs</p></li>
              <li><p>Mutual Funds</p></li>
              <li><p>Bonds and securities</p></li>
             </div>

          <img src='media/images/presslogos.png' alt='Award' style={{width:'90%'}} />
          </div>
          </div> 

      </div>
    </div>
  )
}

export default Awards
