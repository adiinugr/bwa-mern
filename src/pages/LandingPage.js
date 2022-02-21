import React, { useRef } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";

import landingPageData from "json/landingPage.json";

export default function LandingPage(props) {
  const refMostPicked = useRef();

  return (
    <>
      <Header {...props} />
      <Hero refMostPicked={refMostPicked} data={landingPageData.hero} />
      <MostPicked
        refMostPicked={refMostPicked}
        data={landingPageData.mostPicked}
      />
      <Categories data={landingPageData.categories} />
      <Testimony data={landingPageData.testimonial} />
    </>
  );
}
