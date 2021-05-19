import React, { useState } from "react";
import axios from "axios";
import "./ContactStyles.css";
import Particles from "../../Particles.js";

function Contact() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/xeqvajjk",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(
          true,
          alert("Thank you, your form has been submitted."),
          form
        );
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          zIndex: "9",
        }}
      >
        <Particles />
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          top: "0",
          left: "0",
        }}
      >
        <div id="contact" className="contact-section">
          {/* <div className="form-square"></div> */}
          <h2>Say Hello.</h2>
        </div>

        <div className="form-container">
          <div className="form-wrapper">
            <div className="form-social-wrapper">
              <form className="form" onSubmit={handleOnSubmit}>
                <label htmlFor="name">Name.</label>
                <input id="name" type="text" name="name" required />
                <label htmlFor="email">Email.</label>
                <input id="email" type="email" name="email" required />
                <label htmlFor="message">Message.</label>
                <textarea id="message" name="message"></textarea>
                <button type="submit" disabled={serverState.submitting}>
                  Submit.
                </button>
                {serverState.status && (
                  <p className={!serverState.status.ok ? "errorMsg" : ""}>
                    {serverState.status.msg}
                  </p>
                )}
              </form>
              <div className="social-footer">
                <div className="social-footer-icons">
                  <div className="social-icons git">
                    <a href="https://github.com/ainneo">
                      <img
                        width="40px"
                        height="40px"
                        src="./icons/github.svg"
                        alt="icon"
                      />
                    </a>
                  </div>
                  <div className="social-icons link">
                    <a href="https://www.linkedin.com/in/ainneoum/">
                      <img
                        width="40px"
                        height="40px"
                        src="./icons/linkedin.svg"
                        alt="icon"
                      />
                    </a>
                  </div>
                  <div className="social-icons-text">
                    <p>Coded with &#10084;&#65039; AO </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
