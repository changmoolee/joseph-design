/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { layout, feature, description } from "../../styled";
import TransferListDemo from "./TransferListDemo";

const TransferListDescription = () => {
  return (
    <section css={layout}>
      <div css={feature}>
        <TransferListDemo />
      </div>
      <div css={description}></div>
    </section>
  );
};

export default TransferListDescription;
