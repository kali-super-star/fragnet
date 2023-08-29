import React from "react";
import { I18n } from "react-redux-i18n";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ServiceWrapper = styled.div`
  & img:nth-child(1) {
    display: inline-block;
  }
  & img:nth-child(2) {
    display: none;
  }
  &:hover img:nth-child(1) {
    display: none;
  }
  &:hover img:nth-child(2) {
    display: inline-block;
  }
  &:hover a {
    color: #e90e0e;
  }
`;

const Service: React.FC = () => {
  return (
    <div
      className="w-full flex justify-center py-[88px]"
      style={{
        background: "url('/fragnet/section-divider.png') top center no-repeat",
      }}
    >
      <div className="container max-w-[1280px]">
        <div className="w-full px-3">
          <div className="text-center pb-10">
            <h1 className="mb-4 md:text-[36px] text-[30px] uppercase font-[900] text-white text-center">
            {I18n.t('getStarted')}
            </h1>
            <p className="max-w-[700px] mx-auto text-[18px]">
            {I18n.t('getStartedDescription')}
            </p>
          </div>
          <div className="xl:w-3/4 lg:w-5/6 grid md:grid-cols-4 grid-cols-2 mx-auto">
            <ServiceWrapper className="col px-2 pb-10">
              <Link to="/fragnet/page/gameservers" className="grid">
                <div className="flex justify-center">
                  <img src="/fragnet/game-servers.png" alt="Game Servers" />
                  <img src="/fragnet/game-servers-hover.png" alt="Game Servers" />
                </div>
                <h2 className="mt-3 text-[14px] lg:text-[16px] uppercase flex justify-center items-center">
                {I18n.t('gameServers')}
                  <img
                    src="/fragnet/service-arrow.png"
                    alt="Service Arrow"
                    className="ml-2 py-2"
                  />
                  <img
                    src="/fragnet/service-arrow-hover.png"
                    alt="Service Arrow"
                    className="ml-2 py-2"
                  />
                </h2>
              </Link>
            </ServiceWrapper>
            <ServiceWrapper className="col px-2 pb-10">
              <Link to="/fragnet/page/gameservers" className="grid">
                <div className="flex justify-center">
                  <img src="/fragnet/shared-hosting.png" alt="Discord Bots" />
                  <img src="/fragnet/shared-hosting-hover.png" alt="Discord Bots" />
                </div>
                <h2 className="mt-3 text-[14px] lg:text-[16px] uppercase flex justify-center items-center">
                {I18n.t('discordBots')}
                  <img
                    src="/fragnet/service-arrow.png"
                    alt="Service Arrow"
                    className="ml-2 py-2"
                  />
                  <img
                    src="/fragnet/service-arrow-hover.png"
                    alt="Service Arrow"
                    className="ml-2 py-2"
                  />
                </h2>
              </Link>
            </ServiceWrapper>
            <ServiceWrapper className="col px-2 pb-10">
              <Link to="/fragnet/page/gameservers" className="grid">
                <div className="flex justify-center">
                  <img src="/fragnet/voice-servers.png" alt="Voice Servers" />
                  <img src="/fragnet/voice-servers-hover.png" alt="Voice Servers" />
                </div>
                <h2 className="mt-3 text-[14px] lg:text-[16px] uppercase flex justify-center items-center">
                {I18n.t('voiceServers')}
                  <img
                    src="/fragnet/service-arrow.png"
                    alt="Service Arrow"
                    className="ml-2 py-2"
                  />
                  <img
                    src="/fragnet/service-arrow-hover.png"
                    alt="Service Arrow"
                    className="ml-2 py-2"
                  />
                </h2>
              </Link>
            </ServiceWrapper>
            <ServiceWrapper className="col px-2 pb-10">
              <Link to="/fragnet/page/gameservers" className="grid">
                <div className="flex justify-center">
                  <img src="/fragnet/dedicated-servers.png" alt="Dedicated Servers" />
                  <img
                    src="/fragnet/dedicated-servers-hover.png"
                    alt="Dedicated Servers"
                  />
                </div>
                <h2 className="mt-3 text-[14px] lg:text-[16px] uppercase flex justify-center items-center">
                {I18n.t('dedicatedServers')}
                  <img
                    src="/fragnet/service-arrow.png"
                    alt="Service Arrow"
                    className="ml-2 py-2"
                  />
                  <img
                    src="/fragnet/service-arrow-hover.png"
                    alt="Service Arrow"
                    className="ml-2 py-2"
                  />
                </h2>
              </Link>
            </ServiceWrapper>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <Link
            to="/fragnet/register"
            className="rounded-md z-50 text-center md:mx-0 mx-auto items-center flex h-[48px] px-[24px] text-[16px] font-[800] bg-[#e90e0e] text-white hover:bg-[#f91d1d] text-white"
          >
            {I18n.t('createAccount')}
          </Link>
          <div className="md:block hidden px-5 italic text-gray-400">
            <span>{I18n.t('or')}</span>
          </div>
          <Link to="submitticket" className="md:block hidden text-white font-bold">{I18n.t('contactUs')}</Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
