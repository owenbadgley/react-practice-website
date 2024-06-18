import React, { useState } from "react";
import { useEffect } from "react";
import { ReactNode } from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "success";
  onClick: () => void;
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div>
      <button type="button" className={AiOutlineLike} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
