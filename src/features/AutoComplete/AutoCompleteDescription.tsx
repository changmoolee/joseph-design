/** @jsxImportSource @emotion/react */
import React from "react";
import { descContainer } from "../../styled";
import AutoCompleteDemo from "./AutoCompleteDemo";

const AutoCompleteDescription = () => {
  const items = ["apple", "butter", "banana", "orange"];

  return (
    <div css={descContainer}>
      <AutoCompleteDemo items={items} />
    </div>
  );
};

export default AutoCompleteDescription;
