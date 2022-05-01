/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import ModalDemo from "./ModalDemo";

const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalDescription = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    console.log("close");
  };
  const handleOpen = () => {
    setIsOpen(true);
    console.log("open");
  };

  return (
    <div css={container}>
      <ModalDemo isOpen={isOpen} handleClose={handleClose} />
      <button onClick={handleOpen}>modal</button>
    </div>
  );
};

export default ModalDescription;
