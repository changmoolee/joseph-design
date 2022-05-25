/** @jsxImportSource @emotion/react */
import { useState } from "react";
import TagDemo from "./TagDemo";
import { layout, feature, description } from "../../styled";

const TagDescription = () => {
  const [tags, setTags] = useState<Array<string>>([]);

  return (
    <section css={layout}>
      <div css={feature}>
        <TagDemo tags={tags} setTags={setTags} />
      </div>
      <div css={description}></div>
    </section>
  );
};

export default TagDescription;
