/** @jsxImportSource @emotion/react */
import { layout, feature, description } from "../../styled";
import AutoCompleteDemo from "./AutoCompleteDemo";

const AutoCompleteDescription = () => {
  const items = ["apple", "butter", "banana", "orange"];

  return (
    <section css={layout}>
      <div css={feature}>
        <AutoCompleteDemo items={items} />
      </div>
      <div css={description}></div>
    </section>
  );
};

export default AutoCompleteDescription;
