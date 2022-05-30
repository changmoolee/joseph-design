/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Item from "./Item";

const contaniner = css`
  min-width: 300px;
  height: 100%;
`;

const features = [
  "modal",
  "tabs",
  "tag",
  "toggle",
  "autoComplete",
  "dropdown",
  "drawer",
  "toast",
  "skeletonui",
  "transferlist",
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
