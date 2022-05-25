/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { layout, feature, description } from "../../styled";
import ToggleDemo from "./ToggleDemo";

const ToggleDescription = () => {
  const height = 50;

  return (
    <section css={layout}>
      <div css={feature}>
        <ToggleDemo height={height} />
      </div>
      <div css={description}></div>
    </section>
  );
};

export default ToggleDescription;
