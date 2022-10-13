import React from "react";
import { useGlobalContext } from "../../context/context";
import "./DashboardData.scss";
import moment from "moment";
import Dots from "../../Assests/Images/3Dots.svg";
import { Link } from "react-router-dom";

interface props {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  id: string;
}

const DashboardData: React.FC<props> = ({
  id,
  orgName,
  userName,
  email,
  phoneNumber,
  createdAt,
}) => {
  const { loading } = useGlobalContext();
  if (loading) {
    return <div className="loader"></div>;
  }
  return (
    <div className="Data-Wrapper">
      <Link to={`/Dashboard/details/${id}`} className="Data-Flex">
        <h5 className="ORGANIZATION1">{orgName}</h5>
        <h5 className="USERNAME1">{userName}</h5>
        <h5 className="EMAIL1">{email}</h5>
        <h5 className="PHONE_NUMBER1">{phoneNumber}</h5>
        <h5 className="DATE_JOINED1">{moment(createdAt).format("LLL")}</h5>
        <h5 className="STATUS1"> Active</h5>
        <img src={Dots} alt="" />
      </Link>
    </div>
  );
};

export default DashboardData;
