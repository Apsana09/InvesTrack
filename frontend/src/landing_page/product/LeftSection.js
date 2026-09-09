import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productTag,
  productDescription,
  tryDemo,
  learnMore,
}) => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-6">
          <img src={imageURL} style={{ width: '80%',padding:"20px" ,marginLeft:"5%"}} />
        </div>
        <div className="col-5 mt-5 p-4 ms-4">
          <h1>{productName}</h1>
          <h3 className="text-muted mt-4 fs-5">{productTag}</h3>
          <p className="mt-4">{productDescription}</p>
          <div><a href={tryDemo}>Try Demo</a>
          <a href={learnMore} style={{ marginLeft: '10px' }}>Learn More</a></div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
