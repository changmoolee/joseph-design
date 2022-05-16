/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { descContainer, lightColor } from "../../styled";
import { useState } from "react";
import SlideToastDemo from "./SlideToastDemo";
import PositionedToastDemo from "./PositionedToastDemo";

const button = css`
  width: 150px;
  height: 50px;
  margin: 10px;
  border: none;
  border-radius: 10px;
  background-color: ${lightColor};
  color: white;
`;

const ToastDescription = () => {
  const [isSlideToastOn, setIsSlideToastOn] = useState(false);

  const slideToastOpen = () => {
    setIsSlideToastOn(true);
  };

  const slideToastClose = () => {
    setIsSlideToastOn(false);
  };

  const [isPositionedToastOn, setIsPositionedToastOn] = useState(false);

  const positionedToastOpen = () => {
    setIsPositionedToastOn(true);
  };

  const positionedToastClose = () => {
    setIsPositionedToastOn(false);
  };

  return (
    <div css={descContainer}>
      <button css={button} onClick={slideToastOpen}>
        slideToast
      </button>
      <button css={button} onClick={positionedToastOpen}>
        positionedToast
      </button>
      <SlideToastDemo
        width={200}
        description="slide Toast!"
        color="black"
        open={isSlideToastOn}
        onClose={slideToastClose}
      />
      <PositionedToastDemo
        width={300}
        description="This Toast is positioned."
        color="blue"
        open={isPositionedToastOn}
        onClose={positionedToastClose}
      />
    </div>
  );
};

export default ToastDescription;
