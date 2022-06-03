/** @jsxImportSource @emotion/react */
import { layout, feature, description } from "../../styled";
import TransferListDemo from "./TransferListDemo";

const TransferListDescription = () => {
  const leftTitle = "Card1";
  const rightTitle = "Card2";
  const leftItemlist = ["item1", "item2", "item3", "item4", "item5"];
  // You have to make unique, inon-overlapping name.
  const rightItemlist = ["item6", "item7", "item8", "item9", "item10"];
  // You have to make unique, inon-overlapping name.

  return (
    <section css={layout}>
      <div css={feature}>
        <TransferListDemo
          leftTitle={leftTitle}
          rightTitle={rightTitle}
          leftItemlist={leftItemlist}
          rightItemlist={rightItemlist}
        />
      </div>
      <div css={description}></div>
    </section>
  );
};

export default TransferListDescription;
