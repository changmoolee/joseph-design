/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const container = (width: number, color: string, open: boolean) => css`
  position: fixed;
  bottom: 20%;
  width: ${width}px;
  height: 50px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${color};
  color: white;
  opacity: ${open ? "1" : "0"};
  transition: 0.3s;
`;

const iconWrapper = css`
  display: flex;
  justify-content: flex-end;
`;

export interface ToastProps {
  width: number;
  description: string;
  color: string;
  open: boolean;
  onClose: () => void;
}

const PositionedToastDemo = ({
  width,
  description,
  color,
  open,
  onClose,
}: ToastProps) => {
  return (
    <div css={container(width, color, open)}>
      <div css={iconWrapper} onClick={onClose}>
        <FontAwesomeIcon icon={faCircleXmark} style={{ cursor: "pointer" }} />
      </div>
      <span>{description}</span>
    </div>
  );
};
export default PositionedToastDemo;
