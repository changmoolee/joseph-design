/** @jsxImportSource @emotion/react */
import TabsDemo from "./TabsDemo";
import { layout, feature, description } from "../../styled";

const TabsDescription = () => {
  const tabs = ["tab1", "tab2", "tab3"];

  return (
    <section css={layout}>
      <div css={feature}>
        <TabsDemo tabs={tabs} />
      </div>
      <div css={description}></div>
    </section>
  );
};

export default TabsDescription;
