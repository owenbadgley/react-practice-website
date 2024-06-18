import { ReactNode } from "react";

interface Props {
  children: string;
  onClosed: () => void;
}
const Alert = ({ children, onClosed }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClosed}
      ></button>
    </div>
  );
};

export default Alert;
