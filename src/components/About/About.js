import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import Profile from "./Profile";

const About = () => (
  <div>
    <Header as="h3" divider>
      About
    </Header>
    <Segment padded="very">
      <Grid relaxed columns={4}>
        <Grid.Column>
          <Profile
            name="Vincent Hirtz"
            img="https://avatars3.githubusercontent.com/u/31092476?s=460&u=1b18f3aa32d4d9ec08bf359b175c613821de277a&v=4"
            work="Dev front end"
            github="https://github.com/vincenthirtz"
            date="Creator in June 2020"
            country="france"
          />
        </Grid.Column>
        <Grid.Column>
          <Profile
            name="Jack Sparrow"
            img="https://randomuser.me/api/portraits/lego/5.jpg"
            work="Working on ..."
            github="https://github.com/"
            date="Contact us to join"
          />
        </Grid.Column>
      </Grid>
    </Segment>
  </div>
);

export default About;
