import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row text-center mt-5 mb-5 ">
        <h1 className="fs-2 p-4">
          Invest with clarity.<br></br> Grow with confidence.
        </h1>
      </div>

      <div className="row border-top ms-5">
        
        <div className="col-5 mt-5 p-4 ms-4">
          <p>
            At InvesTrack, we believe investing should be simple, accessible,
            and empowering.
          </p>
          <p>
            Financial markets can often feel complex, filled with numbers,
            charts, and information that can be difficult to navigate.
          </p>
          <p>
            Our goal is to simplify that experience and give investors a clear
            view of the information that matters.
          </p>
        </div>
        <div className="col-1"></div>
        
        <div className="col-5 mt-5 p-4 ">
          <p>
            InvesTrack brings investment tools, market insights, and portfolio
            tracking together in one seamless platform.
          </p>
          <p>
            We’re building an experience that helps users explore the market,
            understand their investments, and stay informed without unnecessary
            complexity.
          </p>
          <p>
            Whether you're discovering investing for the first time or keeping a
            closer eye on your portfolio, InvesTrack is designed to support you
            throughout your journey.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
