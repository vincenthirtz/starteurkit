import React from "react";
import { Divider, Grid, Header, Icon, Segment } from "semantic-ui-react";

const Home = () => (
  <>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              For students and developers
            </Header>
            <p style={{ fontSize: "1.33em" }}>Do you need a ready to use project? Starteurkit is for you!</p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Icon name="coffee" size="massive" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment className="HomeArticle" style={{ padding: "8em 0em" }} vertical>
      <Header as="h3" style={{ fontSize: "2em" }}>
        Why choose this kit among the others ?
      </Header>
      <p style={{ fontSize: "1.33em" }}>
        It does not pretend to be in the best react kits but it is rather practical and up to date
      </p>
      <Grid columns={3}>
        <Grid.Column>
          <Icon name="react" size="huge" />
        </Grid.Column>
        <Grid.Column>
          <Icon name="sass" size="huge" />
        </Grid.Column>
        <Grid.Column>
          <Icon name="node" size="huge" />
        </Grid.Column>
        <Grid.Column>
          <Icon name="npm" size="huge" />
        </Grid.Column>
        <Grid.Column>
          <Icon name="github" size="huge" />
        </Grid.Column>
      </Grid>

      <Divider as="h4" className="header" horizontal style={{ margin: "3em 0em", textTransform: "uppercase" }}>
        <a href="#">Participate</a>
      </Divider>

      <Header as="h3" style={{ fontSize: "2em" }}>
        Can we participate in the project?
      </Header>
      <p style={{ fontSize: "1.33em" }}>
        Anyone can participate by offering pull requests. Let's discuss together the future of the project on{" "}
        <a href="https://discord.com/invite/9UuNaV">Discord</a>.
      </p>
      <Icon name="heart" size="large" />
    </Segment>
  </>
);

export default Home;
