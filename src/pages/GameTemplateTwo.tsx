import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  faInfinity,
  faCalendarAlt,
  faShieldAlt,
  faDatabase,
  faFileAlt,
  faCloudDownloadAlt,
  faHdd,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { Game } from "../types";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PromoContainer from "../components/PromoContainer";
import Footer from "../components/Footer";
import GameLocation from "../components/GameLocation";
import GameFeatures from "../components/GameFeatures";
import GetStarted from "../components/GetStarted";

interface GameTemplateProps {
  game: Game;
}

const iconList: { [key: string]: IconDefinition } = {
  faInfinity: faInfinity,
  faCalendarAlt: faCalendarAlt,
  faShieldAlt: faShieldAlt,
  faDatabase: faDatabase,
  faFileAlt: faFileAlt,
  faCloudDownloadAlt: faCloudDownloadAlt,
  faHdd: faHdd,
};

const GameTemplateTwo: React.FC<GameTemplateProps> = ({ game }) => {
  const discountPercent = 20;
  console.log(game.packages);
  return (
    <div className={"w-full my-0 mx-auto"}>
      <section
        className="relative py-20 pt-48 h-auto pb-0 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${game.background})` }}
      >
        <div className="max-w-7xl my-0 mx-auto px-4 w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          {" "}
          {/* container */}
          <div className="flex flex-wrap mx-[-15px]">
            {" "}
            {/* row */}
            <div className={"flex-grow text-center"}>
              {" "}
              {/* col text-center */}
              <h1
                className={"text-6xl uppercase font-bold my-0 text-neutral-200"}
              >
                {" "}
                {/* uppercase */}
                {game.name}
              </h1>
              <h2
                className={
                  "text-[18px] text-gray-200 mx-auto max-w-4xl leading-7 relative z-10 font-medium mb-32"
                }
              >
                {" "}
                {/* sub-hero-p */}
                {game.description}
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="game-pricing py-20 text-center">
        <div className="max-w-7xl my-0 mx-auto px-4 w-full sm:max-w-md md:max-w-lg lg:max-w-5xl xl:max-w-7xl">
          <div className="text-center">
            <h2 className="mb-2 mt-2 font-bold font-mono uppercase text-3xl text-white inline-block">
              Choose Your Perfect Package
            </h2>
            <div className="bg-red-500 h-1 w-1/4 mx-auto my-2 mb-10"></div>
          </div>
          <div className="flex flex-wrap mx-[-15px] gap-y-4 items-stretch">
            {/* Iterate over game packages */}
            {game.packages.map((pkg, index) => (
              <div
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 relative text-slate-100"
                key={index}
              >
                <div
                  className={`relative rounded overflow-hidden shadow-lg transform hover:-translate-y-4 transition-transform duration-300 border-4 border-slate-800`}
                >
                  {index === 1 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-bl-full">
                      Recommended
                    </span>
                  )}
                  {/* Package Title */}
                  <div className="p-4 bg-slate-800 text-white shadow-md border-red-500 mb-4">
                    <h2 className="font-bold uppercase text-2xl">{pkg.name}</h2>
                    <p className="text-sm text-slate-300">
                      Recommended for {pkg.recommended_players} players
                    </p>
                  </div>
                  {/* Package content */}
                  <small className="font-light text-xl text-slate-400 line-through mr-2 mt-4">
                    € {(pkg.price.eur / (1 - discountPercent / 100)).toFixed(2)}{" "}
                    /month
                  </small>
                  <div className="flex justify-center">
                    <h3 className="text-3xl font-extrabold mt-2 mb-1">
                      € {pkg.price.eur}
                    </h3>
                    <small className="font-medium text-lg text-slate-400 pt-4">
                      /month
                    </small>
                  </div>
                  <div className={"flex justify-center items-center"}>
                    <ul className="pt-2 text-center">
                      {/* Features of the package */}
                      {pkg.features.map((feature, index) => {
                        const [firstWord, ...remainingWords] =
                          feature.name.split(" ");

                        return (
                          <li
                            className="my-1 pb-1 flex items-center"
                            key={index}
                          >
                            <span style={{ width: "24px" }}>
                              <FontAwesomeIcon
                                icon={iconList[feature.icon]}
                                size={"lg"}
                              />
                            </span>
                            <div>
                              <span className={"font-bold ml-4"}>
                                {firstWord}
                              </span>{" "}
                              {/* Space added here */}
                              <span>{remainingWords.join(" ")}</span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <Button
                    color={"red"}
                    text={"Order Now"}
                    className="transition-transform transform hover:scale-105 mb-6"
                  />
                </div>
              </div>
            ))}

            {/* Add Custom Configuration Package */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 text-slate-100">
              <div
                className="pt-10 relative px-8 text-center h-full rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300 bg-center bg-no-repeat"
                style={{
                  background: `url(${game.background}) center center no-repeat`,
                }}
              >
                <h5 className={"text-2xl uppercase font-bold mb-3"}>
                  Custom Configuration
                </h5>
                <p className="text-[16px] text-gray-300 mb-3">
                  Not finding what you're looking for? Customize your package!
                </p>
                <ul className="mb-4 pt-2">
                  <li className="my-1 pb-1">
                    Up to <span className={"font-bold"}>4 CPU Threads</span>
                  </li>
                  <li className="my-1 pb-1">
                    Up to <span className={"font-bold"}>32 GB RAM</span>
                  </li>
                </ul>
                <Button
                  color={"red"}
                  text={"Configure Now"}
                  className="transition-transform transform hover:scale-110 px-5 py-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <PromoContainer />
      <GameFeatures />
      <GameLocation />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default GameTemplateTwo;
