import React from "react";
import PropTypes from "prop-types";
import { Icon, Flag } from "semantic-ui-react";

const Profile = (props) => {
  const { img, name, date, work, github, country } = props;

  return (
    <div className="card">
      <div className='imgWrapper'>
        <img src={img} />
      </div>
      <div className="cardInfo">
        <span>{name}</span>
        <span className="date">{date}</span>
        <span>{work}</span>
      </div>
      <div className="cardGitLink">
        <a href={github}>
          <Icon name="github" />
        </a>
        {country && <Flag name={country} />}
      </div>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  work: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  country: PropTypes.string,
};

Profile.defaultProps = {
  country: "",
};
