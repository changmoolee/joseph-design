/** @jsxImportSource @emotion/react */
import { useState } from "react";
import TagDemo from "./TagDemo";
import { descContainer } from "../../styled";

const TagDescription = () => {
  const [tags, setTags] = useState<Array<string>>([]);

  return (
    <div css={descContainer}>
      <TagDemo tags={tags} setTags={setTags} />
    </div>
  );
};

export default TagDescription;
