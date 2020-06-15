import React from "react";
import { Icon } from "semantic-ui-react";

const Home = () => (
  <>
    <div className="gridwrapper">
      <div className="gridText">
        <h3>For students and developers</h3>
        <p>Do you need a ready to use project? Starteurkit is for you!</p>
      </div>
      <Icon name="coffee" size="massive" className="gridIcon" />
    </div>
    <hr size="1" width="50%" />

    <div className="HomeArticle">
      <h3 className="question">Why choose this kit among the others ?</h3>
      <p>It does not pretend to be in the best react kits but it is rather practical and up to date</p>
    </div>
    <hr size="1" width="50%" />
    <div className="HomeArticle">
      <h3 className="question">Can we participate in the project?</h3>
      <p>
        Anyone can participate by offering pull requests. Let's discuss together the future of the project on{" "}
        <a href="https://discord.com/invite/9UuNaV">Discord</a>.
      </p>
      <Icon name="heart" size="large" />
    </div>
  </>
);

export default Home;
