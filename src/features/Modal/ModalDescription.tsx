/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { descContainer, mainColor, darkColor } from "../../styled";
import ModalDemo from "./ModalDemo";

const style = {
  button: css`
    width: 200px;
    height: 50px;
    border-radius: 10px;
    background-color: ${mainColor};
    font-size: 24px;
    color: white;
    box-shadow: 1px 1px 1px 2px ${darkColor};
    :active {
      left: 1px;
      box-shadow: 0 0 1px 2px ${darkColor};
    }
  `,
};

const ModalDescription = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div css={descContainer}>
      <ModalDemo isOpen={isOpen} handleClose={handleClose} />
      <button css={style.button} onClick={handleOpen}>
        modal
      </button>
    </div>
  );
};

export default ModalDescription;
