import React from "react";

export default function Case() {
  return (
    <>
      <div className="mifi-case">
        <div className="mifi-case-content">
          <div className="mifi-case-content-title">
            <h6>ASSETUSE</h6>
            <h6>Case</h6>
          </div>
          <img className="mifi-case-node" src="/images/case_node.svg"></img>
          <img className="mifi-case-node-t" src="/images/case_node_T.svg"></img>
          <img className="mifi-case-node-m" src="/images/case_node_M.svg"></img>
          <div className="mifi-case-content-text-1">
            <h5 className="case-title ">Streami-fi</h5>
            <h5 className="case-title ">Stereo turntables</h5>
            <p className="case-sub-title-1 param-3">
              For a limited time, a random headphones box will be available for
              purchase, and users who own headphones will be rewarded with more
              SMF tokens while playinggames or listening to music. The more SMF
              tokens the headphones bring in, the rarer they are. Keep a keen
              eye out for the best!
            </p>
          </div>

          <div className="mifi-case-content-text-2">
            <h5 className="case-title ">Year of Purchase</h5>
            <p className="case-sub-title-2 param-3">
              Match the year of purchase of the headphones to the song for extra
              tokens!
            </p>
          </div>

          <div className="mifi-case-content-text-3">
            <h5 className="case-title ">Year of Purchase</h5>
            <p className="case-sub-title-3 param-3">
              Match the year of purchase of the headphones to the song for extra
              tokens!
            </p>
          </div>

          <div className="mifi-case-content-text-4">
            <h5 className="case-title ">Gift</h5>
            <p className="case-sub-title-4 param-3">
              Users can purchase Gifts to send to someone they like while they
              perform or play the game. The higher the value of the gift, the
              more tokens the recipient will receive.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
