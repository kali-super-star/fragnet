import React, { useState } from "react";
import styled from "styled-components";
import { I18n, setLocale } from "react-redux-i18n";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { Link } from "react-router-dom";

import VerticalMenu from "./VirtcalDropdownMenu";
import ServicesDropDown from "./ServicesDropDown";

const HideMenu = styled.div`
  display: block;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const BottomOverlay = styled.div`
  position: absolute;
  padding: 0 20px;
  bottom: 28px;
  text-align: center;
  left: 0;
  right: 0;
  width: 100%;
`;

const OrderButton = styled.div`
  float: right;
  padding: 0;
  width: 48%;
`;

const OutlineWhite = styled.div`
  width: 48%;
  float: left;
`;

interface LangMenu {
  code: string;
  flag: string;
  name: string;
}

const Navbar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  const locale = localStorage.getItem("locale")
    ? localStorage.getItem("locale")
    : "en";
  const dispatch: AppDispatch = useDispatch();

  const localeData = [
    { code: "sw", flag: "/flag-sweden.png", name: "Swedish" },
    { code: "en", flag: "/flag-usa.png", name: "English" },
    { code: "es", flag: "/flag-spain.png", name: "Español" },
    { code: "ru", flag: "/flag-russia.png", name: "Русский" },
    { code: "nl", flag: "/flag-netherlands.png", name: "Dutch" },
    { code: "pl", flag: "/flag-poland.png", name: "Polski" },
    { code: "de", flag: "/flag-germany.png", name: "Deutsch" },
    { code: "fr", flag: "/flag-france.png", name: "Français" },
  ];

  let langMenu: LangMenu = { code: "en", flag: "/usa.png", name: "English" };

  localeData.forEach((e) => {
    if (e.code === locale) langMenu = e;
  });

  const genericHamburgerLine = `h-[3px] w-[28px] my-[4.5px] rounded-full transition ease transform duration-300 `;

  return (
    <div>
      <nav
        className={`bg-[#0c101a] top-0 left-0 w-full z-20 bg-opacity-50 h-[86px] py-6 ${
          isHamburgerOpen ? "fixed" : "absolute"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8/12 md:w-auto lg:w-auto">
                <Link
                    to={'/'}
                    className="fixlogo"
                >
                  <img
                    src="https://b-cdn.fragnet.net/images/logo.png"
                    className="align-text-top"
                    alt="Fragnet Logo"
                  />
                </Link>
              </div>
              <div className="hidden lg:block ml-5">
                <div className="col-auto col-lg-auto hidemobile">
                  <ul className="flex ">
                    <li className="inline-block px-[15px]">
                      <Link
                        className="uppercase font-proxima-nova font-medium text-[14px] text-white"
                        to={'/page/gameservers/'}
                      >
                        {I18n.t("gameServers")}
                      </Link>
                    </li>
                    <VerticalMenu
                      menuName={I18n.t("services")}
                      items={[
                        {
                          label: (
                            <div>
                              {I18n.t("discordBots")}{" "}
                              <span className="font-bold text-red-600">
                                {I18n.t("new")}
                              </span>
                            </div>
                          ),
                          url: "/page/discord-bots/",
                        },
                        {
                          label: <div>{I18n.t("voiceServers")}</div>,
                          url: "/page/voiceservers/",
                        },
                        {
                          label: (
                            <div>
                              {I18n.t("dedicatedServers")}{" "}
                              <span className="font-bold text-red-600">
                                {I18n.t("soon")}
                              </span>
                            </div>
                          ),
                          url: "/",
                        },
                      ]}
                    />
                    <li className="inline-block px-[15px] uppercase">
                      <Link
                        to={'/page/about/'}
                        className="font-proxima-nova font-medium text-[14px] text-white"
                      >
                        {I18n.t("aboutUs")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-auto col-lg-auto ml-auto">
              <ul className="flex right-nav items-center">
                <HideMenu>
                  <VerticalMenu
                    menuName={I18n.t("login")}
                    items={[
                      {
                        label: <div>{I18n.t("gameVoicePanel")}</div>,
                        url: "https://gamepanel.fragnet.net",
                      },
                      {
                        label: <div>{I18n.t("supportCenter")}</div>,
                        url: "/",
                      },
                      {
                        label: (
                          <div>
                            Fragify {I18n.t("panel")}{" "}
                            <span className="font-bold text-red-600">NEW</span>
                          </div>
                        ),
                        url: "https://panel.fragify.net",
                      },
                    ]}
                  />
                </HideMenu>
                <HideMenu>
                  <VerticalMenu
                    menuName={
                      <div className="flex items-center">
                        <img
                          className="h-[20px]"
                          src={langMenu.flag}
                          alt="flag"
                        />
                        <span className="ml-3">{langMenu.name}</span>
                      </div>
                    }
                    items={[
                      {
                        label: (
                          <div
                            className="flex"
                            onClick={(e) => {
                              localStorage.setItem("locale", "en");
                              console.log('en');
                              dispatch<any>(setLocale("en"));
                            }}
                          >
                            <img
                              className="h-[25px]"
                              src="/flag-usa.png"
                              alt="Usa-flag"
                            />
                            <span className="ml-3">English</span>
                          </div>
                        ),
                        url: "/",
                      },
                      {
                        label: (
                          <div
                            className="flex"
                            onClick={(e) => {
                              localStorage.setItem("locale", "sw");
                              dispatch<any>(setLocale("sw"));
                            }}
                          >
                            <img
                              className="h-[25px]"
                              src="/flag-sweden.png"
                              alt="sweden-flag"
                            />
                            <span className="ml-3">Swedish</span>
                          </div>
                        ),
                        url: "/",
                      },
                      {
                        label: (
                          <div
                            className="flex"
                            onClick={(e) => {
                              localStorage.setItem("locale", "de");
                              dispatch<any>(setLocale("de"));
                            }}
                          >
                            <img
                              className="h-[25px]"
                              src="/flag-germany.png"
                              alt="germany-flag"
                            />
                            <span className="ml-3">Deutsch</span>
                          </div>
                        ),
                        url: "/",
                      },
                      {
                        label: (
                          <div
                            className="flex"
                            onClick={(e) => {
                              localStorage.setItem("locale", "nl");
                              dispatch<any>(setLocale("nl"));
                            }}
                          >
                            <img
                              className="h-[25px]"
                              src="/flag-netherlands.png"
                              alt="netherlands-flag"
                            />
                            <span className="ml-3">Dutch</span>
                          </div>
                        ),
                        url: "/",
                      },
                      {
                        label: (
                          <div
                            className="flex"
                            onClick={(e) => {
                              localStorage.setItem("locale", "es");
                              dispatch<any>(setLocale("es"));
                            }}
                          >
                            <img
                              className="h-[18px] w-[25px]"
                              src="/flag-spain.png"
                              alt="spain-flag"
                            />
                            <span className="ml-3">Español</span>
                          </div>
                        ),
                        url: "/",
                      },
                      {
                        label: (
                          <div
                            className="flex"
                            onClick={(e) => {
                              localStorage.setItem("locale", "fr");
                              dispatch<any>(setLocale("fr"));
                            }}
                          >
                            <img
                              className="h-[25px]"
                              src="/flag-france.png"
                              alt="france-flag"
                            />
                            <span className="ml-3">Français</span>
                          </div>
                        ),
                        url: "/",
                      },
                      {
                        label: (
                          <div
                            className="flex"
                            onClick={(e) => {
                              localStorage.setItem("locale", "pl");
                              dispatch<any>(setLocale("pl"));
                            }}
                          >
                            <img
                              className="h-[25px]"
                              src="/flag-poland.png"
                              alt="pland-flag"
                            />
                            <span className="ml-3">Polski</span>
                          </div>
                        ),
                        url: "/",
                      },
                      {
                        label: (
                          <div
                            className="flex"
                            onClick={(e) => {
                              localStorage.setItem("locale", "ru");
                              dispatch<any>(setLocale("ru"));
                            }}
                          >
                            <img
                              className="h-[25px]"
                              src="/flag-russia.png"
                              alt="russia-flag"
                            />
                            <span className="ml-3">Русский</span>
                          </div>
                        ),
                        url: "/",
                      },
                    ]}
                  />
                </HideMenu>
                <div className="hidden lg:block">
                  <VerticalMenu
                    menuName="€"
                    items={[
                      {
                        label: "USD $",
                        url: "/",
                      },
                      {
                        label: "EUR €",
                        url: "/",
                      },
                      {
                        label: "GBP £",
                        url: "/",
                      },
                      {
                        label: "SEK kr",
                        url: "/",
                      },
                    ]}
                  />
                </div>
                <li className="hidden lg:inline-block px-4 ">
                  <a
                    href="https://fragnet.net/page/gameservers"
                    className="border text-white inline-block border-white font-bold py-2 hover:bg-white hover:text-red-600 text-center px-5 rounded-md uppercase"
                  >
                    {I18n.t("orderNow")}
                  </a>
                </li>
                <li className="inline-block">
                  <div className="button_container" id="toggle">
                    <span className="top"></span>
                    <span className="middle"></span>
                    <span className="bottom"></span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="-mr-2 flex lg:hidden">
              <button
                className="flex flex-col h-12 w-12 rounded justify-center items-center group mt-0 bg-transparent p-0"
                onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
              >
                <div
                  className={`${genericHamburgerLine} ${
                    isHamburgerOpen
                      ? "rotate-45 translate-y-3  group-hover:opacity-100 bg-[#e90e0e]"
                      : " group-hover:opacity-100 bg-white"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isHamburgerOpen
                      ? "opacity-0"
                      : " group-hover:opacity-100 bg-white"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isHamburgerOpen
                      ? "-rotate-45 -translate-y-3  group-hover:opacity-100 bg-[#e90e0e]"
                      : "group-hover:opacity-100 bg-white"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`${
          isHamburgerOpen ? "block h-screen" : "block"
        } lg:hidden z-[19] top-0 left-0 w-full h-0 bg-[#0c101a] transition-height duration-200 inset-0 fixed`}
      >
        {isHamburgerOpen && (
          <ul className="flex flex-col items-center h-full justify-center ">
            <li className="inline-block px-[15px] py-[6px]">
              <Link
                to={'/'}
                className=" font-proxima-nova font-medium text-[16px] text-white"
              >
                {I18n.t("home")}
              </Link>
            </li>
            <li className="inline-block px-[15px] py-[6px]">
              <Link
                to={'/page/gameservers/'}
                className=" font-proxima-nova font-medium text-[16px] text-white"
              >
                {I18n.t("gameServers")}
              </Link>
            </li>
            <ServicesDropDown />
            <li className="inline-block px-[15px] py-[6px]">
              <Link
                to={'/page/about/'}
                className="font-proxima-nova font-medium text-[16px] text-white"
              >
                {I18n.t("aboutUs")}
              </Link>
            </li>
            <li className="inline-block px-[15px] py-[6px]">
              <Link
                to={'/'}
                className="font-proxima-nova font-medium text-[16px] text-white"
              >
                {I18n.t("support")}
              </Link>
            </li>
          </ul>
        )}

        <BottomOverlay>
          <OutlineWhite>
            <Link
              to={'https://clients.fragnet.net/login?language=english'}
              className="w-full inline-block h-[48px] leading-[48px] border rounded-md text-white text-[16px] font-medium font-proxima shadow-sm"
            >
              {I18n.t("login")}
              {">"}
            </Link>
          </OutlineWhite>
          <OrderButton>
            <Link
              to={'https://fragnet.net/page/gameservers'}
              className="w-full inline-block h-[48px] leading-[48px] rounded-md text-white text-[16px] font-bold font-proxima shadow-sm bg-[#e90e0e]"
            >
              <span>{I18n.t("orderNow")}</span>
            </Link>
          </OrderButton>
        </BottomOverlay>
      </div>
    </div>
  );
};

export default Navbar;
