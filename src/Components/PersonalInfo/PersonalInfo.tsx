import React from "react";
import "./PersonalInfo.scss";

interface personal {
  firstName: string;
  lastName: string;
  number: string;
  email: string;
  bvn: string;
  gender: string;
  children: undefined;
  resident: string;
}

const PersonalInfo: React.FC<personal> = ({
  firstName,
  lastName,
  number,
  email,
  bvn,
  gender,
  children,
  resident,
}) => {
  return (
    <div className="PersonalContainer">
      <h3>Personal Information</h3>
      <div className="PersonalWrapper">
        {/* ============================ */}
        <div className="person">
          <h5>FULL NAME</h5>
          <h4>
            {firstName} {lastName}
          </h4>
        </div>
        {/* ================== */}
        <div className="person">
          <h5>PHONE NUMBER</h5>
          <h4>{number}</h4>
        </div>
        {/* ============= */}
        <div className="person">
          <h5>EMAIL ADDRESS</h5>
          <h4>{email}</h4>
        </div>
        {/* =================== */}
        <div className="person">
          <h5>BVN</h5>
          <h4>{bvn}</h4>
        </div>
        {/* ============= */}
        <div className="person">
          <h5>GENDER</h5>
          <h4>{gender}</h4>
        </div>
        {/* =================== */}
      </div>
      <div className="PersonalWrapper">
        {/* ============= */}
        <div className="person">
          <h5>MARITAL STATUS</h5>
          <h4>Single</h4>
        </div>
        {/* =================== */}
        {/* ============= */}
        <div className="person">
          <h5>CHILDREN</h5>
          <h4>{children}</h4>
        </div>
        {/* =================== */}
        {/* ============= */}
        <div className="person">
          <h5>TYPE OF RESIDENCE</h5>
          <h4>{resident}</h4>
        </div>
        {/* =================== */}
      </div>
    </div>
  );
};

export default PersonalInfo;
