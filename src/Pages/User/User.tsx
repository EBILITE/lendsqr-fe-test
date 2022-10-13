import React, { useEffect, useState } from "react";
import DashboardData from "../../Components/DashboardData/DashboardData";
import UserList from "../../Components/UserList/UserList";
import { userData, userHeadline } from "../../Utils/UserData";
import "./User.scss";
import { useGlobalContext } from "../../context";
import { UserApiResponseType } from "../../Types/Users";

const User = () => {
  const { loading, list } = useGlobalContext();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState<UserApiResponseType[]>([]);

  useEffect(() => {
    console.log("list", list[page]);
    setFollowers(list[page]);
  }, [loading, page, list]);

  const handlePage = (index: React.SetStateAction<number>) => {
    setPage(index);
  };

  const nextBtn = () => {
    setPage((oldPage) => {
      const newPage = oldPage + 1;
      if (newPage > list.length - 1) {
        return 0;
      }
      return newPage;
    });
  };

  const prevBtn = () => {
    setPage((oldPage) => {
      const newPage = oldPage - 1;
      if (newPage < 0) {
        return list.length - 1;
      }
      return newPage;
    });
  };

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
          {followers?.map((follower, idx) => {
            // console.log("follow", follower);
            return <DashboardData {...follower} key={idx} />;
          })}
        </div>

        {/* =================  Paginate ====================== */}
        <div>
          {!loading && (
            <div className="btn-container">
              <button className="prev-btn" onClick={prevBtn}>
                prev
              </button>
              {list.map((_, index) => {
                const newIndex = index + 1;
                return (
                  <button
                    className={`page-btn ${
                      index === page ? "active-btn" : null
                    }`}
                    key={index}
                    onClick={() => handlePage(index)}
                  >
                    {newIndex}
                  </button>
                );
              })}
              <button className="next-btn" onClick={nextBtn}>
                next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
