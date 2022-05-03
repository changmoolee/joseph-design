/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const container = css`
  position: relative;
`;

const inputContainer = css`
  width: 400px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid black;
  border-radius: 20px;
  box-sizing: border-box;
  z-index: 100;
  input {
    width: 100%;
    border: none;
    outline: none;
    z-index: 100;
  }
`;

const suggestions = css`
  position: absolute;
  width: 100%;
  padding: 50px 10px 10px 10px;
  margin-top: -40px;
  border: 1px solid black;
  border-top: none;
  border-radius: 20px;
  box-sizing: border-box;
  z-index: 99;
`;

const suggestion = css`
  :hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
type AutoCompleteProps = {
  items: Array<string>;
};

const AutoCompleteDemo = ({ items }: AutoCompleteProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const filtered = items.filter((item) => item.includes(inputValue));

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };
  const handleClose = () => {
    setInputValue("");
  };
  const handleValue = (text: string) => {
    setInputValue(text);
  };

  return (
    <div css={container}>
      <div css={inputContainer}>
        <input
          value={inputValue}
          onChange={(e) => handleChange(e)}
          placeholder="Please search here."
        />
        <FontAwesomeIcon
          icon={faX}
          style={{ cursor: "pointer", zIndex: "100" }}
          onClick={handleClose}
        />
      </div>
      {inputValue && (
        <section css={suggestions}>
          {filtered.map((item, index) => (
            <div key={index} css={suggestion} onClick={() => handleValue(item)}>
              {item}
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default AutoCompleteDemo;
