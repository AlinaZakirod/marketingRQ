import React, { Component } from "react";

class scrollerSplitBanner extends Component {
  state = {};
  render() {
    return (
      <div id="splitBanner">
        <div className="">
          <div className="split-left">
            {/* <img
              className="banner-image"
              src="https://farm2.staticflickr.com/1638/26145024230_06acd55d1b_b.jpg"
              draggable="false"
            /> */}
          </div>

          <div classname="split-right">
            {/* <img
              className="banner-image"
              src="https://farm2.staticflickr.com/1663/25814974803_d4c55ff708_b.jpg"
              draggable="false"
            /> */}
          </div>
          <div class="scroller">
            <svg
              class="scroller__thumb"
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
            >
              <polygon
                className="scrollerSplitBanner"
                points="0 50 37 68 37 32 0 50"
              />
              <polygon
                className="scrollerSplitBanner"
                points="100 50 64 32 64 68 100 50"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default scrollerSplitBanner;
