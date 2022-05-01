/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import ModalDescription from "../features/Modal/ModalDescription";

const container = css`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Article = () => {
  return (
    <div css={container}>
      Article
      <ModalDescription />
    </div>
  );
};

export default Article;
