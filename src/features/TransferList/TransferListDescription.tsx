/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { layout, feature, description } from "../../styled";
import TransferListDemo from "./TransferListDemo";

const TransferListDescription = () => {
  const itemlist1 = ["item1", "item2", "item3", "item4", "item5"];
  const itemlist2 = ["item6", "item7", "item8", "item9", "item10"];

  return (
    <section css={layout}>
      <div css={feature}>
        <TransferListDemo itemlist1={itemlist1} itemlist2={itemlist2} />
      </div>
      <div css={description}></div>
    </section>
  );
};

export default TransferListDescription;
