import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Game, Location as location } from "../../types";
import { fetchData, fetchLocations } from "../../utils";
import Footer from "../../components/Footer";
import Location from "./Location";
import RightSide from "./RightSide";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import Capability from "./Capability";
import Billing from "./Billing";

const BodyWrapper = styled.div`
  background: url("/bg-minecraft.png") top center no-repeat;
`;

const Order: React.FC = () => {
  const slug = useParams();
  const [locations, setLocations] = useState<location[]>([]);
  console.log(locations);
  useEffect(() => {
    fetchLocations().then(setLocations);
  }, []);

  return (
    <>
      <BodyWrapper className={classNames("w-full")}>
        <div className="flex max-w-[1280px] mx-auto">
          <div className="w-[70%] text-white pt-52">
            <div className="ml-8 mb-9">
              <h3 className="italic font-[600] uppercase text-[20px] mb-3">
                order your server
              </h3>
              <h1 className="uppercase text-[54px] font-[800] leading-[55px]">
                minecraft <p>server hostng</p>
              </h1>
            </div>
            <Location />
            <Capability />
            <Billing />
          </div>
          <div className="mt-20 w-[30%]">
            <RightSide />
          </div>
        </div>
      </BodyWrapper>
      <Footer />
    </>
  );
};

export default Order;
