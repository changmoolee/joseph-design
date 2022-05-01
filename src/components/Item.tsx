/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Link } from "react-router-dom";

const container = css`
  width: 100%;
  height: 50px;
  border: 1px solid black;
`;

interface ItemProps {
  feature: string;
}

const Item = ({ feature }: ItemProps) => {
  return (
    <Link to={`${feature}`}>
      <div css={container}>{feature}</div>
    </Link>
  );
};

export default Item;
