import React from "react";
import { I18n } from "react-redux-i18n";

const GameFeatures: React.FC = () => {
  return (
    <div className="w-full flex justify-center pt-[88px]">
      <div className="container max-w-[1280px]">
        <div className="w-full px-3">
          <div className="text-center pb-10">
            <h1 className="mb-4 md:text-[36px] text-[30px] uppercase font-[900] text-white text-center">
              {I18n.t("features")}
            </h1>
            <p className="max-w-[700px] mx-auto text-[18px]">
              {I18n.t("customizedSolutions")}
            </p>
          </div>
          <div className="max-w-[700px] mx-auto grid md:grid-cols-2 grid-cols-1 mb-16">
            <div className="col">
              <ul className="text-md">
                <li className="py-1 flex justify-center md:justify-start">
                  <img
                    src="/red-tick.png"
                    className="py-1 mr-2"
                    alt="red-tick"
                  />
                  <strong className="text-white mr-1">{I18n.t("low")}</strong>
                  {I18n.t("latencyNetworks")}
                </li>
                <li className="py-1 flex justify-center md:justify-start">
                  <img
                    src="/red-tick.png"
                    className="py-1 mr-2"
                    alt="red-tick"
                  />
                  <strong className="text-white mr-1">{I18n.t("free")}</strong>
                  {I18n.t("discordBot")}
                </li>
                <li className="py-1 flex justify-center md:justify-start">
                  <img
                    src="/red-tick.png"
                    className="py-1 mr-2"
                    alt="red-tick"
                  />
                  {I18n.t("moneyback")}
                </li>
              </ul>
            </div>
            <div className="col">
              <ul className="text-md">
                <li className="py-1 flex justify-center md:justify-start">
                  <img
                    src="/red-tick.png"
                    className="py-1 mr-2"
                    alt="red-tick"
                  />
                  <strong className="text-white mr-1">{I18n.t("instant")}</strong> {I18n.t("accountSetup")}
                </li>
                <li className="py-1 flex justify-center md:justify-start">
                  <img
                    src="/red-tick.png"
                    className="py-1 mr-2"
                    alt="red-tick"
                  />
                  <strong className="text-white mr-1">24/7</strong> {I18n.t("serverMonitoring")}
                </li>
                <li className="py-1 flex justify-center md:justify-start">
                  <img
                    src="/red-tick.png"
                    className="py-1 mr-2"
                    alt="red-tick"
                  />
                  <strong className="text-white mr-1">{I18n.t("easyToUse")}</strong> {I18n.t("gamePanel")}
                </li>
              </ul>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 ">
            <div className="text-center px-[32px] pb-[54px]">
              <img className="mx-auto" src="/sla.png" alt="SLA" />
              <h1 className="uppercase text-[18px] text-white font-bold pt-6 pb-1">
                {I18n.t("satisfactionGuarantee")}
              </h1>
              <p>{I18n.t("satisfactionGuaranteeDescription")}</p>
            </div>
            <div className="text-center px-[32px] pb-[54px]">
              <img
                className="mx-auto"
                src="/enterprise-hardware.png"
                alt="Enterprise Hardware"
              />
              <h1 className="uppercase text-[18px] text-white font-bold pt-6 pb-1">
                {I18n.t("powerfulHardware")}
              </h1>
              <p>
                {I18n.t("powerfulHardwareDescription")}{" "}
                <a
                  className="text-[#e90e0e] font-bold"
                  href="https://ark.intel.com/content/www/us/en/ark/products/193743/intel-xeon-e-2288g-processor-16m-cache-3-70-ghz.html"
                >
                  E-2288G
                </a>{" "}
                {I18n.t("or")}{" "}
                <a
                  className="text-[#e90e0e] font-bold"
                  href="https://ark.intel.com/content/www/us/en/ark/products/186605/intel-core-i9-9900k-processor-16m-cache-up-to-5-00-ghz.html"
                >
                  i9-9900K
                </a>{" "}
                {I18n.t("aswellas")}{" "}
                <a
                  className="text-[#e90e0e] font-bold"
                  href="https://www.amd.com/en/products/cpu/amd-ryzen-7-3800x"
                >
                  Ryzen 7 3800X
                </a>
                ! {I18n.t("ddr3toDdr4")}
              </p>
            </div>
            <div className="text-center px-[32px] pb-[54px]">
              <img
                className="mx-auto"
                src="/instant-setup.png"
                alt="Instant Setup"
              />
              <h1 className="uppercase text-[18px] text-white font-bold pt-6 pb-1">
                {I18n.t("instantSetup")}
              </h1>
              <p>{I18n.t("instantSetupDescription")}</p>
            </div>
            <div className="text-center px-[32px] pb-[54px]">
              <img
                className="mx-auto"
                src="/control-panel.png"
                alt="Control Panel"
              />
              <h1 className="uppercase text-[18px] text-white font-bold pt-6 pb-1">
                {I18n.t("controlPanel")}
              </h1>
              <p>{I18n.t("controlPanelDescription")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameFeatures;
