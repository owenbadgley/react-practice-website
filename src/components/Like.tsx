import React from "react";
import { AiOutlineLike } from "react-icons/ai";

interface Props {
  onClick: () => void;
}
function Like({ onClick }: Props) {
  return (
    <div>
      <AiOutlineLike onClick={onClick}></AiOutlineLike>
    </div>
  );
}

export default Like;
