/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import AutoCompleteDescription from "../features/AutoComplete/AutoCompleteDescription";
import DrawerDescription from "../features/Drawer/DrawerDescription";
import DropDownDescription from "../features/DropDown/DropDownDescription";
import ModalDescription from "../features/Modal/ModalDescription";
import TabsDescription from "../features/Tabs/TabsDescription";
import TagDescription from "../features/Tag/TagDescription";
import ToggleDescription from "../features/Toggle/ToggleDescription";
import ToastDescription from "../features/Toast/ToastDescription";
import SkeletonUIDescription from "../features/SkeletonUI/SkeletonUIDescription";

const container = css`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Article = () => {
  return (
    <div css={container}>
      <Routes>
        <Route path="/Modal" element={<ModalDescription />} />
        <Route path="/Tabs" element={<TabsDescription />} />
        <Route path="/Tag" element={<TagDescription />} />
        <Route path="/Toggle" element={<ToggleDescription />} />
        <Route path="/AutoComplete" element={<AutoCompleteDescription />} />
        <Route path="/DropDown" element={<DropDownDescription />} />
        <Route path="/Drawer" element={<DrawerDescription />} />
        <Route path="/Toast" element={<ToastDescription />} />
        <Route path="/SkeletonUI" element={<SkeletonUIDescription />} />
      </Routes>
    </div>
  );
};

export default Article;
