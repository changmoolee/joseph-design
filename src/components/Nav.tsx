/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Item from "./Item";

const contaniner = css`
  width: 300px;
  height: 100%;
  border: 1px solid black;
`;

const features = ["Modal", "Tabs"];

const Nav = () => {
  return (
    <div css={contaniner}>
      {features.map((feature) => (
        <Item key={feature} feature={feature} />
      ))}
    </div>
  );
};

export default Nav;