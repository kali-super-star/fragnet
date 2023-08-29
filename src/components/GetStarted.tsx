import React from "react";
import { I18n } from "react-redux-i18n";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const GetStarted: React.FC = () => {
  return (
    <div
      className="w-full flex justify-center py-[88px]"
      style={{
        background: "url('/section-divider.png') top center no-repeat",
      }}
    >
      <div className="container flex max-w-[1280px]">
        <div className="md:w-1/2 w-full pl-4">
          <div className="text-start pb-10">
            <h1 className="mb-4 md:text-[36px] text-[30px] uppercase font-[900] text-white text-center md:text-start">
              {I18n.t("readyToOrder")}
            </h1>
            <p className="max-w-[700px] text-[18px] md:text-start text-center">
              {I18n.t("customizedSolutions")}
            </p>
          </div>
          <div className="xl:w-3/4 lg:w-5/6 grid md:grid-cols-4 grid-cols-2 mx-auto"></div>
          <div className="flex justify-start items-center">
            <Link
              to="/register"
              className="rounded-md z-50 text-center md:mx-0 mx-auto items-center flex h-[48px] px-[24px] text-[16px] font-[800] bg-[#e90e0e] text-white hover:bg-[#f91d1d] text-white"
            >
              {I18n.t("getStarted1")}
            </Link>
            <Link
              to="submitticket"
              className="md:block hidden text-white ml-5 hover:text-red-600 font-bold"
            >
              <FontAwesomeIcon className="mr-3" icon={faChevronCircleLeft} />
              {I18n.t("backToAllGames")}
            </Link>
          </div>
          <div className="flex justify-center md:justify-start">
            <span className="text-[14px]">
              <FontAwesomeIcon icon={faClock} className="mr-1 mt-5" />
              {I18n.t("moneybackGuarantee")}
            </span>
          </div>
        </div>
        <div
          className="w-1/2 md:flex hidden justify-center items-center h-[300px]"
          style={{
            background: `url('/button-lines.png') center center no-repeat`,
          }}
        >
          <div className="flex items-end mt-8">
            <sup className="text-white text-[66px]">€0.8</sup>
            <span className="text-[25px] text-white">/slot</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
