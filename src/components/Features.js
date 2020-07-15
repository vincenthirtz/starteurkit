import React from "react";
import icon from "./icon";

const Features = () => (
  <div className="featureWrap articles">
    <h3 className="sectionTitle">Features</h3>
    <div className="gridWrap">
      <div className="article">
        {icon.IconResponsive()}
        <div className="textOlder">
          <h4>Responsive</h4>
          <p>A description which may flow for several lines and give context to the content.</p>
        </div>
      </div>

      <div className="article">
        {icon.IconFast()}
        <div className="textOlder">
          <h4>Fast</h4>
          <p> A description which may flow for several lines and give context to the content.</p>
        </div>
      </div>

      <div className="article">
        {icon.IconEdit()}
        <div className="textOlder">
          <h4>Customizable</h4>
          <p> A description which may flow for several lines and give context to the content.</p>
        </div>
      </div>

      <div className="article">
        {icon.IconInternational()}
        <div className="textOlder">
          <h4>Internationalization</h4>
          <p>A description which may flow for several lines and give context to the content.</p>
        </div>
      </div>

      <div className="article">
        {icon.IconUniversal()}
        <div className="textOlder">
          <h4>Universal access</h4>
          <p> A description which may flow for several lines and give context to the content.</p>
        </div>
      </div>

      <div className="article">
        {icon.IconReady()}
        <div className="textOlder">
          <h4>Ready to use</h4>
          <p> A description which may flow for several lines and give context to the content.</p>
        </div>
      </div>

      <div className="article bot">
        {icon.IconExport()}
        <div className="textOlder">
          <h4>Exportable</h4>
          <p> A description which may flow for several lines and give context to the content.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Features;
