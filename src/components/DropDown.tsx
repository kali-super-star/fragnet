import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const slideIn = keyframes`
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownContent = styled.div`
  animation: ${slideIn} 1s;
`;

interface DropDownProps {
  title: String;
  children: React.ReactNode;
}

const Dropdown = (props: DropDownProps) => {
  const { title, ...restProps } = props;
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768 ? true : false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer {...restProps}>
      <h2
        className="text-white text-[16px] uppercase font-bold mt-3 hover:text-red-600"
        onClick={toggleDropdown}
      >
        {title}{" "}
        <FontAwesomeIcon icon={faChevronDown} />
      </h2>
      {isOpen && <DropdownContent>{props.children}</DropdownContent>}
    </DropdownContainer>
  );
};

export default Dropdown;
