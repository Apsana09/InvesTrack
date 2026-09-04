import React from "react";

const Hero = () => {
  return (
    <div className="container mb-5 p-5">
      <div className="row text-center">
        <h1 className="mt-5 fs-2">Pricing</h1>
        <p className="fs-5 p-3 mb-5">
          Free equity delivery and ₹
          20 Intraday and F&O trade
        </p>
      </div>

      <div className="row text-center border-top">
        <div className="col-4">
          <img
            src="/media/images/pricing0 (1).svg"
            alt="rupee"
            style={{ width: "90%", padding: "60px" }}
          />
          <div>
            <h2 className="fs-4">Zero on equity delivery</h2>
            <p className="mt-3">
              Keep your long-term investments simple with ₹0 brokerage on equity
              delivery trades.
            </p>
          </div>
        </div>
        <div className="col-4">
          <img
            src="/media/images/intradayTrades.svg"
            alt="rupee"
            style={{ width: "90%", padding: "60px" }}
          />
          <div>
            <h2 className="fs-4">Zero on direct mutual funds</h2>
            <p className="mt-3">
              Invest in direct mutual funds with ₹0 commission, keeping more of
              your money invested.
            </p>
          </div>
        </div>
        <div className="col-4">
          <img
            src="/media/images/intradayTrades.svg"
            alt="rupee"
            style={{ width: "90%", padding: "60px" }}
          />
          <div>
            <h2 className="fs-4">Simple intraday pricing</h2>
            <p className="mt-3">
              Trade intraday and F&O with clear, straightforward pricing and no
              confusing fee structures.
            </p>
          </div>
        </div>
      </div>
       <div className='row text-center mt-5'>
       
        <h1 className='mt-5'>Open an InvesTrack Account</h1>
        <p className="mt-2">Get started with your free InvesTrack account today.</p>
        <button className='p-2 btn btn-primary fs-5 mb-5 mt-2' style={{width: '20%', margin: '0 auto',}}>Sign up Now</button>
      </div>
        
    </div>
  );
};

export default Hero;
