import React from "react";
import styled from "styled-components";
import { I18n } from "react-redux-i18n";
import { Tooltip } from "react-tooltip";

interface CityProps {
  name: String;
  top: number;
  left: number;
  smtop: number;
  smleft: number;
  flag?: String;
  speed?: number;
  server?: String;
  providers?: String;
}

const Map = styled.div`
  @media (min-width: 768px) {
    background: url("/fragnet/mapv1.png");
  }
  @media (width < 768px) {
    background: url("/fragnet/map-sm.png");
    background-size: 400px 219px;
    height: 219px;
    max-width: 400px;
    background-position: -46px;
  }
`;

const City = styled.div<CityProps>`
  position: absolute;
  top: ${(props: CityProps) => props.top}px;
  left: ${(props: CityProps) => props.left}px;
  @media (width < 1024px) {
    top: ${(props: CityProps) => props.top * 0.7}px;
    left: ${(props: CityProps) => props.left * 0.81}px;
  }
  @media (width < 768px) {
    top: ${(props: CityProps) => props.smtop}px;
    left: ${(props: CityProps) => props.smleft}px;
  }
`;

const city: CityProps[] = [
  {
    name: I18n.t("losAngeles"),
    top: 270,
    left: 44,
    smtop: 90,
    smleft: 12,
    flag: "/fragnet/flag-usa.png",
    speed: 20,
    providers: "Cogent, GTT",
  },
  {
    name: I18n.t("portland"),
    top: 184,
    left: 49,
    smtop: 75,
    smleft: 5,
    flag: "/fragnet/flag-usa.png",
    speed: 20,
    providers: "I3D, Cogent, GTT",
  },
  {
    name: I18n.t("chicago"),
    top: 162,
    left: 170,
    smtop: 75,
    smleft: 43,
    flag: "/fragnet/flag-usa.png",
    speed: 20,
    providers: "Cogent, GTT",
  },
  {
    name: I18n.t("dallas"),
    top: 274,
    left: 170,
    smtop: 88,
    smleft: 30,
    flag: "/fragnet/flag-usa.png",
    speed: 40,
    providers: "Cogent, GTT, Telia",
  },
  {
    name: I18n.t("saoPaulo"),
    top: 440,
    left: 351,
    smtop: 161,
    smleft: 84,
    flag: "/fragnet/flag-brazil.png",
    speed: 60,
    providers: "IX.br, Equinix IX",
  },
  {
    name: I18n.t("Ashburn"),
    top: 236,
    left: 285,
    smtop: 79,
    smleft: 58,
    flag: "/fragnet/flag-usa.png",
    speed: 20,
    providers: "Cogent, GTT",
  },
  {
    name: I18n.t("newYork"),
    top: 200,
    left: 300,
    smtop: 78,
    smleft: 59,
    flag: "/fragnet/flag-usa.png",
    speed: 20,
    providers: "Cogent, GTT",
  },
  {
    name: I18n.t("montreal"),
    top: 160,
    left: 270,
    smtop: 69,
    smleft: 57,
    flag: "/fragnet/flag-canada.png",
    speed: 60,
    providers: "i3D, Telia and more",
  },
  {
    name: I18n.t("atlanta"),
    top: 266,
    left: 256,
    smtop: 89,
    smleft: 48,
    flag: "/fragnet/flag-usa.png",
    speed: 20,
    providers: "Level 3, Comcast",
    server: "Century Link, NTT, Cogent, GTT, HE",
  },
  {
    name: I18n.t("oslo"),
    top: 68,
    left: 490,
    smtop: 45,
    smleft: 158,
    flag: "/fragnet/flag-norway.png",
    speed: 10,
    providers: "Cogent, IP-Only,",
    server: "Hurricane Electric, Telia",
  },
  {
    name: I18n.t("amsterdam"),
    top: 100,
    left: 370,
    smtop: 57,
    smleft: 157,
    flag: "/fragnet/flag-netherlands.png",
    speed: 160,
    providers: "Telia, Cogent, GTT,",
    server: "NTT, AMS-IX, NL-IX, Worldstream",
  },
  {
    name: I18n.t("london"),
    top: 140,
    left: 400,
    smtop: 57,
    smleft: 146,
    flag: "/fragnet/flag-uk.png",
    speed: 160,
    providers: "Telia, NTT, GTT,",
    server: "LINX, Virgin Media",
  },
  {
    name: I18n.t("strasbourg"),
    top: 220,
    left: 400,
    smtop: 68,
    smleft: 151,
    flag: "/fragnet/flag-france.png",
    speed: 100,
    providers: "Telia, NTT,",
    server: "Level 3, Telstra, TATA",
  },
  {
    name: I18n.t("frankfurt"),
    top: 250,
    left: 480,
    smtop: 65,
    smleft: 161,
    flag: "/fragnet/flag-germany.png",
    speed: 100,
    providers: "Telia, DTAG,",
    server: "NTT & more",
  },
  {
    name: I18n.t("belgrade"),
    top: 205,
    left: 560,
    smtop: 73,
    smleft: 170,
    flag: "/fragnet/flag-serbia.png",
    speed: 20,
    providers: "Cogent, RETN,",
    server: "Hurricane Electric",
  },
  {
    name: I18n.t("warsaw"),
    top: 170,
    left: 560,
    smtop: 58,
    smleft: 168,
    flag: "/fragnet/flag-poland.png",
    speed: 80,
    providers: "Equinix",
  },
  {
    name: I18n.t("helsinki"),
    top: 120,
    left: 575,
    smtop: 41,
    smleft: 173,
    flag: "/fragnet/flag-finland.png",
    speed: 40,
    providers: "Telia, Lumen",
  },
  {
    name: I18n.t("stockholm"),
    top: 100,
    left: 535,
    smtop: 44,
    smleft: 166,
    flag: "/fragnet/flag-sweden.png",
    speed: 100,
    providers: "Portlane, OBE,",
    server: "Hurricane Electric",
  },
  {
    name: I18n.t("tokyo"),
    top: 230,
    left: 900,
    smtop: 84,
    smleft: 306,
    flag: "/fragnet/flag-japan.png",
    speed: 20,
    providers: "NTT, HE",
  },
  {
    name: I18n.t("singapore"),
    top: 355,
    left: 680,
    smtop: 128,
    smleft: 267,
    flag: "/fragnet/flag-singapore.png",
    speed: 20,
    providers: "NTT, TATA",
    server: "Hurricane Electric",
  },
  {
    name: I18n.t("sydney"),
    top: 410,
    left: 820,
    smtop: 168,
    smleft: 314,
    flag: "/fragnet/flag-australia.png",
    speed: 20,
    providers: "NTT, TATA",
  },
];

const GameLocation: React.FC = () => {
  return (
    <div className="w-full flex bg-[#171c29] justify-center py-[88px]">
      <div className="container max-w-[1280px]">
        <div className="w-full text-center mb-10">
          <h1 className="md:text-[36px] text-[30px] uppercase font-[900] px-4 text-white pt-4">
            {I18n.t("availableLocations")}
          </h1>
          <p className="text-[18px]">{I18n.t("serversLocations")}</p>
        </div>
        <div className="w-full">
          <Map className="lg:w-[975px] lg:h-[533px] lg:!bg-[length:975px_533px] md:w-[768px] md:h-[368px] md:!bg-[length:789px_368px] mx-auto relative">
            {city.map((c: CityProps, index: number) => (
              <City
                key={index}
                name={c.name}
                data-tooltip-id={`country-${index}`}
                top={c.top}
                left={c.left}
                smtop={c.smtop}
                smleft={c.smleft}
              >
                <span className="md:block hover:text-red-600 hidden text-[12px] text-white uppercase">
                  {c.name}
                </span>
                <Tooltip
                  id={`country-${index}`}
                  style={{ backgroundColor: "white", zIndex: 10 }}
                  children={
                    <div className="text-gray-800">
                      <h5 className="flex text-[18px] font-bold">
                        <img src={`${c.flag}`} alt="flag" className="mr-4" />
                        {c.name}
                      </h5>
                      <ul>
                        <li>
                          DDoS {I18n.t("protection1")}: {I18n.t("upTo")}{" "}
                          {c.speed}
                          {I18n.t("gbps")}
                        </li>
                        <li>
                          {I18n.t("testServers")}
                          {":"}
                          <a href="/fragnet/#" className="ml-1 font-bold text-red-500">
                            {I18n.t("comingSoon")}
                          </a>
                        </li>
                        <li>
                          {I18n.t("transitProviders")}: {c.providers}
                        </li>
                        <li>{c.server}</li>
                      </ul>
                    </div>
                  }
                />
                <span className="md:hidden bg-red-600 px-[3px] rounded-full text-[5px]"></span>
              </City>
            ))}
          </Map>
        </div>
      </div>
    </div>
  );
};

export default GameLocation;
