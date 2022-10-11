import React from "react";
import { useGlobalContext } from "../../context";
import "./DashboardData.scss";
import moment from "moment";
import Dots from "../../Assests/Images/3Dots.svg";

const DashboardData = () => {
  const { list, loading } = useGlobalContext();
  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <div>
      <div className="Data-Wrapper">
        {list.slice(0, 10).map((item, index) => {
          const { orgName, userName, email, phoneNumber, createdAt } = item;

          return (
            <div className="Data-Flex">
              <h5 className="ORGANIZATION1">{orgName}</h5>
              <h5 className="USERNAME1">{userName}</h5>
              <h5 className="EMAIL1">{email}</h5>
              <h5 className="PHONE_NUMBER1">{phoneNumber}</h5>
              <h5 className="DATE_JOINED1">
                {moment(createdAt).format("LLL")}
              </h5>
              <h5 className="STATUS1"> Active</h5>
              <img src={Dots} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardData;
