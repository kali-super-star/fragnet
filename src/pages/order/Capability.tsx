import React from "react";
import ReactSlider from "rc-slider";
import "rc-slider/assets/index.css";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const LiWrapper = styled.li`
  &::before {
    content: " ";
    position: absolute;
    width: 1px;
    height: 10px;
    background: rgba(255, 255, 255, 0.33);
    top: -16px;
  }
`;

const LiWrapper1 = styled.li`
  &::before {
    content: " ";
    position: absolute;
    width: 1px;
    height: 10px;
    background: rgba(255, 255, 255, 0.33);
    top: -16px;
  }
`;

const TabWrapper = styled.div`
  & .react-tabs__tab--selected {
    border: 1px solid #2d3747;
    border-bottom: 1px solid #0c101a;
    & h1 {
      color: white;
    }
  }
`;

const Capability = () => {
  return (
    <div className="ml-8">
      <div>
        <h1 className="inline-flex uppercase font-[600] text-[22px] text-white items-center">
          <div className="h-[44px] text-center skew-x-[-15deg] leading-[44px] w-[48px] text-white rounded-[6px] bg-[#e90e0e] bg-[linear-gradient(134deg,#e90e0e_0%,#e90e0e_100%)] shadow-[0_2px_4px_0_rgba(0,0,0,0.69),inset_0_-2px_2px_0_rgba(55,0,0,0.20)] uppercase text-[24px] font-[600] mr-[24px]">
            <div className="skew-x-[15deg]">
              <span>2</span>
            </div>
          </div>
          Customize your server
        </h1>
      </div>
      <div className="mt-12 mb-12">
        <div className="mb-8">
          <h1 className="text-[18px] font-[500] mb-3">Name your server:</h1>
          <input
            className="h-[48px] py-[12px] border-[#2D3747] border text-[18px] rounded-[5px] w-full bg-[#0E1623]/0 px-[10px] outline-none text-white focus:border-[#E90E0E]"
            type="text"
            placeholder="Set your server name"
          />
        </div>
        <div>
          <h1 className="text-[18px] font-[500] mb-3">CPU :</h1>
          <div className="mb-10">
            <ReactSlider
              trackStyle={{ backgroundColor: "#e90e0e", height: "15px" }}
              railStyle={{ backgroundColor: "rgba(14,22,35)", height: "15px" }}
              handleStyle={{
                borderColor: "#e90e0e",
                height: 28,
                width: 28,
                marginTop: "-6px",
                backgroundColor: "#292f3a",
                opacity: 1,
              }}
              min={1}
              max={4}
              defaultValue={2}
              onChange={(value) => console.log(value)}
            />
            <ul className="grid grid-cols-3 relative mt-8">
              <LiWrapper className="col">
                <span className="ml-[-30px]">1 Thread</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-30px]">2 Thread</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-30px]">3 Thread</span>
              </LiWrapper>
              <LiWrapper1 className="absolute right-0">
                <div className="relative">
                  <span className="w-[100px] absolute top-0 left-[-30px]">
                    4 Thread
                  </span>
                </div>
              </LiWrapper1>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-[18px] font-[500] mb-3">RAM :</h1>
          <div className="mb-10">
            <ReactSlider
              trackStyle={{ backgroundColor: "#e90e0e", height: "15px" }}
              railStyle={{ backgroundColor: "rgba(14,22,35)", height: "15px" }}
              handleStyle={{
                borderColor: "#e90e0e",
                height: 28,
                width: 28,
                marginTop: "-6px",
                backgroundColor: "#292f3a",
                opacity: 1,
              }}
              min={1}
              max={13}
              defaultValue={5}
              onChange={(value) => console.log(value)}
            />
            <ul className="grid grid-cols-12 relative mt-8">
              <LiWrapper className="col">
                <span className="ml-[-10px]">1GB</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-10px]">2GB</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-10px]">3GB</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-10px]">4GB</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-10px]">5GB</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-10px]">6GB</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-10px]">7GB</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-10px]">8GB</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-10px]">9GB</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-10px]">10GB</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-10px]">11GB</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-10px]">12GB</span>
              </LiWrapper>
              <LiWrapper1 className="absolute right-0">
                <div className="relative">
                  <span className="absolute top-0 left-[-14px]">13GB</span>
                </div>
              </LiWrapper1>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-[18px] font-[500] mb-3">DISK :</h1>
          <div className="mb-12">
            <ReactSlider
              trackStyle={{ backgroundColor: "#e90e0e", height: "15px" }}
              railStyle={{ backgroundColor: "rgba(14,22,35)", height: "15px" }}
              handleStyle={{
                borderColor: "#e90e0e",
                height: 28,
                width: 28,
                marginTop: "-6px",
                backgroundColor: "#292f3a",
                opacity: 1,
              }}
              min={1}
              max={13}
              defaultValue={10}
              onChange={(value) => console.log(value)}
            />
            <ul className="grid grid-cols-12 relative mt-8">
              <LiWrapper className="col">
                <span className="ml-[-10px]">1GB</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-10px]">2GB</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-10px]">3GB</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-10px]">4GB</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-10px]">5GB</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-10px]">6GB</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-10px]">7GB</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-10px]">8GB</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-10px]">9GB</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-10px]">10GB</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-10px]">11GB</span>
              </LiWrapper>
              <LiWrapper className="col">
                <span className="ml-[-10px]">12GB</span>
              </LiWrapper>
              <LiWrapper1 className="absolute right-0">
                <div className="relative">
                  <span className="absolute top-0 left-[-14px]">13GB</span>
                </div>
              </LiWrapper1>
            </ul>
          </div>
        </div>
        <TabWrapper>
          <h1 className="text-[18px] font-[500] mb-3">
            Choose your server type :
          </h1>
          <Tabs>
            <TabList className="border-[#2D3747] border-b mb-5 flex px-2">
              <Tab className="focus-visible:outline-none border-transparent border rounded-t-[5px] mb-[-1px]">
                <h1 className="hover:text-[rgba(189,196,208,1)] hover:cursor-pointer px-[24px] py-[12px] text-[rgba(189,196,208,0.6)]">
                  Title 1
                </h1>
              </Tab>
              <Tab className="focus-visible:outline-none border-transparent border rounded-t-[5px] mb-[-1px]">
                <h1 className="hover:text-[rgba(189,196,208,1)] hover:cursor-pointer px-[24px] py-[12px] text-[rgba(189,196,208,0.6)]">
                  Title 2
                </h1>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="grid grid-cols-4">
                <div className="col px-3">
                  <div className="bg-[linear-gradient(180deg,#162032_0%,#161E2B_24%,#161E2B_100%)] border border-[#212A39] rounded-[6px] p-[46px_4px_60px_4px] text-center relative">
                    <img
                      src="/fragnet/modpack-atl.svg"
                      alt="modpack"
                      className="mx-auto"
                    />
                    <h1 className="mt-3 text-[18px] text-white ">ATLauncher</h1>
                    <span className="absolute w-full bottom-[12px] left-0 text-[12px] text-[#A6B1C5] opacity-[.66]">
                      Min 6GB Ram
                    </span>
                  </div>
                </div>
                <div className="col px-3">
                  <div className="bg-[linear-gradient(180deg,#162032_0%,#161E2B_24%,#161E2B_100%)] border border-[#212A39] rounded-[6px] p-[46px_4px_60px_4px] text-center relative">
                    <img
                      src="/fragnet/modpack-atl.svg"
                      alt="modpack"
                      className="mx-auto"
                    />
                    <h1 className="mt-3 text-[18px] text-white ">ATLauncher</h1>
                    <span className="absolute w-full bottom-[12px] left-0 text-[12px] text-[#A6B1C5] opacity-[.66]">
                      Min 6GB Ram
                    </span>
                  </div>
                </div>
                <div className="col px-3">
                  <div className="bg-[linear-gradient(180deg,#162032_0%,#161E2B_24%,#161E2B_100%)] border border-[#212A39] rounded-[6px] p-[46px_4px_60px_4px] text-center relative">
                    <img
                      src="/fragnet/modpack-atl.svg"
                      alt="modpack"
                      className="mx-auto"
                    />
                    <h1 className="mt-3 text-[18px] text-white ">ATLauncher</h1>
                    <span className="absolute w-full bottom-[12px] left-0 text-[12px] text-[#A6B1C5] opacity-[.66]">
                      Min 6GB Ram
                    </span>
                  </div>
                </div>
                <div className="col px-3">
                  <div className="bg-[linear-gradient(180deg,#162032_0%,#161E2B_24%,#161E2B_100%)] border border-[#212A39] rounded-[6px] p-[46px_4px_60px_4px] text-center relative">
                    <img
                      src="/fragnet/modpack-atl.svg"
                      alt="modpack"
                      className="mx-auto"
                    />
                    <h1 className="mt-3 text-[18px] text-white ">ATLauncher</h1>
                    <span className="absolute w-full bottom-[12px] left-0 text-[12px] text-[#A6B1C5] opacity-[.66]">
                      Min 6GB Ram
                    </span>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </TabWrapper>
      </div>
    </div>
  );
};

export default Capability;
