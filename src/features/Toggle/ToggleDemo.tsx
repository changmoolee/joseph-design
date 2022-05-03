/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";

const container = (height: number, toggleOn: boolean) => {
  return css`
    width: ${height * 2}px;
    height: ${height}px;
    display: flex;
    align-items: center;
    padding: ${height / 10}px;
    border-radius: ${height / 1.5}px;
    background-color: ${toggleOn ? "#2f568a" : "#569eff"};
    div {
      width: ${height}px;
      height: ${height}px;
      border-radius: 50%;
      transform: ${toggleOn ? `translate(100%, 0)` : "translate(0 , 0)"};
      transition: 0.3s;
      background-color: white;
    }
  `;
};

type ToggleProps = {
  height: number;
};

const ToggleDemo = ({ height }: ToggleProps) => {
  const [toggleOn, setToggleOn] = useState<boolean>(false);

  const handleClick = () => {
    setToggleOn((toggleOn) => !toggleOn);
  };

  return (
    <div css={container(height, toggleOn)} onClick={handleClick}>
      <div />
    </div>
  );
};

export default ToggleDemo;
