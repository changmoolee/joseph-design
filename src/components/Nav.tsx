/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Item from "./Item";

const contaniner = css`
  width: 300px;
  height: 100%;
`;

const features = [
  "Modal",
  "Tabs",
  "Tag",
  "Toggle",
  "AutoComplete",
  "Dropdown",
  "Drawer",
];

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
