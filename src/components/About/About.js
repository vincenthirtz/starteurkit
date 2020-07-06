import React from "react";
import Home from "components/Home";
import Profile from "./Profile";

const About = () => (
  <div className="articles">
    <h3>About</h3>
    <Home />
    <div className="profilHolder">
      <Profile
        name="Vincent Hirtz"
        img="https://avatars3.githubusercontent.com/u/31092476?s=460&u=1b18f3aa32d4d9ec08bf359b175c613821de277a&v=4"
        work="Dev front end"
        github="https://github.com/vincenthirtz"
        date="Creator in June 2020"
        country="france"
      />
      <Profile
        name="Jack Sparrow"
        img="https://randomuser.me/api/portraits/lego/5.jpg"
        work="Working on ..."
        github="https://github.com/"
        date="Contact us to join"
      />
      <Profile
        name="Bébou"
        img="https://avatars0.githubusercontent.com/u/57497391?s=460&u=09117532f789791ca04db290c9d63b113c82611f&v=4"
        work="I know kung fu"
        github="https://github.com/ertrasLuapnaej"
        date="Creator in June 2020"
        country="france"
      />
    </div>
  </div>
);

export default About;
