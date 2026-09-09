import React from 'react'

const Purpose = () => {
  return (

    <div
      className="container-fluid py-5 mt-5 mb-5"
      style={{ backgroundColor: "#EAF4FF" }}
    >
      <div className="container">

        <div className="text-center mb-5">
          <h2>What we focus on</h2>

          <p className="text-muted mt-3">
            Making investing easier to understand, explore, and track.
          </p>
        </div>

        <div className="row text-center ">

          {/* Understand */}
          <div className="col-4 mt-4">
            <h3 className="fs-4">Understand</h3>

            <p className="text-muted mt-3">
              Turn complex market information into something
              simple and easier to understand.
            </p>
          </div>

          {/* Explore */}
          <div className="col-4 mt-4">
            <h3 className="fs-4">Explore</h3>

            <p className="text-muted mt-3">
              Explore investments, market movements, and
              financial information from one place.
            </p>
          </div>

          {/* Track */}
          <div className="col-4 mt-4">
            <h3 className="fs-4">Track</h3>

            <p className="text-muted mt-3">
              Keep track of your investments and understand
              how your portfolio changes over time.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Purpose;
  