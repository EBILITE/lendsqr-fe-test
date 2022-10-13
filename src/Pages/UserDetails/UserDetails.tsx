import { Avatar, BackButton, Divider } from "../../Assests";
import { userDetails } from "../../Utils/UserData";
import "./UserDetails.scss";
import { useParams, Link } from "react-router-dom";
import { url } from "../../context";
import { useEffect, useState } from "react";


const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState<any>([]);

  const fetchDetails = async (url: RequestInfo | URL) => {
    const response = await fetch(url);
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    fetchDetails(`${url}/${id}`);
    console.log("newUser:", user);
  }, [id]);

  const {
    orgName,
    userName,
    email,
    phoneNumber,
    profile,
    guarantor,
    accountBalance,
    accountNumber,
    socials,
    education,
  } = user;
  return (
    <div className="UserDetailContainer">
      <div className="User-Wrapper">
        {/* =================Back to User=============== */}
        <Link to="/Dashboard" className="BackToUsers">
          <img src={BackButton} alt="" />
          <p>Back to Users</p>
        </Link>
        {/* ==================User Details and Buttons */}
        <div className="Detail-Btn-Container">
          <h3>User Details</h3>
          <div className="Btn-Container">
            <button className="btn1">BLACKLIST USER</button>
            <button className="btn2">ACTIVATE USER</button>
          </div>
        </div>

        {/* ==================Balance and Image Container====================== */}

        <div className="BalanceDetail">
          <div className="BalanceFlex">
            <div className="Ava">
              <img src={Avatar} alt="" />
              <span>
                <h3>Ebilite Uchenna</h3>
                <h4>Lrd12345</h4>
              </span>
            </div>
            <img src={Divider} alt="" />
            <div>
              <h4>Users Tiers</h4>
            </div>
            <img src={Divider} alt="" />
            <div>
              <h3>$200,000.00</h3>
              <h4>123456789 / Providence Bank</h4>
            </div>
          </div>
          <div className="Detail-Map">
            {userDetails.map((items) => (
              <h4 key={items.id}>{items.name}</h4>
            ))}
          </div>
        </div>

        {/* =======================Full Page Details ==================== */}
        <div className="FulPageDetails">
          
          <h1>id: {id}</h1>
          <h2>{orgName}</h2>
          <h2>{userName}</h2>
          {/* <h2>{education?.level}</h2> */}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
