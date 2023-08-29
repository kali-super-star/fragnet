import React from "react";
import { CDN } from "../constants";

const Reviews: React.FC = () => {
  return (
    <div className="flex text-center grow">
      <div className="text-center w-full pt-[4.5rem]">
        <h1 className="font-[900] text-white text-[30px] uppercase">
          Excellent
        </h1>
        <div className="flex justify-center my-3 mb-5">
          <img src={`${CDN}images/fourfivestars.png`} />
        </div>
        <span className="block my-2">
          Based on over{" "}
          <a
            className="border-b border-dotted hover:text-white"
            href="https://www.trustpilot.com/review/fragnet.net"
          >
            <strong className="text-white font-bold">125+</strong> verified
            reviews on
          </a>
        </span>
        <a
          className="flex justify-center"
          href="https://www.trustpilot.com/review/fragnet.net"
        >
          <img src={`${CDN}images/games-trustpilot.png`} />
        </a>
      </div>
    </div>
  );
};

export default Reviews;
