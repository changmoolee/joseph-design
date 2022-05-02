/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ModalDescription from "../features/Modal/ModalDescription";
import Intro from "./Intro";

const container = css`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Article = () => {
  return (
    <div css={container}>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Modal" element={<ModalDescription />} />
      </Routes>
    </div>
  );
};

export default Article;
