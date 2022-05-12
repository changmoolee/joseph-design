/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { darkColor, lightColor } from "../../styled";

const box = css`
  width: 400px;
  height: 50px;
  display: flex;
  background-color: ${darkColor};
`;
const item = (clicked: number, index: number) => {
  return css`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: ${clicked === index ? `4px solid ${lightColor}` : null};
    span {
      margin-bottom: ${clicked === index ? "-4px" : "0"};
      opacity: ${clicked === index ? "1" : "0.5"};
    }
    :hover {
      border-bottom: 4px solid ${lightColor};
      span {
        margin-bottom: -4px;
        opacity: 1;
      }
    }
  `;
};

const text = css`
  color: white;
  opacity: 0.5;
`;

type TabsProps = {
  tabs: string[];
};

const TabsDemo = ({ tabs }: TabsProps) => {
  const [clicked, setClicked] = useState<number>(tabs.length);

  const handleClick = (index: number) => {
    setClicked(index);
  };

  return (
    <section css={box}>
      {tabs.map((tab, index) => (
        <div
          key={tab}
          css={item(clicked, index)}
          onClick={() => handleClick(index)}
        >
          <span css={text}>{tab}</span>
        </div>
      ))}
    </section>
  );
};

export default TabsDemo;
