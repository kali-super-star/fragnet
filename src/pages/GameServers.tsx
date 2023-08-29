import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { I18n } from "react-redux-i18n";
import Isotope from "isotope-layout";
import classNames from "classnames";

import Footer from "../components/Footer";
import GameLocation from "../components/GameLocation";
import GameFeatures from "../components/GameFeatures";
import { CDN } from "../constants";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const GameServers: React.FC = () => {
  // init one ref to store the future isotope object
  const isotope = useRef<Isotope | null>();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState("*");

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
    });
    // cleanup
    return () => isotope.current?.destroy();
  }, []);

  // handling filter key change
  useEffect(() => {
    if (filterKey === "*") isotope.current?.arrange({ filter: `*` });
    else isotope.current?.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key: string) => () => setFilterKey(key);

  return (
    <div className={"w-full my-0 mx-auto"}>
      <div
        className="relative py-20 pt-48 h-auto pb-0 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url("/fragnet/bg-games.png")` }}
      >
        <div className="max-w-7xl my-0 mx-auto px-4 w-full">
          <div className="flex flex-wrap mx-[-15px]">
            <div className={"flex-grow text-center"}>
              <h1
                className={
                  "md:text-6xl text-[40px] uppercase font-bold my-0 text-neutral-200"
                }
              >
                {I18n.t("gameServers")}
              </h1>
              <h2
                className={
                  "md:text-[30px] text-[24px] text-white uppercase font-[900] mx-auto px-4 relative z-10"
                }
              >
                SUPER FAST. SECURE. AND RELIABLE.
              </h2>
            </div>
          </div>
        </div>
        <div className="flex text-center grow">
          <div className="text-center w-full inline-flex items-center justify-center flex-wrap pt-[7.5rem]">
            <div className="flex mx-5 flex-wrap justify-center">
              <h1 className="font-[900] text-white text-[24px] uppercase">
                Excellent
              </h1>
              <div className="flex justify-center w-[150px] md:ml-5 mx-5 h-[28px]">
                <img
                  src={`${CDN}images/fourfivestars.png`}
                  className=""
                  alt="img"
                />
              </div>
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
              <img
                src={`${CDN}images/games-trustpilot.png`}
                className="h-[24px] ml-5"
                alt="img"
              />
            </a>
          </div>
        </div>
        <div className="container max-w-[1280px] mt-4 rounded-md bg-[#00000099] mx-auto">
          <div className="grid lg:grid-cols-3 grid-cols-1 w-full m-0 p-0">
            <div className="col col-span-1 py-[20px] px-[22px] border-r-2 border-[#101522]">
              <h5 className="text-[13px] pb-[8px] text-white font-[700] uppercase">
                Find your game
              </h5>
              <div className="inline-flex items-center">
                <FontAwesomeIcon
                  className="font-[900] text-[#727681]"
                  icon={faSearch}
                />
                <input
                  type="text"
                  className="ml-2 text-[#a7aebd] text-[16px] px-[2px] py-[1px] bg-[#00000000] outline-none w-[250px]"
                  placeholder="Enter your game server here"
                />
              </div>
            </div>
            <div className="col col-span-2 p-[20px]">
              <h5 className="text-[13px] pb-[8px] text-white font-[700] uppercase">
                Filter by game type
              </h5>
              <ul className="inline-flex items-center flex-wrap">
                <li
                  className={classNames(
                    "mr-2 text-[#aab0be] px-[12px] py-[2px] text-[15px] font-[600] rounded-[3px] cursor-pointer mb-3",
                    filterKey === "*"
                      ? "bg-[#e90e0e] text-white"
                      : "bg-[#292f3a]"
                  )}
                  onClick={handleFilterKeyChange("*")}
                >
                  All Games
                </li>
                <li
                  className={classNames(
                    "mr-2 text-[#aab0be] px-[12px] py-[2px] text-[15px] font-[600] rounded-[3px] cursor-pointer mb-3",
                    filterKey === "popular"
                      ? "bg-[#e90e0e] text-white"
                      : "bg-[#292f3a]"
                  )}
                  onClick={handleFilterKeyChange("popular")}
                >
                  Popular
                </li>
                <li
                  className={classNames(
                    "mr-2 text-[#aab0be] px-[12px] py-[2px] text-[15px] font-[600] rounded-[3px] cursor-pointer mb-3",
                    filterKey === "fps"
                      ? "bg-[#e90e0e] text-white"
                      : "bg-[#292f3a]"
                  )}
                  onClick={handleFilterKeyChange("fps")}
                >
                  FPS
                </li>
                <li
                  className={classNames(
                    "mr-2 text-[#aab0be] px-[12px] py-[2px] text-[15px] font-[600] rounded-[3px] cursor-pointer mb-3",
                    filterKey === "survival"
                      ? "bg-[#e90e0e] text-white"
                      : "bg-[#292f3a]"
                  )}
                  onClick={handleFilterKeyChange("survival")}
                >
                  Survival
                </li>
                <li
                  className={classNames(
                    "mr-2 text-[#aab0be] px-[12px] py-[2px] text-[15px] font-[600] rounded-[3px] cursor-pointer mb-3",
                    filterKey === "sandbox"
                      ? "bg-[#e90e0e]  text-white"
                      : "bg-[#292f3a]"
                  )}
                  onClick={handleFilterKeyChange("sandbox")}
                >
                  Sandbox
                </li>
                <li
                  className={classNames(
                    "mr-2 text-[#aab0be] px-[12px] py-[2px] text-[15px] font-[600] rounded-[3px] cursor-pointer mb-3",
                    filterKey === "simulation"
                      ? "bg-[#e90e0e] text-white"
                      : "bg-[#292f3a]"
                  )}
                  onClick={handleFilterKeyChange("simulation")}
                >
                  Simulation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-[1280px] py-12">
        <div className="grid grid-cols-4 filter-container">
          <div className="col px-3 filter-item xl:w-1/4 lg:w-1/3 w-1/2 sandbox">
            <div
              className="rounded-xl md:h-[180px] h-[150px] w-full mb-5 p-[18px] hover:scale-[.97] duration-200 group"
              style={{ background: `url('/fragnet/gamelist/game-7d2d.png') 0 0/cover` }}
            >
              <h1 className="md:text-[16px] text-[12px] font-[600] font-[600] italic text-white uppercase">
                7 Days to die
              </h1>
              <span className="px-[8px] py-[2px] text-sm font-bold rounded bg-black/80 group-hover:bg-[#e90e0e] group-hover:text-white">
                Starting from €5.98
              </span>
            </div>
          </div>
          <div className="col px-3 filter-item xl:w-1/4 lg:w-1/3 w-1/2 popular survival">
            <div
              className="rounded-xl md:h-[180px] h-[150px] w-full mb-5 p-[18px] hover:scale-[.97] duration-200 group"
              style={{
                background: `url('/fragnet/gamelist/game-conan.png') 0 0/cover`,
              }}
            >
              <h1 className="md:text-[16px] text-[12px] font-[600] italic text-white uppercase">
                Conan Exiles
              </h1>
              <span className="px-[8px] py-[2px] text-sm font-bold rounded bg-black/80 group-hover:bg-[#e90e0e] group-hover:text-white">
                Starting from €5.98
              </span>
            </div>
          </div>
          <div className="col px-3 filter-item xl:w-1/4 lg:w-1/3 w-1/2 popular">
            <div
              className="rounded-xl md:h-[180px] h-[150px] w-full mb-5 p-[18px] hover:scale-[.97] duration-200 group"
              style={{ background: `url('/fragnet/gamelist/game-ark.png') 0 0/cover` }}
            >
              <h1 className="md:text-[16px] text-[12px] font-[600] italic text-white uppercase">
                Ark: survival evolved
              </h1>
              <span className="px-[8px] py-[2px] text-sm font-bold rounded bg-black/80 group-hover:bg-[#e90e0e] group-hover:text-white">
                Starting from €5.98
              </span>
            </div>
          </div>
          <div className="col px-3 filter-item xl:w-1/4 lg:w-1/3 w-1/2 sandbox">
            <div
              className="rounded-xl md:h-[180px] h-[150px] w-full mb-5 p-[18px] hover:scale-[.97] duration-200 group"
              style={{ background: `url('/fragnet/gamelist/game-arma.png') 0 0/cover` }}
            >
              <h1 className="md:text-[16px] text-[12px] font-[600] italic text-white uppercase">
                Arma 3{" "}
              </h1>
              <span className="px-[8px] py-[2px] text-sm font-bold rounded bg-black/80 group-hover:bg-[#e90e0e] group-hover:text-white">
                Starting from €5.98
              </span>
            </div>
          </div>
          <div className="col px-3 filter-item xl:w-1/4 lg:w-1/3 w-1/2 survival">
            <div
              className="rounded-xl md:h-[180px] h-[150px] w-full mb-5 p-[18px] hover:scale-[.97] duration-200 group"
              style={{ background: `url('/fragnet/gamelist/game-bf2.png') 0 0/cover` }}
            >
              <h1 className="md:text-[16px] text-[12px] font-[600] italic text-white uppercase">
                BATTLEFIELD BAD COMPANY 2
              </h1>
              <span className="px-[8px] py-[2px] text-sm font-bold rounded bg-black/80 group-hover:bg-[#e90e0e] group-hover:text-white">
                Starting from €5.98
              </span>
            </div>
          </div>
          <div className="col px-3 filter-item xl:w-1/4 lg:w-1/3 w-1/2 popular survival">
            <div
              className="rounded-xl md:h-[180px] h-[150px] w-full mb-5 p-[18px] hover:scale-[.97] duration-200 group"
              style={{ background: `url('/fragnet/gamelist/game-bf3.png') 0 0/cover` }}
            >
              <h1 className="md:text-[16px] text-[12px] font-[600] italic text-white uppercase">
                7 Days to die
              </h1>
              <span className="px-[8px] py-[2px] text-sm font-bold rounded bg-black/80 group-hover:bg-[#e90e0e] group-hover:text-white">
                Starting from €5.98
              </span>
            </div>
          </div>
          <div className="col px-3 filter-item xl:w-1/4 lg:w-1/3 w-1/2 fps simulation">
            <div
              className="rounded-xl md:h-[180px] h-[150px] w-full mb-5 p-[18px] hover:scale-[.97] duration-200 group"
              style={{ background: `url('/fragnet/gamelist/game-bf4.png') 0 0/cover` }}
            >
              <h1 className="md:text-[16px] text-[12px] font-[600] italic text-white uppercase">
                BATTLEFIELD 4
              </h1>
              <span className="px-[8px] py-[2px] text-sm font-bold rounded bg-black/80 group-hover:bg-[#e90e0e] group-hover:text-white">
                Starting from €5.98
              </span>
            </div>
          </div>
          <div className="col px-3 filter-item xl:w-1/4 lg:w-1/3 w-1/2">
            <div
              className="rounded-xl md:h-[180px] h-[150px] w-full mb-5 p-[18px] hover:scale-[.97] duration-200 group"
              style={{
                background: `url('/fragnet/gamelist/game-minecraft.png') 0 0/cover`,
              }}
            >
              <h1 className="md:text-[16px] text-[12px] font-[600] italic text-white uppercase">
                MineCraft
              </h1>
              <span className="px-[8px] py-[2px] text-sm font-bold rounded bg-black/80 group-hover:bg-[#e90e0e] group-hover:text-white">
                Starting from €5.98
              </span>
            </div>
          </div>
          <div className="col px-3 filter-item xl:w-1/4 lg:w-1/3 w-1/2 fps">
            <div
              className="rounded-xl md:h-[180px] h-[150px] w-full mb-5 p-[18px] hover:scale-[.97] duration-200 group"
              style={{ background: `url('/fragnet/gamelist/game-csgo.png') 0 0/cover` }}
            >
              <h1 className="md:text-[16px] text-[12px] font-[600] italic text-white uppercase">
                Counter-strike:go
              </h1>
              <span className="px-[8px] py-[2px] text-sm font-bold rounded bg-black/80 group-hover:bg-[#e90e0e] group-hover:text-white">
                Starting from €5.98
              </span>
            </div>
          </div>
          <div className="col px-3 filter-item xl:w-1/4 lg:w-1/3 w-1/2">
            <div
              className="rounded-xl md:h-[180px] h-[150px] w-full mb-5 p-[18px] hover:scale-[.97] duration-200 group"
              style={{ background: `url('/fragnet/gamelist/game-dayz.png') 0 0/cover` }}
            >
              <h1 className="md:text-[16px] text-[12px] font-[600] italic text-white uppercase">
                dayz standalone
              </h1>
              <span className="px-[8px] py-[2px] text-sm font-bold rounded bg-black/80 group-hover:bg-[#e90e0e] group-hover:text-white">
                Starting from €5.98
              </span>
            </div>
          </div>
          <div className="col px-3 filter-item xl:w-1/4 lg:w-1/3 w-1/2 popular fps">
            <div
              className="rounded-xl md:h-[180px] h-[150px] w-full mb-5 p-[18px] hover:scale-[.97] duration-200 group"
              style={{ background: `url('/fragnet/gamelist/game-fs19.png') 0 0/cover` }}
            >
              <h1 className="md:text-[16px] text-[12px] font-[600] italic text-white uppercase">
                farming simulator 2019
              </h1>
              <span className="px-[8px] py-[2px] text-sm font-bold rounded bg-black/80 group-hover:bg-[#e90e0e] group-hover:text-white">
                Starting from €5.98
              </span>
            </div>
          </div>
        </div>
      </div>
      <GameFeatures />
      <GameLocation />
      <Footer />
    </div>
  );
};

export default GameServers;
