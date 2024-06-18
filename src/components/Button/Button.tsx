import React, { useState } from "react";
import { useEffect } from "react";
import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "success";
  onClick: () => void;
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div>
      <button type="button" className={styles.button53} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
