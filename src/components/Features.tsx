import React from "react";
import { I18n } from "react-redux-i18n";

const Features: React.FC = () => {
  return (
    <div className="w-full flex justify-center pt-[88px]">
      <div className="container max-w-[1280px]">
        <div className="w-full px-3">
          <div className="text-center pb-10">
            <h1 className="mb-4 md:text-[36px] text-[30px] uppercase font-[900] text-white text-center">
              {I18n.t("whyFragnet")}
            </h1>
            <p className="max-w-[700px] mx-auto text-[18px]">
              {I18n.t("FragnetDescription")}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 ">
            <div className="text-center px-[32px] pb-[54px]">
              <img className="mx-auto" src="/fragnet/sla.png" alt="SLA" />
              <h1 className="uppercase text-[18px] text-white font-bold pt-6 pb-1">
                {I18n.t("satisfactionGuarantee")}
              </h1>
              <p>{I18n.t("satisfactionGuaranteeDescription")}</p>
            </div>
            <div className="text-center px-[32px] pb-[54px]">
              <img
                className="mx-auto"
                src="/fragnet/enterprise-hardware.png"
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
                src="/fragnet/instant-setup.png"
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
                src="/fragnet/server-monitoring.png"
                alt="Server Monitoring"
              />
              <h1 className="uppercase text-[18px] text-white font-bold pt-6 pb-1">
                {I18n.t("serverMonitoring")}
              </h1>
              <p>
                {I18n.t("withthehelpof")}{" "}
                <a
                  className="text-[#e90e0e] font-bold"
                  href="https://prometheus.io/"
                >
                  Prometheus
                </a>
                , {I18n.t("serverMonitoringDescription")}
              </p>
            </div>
            <div className="text-center px-[32px] pb-[54px]">
              <img
                className="mx-auto"
                src="/fragnet/gaming-networks.png"
                alt="Gaming Networks"
              />
              <h1 className="uppercase text-[18px] text-white font-bold pt-6 pb-1">
                {I18n.t("gamingNetworks")}
              </h1>
              <p>{I18n.t("gamingNetworksDescription")}</p>
            </div>
            <div className="text-center px-[32px] pb-[54px]">
              <img
                className="mx-auto"
                src="/fragnet/control-panel.png"
                alt="Control Panel"
              />
              <h1 className="uppercase text-[18px] text-white font-bold pt-6 pb-1">
                {I18n.t("controlPanel")}
              </h1>
              <p>
                {I18n.t('controlPanelDescription')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
