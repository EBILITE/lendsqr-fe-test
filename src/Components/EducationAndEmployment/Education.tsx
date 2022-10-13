import "./Education.scss";

interface education {
  level: string;
  status: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthly: [];
  loan: string;
}

const Education: React.FC<education> = ({
  level,
  status,
  sector,
  duration,
  officeEmail,
    monthly,
  loan,
}) => {
  return (
    <div className="EducationContainer">
      <h3>Education and Employment</h3>
      <div className="PersonalWrapper">
        {/* ============================ */}
        <div className="edu">
          <h5>LEVEL OF EDUCATION</h5>
          <h4>{level}</h4>
        </div>
        {/* ================== */}
        <div className="edu">
          <h5>EMPLOYEMENT STATUS</h5>
          <h4>{status}</h4>
        </div>
        {/* ============= */}
        <div className="edu">
          <h5>SECTOR OF EMPLOYMENT</h5>
          <h4>{sector}</h4>
        </div>
        {/* =================== */}
        <div className="edu">
          <h5>DURATION OF EMPLOYEMENT</h5>
          <h4>{duration}</h4>
        </div>
        {/* ============= */}
      </div>
      <div className="EducationWrapper">
        {/* ============= */}
        <div className="edu">
          <h5>OFFICE EMAIL</h5>
          <h4>{officeEmail}</h4>
        </div>
        {/* =================== */}

        <div className="edu">
          <h5>MONTHLY INCOME</h5>
          <h4>{monthly}</h4>
        </div>
        {/* =================== */}

        <div className="edu">
          <h5>LOAN REPAYMENT</h5>
          <h4>${loan}</h4>
        </div>
        {/* =================== */}
      </div>
    </div>
  );
};

export default Education;
