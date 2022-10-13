import "./Socials.scss";

interface socials {
  twitter: string;
  facebook: string;
  instagram: string;
}

const Socials: React.FC<socials> = ({ twitter, facebook, instagram }) => {
  return (
    <div className="SocialContainer">
      <h3>Socials</h3>
      <div className="SocialWrapper">
        {/* ============================ */}
        <div className="social">
          <h5>TWITTER</h5>
          <h4>{twitter}</h4>
        </div>
        {/* ================== */}
        <div className="social">
          <h5>FACEBOOK</h5>
          <h4>{facebook}</h4>
        </div>
        {/* ============= */}
        <div className="social">
          <h5>INSTAGRAM</h5>
          <h4>{instagram}</h4>
        </div>
        {/* =================== */}
      </div>
    </div>
  );
};

export default Socials;
