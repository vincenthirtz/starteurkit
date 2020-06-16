import React from "react";
import { Item, Icon } from "semantic-ui-react";

const Features = () => (
  <div className="featureWrap">
    <h3>Features</h3>
    <div>
      <Item.Group divided>
        <Item>
          <Icon name="mobile alternate" size="massive" />
          <Item.Content>
            <Item.Header as="a">Responsive</Item.Header>
            <Item.Meta>
              <span>Date</span>
            </Item.Meta>
            <Item.Description>
              A description which may flow for several lines and give context to the content.
            </Item.Description>
            <Item.Extra />
          </Item.Content>
        </Item>

        <Item>
          <Icon name="fast forward" size="massive" />
          <Item.Content>
            <Item.Header as="a">Fast</Item.Header>
            <Item.Meta>
              <span>Date</span>
            </Item.Meta>
            <Item.Description>
              A description which may flow for several lines and give context to the content.
            </Item.Description>
            <Item.Extra />
          </Item.Content>
        </Item>

        <Item>
          <Icon name="paint brush" size="massive" />
          <Item.Content>
            <Item.Header as="a">Customizable</Item.Header>
            <Item.Meta>
              <span>Date</span>
            </Item.Meta>
            <Item.Description>
              A description which may flow for several lines and give context to the content.
            </Item.Description>
            <Item.Extra />
          </Item.Content>
        </Item>

        <Item>
          <Icon name="language" size="massive" />
          <Item.Content>
            <Item.Header as="a">Internationalization</Item.Header>
            <Item.Meta>
              <span>Date</span>
            </Item.Meta>
            <Item.Description>
              A description which may flow for several lines and give context to the content.
            </Item.Description>
            <Item.Extra />
          </Item.Content>
        </Item>

        <Item>
          <Icon name="universal access" size="massive" />
          <Item.Content>
            <Item.Header as="a">Universal access</Item.Header>
            <Item.Meta>
              <span>Date</span>
            </Item.Meta>
            <Item.Description>
              A description which may flow for several lines and give context to the content.
            </Item.Description>
            <Item.Extra />
          </Item.Content>
        </Item>

        <Item>
          <Icon name="coffee" size="massive" />
          <Item.Content>
            <Item.Header as="a">Ready to use</Item.Header>
            <Item.Meta>
              <span>Date</span>
            </Item.Meta>
            <Item.Description>
              A description which may flow for several lines and give context to the content.
            </Item.Description>
            <Item.Extra />
          </Item.Content>
        </Item>

        <Item>
          <Icon name="suitcase" size="massive" />
          <Item.Content>
            <Item.Header as="a">Exportable</Item.Header>
            <Item.Meta>
              <span>Date</span>
            </Item.Meta>
            <Item.Description>
              A description which may flow for several lines and give context to the content.
            </Item.Description>
            <Item.Extra />
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  </div>
);

export default Features;
