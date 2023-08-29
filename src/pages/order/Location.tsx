import React, { useState, useEffect, useRef } from "react";
import { fetchLocations } from "../../utils";
import { Location } from "../../types";
import "./Location.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faGauge,
  faGaugeHigh,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

interface Latency {
  [key: string]: number[];
}

interface CheckingLatency {
  [key: string]: boolean;
}

function LatencyCheckPage() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [latency, setLatency] = useState<Latency>({});
  const [checkingLatency, setCheckingLatency] = useState<CheckingLatency>({});
  const [visibleLocations, setVisibleLocations] = useState<Location[]>([]);
  const webSocketRefs = useRef<WebSocket[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const toggleLocationSelection = (shortCode: string) => {
    if (selectedLocation === shortCode) {
      setSelectedLocation(null);
    } else {
      setSelectedLocation(shortCode);
    }
  };

  const getLatencyColor = (latency: number | null) => {
    if (latency === null) {
      return "grey";
    } else if (latency <= 79) {
      return "green";
    } else if (latency <= 100) {
      return "yellow";
    } else {
      return "red";
    }
  };

  const getLatencyIcon = (latency: number | null) => {
    if (latency === null) {
      return faSpinner;
    } else if (latency <= 79) {
      return faGaugeHigh;
    } else if (latency <= 100) {
      return faGauge;
    } else {
      return faSpinner;
    }
  };

  useEffect(() => {
    fetchLocations().then((res: Location[]) => {
      setLocations(res);
      setVisibleLocations(res.slice(0, 8));
      const initialLatencyState = res.reduce(
        (acc: Latency, location: Location) => {
          acc[location.ping_site] = [];
          return acc;
        },
        {}
      );
      const initialCheckingLatencyState = res.reduce(
        (acc: CheckingLatency, location: Location) => {
          acc[location.ping_site] = true;
          return acc;
        },
        {}
      );
      setLatency(initialLatencyState);
      setCheckingLatency(initialCheckingLatencyState);
    });
  }, []);

  useEffect(() => {
    webSocketRefs.current.forEach((ws: WebSocket) => ws.close());
    webSocketRefs.current = [];

    visibleLocations.forEach((location: Location) => {
      const ws = new WebSocket(location.ping_site);
      ws.onopen = () => {
        for (let i = 0; i < 5; i++) {
          setTimeout(() => {
            if (ws.readyState === WebSocket.OPEN) {
              const startTime = Date.now();
              ws.send(JSON.stringify({ cmd: "ping" }));

              ws.onmessage = (e) => {
                const data = JSON.parse(e.data);

                if (data.cmd === "pong") {
                  const latencyTime = Math.round(Date.now() - startTime);
                  setLatency((prevLatency: Latency) => {
                    const newLatency = {
                      ...prevLatency,
                      [location.ping_site]: [
                        ...prevLatency[location.ping_site],
                        latencyTime,
                      ],
                    };

                    // All ping messages have been responded to
                    if (newLatency[location.ping_site].length === 5) {
                      setCheckingLatency((prevCheckingLatency) => {
                        const newCheckingLatency = {
                          ...prevCheckingLatency,
                          [location.ping_site]: false,
                        };

                        // All latencies for current location checked, now sort
                        const sorted = [...visibleLocations].sort((a, b) => {
                          const avgLatencyA =
                            newLatency[a.ping_site] &&
                            newLatency[a.ping_site].length
                              ? newLatency[a.ping_site].reduce(
                                  (sum, l) => sum + l,
                                  0
                                ) / newLatency[a.ping_site].length
                              : Infinity;
                          const avgLatencyB =
                            newLatency[b.ping_site] &&
                            newLatency[b.ping_site].length
                              ? newLatency[b.ping_site].reduce(
                                  (sum, l) => sum + l,
                                  0
                                ) / newLatency[b.ping_site].length
                              : Infinity;

                          return avgLatencyA - avgLatencyB;
                        });
                        setVisibleLocations(sorted);

                        return newCheckingLatency;
                      });
                    }
                    return newLatency;
                  });
                }
              };
            }
          }, 500 * i);
        }
      };
      webSocketRefs.current.push(ws);
    });

    return () => webSocketRefs.current.forEach((ws: WebSocket) => ws.close());
  }, [visibleLocations]);

  const loadMoreLocations = () => {
    const moreLocations = locations.slice(
      visibleLocations.length,
      visibleLocations.length + 8
    );
    setVisibleLocations((prev) => [...prev, ...moreLocations]);
  };

  return (
    <div className="relative h-auto mb-12">
      <div className="ml-8">
        <h1 className="inline-flex uppercase font-[600] text-[22px] text-white items-center">
          <div className="h-[44px] skew-x-[-15deg] text-center leading-[44px] w-[48px] text-white rounded-[6px] bg-[#e90e0e] bg-[linear-gradient(134deg,#e90e0e_0%,#e92e1e_100%)] shadow-[0_2px_4px_0_rgba(0,0,0,0.69),inset_0_-2px_2px_0_rgba(55,0,0,0.20)] uppercase text-[24px] font-[600] mr-[24px]">
            <div className="skew-x-[15deg]"><span>1</span></div>
          </div>
          Choose location
        </h1>
      </div>
      <div className="location-grid">
        {visibleLocations.map((location, i) => {
          const latencies = latency[location.ping_site];
          const avgLatency =
            latencies && latencies.length
              ? Math.round(latencies.reduce((a, b) => a + b) / latencies.length)
              : null;
          const isSelected = selectedLocation === location.short_code;

          return (
            <div
              key={i}
              className={`card bg-black/80 ${isSelected ? "bg-black/100" : ""}`}
              onClick={() => toggleLocationSelection(location.short_code)}
            >
              <img
                src={"https://cdn.fragify.net/images/blank.png"}
                alt={location.country}
                className={`flag-${location.short_code}`}
                height={20}
                width={30}
              />
              <h2>
                {location.city}, {location.country}
              </h2>
              <div style={{ color: getLatencyColor(avgLatency) }}>
                {avgLatency !== null
                  ? avgLatency
                  : checkingLatency[location.ping_site]
                  ? "Checking..."
                  : "No Data"}
              </div>
            </div>
          );
        })}
      </div>
      {locations.length > visibleLocations.length && (
        <button className="bg-[#e90e0e] ml-8 font-[600] text-[16px]" onClick={loadMoreLocations}>
          Load More Locations <FontAwesomeIcon icon={faChevronDown} />
        </button>
      )}
    </div>
  );
}

export default LatencyCheckPage;
