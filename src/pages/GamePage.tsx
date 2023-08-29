import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import GameTemplateOne from "./GameTemplateOne";
import GameTemplateTwo from "./GameTemplateTwo";
import { fetchGameBySlug } from "../utils";
import { Game } from "../types";

const GamePage: React.FC = () => {
  const { slug } = useParams();
  const [game, setGame] = useState<Game>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchGameBySlug(slug);
      setGame(result);
    };

    fetchData();
  }, [slug]);

  if (!game) {
    return <div>Loading...</div>;
  }

  // console.log(typeof game.fragify);

  return game.fragify === "true" ? (
    <GameTemplateTwo game={game} />
  ) : (
    <GameTemplateOne game={game} />
  );
};

export default GamePage;
