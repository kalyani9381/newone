import React from "react";
import "./Sourcenum.css";
import MaxWidthWrapper from "../utils/maxWidthWrapper";

const Sourcenum = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="sourcenum-container">
          <h1>Our Success in Number</h1>
          <span>
            Enabling enterprises to keep pace with the exponential changes in
            digital age.
          </span>
          <div className="source-contents">
            <div className="source-number">
              <h2>350+</h2>
              <span>Employees</span>
            </div>
            <div className="source-number">
              <h2>96%</h2>
              <span>Happy Users</span>
            </div>
            <div className="source-number">
              <h2>15+</h2>
              <span>Countries</span>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Sourcenum;
