/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { layout, feature, description } from "../../styled";
import TopDrawerDemo from "./TopDrawerDemo";
import RightDrawerDemo from "./RightDrawerDemo";
import BottomDrawerDemo from "./BottomDrawerDemo";
import LeftDrawerDemo from "./LeftDrawerDemo";
import { children } from "./ChildrenExample";

const ButtonsLayout = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

export interface DrawerProps extends React.HTMLAttributes<any> {
  title: string;
  width?: number;
  height?: number;
}

const DrawerDescription = () => {
  return (
    <section css={layout}>
      <div css={feature}>
        <div css={ButtonsLayout}>
          <span />
          <TopDrawerDemo title="TopDrawer" height={300}>
            {children}
          </TopDrawerDemo>
          <span />
          <LeftDrawerDemo title="LefttDrawer" width={300}>
            {children}
          </LeftDrawerDemo>
          <span />
          <RightDrawerDemo title="RightDrawer" width={100}>
            {children}
          </RightDrawerDemo>
          <span />
          <BottomDrawerDemo title="BottomDrawer" height={200}>
            {children}
          </BottomDrawerDemo>
        </div>
      </div>
      <div css={description}></div>
    </section>
  );
};

export default DrawerDescription;
