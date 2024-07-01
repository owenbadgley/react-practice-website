import React from "react";

interface Props {
  maxChar: number;
  children: string;
  limit: boolean;
  onClick: () => void;
}

const ExpandableText = ({ children, maxChar, limit, onClick }: Props) => {
  if (children.length <= maxChar) {
    return <p>{children}</p>;
  } else if (limit) {
    return (
      <div>
        {children.substring(0, maxChar)}...
        <button onClick={onClick}>Show More</button>
      </div>
    );
  } else {
    return (
      <div>
        {children}
        <button onClick={onClick}>Show Less</button>
      </div>
    );
  }
};

export default ExpandableText;
