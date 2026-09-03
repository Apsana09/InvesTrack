import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Cards from "./Cards";

const ProductPage = () => {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="/media/images/kite.png"
        productName="InvestDesk"
        productTag="Your investment workspace, all in one place."
        productDescription="Track market movements, explore investments, manage your watchlist and keep an eye on your portfolio through a clean, focused dashboard."
        tryDemo="/try-demo"
        learnMore="/learn-more"
      />
      <RightSection
        productName="LearnTrack"
        productTag="Learn investing, one concept at a time."
        productDescription="From understanding stocks and mutual funds to learning portfolio basics, LearnTrack breaks complex investment concepts into simple, practical lessons."
        tryDemo="/try demo"
        learnMore="/learn more"
        imageURL="/media/images/varsity.png"
      />
      <LeftSection
        imageURL="/media/images/kiteconnect.png"
        productName="InvesTrack API"
        productTag="Connect your investment tools with InvesTrack."
        productDescription="Build integrations and bring investment data into your own applications through simple APIs."
        tryDemo="/try-demo"
        learnMore="/learn-more"
      />
      <RightSection
        productName="LearnTrack"
        productTag="Learn investing, one concept at a time."
        productDescription="From understanding stocks and mutual funds to learning portfolio basics, LearnTrack breaks complex investment concepts into simple, practical lessons."
        tryDemo="/try demo"
        learnMore="/learn more"
        imageURL="/media/images/varsity.png"
      />
      <LeftSection
        imageURL="/media/images/coin.png"
        productName="Portfolio360"
        productTag="See your investments clearly."
        productDescription="Portfolio360 brings your holdings, allocation, gains and investment activity together in one place, helping you understand where your money is invested and how your portfolio is performing."
        tryDemo="/try-demo"
        learnMore="/learn-more"
      />
      <Cards/>
      
    </>
  );
};

export default ProductPage;
