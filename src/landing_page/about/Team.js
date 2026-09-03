import React from "react";

const Team = () => {
  return (
    <div className="container">
      
      <div className="row ms-5">
        
          <h1 className="fs-2 text-center mb-5 p-5">
          The idea behind InvesTrack
        </h1>
        <hr></hr>
        <div className="col-5 mt-4 ms-4">
        <h2 className="fs-5 mt-4">
          InvesTrack started with a simple thought - investing shouldn't feel
          complicated.
        </h2>
        <p className="mt-3 text-muted">
          As financial platforms continue to bring more information to
          investors, understanding what actually matters can sometimes become
          harder. InvesTrack was created as an attempt to bring that information
          together in a way that feels clear, organized, and easy to explore.
        </p>
        <p className="text-muted">
          This project combines my interest in web development, financial
          technology, and problem-solving to build something that goes beyond
          just a collection of pages.
        </p>
        <p className="text-muted">
          Every feature in InvesTrack is an opportunity to learn, experiment,
          and improve — from designing the interface to thinking about how users
          interact with financial information.
        </p>
        <p className="text-muted">
          It’s not just about building an investment platform. It’s about
          learning how technology can make complex ideas feel a little simpler.
        </p>
        </div>
        <div className="col-2"></div>
          <div className="col-4 mt-5 p-1 ms-3 ">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/022/659/646/small_2x/3d-growth-stock-diagram-financial-graph-isolated-on-transparent-background-business-candlestick-chart-investment-market-trade-exchange-analysis-and-economy-finance-report-png.png" alt="Stock Market" style={{ width: '100%',}}/>
        </div>
        
      </div>
    </div>
  );
};

export default Team;
