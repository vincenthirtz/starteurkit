import React from "react";
import icon from "./icon";

const Features = () => (
  <div className="featureWrap">
    <h3>Features</h3>
    <div>
      <div className="article">
        {icon.IconCake()}
        <div className="textOlder">
          <h4>Responsive</h4>
          <p>A description which may flow for several lines and give context to the content.</p>
        </div>
      </div>

      <div className="article">
        {icon.IconInternational()}
        <div className="textOlder">
          <h4>Fast</h4>
          <p> A description which may flow for several lines and give context to the content.</p>
        </div>
      </div>

      <div className="article">
        {icon.IconCake()}
        <div className="textOlder">
          <h4>Customizable</h4>
          <p> A description which may flow for several lines and give context to the content.</p>
        </div>
      </div>

      <div className="article">
        {icon.IconCake()}
        <div className="textOlder">
          <h4>Internationalization</h4>
          <p>A description which may flow for several lines and give context to the content.</p>
        </div>
      </div>

      <div className="article">
        {icon.IconCake()}
        <div className="textOlder">
          <h4>Universal access</h4>
          <p> A description which may flow for several lines and give context to the content.</p>
        </div>
      </div>

      <div className="article">
        {icon.IconCake()}
        <div className="textOlder">
          <h4>Ready to use</h4>
          <p> A description which may flow for several lines and give context to the content.</p>
        </div>
      </div>

      <div className="article">
        {icon.IconCake()}
        <div className="textOlder">
          <h4>Exportable</h4>
          <p> A description which may flow for several lines and give context to the content.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Features;
