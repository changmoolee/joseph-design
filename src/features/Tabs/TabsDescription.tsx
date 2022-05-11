/** @jsxImportSource @emotion/react */

import TabsDemo from "./TabsDemo";
import { descContainer } from "../../styled";

const TabsDescription = () => {
  const tabs = ["tab1", "tab2", "tab3"];

  return (
    <div css={descContainer}>
      <TabsDemo tabs={tabs} />
    </div>
  );
};

export default TabsDescription;
