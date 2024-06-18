import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import styles from "./Like.module.css";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

function Like({ onClick }: Props) {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status) {
    return (
      <div>
        <AiOutlineLike size="30" onClick={toggle}></AiOutlineLike>
      </div>
    );
  } else {
    return (
      <div>
        <AiFillLike color="blue" size="30" onClick={toggle}></AiFillLike>
      </div>
    );
  }
}

export default Like;
