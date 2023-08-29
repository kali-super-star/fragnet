import React from "react";

import { Link } from "react-router-dom";
import { Game } from "../types";

interface GameTemplateProps {
  game: Game;
}

const GameTemplateOne: React.FC<GameTemplateProps> = ({ game }) => {
  return (
    <div id="wrapper">
      <section
        className="relative pt-48 h-auto pb-0 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${game.background})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h1 className="uppercase">{game.name}</h1>
              <h2 className="sub-hero-p">{game.description}</h2>
            </div>
          </div>
          <div className="game-video text-center mt-4 pt-1">
            {/* Set the iframe src to the video link if available. */}
            <iframe
              title="Game Video"
              src="https://www.youtube-nocookie.com/embed/TOnx47sRgL8&amp;origin=https://fragnet.net"
              width="420px"
              height="235px"
            />
          </div>
        </div>
      </section>
      {/* Rest of the template... */}
      {/* When rendering dynamic links in React, use the Link component from react-router-dom instead of a regular a tag */}
      <Link to={`/games/${game.slug}`} className="button large-button">
        View Pricing
      </Link>
      {/* Rest of the template... */}
    </div>
  );
};

export default GameTemplateOne;
