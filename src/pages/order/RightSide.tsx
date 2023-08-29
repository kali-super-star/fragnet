import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { I18n } from "react-redux-i18n";

const RightSide = () => {
  return (
    <div className="sticky top-16 bg-[rgba(14,22,35,0.88)] mt-24 mb-12 px-5 py-8 ml-12 text-center rounded-[9px]">
      <h1 className="text-white text-[24px] uppercase font-[700] text-center">
        Package 1
      </h1>
      <h3 className="text-white text-[18px] uppercase font-[600] text-center mb-3">
        16 GB memory
      </h3>
      <div className="grid grid-cols-2 mt-2">
        <div className="col py-2 text-center border-r-[1px] border-[rgba(255,255,255,0.12)] px-6">
          <strong className="flex items-center text-white justify-center">
            Vanilla
            <div className="ml-1">
              <img src="/question-mark.png" alt="question-mark" />
            </div>
          </strong>
          <span>36-48 Players</span>
        </div>
        <div className="col py-2 text-center px-6">
          <strong className="flex items-center text-white justify-center">
            Modded
            <div className="ml-1">
              <img src="/question-mark.png" alt="question-mark" />
            </div>
          </strong>
          <span>12-16 Players</span>
        </div>
      </div>
      <ul className="pt-4 mx-2 text-start mb-5">
        <li className="py-2 px-5 bg-[#161E2B] mb-1 rounded-t-lg">
          <h5>Server Name:</h5>
          <strong className="text-white">Iron Preator Emerald Shield</strong>
        </li>
        <li className="py-2 px-5 bg-[#161E2B] mb-1">
          <h5>Modpack:</h5>
          <strong className="text-white">Feed The Beast v1.12</strong>
        </li>
        <li className="py-2 px-5 bg-[#161E2B] mb-1">
          <h5>Location:</h5>
          <strong className="flex text-white">
            New York, New York, USA <img className="ml-2" src="/flag-usa.png" alt="USA" />
          </strong>
        </li>
        <li className="py-2 px-5 bg-[#161E2B] mb-1 rounded-b-lg">
          <h5>Additional Services:</h5>
          <strong className="text-white flex justify-between">Premium Support <span>+$2.00/mo</span></strong>
        </li>
      </ul>
      <div className="text-center w-full text-white">
        <div className="flex justify-center mb-4">
          <h3 className="text-3xl font-extrabold mt-2 mb-1">€ 7.95</h3>
          <small className="font-medium text-lg pt-4">/mo</small>
        </div>
        <a
          href="/#"
          className="rounded-md z-50 text-center items-center inline-flex h-[54px] px-[32px] text-[18px] font-[600] bg-[#e90e0e] hover:bg-[#f91d1d] text-white"
        >
          {I18n.t("orderNow")}
          <FontAwesomeIcon icon={faArrowRight} className="ml-3"/>
        </a>
      </div>
    </div>
  );
};

export default RightSide;
