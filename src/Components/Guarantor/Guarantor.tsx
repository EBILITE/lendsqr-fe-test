import "./Guarantor.scss";
interface guarantor {
  firstName: string;
  lastName: string;
  email: string;
  relationship: string;
  phone: string;
  gender: string;
  address: string;
}

const Guarantor: React.FC<guarantor> = ({
  firstName,
  lastName,
  gender,
  address,
  phone,
}) => {
  return (
    <div className="GuarantorContainer">
      <h3>Guarantor</h3>
      <div className="GuarantorWrapper">
        {/* ============================ */}
        <div className="Guarantor">
          <h5>FULL NAME</h5>
          <h4>
            {firstName} {lastName}
          </h4>
        </div>
        {/* ================== */}
        <div className="Guarantor">
          <h5>PHONE NUMBER</h5>
          <h4>{phone}</h4>
        </div>
        {/* ============= */}
        <div className="sGuarantor">
          <h5>GENDER</h5>
          <h4>{gender}</h4>
        </div>
        {/* =================== */}
        {/* ============= */}
        <div className="Guarantor">
          <h5>ADDRESS</h5>
          <h4>{address}</h4>
        </div>
      </div>
    </div>
  );
};

export default Guarantor;
