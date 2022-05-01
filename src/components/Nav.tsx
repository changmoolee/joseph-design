/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Item from "./Item";

const contaniner = css`
  width: 300px;
  height: 100%;
  border: 1px solid black;
`;

const Nav = () => {
  const items = Array(10).fill(0);
  return (
    <div css={contaniner}>
      {items.map((item, index) => (
        <Item key={index} />
      ))}
    </div>
  );
};

export default Nav;
