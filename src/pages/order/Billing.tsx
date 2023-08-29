import React from "react";

const Billing = () => {
  return (
    <div className="ml-8">
      <div className="mb-10">
        <h1 className="inline-flex uppercase font-[600] text-[22px] text-white items-center">
          <div className="h-[44px] skew-x-[-15deg] text-center leading-[44px] w-[48px] text-white rounded-[6px] bg-[#e90e0e] bg-[linear-gradient(134deg,#e90e0e_0%,#e90e0e_100%)] shadow-[0_2px_4px_0_rgba(0,0,0,0.69),inset_0_-2px_2px_0_rgba(55,0,0,0.20)] uppercase text-[24px] font-[600] mr-[24px]">
            <div className="skew-x-[15deg]"><span>3</span></div>
          </div>
          Billing cycle
        </h1>
      </div>
      <div className="grid grid-cols-4 mb-12">
        <div className="col px-3">
          <div className="bg-[linear-gradient(180deg,#162032_0%,#161E2B_24%,#161E2B_100%)] border border-[#212A39] rounded-[6px] p-[46px_4px_60px_4px] text-center relative">
            <h1 className="text-[18px] font-[600]">Monthly</h1>
            <div className="inline-block mb-3 rounded-[3px] mt-3 text-white bg-[#293446] skew-x-[-15deg] text-[12px] font-[600] px-[12px] shadow-[0_1px_2px_0_rgba(0,0,0,0.79),inset_0_-1px_1px_0_rgba(55,0,0,0.25)]">
              <div className="py-[3px] skew-x-[15deg]"><span className="uppercase">No discount</span></div>
            </div>
            <h3 className="text-[24px] font-[700]">$2.00</h3>
            <span className="text-[16px] font-[600] ">/month</span>
            <span className="absolute bottom-[12px] left-0 text-center text-[12px] text-[#A6B1C5] opacity-[.66] w-full">Billed monthly</span>
          </div>
        </div>
        <div className="col px-3">
          <div className="bg-[linear-gradient(180deg,#162032_0%,#161E2B_24%,#161E2B_100%)] border border-[#212A39] rounded-[6px] p-[46px_4px_60px_4px] text-center relative">
            <h1 className="text-[18px] font-[600]">Monthly</h1>
            <div className="mb-3 rounded-[3px] mt-3 text-white bg-[#293446] skew-x-[-15deg] text-[12px] font-[600] inline-block px-[12px] shadow-[0_1px_2px_0_rgba(0,0,0,0.79),inset_0_-1px_1px_0_rgba(55,0,0,0.25)]">
              <div className="py-[3px] skew-x-[15deg]"><span className="uppercase">No discount</span></div>
            </div>
            <h3 className="text-[24px] font-[700]">$2.00</h3>
            <span className="text-[16px] font-[600] ">/month</span>
            <span className="absolute bottom-[12px] left-0 text-center text-[12px] text-[#A6B1C5] opacity-[.66] w-full">Billed monthly</span>
          </div>
        </div>
        <div className="col px-3">
          <div className="bg-[linear-gradient(180deg,#162032_0%,#161E2B_24%,#161E2B_100%)] border border-[#212A39] rounded-[6px] p-[46px_4px_60px_4px] text-center relative">
            <h1 className="text-[18px] font-[600]">Monthly</h1>
            <div className="mb-3 rounded-[3px] mt-3 text-white bg-[#293446] skew-x-[-15deg] text-[12px] font-[600] inline-block px-[12px] shadow-[0_1px_2px_0_rgba(0,0,0,0.79),inset_0_-1px_1px_0_rgba(55,0,0,0.25)]">
              <div className="py-[3px] skew-x-[15deg]"><span className="uppercase">No discount</span></div>
            </div>
            <h3 className="text-[24px] font-[700]">$2.00</h3>
            <span className="text-[16px] font-[600] ">/month</span>
            <span className="absolute bottom-[12px] left-0 text-center text-[12px] text-[#A6B1C5] opacity-[.66] w-full">Billed monthly</span>
          </div>
        </div>
        <div className="col px-3">
          <div className="bg-[linear-gradient(180deg,#162032_0%,#161E2B_24%,#161E2B_100%)] border border-[#212A39] rounded-[6px] p-[46px_4px_60px_4px] text-center relative">
            <h1 className="text-[18px] font-[600]">Monthly</h1>
            <div className="mb-3 rounded-[3px] mt-3 text-white bg-[#293446] skew-x-[-15deg] text-[12px] font-[600] inline-block px-[12px] shadow-[0_1px_2px_0_rgba(0,0,0,0.79),inset_0_-1px_1px_0_rgba(55,0,0,0.25)]">
              <div className="py-[3px] skew-x-[15deg]"><span className="uppercase">No discount</span></div>
            </div>
            <h3 className="text-[24px] font-[700]">$2.00</h3>
            <span className="text-[16px] font-[600] ">/month</span>
            <span className="absolute bottom-[12px] left-0 text-center text-[12px] text-[#A6B1C5] opacity-[.66] w-full">Billed monthly</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
