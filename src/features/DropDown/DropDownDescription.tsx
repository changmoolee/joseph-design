/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { layout, feature, description } from "../../styled";
import DropDownDemo from "./DropDownDemo";

const container = css`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
`;
const dropDownWidth = 200;

const title = "DropDown1";

const dropDownItems = ["Item1", "Item2", "Item3", "Item4", "Item5"];

const DropDownDescription = () => {
  return (
    <section css={layout}>
      <div css={feature}>
        <section css={container}>
          <DropDownDemo
            title={title}
            dropDownItems={dropDownItems}
            dropDownWidth={dropDownWidth}
          />
          <DropDownDemo
            title="DropDown2"
            dropDownItems={["Item1", "Item2", "Item3"]}
            dropDownWidth={300}
          />
        </section>
      </div>
      <div css={description}></div>
    </section>
  );
};

export default DropDownDescription;
