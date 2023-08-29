import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { I18n } from "react-redux-i18n";

const News: React.FC = () => {
  return (
    <div className="w-full md:w-full lg:w-2/3 px-3">
      <h1 className="mb-4 md:text-[36px] text-[30px] uppercase font-[900] text-white md:text-start text-center">
        {I18n.t("latestNews")}
      </h1>
      <div className="flex md:flex-row flex-col p-3 rounded-md bg-[#171c29] mb-4">
        <div className="flex items-center justify-center">
          <span
            className={
              "text-[13px] bg-[#212737] font-bold bg-slate-800 text-white border border-[#2a3043] border-slate-700 rounded px-3 h-7 inline-block float-left leading-6"
            }
          >
            Thu, 01 Dec 2022 01:40:00 +0100
          </span>
        </div>
        <div className="flex pl-6 pr-4 items-center justify-center md:py-0 py-2">
          Become a Fragnetian today!
        </div>
        <div className="flex grow md:justify-end justify-center md:pt-0 pt-2">
          <Link
            className="rounded pt-1 text-[13px] bg-[#e90e0e] hover:bg-[#f91d1d] text-white px-3 font-[900]"
            to={"https://clients.fragnet.net"}
          >
            {I18n.t("read")} <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
      </div>
      <div className="flex md:flex-row flex-col p-3 rounded-md bg-[#171c29] mb-4">
        <div className="flex items-center justify-center">
          <span
            className={
              "text-[13px] bg-[#212737] font-bold bg-slate-800 text-white border border-[#2a3043] border-slate-700 rounded px-3 h-7 inline-block float-left leading-6"
            }
          >
            Thu, 01 Dec 2022 01:40:00 +0100
          </span>
        </div>
        <div className="flex pl-6 pr-4 items-center text-center justify-center md:py-0 py-2">
          Become a Fragnetian tomorrow!
        </div>
        <div className="flex grow md:justify-end justify-center md:pt-0 pt-2">
          <Link
            className="rounded pt-1 text-[13px] bg-[#e90e0e] hover:bg-[#f91d1d] text-white px-3 font-[900]"
            to={"https://clients.fragnet.net"}
          >
            {I18n.t("read")} <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
      </div>
      <div className="flex md:flex-row flex-col p-3 rounded-md bg-[#171c29] mb-4">
        <div className="flex items-center justify-center">
          <span
            className={
              "text-[13px] bg-[#212737] font-bold bg-slate-800 text-white border border-[#2a3043] border-slate-700 rounded px-3 h-7 inline-block float-left leading-6"
            }
          >
            Thu, 01 Dec 2022 01:40:00 +0100
          </span>
        </div>
        <div className="flex pl-6 pr-4 items-center text-center justify-center md:py-0 py-2">
          Become a Fragnetian tomorrow!
        </div>
        <div className="flex grow md:justify-end justify-center md:pt-0 pt-2">
          <Link
            className="rounded pt-1 text-[13px] bg-[#e90e0e] hover:bg-[#f91d1d] text-white px-3 font-[900]"
            to={"https://clients.fragnet.net"}
          >
            {I18n.t("read")} <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
