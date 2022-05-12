/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { subColor } from "../styled";

const container = css`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${subColor};
  border: 1px solid black;
`;

interface ItemProps {
  feature: string;
}

const Item = ({ feature }: ItemProps) => {
  return (
    <Link to={`${feature}`} style={{ textDecoration: "none" }}>
      <div css={container}>{feature}</div>
    </Link>
  );
};

export default Item;
