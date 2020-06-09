import React from "react";
import { navigate } from "hookrouter";
import { Container, Grid, Header, List, Segment, Divider } from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment inverted style={{ margin: "5em 0em 0em", padding: "5em 0em" }} vertical>
      <Container textAlign="center">
        <Grid columns={4} divided stackable inverted>
          <Grid.Row>
            <Grid.Column>
              <Header inverted as="h4" content="Social" />
              <List link inverted>
                <List.Item as="a" href="https://twitter.com/alukaard76">
                  Twitter
                </List.Item>
                <List.Item as="a" href="https://github.com/vincenthirtz">
                  Github
                </List.Item>
                <List.Item as="a" href="https://discord.gg/9UuNaV">
                  Discord
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header inverted as="h4" content="Fast" />
              <p>Starting a project has never been easier</p>
            </Grid.Column>
            <Grid.Column>
              <Header inverted as="h4" content="Tech" />
              <List link inverted>
                <List.Item as="a" href="https://reactjs.org/">
                  React
                </List.Item>
                <List.Item as="a" href="https://parceljs.org/">
                  Parcel
                </List.Item>
                <List.Item as="a" href="https://sass-lang.com/">
                  Sass
                </List.Item>
                <List.Item as="a" href="https://nodejs.org/">
                  Node
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header inverted as="h4" content="Simple" />
              <p>Focus only on your application code</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider inverted section />
        <List horizontal inverted divided link size="small">
          <List.Item as="a" href="#">
            Sitemap
          </List.Item>
          <List.Item as="a" onClick={() => navigate("/contact")}>
            Contact
          </List.Item>
          <List.Item as="a" href="#">
            Terms and Conditions
          </List.Item>
          <List.Item as="a" href="#">
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
};

export default Footer;
