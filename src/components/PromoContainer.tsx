import React, { useEffect, useState } from "react";
import { I18n } from "react-redux-i18n";
import styled from "styled-components";

const TimerWrapper = styled.div`
  @media (min-width: 768px) {
    &:before {
      content: " ";
      background: url(https://b-cdn.fragnet.net/images/red-divider.png) center
        center no-repeat;
      width: 20px;
      height: 110px;
      position: absolute;
      bottom: -16px;
      top: -16px;
      left: -30px;
    }
  }

  @media (min-width: 768px) {
    &:after {
      content: " ";
      background: url(https://b-cdn.fragnet.net/images/red-divider.png) center
        center no-repeat;
      width: 20px;
      height: 110px;
      position: absolute;
      bottom: -16px;
      top: -16px;
      right: -30px;
    }
  }
`;

const Timer = () => {
  const [time, setTime] = useState(new Date());
  const endTime = new Date(
    time.getFullYear(),
    time.getMonth(),
    time.getDate(),
    23,
    59,
    59
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeDifference = endTime.getTime() - time.getTime();
  const seconds = Math.floor((timeDifference / 1000) % 60);
  const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
  const hours = Math.floor((timeDifference / 1000 / 60 / 60) % 24);
  const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

  return (
    <div id="clock" className="flex text-center pt-3">
      <h2
        className="w-20 md:text-[36px] text-[30px] uppercase font-[900] text-white text-center px-[10px]"
        style={{
          background: "url('/fragnet/timer-divider.png') right 1px top 18px no-repeat",
        }}
      >
        {days}
        <span className="block text-sm">days</span>
      </h2>
      <h2
        className="w-20 md:text-[36px] text-[30px] uppercase font-[900] text-white text-center px-[10px]"
        style={{
          background: "url('/fragnet/timer-divider.png') right 1px top 18px no-repeat",
        }}
      >
        {hours >= 10 ? hours : "0" + hours}
        <span className="block text-sm">hours</span>
      </h2>
      <h2
        className="w-20 md:text-[36px] text-[30px] uppercase font-[900] text-white text-center px-[10px]"
        style={{
          background: "url('/fragnet/timer-divider.png') right 1px top 18px no-repeat",
        }}
      >
        {minutes >= 10 ? minutes : "0" + minutes}
        <span className="block text-sm">mins</span>
      </h2>
      <h2 className="w-20 md:text-[36px] text-[30px] uppercase font-[900] text-white text-center px-[10px]">
        {seconds >= 10 ? seconds : "0" + seconds}
        <span className="block text-sm">secs</span>
      </h2>
    </div>
  );
};

const PromoContainer: React.FC = () => {
  return (
    <div
      className="w-full flex justify-center text-white/[.8] py-12"
      style={{
        background: "url('/fragnet/red-bg.png') center right no-repeat #e90e0e",
      }}
    >
      <div className="container max-w-[1280px] md:text-start text-center">
        <div className="flex flex-wrap">
          <div className="flex-auto w-auto px-4">
            <h1 className="md:text-[36px] text-[30px] uppercase font-[900] text-white">
             {I18n.t('promo')}
            </h1>
            <h2 className="uppercase text-[18px] text-white font-bold">
            {I18n.t('promoDescription')}
            </h2>
            <p>{I18n.t('appliesTo')}</p>
          </div>
          <div className="flex flex-auto flex-wrap 2xl:ml-auto items-center xl:justify-end md:justify-start justify-center">
            <TimerWrapper className="relative md:ml-5">
              <div id="timer">
                <Timer />
              </div>
            </TimerWrapper>
            <div className="pt-3">
              <strong className="font-bold text-[18px] mr-3 md:ml-32 mt-3">
                {I18n.t('usePromoCode')}:
              </strong>
              <span
                className="font-bold mt-3 font-[800] text-[18px] px-[16px] py-[5px] border border-dashed rounded-md"
                id="promoCode"
              >
                SUMMER20
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoContainer;
