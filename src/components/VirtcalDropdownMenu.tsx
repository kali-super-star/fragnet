import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

type MenuItem = {
  label: string | JSX.Element;
  url: string;
};

type VerticalDropdownMenuProps = {
  menuName: string | JSX.Element;
  items: MenuItem[];
};

const VerticalDropdownMenu: React.FC<VerticalDropdownMenuProps> = ({
  items,
  menuName,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setTimeout(setIsOpen, 200, false);
  };

  return (
    <li
      className="hidden lg:flex flex-row items-center px-[10px] relative"
      onBlur={() => {
        setTimeout(setIsOpen, 200, false);
      }}
    >
      <div className="flex flex-row items-center">
        <button
          type="button"
          className={`font-proxima-nova text-[14px] uppercase ${
            isOpen ? "text-red-700 font-bold" : "text-white font-medium"
          } flex flex-row items-center p-0`}
          onClick={handleToggle}
        >
          {menuName}
        </button>
        <div className="w-4 h-4 transform rotate-270 ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`text-${
              isOpen ? "red-700 font-bold" : "white font-medium"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-5 z-16 mt-[15px] ml-[-15px] w-40 bg-[#0d111b] rounded-md shadow-lg border-[6px] border-[#151d31] min-w-[200px]">
          <FontAwesomeIcon
            icon={faDiamond}
            color="white"
            style={{
              height: "14px",
              width: "14px",
              left: "45%",
              top: "-15px",
              position: "absolute",
            }}
          />
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.url}
              className="block px-4 py-2 text-white font-proxima-nova font-medium text-[16px] hover:bg-[#e90f0e66] hover:border-spacing-1 hover:rounded-sm"
              onClick={handleItemClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};

export default VerticalDropdownMenu;
