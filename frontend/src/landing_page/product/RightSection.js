import React from 'react'

const RightSection = ( {productName, productTag, productDescription, tryDemo, learnMore,imageURL}) => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className="col-5 mt-5 p-5 ms-4 ">
          <h1>{productName}</h1>
          <h3 className="text-muted mt-4 fs-5">{productTag}</h3>
          <p className="mt-4">{productDescription}</p>
          <div><a href={tryDemo}>Try Demo</a>
          <a href={learnMore} style={{ marginLeft: '10px' }}>Learn More</a></div>
        </div>
        <div className="col-6">
          <img src={imageURL} style={{ width: '80%',padding:"20px",marginLeft:"15%"}} />
        </div>
      </div>
    </div>
  )
}

export default RightSection