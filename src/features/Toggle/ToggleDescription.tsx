/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { descContainer } from "../../styled";
import ToggleDemo from "./ToggleDemo";

const ToggleDescription = () => {
  const height = 50;

  return (
    <div css={descContainer}>
      <ToggleDemo height={height} />
    </div>
  );
};

export default ToggleDescription;
