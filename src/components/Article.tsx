/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import AutoCompleteDescription from "../features/AutoComplete/AutoCompleteDescription";
import ModalDescription from "../features/Modal/ModalDescription";
import TabsDescription from "../features/Tabs/TabsDescription";
import TagDescription from "../features/Tag/TagDescription";
import ToggleDescription from "../features/Toggle/ToggleDescription";
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
        <Route path="/Tabs" element={<TabsDescription />} />
        <Route path="/Tag" element={<TagDescription />} />
        <Route path="/Toggle" element={<ToggleDescription />} />
        <Route path="/AutoComplete" element={<AutoCompleteDescription />} />
      </Routes>
    </div>
  );
};

export default Article;
