/* eslint-disable react/button-has-type */
import React from "react";
import { navigate } from "hookrouter";
import { useTranslation } from "react-i18next";
import "./Notfound.css";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="body">
      <button onClick={() => navigate("/")}>Retour à l'accueil</button>
      <main id="test">
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
      </main>
    </div>
  );
};

export default NotFound;
