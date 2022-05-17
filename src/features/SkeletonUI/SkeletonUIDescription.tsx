/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { descContainer } from "../../styled";
import SkeletonUIDemo from "./SkeletonUIDemo";

const layout = css`
  width: 500px;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  font-size: 24px;
  box-sizing: border-box;
`;

const rectangleExample = css`
  width: 200px;
  height: 50px;
`;

const squareExample = css`
  width: 100px;
  height: 100px;
`;

const circleExample = css`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const SkeletonUIDescription = () => {
  return (
    <div css={descContainer}>
      <section css={layout}>
        Rectangle :
        <SkeletonUIDemo>
          <div css={rectangleExample}></div>
        </SkeletonUIDemo>
        Square :
        <SkeletonUIDemo>
          <div css={squareExample}></div>
        </SkeletonUIDemo>
        Circle :
        <SkeletonUIDemo>
          <div css={circleExample}></div>
        </SkeletonUIDemo>
      </section>
    </div>
  );
};

export default SkeletonUIDescription;
