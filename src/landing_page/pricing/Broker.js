import React from 'react'

const Broker = () => {
  return (
    <div className='container border-top '>
      <div className='row mt-5 text-center'>
        <div className='col-8'>
          <a href="#" style={{textDecoration:"none",padding:"20px"}}><h3>Brokerage Calculator</h3></a>
          <ul className='text-muted ' style={{lineHeight:"2.5",textAlign:"left",fontSize:"12px"}}>
            <li>Additional charges of ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes,if required, shall be charged ₹20 per contract note. Courier charges apply.  </li>
            <li>For NRI account ,0.5% or ₹100 per executer order for equity (whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
            
            
          </ul>
        </div>
        <div className='col-4'>
          <a href="#" style={{textDecoration:"none",padding:"20px"}}><h3 >List of Charges</h3></a>
        </div>
      </div>
    </div>
   
  )
}

export default Broker