/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const container = css`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Article = () => {
  return <div css={container}>Article</div>;
};

export default Article;
