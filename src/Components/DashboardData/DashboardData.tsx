import React from "react";
import { useGlobalContext } from "../../context";
import './DashboardData.scss'

const DashboardData = () => {
  const { list, loading } = useGlobalContext();
  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <div>
      <div className="Data-Wrapper">
        {list.slice(0,10).map((item, index) => {
          const {orgName, userName, email, phoneNumber, createdAt} =  item;
          
          return (
            <div className='Data-Flex'>
              <h5>{orgName}</h5>
              <h5>{userName}</h5>
              <h5>{email}</h5>
              <h5>{phoneNumber}</h5>
              <h5>{createdAt}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardData;
