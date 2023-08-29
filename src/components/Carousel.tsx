/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef, useState } from "react";
import { Carousel as Slider } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classNames from "classnames";
import { I18n } from "react-redux-i18n";

interface Game {
  slug: string;
  name: string;
  description: string;
  background?: string;
  hero_slider_img?: string;
}

interface CarouselProps {
  games: Game[];
}

const Carousel: React.FC<CarouselProps> = ({ games }) => {
  const nextSlide = useRef<HTMLInputElement>(null);
  const prevSlide = useRef<HTMLInputElement>(null);

  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [activeItem, setActiveItem] = useState<number>(0);
  const [setItem, setSetItem] = useState<number>(0);

  const clickSlide = (selected: number): void => {
    setActiveItem(selected);
    setSelectedItem(selected);
  };

  const onClickNext = (): void => {
    nextSlide.current?.click();
  };

  const onClickPrev = (): void => {
    prevSlide.current?.click();
  };

  return (
    <div className="relative">
      <Slider
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        interval={5000}
        selectedItem={selectedItem}
        preventMovementUntilSwipeScrollTolerance={true}
        transitionTime={700}
        showStatus={false}
        onChange={(index) => {
          setActiveItem(index);
          setSetItem((index - (index % 4)) / 4);
        }}
        renderArrowNext={(clickHandler) => (
          <div
            onClick={clickHandler}
            className="absolute h-full w-1/4 bottom-0 right-0 z-10"
          ></div>
        )}
        renderArrowPrev={(clickHandler) => (
          <div
            onClick={clickHandler}
            className="absolute h-full xl:w-1/6 md:w-0 bottom-0 left-0 z-10"
          ></div>
        )}
      >
        {games.map((game: Game, index: number) => (
          <div
            className="md:h-[738px] bg-[#0c101a]"
            style={{
              backgroundImage: `url(${game.background})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
            key={index}
          >
            <div className="pt-[9rem] md:pb-0 pb-5 flex justify-center">
              <div className="container xl:px-60 lg:px-[4rem] md:text-start text-center">
                <h1 className="uppercase md:text-[60px] text-[40px] font-[1000] text-white">
                  {game.name.split(":")[0]}
                </h1>
                <h1 className="uppercase md:text-[30px] text-[24px] font-[1000] text-white pb-7">
                  {I18n.t("serversStart")} €17.16/{I18n.t("month1")}
                </h1>
                <p className="text-[20px] font-[300] text-[#ccd2e1] pb-5 xl:w-2/3">
                  {game.description}
                </p>
                <div className="flex justify-center md:justify-start">
                  <a
                    href={`/games/${game.slug}`}
                    className="rounded-md z-50 text-center items-center flex h-[54px] px-[32px] text-[18px] font-[500] bg-[#e90e0e] text-white hover:bg-[#f91d1d] text-white"
                  >
                    {I18n.t("viewPricing")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="w-full justify-center absolute bottom-0 z-10 md:flex hidden">
        <div className="px-8 xl:w-5/6 w-full relative">
          <div className="px-3 py-0 bg-black/[.88] rounded-md">
            <Slider
              infiniteLoop
              transitionTime={1000}
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
              selectedItem={setItem}
              preventMovementUntilSwipeScrollTolerance={true}
              renderArrowNext={(clickHandler) => (
                <div className="absolute h-full bottom-0 right-0 mr-1 flex items-center z-10">
                  <div onClick={clickHandler} ref={nextSlide}></div>
                </div>
              )}
              renderArrowPrev={(clickHandler) => (
                <div className="absolute h-full bottom-0 left-0 mr-1 flex items-center z-10">
                  <div onClick={clickHandler} ref={prevSlide}></div>
                </div>
              )}
            >
              <div className="flex w-full h-full py-2 rounded-md">
                <div className="h-40 w-1/4 py-1 pr-2 h-full">
                  <div
                    onClick={() => clickSlide(0 % games.length)}
                    className={classNames(
                      "text-start h-full w-full rounded-md p-2",
                      0 % games.length !== activeItem
                        ? "opacity-50"
                        : "opacity-100"
                    )}
                    style={{
                      background: `url(${
                        games.length
                          ? games[0 % games.length].hero_slider_img
                          : ""
                      }) center center/cover no-repeat`,
                    }}
                  >
                    <span
                      className={classNames(
                        "px-[8px] py-[4px] text-sm font-bold rounded",
                        0 % games.length !== activeItem
                          ? "bg-black/80"
                          : "bg-[#e90e0e] text-white"
                      )}
                    >
                      €19.92/{I18n.t("month1")}
                    </span>
                  </div>
                </div>
                <div className="h-40 w-1/4 py-1 px-2 h-full">
                  <div
                    onClick={() => clickSlide(1 % games.length)}
                    className={classNames(
                      "h-full w-full rounded-md text-start p-2",
                      1 % games.length !== activeItem
                        ? "opacity-50"
                        : "opacity-100"
                    )}
                    style={{
                      background: `url(${
                        games.length
                          ? games[1 % games.length].hero_slider_img
                          : ""
                      }) center center/cover no-repeat`,
                    }}
                  >
                    <span
                      className={classNames(
                        "px-[8px] py-[4px] text-sm font-bold rounded",
                        1 % games.length !== activeItem
                          ? "bg-black/80"
                          : "bg-[#e90e0e] text-white"
                      )}
                    >
                      €19.92/{I18n.t("month1")}
                    </span>
                  </div>
                </div>
                <div className="h-40 w-1/4 py-1 px-2 h-full">
                  <div
                    onClick={() => clickSlide(2 % games.length)}
                    className={classNames(
                      "h-full w-full rounded-md text-start p-2",
                      2 % games.length !== activeItem
                        ? "opacity-50"
                        : "opacity-100"
                    )}
                    style={{
                      background: `url(${
                        games.length
                          ? games[2 % games.length].hero_slider_img
                          : ""
                      }) center center/cover no-repeat`,
                    }}
                  >
                    <span
                      className={classNames(
                        "px-[8px] py-[4px] text-sm font-bold rounded",
                        2 % games.length !== activeItem
                          ? "bg-black/80"
                          : "bg-[#e90e0e] text-white"
                      )}
                    >
                      €19.92/{I18n.t("month1")}
                    </span>
                  </div>
                </div>
                <div className="h-40 w-1/4 py-1 pl-2">
                  <div
                    onClick={() => clickSlide(3 % games.length)}
                    className={classNames(
                      "h-full w-full rounded-md text-start p-2",
                      3 % games.length !== activeItem
                        ? "opacity-50"
                        : "opacity-100"
                    )}
                    style={{
                      background: `url(${
                        games.length
                          ? games[3 % games.length].hero_slider_img
                          : ""
                      }) center center/cover no-repeat`,
                    }}
                  >
                    <span
                      className={classNames(
                        "px-[8px] py-[4px] text-sm font-bold rounded",
                        3 % games.length !== activeItem
                          ? "bg-black/80"
                          : "bg-[#e90e0e] text-white"
                      )}
                    >
                      €19.92/{I18n.t("month1")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex w-full h-full py-3 rounded-md">
                <div className="h-40 w-1/4 py-1 pr-2 h-full">
                  <div
                    onClick={() => clickSlide(4 % games.length)}
                    className={classNames(
                      "h-full w-full rounded-md text-start p-2",
                      4 % games.length !== activeItem
                        ? "opacity-50"
                        : "opacity-100"
                    )}
                    style={{
                      background: `url(${
                        games.length
                          ? games[4 % games.length].hero_slider_img
                          : ""
                      }) center center/cover no-repeat`,
                    }}
                  >
                    <span
                      className={classNames(
                        "px-[8px] py-[4px] text-sm font-bold rounded",
                        4 % games.length !== activeItem
                          ? "bg-black/80"
                          : "bg-[#e90e0e] text-white"
                      )}
                    >
                      €19.92/{I18n.t("month1")}
                    </span>
                  </div>
                </div>
                <div className="h-40 w-1/4 py-1 px-2 h-full">
                  <div
                    onClick={() => clickSlide(5 % games.length)}
                    className={classNames(
                      "h-full w-full rounded-md text-start p-2",
                      5 % games.length !== activeItem
                        ? "opacity-50"
                        : "opacity-100"
                    )}
                    style={{
                      background: `url(${
                        games.length
                          ? games[5 % games.length].hero_slider_img
                          : ""
                      }) center center/cover no-repeat`,
                    }}
                  >
                    <span
                      className={classNames(
                        "px-[8px] py-[4px] text-sm font-bold rounded",
                        5 % games.length !== activeItem
                          ? "bg-black/80"
                          : "bg-[#e90e0e] text-white"
                      )}
                    >
                      €19.92/{I18n.t("month1")}
                    </span>
                  </div>
                </div>
                <div className="h-40 w-1/4 py-1 px-2 h-full">
                  <div
                    onClick={() => clickSlide(6 % games.length)}
                    className={classNames(
                      "h-full w-full rounded-md text-start p-2",
                      6 % games.length !== activeItem
                        ? "opacity-50"
                        : "opacity-100"
                    )}
                    style={{
                      background: `url(${
                        games.length
                          ? games[6 % games.length].hero_slider_img
                          : ""
                      }) center center/cover no-repeat`,
                    }}
                  >
                    <span
                      className={classNames(
                        "px-[8px] py-[4px] text-sm font-bold rounded",
                        6 % games.length !== activeItem
                          ? "bg-black/80"
                          : "bg-[#e90e0e] text-white"
                      )}
                    >
                      €19.92/{I18n.t("month1")}
                    </span>
                  </div>
                </div>
                <div className="h-40 w-1/4 py-1 pl-2 h-full">
                  <div
                    onClick={() => clickSlide(7 % games.length)}
                    className={classNames(
                      "h-full w-full rounded-md text-start p-2",
                      7 % games.length !== activeItem
                        ? "opacity-50"
                        : "opacity-100"
                    )}
                    style={{
                      background: `url(${
                        games.length
                          ? games[7 % games.length].hero_slider_img
                          : ""
                      }) center center/cover no-repeat`,
                    }}
                  >
                    <span
                      className={classNames(
                        "px-[8px] py-[4px] text-sm font-bold rounded",
                        7 % games.length !== activeItem
                          ? "bg-black/80"
                          : "bg-[#e90e0e] text-white"
                      )}
                    >
                      €19.92/{I18n.t("month1")}
                    </span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="h-full absolute bottom-0 right-0 flex items-center">
            <div
              onClick={onClickNext}
              className="w-[32px] h-[48px]"
              style={{
                background: `url("/slider-next.png") no-repeat`,
              }}
            ></div>
          </div>
          <div className="h-full absolute bottom-0 left-2 flex items-center">
            <div
              onClick={onClickPrev}
              className="w-[32px] h-[48px]"
              style={{
                background: `url("/slider-prev.png") no-repeat`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
