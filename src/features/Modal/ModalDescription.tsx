/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import {
  layout,
  feature,
  description,
  mainColor,
  darkColor,
} from "../../styled";
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
    <section css={layout}>
      <div css={feature}>
        <ModalDemo open={isOpen} onClose={handleClose} />
        <button css={style.button} onClick={handleOpen}>
          modal
        </button>
      </div>
      <div css={description}></div>
    </section>
  );
};

export default ModalDescription;
