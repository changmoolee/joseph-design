/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mainColor } from "../styled";
import { useNavigate } from "react-router-dom";

const container = css`
  width: 100%;
  height: 100px;
  background-color: ${mainColor};
`;

const layout = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 0 50px;
  background-color: red;
  box-sizing: border-box;
`;

const leftBox = css`
  display: flex;
`;

const menuBox = css`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const menu = css`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  list-style: none;
`;

const rightBox = css`
  display: flex;
`;

const Header = () => {
  const navigate = useNavigate();

  const goToDocs = () => {
    navigate("/docs");
  };
  const goToAboutJoseph = () => {
    navigate("/about");
  };

  return (
    <div css={container}>
      <section css={layout}>
        <div css={leftBox}>
          <a href="/">
            <div>Joseph's design</div>
          </a>
          <ul css={menuBox}>
            <li css={menu} onClick={goToDocs}>
              Docs
            </li>
            <li css={menu} onClick={goToAboutJoseph}>
              About joseph
            </li>
          </ul>
        </div>
        <div css={rightBox}></div>
      </section>
    </div>
  );
};

export default Header;
