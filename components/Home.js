import React from "react";
import { Divider, Grid, Header, Icon, Segment } from "semantic-ui-react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                {t("For students and developers")}
              </Header>
              <p style={{ fontSize: "1.33em" }}>{t("Do you need a ready to use project")}</p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Icon name="coffee" size="massive" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment className="HomeArticle" style={{ padding: "8em 0em" }} vertical>
        <Header as="h3" style={{ fontSize: "2em" }}>
          {t("Why choose this kit among the others")}
        </Header>
        <p style={{ fontSize: "1.33em" }}>{t("It does not pretend to be in the best")}</p>

        <Divider as="h4" className="header" horizontal style={{ margin: "3em 0em", textTransform: "uppercase" }}>
          <a href="#">{t("Participate")}</a>
        </Divider>

        <Header as="h3" style={{ fontSize: "2em" }}>
          {t("Can we participate in the project")}
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          {t("Anyone can participate by offering pull requests")}{" "}
          <a href="https://discord.com/invite/9UuNaV">Discord</a>.
        </p>
        <Icon name="heart" size="large" />
      </Segment>
    </>
  );
};

export default Home;
