/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "../components/Header";

const container = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
/////////////////////

const box = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 100px;
  box-sizing: border-box;
`;

const title = css`
  font-size: 48px;
  font-weight: 800;
`;

const description = css`
  font-size: 20px;
  margin: 20px;
`;

const subTitle = css`
  font-size: 24px;
  font-weight: 800;
`;

const Docs = () => {
  return (
    <div css={container}>
      <Header />
      <div css={box}>
        <div css={title}>사용하기 전 설치가 필요합니다.</div>
        <div css={description}>
          설치 후, Joseph의 기능들을 사용할 수 있습니다.
        </div>
        <div css={subTitle}>npm</div>
        <div css={description}>
          기능들을 사용하기 위해서는 npm 설치 과정이 필요합니다.
        </div>
      </div>
    </div>
  );
};

export default Docs;
