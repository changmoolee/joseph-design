/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import ModalDemo from "./ModalDemo";
import { descContainer } from "../../styled";

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
    <div css={descContainer}>
      <ModalDemo isOpen={isOpen} handleClose={handleClose} />
      <button onClick={handleOpen}>modal</button>
    </div>
  );
};

export default ModalDescription;
