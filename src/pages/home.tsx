import React, { useEffect, useState } from "react";

import { Game, Location } from "../types";
import { fetchData, fetchLocations } from "../utils";
import News from "../components/News";
import Reviews from "../components/Reviews";
import Carousel from "../components/Carousel";
import ReviewCarousel from "../components/ReviewCarousel";
import Features from "../components/Features";
import PromoContainer from "../components/PromoContainer";
import Locations from "../components/Location";
import Support from "../components/Service";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    fetchData("/games").then(setGames);
    fetchLocations().then(setLocations);
    document.title = "Premium Server Hosting | Built for Gamers";
  }, []);

  return (
    <div>
      <Carousel games={games} />
      <div className="w-full flex justify-center pt-[88px]">
        <div className="container max-w-[1280px] flex flex-wrap">
          <News />
          <Reviews />
        </div>
      </div>
      <div className="mt-32">
        <ReviewCarousel />
      </div>
      <Features />
      <PromoContainer />
      <Locations />
      <Support />
      <Footer />
    </div>
  );
};

export default HomePage;
