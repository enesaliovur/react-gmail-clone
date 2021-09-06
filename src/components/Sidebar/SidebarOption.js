import React from "react";
import "./SidebarOption.css";
export const SidebarOption = ({ Icon, title, number, seleceted }) => {
  return (
    <div className={`sidebarOption ${seleceted && "sidebarOption--active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};
