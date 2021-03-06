/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const dim = css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const box = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 20px;
  background-color: white;
  box-sizing: border-box;
`;
const closeBox = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const title = css`
  font-size: 20px;
`;
const description = css`
  padding-top: 30px;
`;

type ModalProps = {
  open: boolean;
  onClose: () => void;
};

const ModalDemo = ({ open, onClose }: ModalProps) => {
  return open ? (
    <>
      <div css={dim} />
      <section css={box}>
        <div css={closeBox} onClick={onClose}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </div>
        <div css={title}>
          <strong>Modal title is here.</strong>
        </div>
        <article css={description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          facere vitae quis aperiam laudantium, nisi sequi a quaerat veniam
          voluptatibus, dolorum ipsam commodi. Unde impedit dolorem reiciendis
          ducimus inventore facilis.
        </article>
      </section>
    </>
  ) : null;
};

export default ModalDemo;
