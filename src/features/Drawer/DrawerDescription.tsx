/** @jsxImportSource @emotion/react */
import { descContainer } from "../../styled";
import TopDrawerDemo from "./TopDrawerDemo";
import RightDrawerDemo from "./RightDrawerDemo";
import BottomDrawerDemo from "./BottomDrawerDemo";
import LeftDrawerDemo from "./LeftDrawerDemo";
import { children } from "./ChildrenExample";

export interface DrawerProps extends React.HTMLAttributes<any> {
  title: string;
  width?: number;
  height?: number;
}

const DrawerDescription = () => {
  return (
    <div css={descContainer}>
      <TopDrawerDemo title="TopDrawer" height={300}>
        {children}
      </TopDrawerDemo>
      <RightDrawerDemo title="RightDrawer" width={100}>
        {children}
      </RightDrawerDemo>
      <BottomDrawerDemo title="BottomDrawer" height={200}>
        {children}
      </BottomDrawerDemo>
      <LeftDrawerDemo title="LefttDrawer" width={300}>
        {children}
      </LeftDrawerDemo>
    </div>
  );
};

export default DrawerDescription;
