/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const container = css`
  width: 100%;
  height: 50px;
  border: 1px solid black;
`;

const Item = () => {
  return <div css={container}>Item</div>;
};

export default Item;
