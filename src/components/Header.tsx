/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mainColor } from "../styled";

const container = css`
  width: 100%;
  height: 100px;
  background-color: ${mainColor};
`;

const Header = () => {
  return <div css={container}>Header</div>;
};

export default Header;
