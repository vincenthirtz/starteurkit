import React from "react";
import { useTranslation } from "react-i18next";
import "./Notfound.css";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div id="test">
      <div id="body">
        <div className="error">
          <div className="wrap">
            <div className="404">
              <pre>
                <code>
                  <div className="green">
                    &lt;!
                    <div>DOCTYPE html</div>
                    <div className="green">&gt;</div>
                  </div>
                  <br />
                  <div className="orange">&lt;html&gt;</div>
                  <br />
                  <div className="orange">&lt;style&gt;</div>
                  <br />
                  <div className="green">{"*{position: nervous}"}</div>
                  <br />
                  <div className="orange">&lt;/style&gt;</div>
                  <br />
                  <div className="orange">&lt;body&gt;</div>
                  <br />
                  {t("404")}
                  <br />
                  <p>ROUTE NOT FOUND!</p>
                  <div className="comment">&lt;!-- You thought you found a loophole or not ?--&gt;</div>
                  <div className="orange" />
                  <br />
                  <div className="info" />
                  <br />
                  <div className="orange">&nbsp;&lt;/body&gt;</div>
                  <br />
                  <div className="orange">&lt;/html&gt;</div>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
