import React from "react";

export default function header() {
  return (
    <>
      {/* header */}
      <div className="mifi-header">
        <div className="mifi-header-content">
          <div className="mifi-header-logo">
            <img src="/images/logo_Streami-fi.png" alt="logo" />
          </div>
          <div className="mifi-header-bottom ">
            <div className="mifi-event">
              <img src="/images/logo_Streami-fi.png" alt="Event_logo" />
              <div className="mifi-event-content">
                <div className="mifi-event-title">
                  <h6 className="event">Event -</h6>
                  <h6 className="event-name"> DJ.MiFI</h6>
                </div>
                <div className="mifi-event-sub">
                  <p>Count Down</p>
                  <h5>00 D 00 H 00 M</h5>
                </div>
              </div>
            </div>
            <div className="mifi-wwm">
              <div className="mifi-wwm-text">
                <h3>STREAMi-Fi</h3>
                <h6>Song rhythm, streaming, Social community networking</h6>
              </div>
              <div className="mifi-wwm-btn">
                <button className="sf-btn">
                  <span className="sf-btn-text">Button</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
