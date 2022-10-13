import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./SidebarList.scss";

interface prop {
  name: string;
  icon: string;
  link: string;
}

const SidebarList: FC<prop> = ({ icon, name, link }) => {
  return (
    <Link to={link} className="SidebarList">
      <img src={icon} alt="" />
      <h5>{name}</h5>
    </Link>
  );
};

export default SidebarList;
