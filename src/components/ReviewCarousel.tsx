import React, { useEffect, useState } from "react";
import { Carousel as Slider } from "react-responsive-carousel";
import ReactStars from 'react-rating-star-with-type'

import { Review } from "../types";
import { fetchReviews } from "../utils";

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetchReviews().then(setReviews);
  }, []);

  const truncateReview = (content: string) => {
    if (content.length > 200) {
      return content.substring(0, 200) + "... ";
    }
    return content;
  };

  return (
    <div className="w-full flex justify-center py-0 bg-[#171c29]">
      <div className="container max-w-[1280px]">
        <Slider
          infiniteLoop
          interval={5000}
          autoPlay
          transitionTime={700}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          preventMovementUntilSwipeScrollTolerance={true}
          renderArrowNext={(clickHandler) => (
            <div className="h-full flex md:w-auto w-20 items-center absolute bottom-0 lg:right-32 right-10 z-10">
              <div
                className="h-full md:flex hidden opacity-10 hover:opacity-100 hover:text-white"
                onClick={clickHandler}
                style={{
                  background:
                    "url('/test-slider-next.png') center center no-repeat",
                  width: "22px",
                }}
              ></div>
            </div>
          )}
          renderArrowPrev={(clickHandler) => (
            <div className="h-full flex items-center absolute bottom-0 lg:left-32 left-10 z-10">
              <div
                className="h-full md:flex hidden opacity-10 hover:opacity-100 hover:text-white"
                onClick={clickHandler}
                style={{
                  background:
                    "url('/test-slider-prev.png') center center no-repeat",
                  width: "22px",
                }}
              ></div>
            </div>
          )}
          className="h-full"
        >
          {reviews &&
            reviews.map((review) => (
              <div
                key={review.author}
                className="h-full flex justify-center px-2 bg-[#171c29]"
              >
                <div className="py-14 rounded-lg h-full md:w-2/3 w-full px-2">
                  <p className="md:text-[1.33rem] text-[18px] mb-6">
                    " {truncateReview(review.content)} "
                    {review.content.length > 200 && (
                      <a
                        href="https://www.trustpilot.com/review/fragnet.net"
                        className="ml-3 text-blue-400"
                      >
                        Show more
                      </a>
                    )}
                  </p>
                  <h3 className="text-2xl mb-4 flex justify-center">
                    <ReactStars
                      count={5}
                      value={review.rating}
                      isEdit={false}
                      size={50}
                    />
                  </h3>
                  <div className="flex justify-center items-center">
                    <div className="p-2 rounded-lg flex items-center">
                      <span className="text-white text-[18px] uppercase font-bold">
                        {review.author}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <span>Game: {review.game}</span>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
