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
                  <h6>Event -</h6>
                  <h6> DJ.MiFI</h6>
                </div>
                <div>
                  <p>Count Down</p>
                  <h5>00 D 00 H 00 M</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
