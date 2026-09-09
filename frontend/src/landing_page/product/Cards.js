import React from 'react'

const Cards = () => {
  return (
    
  
    <div className="container mt-5 mb-5 py-5">

      <div className="text-center mb-5">
        <h1>Built for your investment journey</h1>

        <p className="text-muted mt-3 fs-5">
          From discovering opportunities to understanding your portfolio,
          InvesTrack brings essential investment tools together in one place.
        </p>
      </div>

      <div className="row text-center">

        {/* Explore */}
        <div className="col-4 px-4">
          <div className="mb-4">
            <i
              className="fa fa-search"
              style={{
                fontSize: "40px",
                color: "#387ED1"
              }}
            ></i>
          </div>

          <h2 className="fs-4">Explore</h2>

          <p className="text-muted mt-3">
            Discover stocks, mutual funds and ETFs while keeping
            track of the investments that interest you.
          </p>
        </div>


        {/* Analyze */}
        <div className="col-4 px-4">
          <div className="mb-4">
            <i
              className="fa fa-bar-chart"
              style={{
                fontSize: "40px",
                color: "#387ED1"
              }}
            ></i>
          </div>

          <h2 className="fs-4">Analyze</h2>

          <p className="text-muted mt-3">
            Understand your portfolio with a clearer view of
            allocation, gains, losses and overall performance.
          </p>
        </div>


        {/* Plan */}
        <div className="col-4 px-4">
          <div className="mb-4">
            <i
              className="fa fa-bullseye"
              style={{
                fontSize: "40px",
                color: "#387ED1"
              }}
            ></i>
          </div>

          <h2 className="fs-4">Plan</h2>

          <p className="text-muted mt-3">
            Set investment goals, follow your progress and stay
            focused on where you want your investments to go.
          </p>
        </div>

      </div>

      <div className=" text-center mt-5">
        <button
          className="btn btn-primary"
          style={{
            
            
            padding: "12px 28px"
          }}
        >
          Get started with InvesTrack →
        </button>
      </div>

    </div>
  );
};

export default Cards;
  