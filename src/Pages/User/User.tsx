import React from "react";
import DashboardData from "../../Components/DashboardData/DashboardData";
import UserList from "../../Components/UserList/UserList";
import { userData, userHeadline } from "../../Utils/UserData";
import "./User.scss";

const User = () => {
  return (
    <div className="User-Wrapper">
      <h2>Users</h2>
      {/* =============User Flex================= */}
      <div className="User">
        {userData.map((item) => {
          return <UserList {...item} key={item.id} />;
        })}
      </div>

      {/* =============User Activity ============== */}
      <div className="User-Activity">
        <div className="Headline-Wrapper">
          {userHeadline.map((item) => {
            return (
              <div key={item.id} className="Headline">
                <h5 className={item.name}>{item.name} </h5>
                <img src={item.img} alt="" />
      
              </div>
            );
          })}
        </div>

        <div>
          <DashboardData />
        </div>
      </div>
    </div>
  );
};

export default User;
