/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { darkColor, lightColor } from "../../styled";

const container = css`
  position: relative;
  width: inherit;
  height: inherit;
`;

const tab = (isHover: boolean) => css`
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${darkColor};
  cursor: pointer;
  span {
    opacity: ${isHover ? 1 : 0.5};
    :hover {
      opacity: 1;
    }
  }
`;

const dropDown = (dropDownWidth: number) =>
  css`
    position: absolute;
    width: ${dropDownWidth}px;
    background-color: ${lightColor};
    z-index: 100;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      border: 1px solid black;
      color: white;
      box-sizing: border-box;
      opacity: 0.5;
      cursor: pointer;
      :hover {
        opacity: 1;
      }
    }
  `;
type DropDownProps = {
  title: string;
  dropDownItems: string[];
  dropDownWidth: number;
};

const DropDownDemo = ({
  title,
  dropDownItems,
  dropDownWidth,
}: DropDownProps) => {
  const [isHover, setIsHover] = useState(false);

  const onMouseButtonEnter = () => {
    setIsHover(true);
  };

  const onMouseButtonLeave = () => {
    setIsHover(false);
  };

  return (
    <section css={container}>
      <button
        css={tab(isHover)}
        onMouseEnter={onMouseButtonEnter}
        onMouseLeave={onMouseButtonLeave}
      >
        <span>{title}</span>
      </button>
      {isHover ? (
        <div
          css={dropDown(dropDownWidth)}
          onMouseEnter={onMouseButtonEnter}
          onMouseLeave={onMouseButtonLeave}
        >
          {dropDownItems.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default DropDownDemo;
