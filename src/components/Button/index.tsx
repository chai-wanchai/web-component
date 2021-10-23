import React, { FC } from "react";
interface ButtonProps {
  title?: string;
}
const Button: FC<ButtonProps> = ({ title = "My title" }) => {
  return <div style={{ backgroundColor: "yellow" }}>{title}</div>;
};
export default Button;
