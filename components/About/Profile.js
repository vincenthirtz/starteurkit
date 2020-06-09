import React from "react";
import PropTypes from "prop-types";
import { Card, Icon, Image, Flag } from "semantic-ui-react";

const Profile = (props) => {
  const { img, name, date, work, github, country } = props;

  return (
    <Card>
      <Image src={img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">{date}</span>
        </Card.Meta>
        <Card.Description>{work}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href={github}>
          <Icon name="github" />
        </a>
        {country && <Flag name={country} />}
      </Card.Content>
    </Card>
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
