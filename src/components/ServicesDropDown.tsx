import React, { useState } from "react";
import { I18n } from "react-redux-i18n";

const ServicesDropDown: React.FC = () => {
  const [isMobileServicesClicked, setIsMobileServicesClicked] =
    useState<boolean>(false);

  return (
    <div
      className={`flex flex-col items-center w-[80%] #171c29 ${
        isMobileServicesClicked && "bg-[#171c28] rounded-md"
      }`}
    >
      <li className="inline-block px-[15px] py-[6px]">
        <div
          className="flex flex-row items-center"
          onClick={() => setIsMobileServicesClicked(!isMobileServicesClicked)}
        >
          <div
            className={`font-proxima-nova font-medium text-[16px] text-${
              isMobileServicesClicked
                ? "red-700 font-bold bg-[#171c28]"
                : "white font-medium"
            }`}
          >
            {I18n.t('services')}
          </div>
          <div className="w-4 h-4 transform rotate-270 ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`text-${
                isMobileServicesClicked
                  ? "red-700 font-bold"
                  : "white font-medium"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </li>
      {isMobileServicesClicked && (
        <div className="flex flex-col items-center">
          <li className="inline-block px-[15px] py-[6px]">
            <a
              href="https://fragnet.net/page/discord-bots"
              className="font-proxima-nova font-medium text-[16px] text-white"
            >
              {I18n.t('discordBots')} <span className="text-[#e90e0e]">{I18n.t('soon')}</span>
            </a>
          </li>
          <li className="inline-block px-[15px] py-[6px]">
            <a
              href="https://fragnet.net/page/voiceservers"
              className="font-proxima-nova font-medium text-[16px] text-white"
            >
              {I18n.t('voiceServers')}
            </a>
          </li>
          <li className="inline-block px-[15px] py-[6px]">
            <a
              href="/"
              className="font-proxima-nova font-medium text-[16px] text-white"
            >
              {I18n.t('dedicatedServers ')}<span className="text-[#e90e0e]">{I18n.t('soon')}</span>
            </a>
          </li>
        </div>
      )}
    </div>
  );
};

export default ServicesDropDown;
