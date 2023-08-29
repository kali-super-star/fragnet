import React from "react";
import { Link } from "react-router-dom";
import { faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { I18n } from "react-redux-i18n";

import DropDown from "./DropDown";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="w-full py-4 bg-[#171c29]">
        <div className="container max-w-[1280px] mx-auto flex flex-wrap justify-center lg:justify-between">
          <div className="flex flex-wrap justify-center">
            <Link to="#" className="px-3">
              <img
                src="https://b-cdn.fragnet.net/images/logo.png"
                alt="Fragnet Logo"
              />
            </Link>
            <div className="px-3 sm:mt-0 mt-2">
              <h2 className="flex flex-wrap justify-center items-center text-white uppercase text-[18px] font-[900]">
                {I18n.t("builtForGamers")}{" "}
                <img
                  className="w-[32px] h-auto m-3"
                  src="/fragnet/gamepad-icon.png"
                  alt="Gamepad"
                />
              </h2>
            </div>
          </div>
          <div className="flex items-center px-7 rounded-md bg-[#292f3a] mr-4">
            <Link to="/fragnet/login" className="text-white font-[500] my-4">
              <FontAwesomeIcon icon={faUser} /> {I18n.t("customerLogin")}
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-[80px] pb-[40px] w-full">
        <div className="container max-w-[1280px] mx-auto grid md:grid-cols-4 grid-cols-1">
          <div className="col px-3 md:text-start text-center">
            <DropDown title={I18n.t("popularGames")}>
              <ul className="pt-4">
                <li className="pt-1 hover:text-red-600">
                  <a href="/fragnet/">MineCraft</a>
                </li>
                <li className="pt-1 hover:text-red-600">
                  <a href="/fragnet/">Valheim</a>
                </li>
                <li className="pt-1 hover:text-red-600">
                  <a href="/fragnet/">Battlefield 4</a>
                </li>
                <li className="pt-1 hover:text-red-600">
                  <a href="/fragnet/">Farming Simulator 2022</a>
                </li>
                <li className="pt-1 hover:text-red-600">
                  <a href="/fragnet/">Rust</a>
                </li>
                <li className="pt-1 hover:text-red-600">
                  <a className="text-[#ff0000]" href="/fragnet/">
                    All Games <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </li>
              </ul>
            </DropDown>
          </div>
          <div className="col px-3 md:text-start text-center">
            <DropDown title={I18n.t("products")}>
              <ul className="pt-4">
                <li className="pt-1 hover:text-red-600">
                  <a href="/fragnet/">{I18n.t("gameServers")}</a>
                </li>
                <li className="pt-1 hover:text-red-600">
                  <a href="/fragnet/">{I18n.t("voiceServers")}</a>
                </li>
                <li className="pt-1 hover:text-red-600">
                  <a href="/fragnet/">{I18n.t("discordBots")}</a>
                </li>
                <li className="pt-1 hover:text-red-600">
                  <a href="/fragnet/">{I18n.t("dedicatedServers")}</a>
                </li>
              </ul>
            </DropDown>
          </div>
          <div className="col px-3 md:text-start text-center">
            <DropDown title={I18n.t("aboutUs")}>
              <ul className="pt-4">
                <li className="pt-1 hover:text-red-600">
                  <a href="/fragnet/">{I18n.t("aboutFragnet")}</a>
                </li>
                <li className="pt-1 hover:text-red-600">
                  <a href="/fragnet/">Careers</a>
                </li>
                <li className="pt-1 hover:text-red-600">
                  <a href="/fragnet/">{I18n.t("whyChoose")}</a>
                </li>
                <li className="pt-1 hover:text-red-600">
                  <a href="/fragnet/">{I18n.t("affiliateProgram")}</a>
                </li>
                <li className="pt-1 hover:text-red-600">
                  <a href="/fragnet/">{I18n.t("contactUs")}</a>
                </li>
                <li className="pt-1 hover:text-red-600 flex md:justify-start justify-center">
                  <span className="bg-[#44d11e] flex w-[5px] h-[5px] mt-[10px] mr-[5px] rounded-full">
                    {" "}
                  </span>
                  <a className="" href="/fragnet/">
                  {I18n.t("liveStatus")}
                  </a>
                </li>
              </ul>
            </DropDown>
          </div>
          <div className="col px-3 md:text-start text-center">
            <DropDown title={I18n.t("support")}>
              <ul className="pt-4">
                <li className="pt-1 hover:text-red-600">
                  <a href="/fragnet/">{I18n.t("contactUs")}</a>
                </li>
                <li className="pt-1 hover:text-red-600">
                  <a href="/fragnet/">{I18n.t("knowledgebase")}</a>
                </li>
                <li className="pt-1 hover:text-red-600">
                  <a href="/fragnet/">{I18n.t("statusPage")}</a>
                </li>
                <li className="pt-1 hover:text-red-600">
                  <a href="/fragnet/">{I18n.t("supportPanel")}</a>
                </li>
              </ul>
            </DropDown>
          </div>
        </div>
      </div>
      <div className="w-full pb-10">
        <div className="container max-w-[1280px] mx-auto px-2">
          <h2 className="font-bold text-white uppercase mb-7 text-center md:text-start">
          {I18n.t("trustedProvider")}
          </h2>
          <ul className="flex flex-wrap justify-center md:justify-start">
            <li className="mr-7">
              <img src="/fragnet/ealogo.png" alt="EaLogo" />
            </li>
            <li className="mr-7">
              <img src="/fragnet/bohemia.png" alt="Bohemia" />
            </li>
            <li className="mr-7">
              <img src="/fragnet/esllogo.png" alt="EslLogo" />
            </li>
            <li className="mr-7">
              <img src="/fragnet/Esportal_logo2.png" alt="Esportal" />
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full">
        <div className="container max-w-[1280px] mx-auto py-8 px-2 flex-wrap md:justify-between justify-center flex border-t border-[#ffffff1f]">
          <div className="text-center md:mb-0 mb-5">
            © 2023 Fragnet. {I18n.t("allRightsReserved")}
          </div>
          <div className="flex flex-wrap justify-center">
            <ul className="flex md:mb-0 mb-5">
              <li className="mr-5">
                <a href="/fragnet/page/tos" className="hover:text-red-600">
                {I18n.t("termsOfService")}
                </a>
              </li>
              <li>
                <a href="/fragnet/page/privacy" className="hover:text-red-600">
                {I18n.t("privacyPolicy")}
                </a>
              </li>
            </ul>
            <ul className="flex">
              <li className="px-2">
                <a
                  href="https://www.facebook.com/pages/Fragnetnet-Game-Hosting-Solutions/145744278774790"
                  className="bg-[#171c29] py-2 px-3 rounded-full hover:text-red-600"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://twitter.com/fragnetwork"
                  className="bg-[#171c29] py-2 px-2.5 rounded-full hover:text-red-600"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://discord.fragnet.net"
                  className="bg-[#171c29] py-2 px-2 rounded-full hover:text-red-600"
                >
                  <FontAwesomeIcon icon={faDiscord} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
