/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const container = css`
  width: 100%;
  height: 100px;
  border: 1px solid black;
`;

const Header = () => {
  return <div css={container}>Header</div>;
};

export default Header;
