import React from "react";
import MaxWidthWrapper from "../utils/maxWidthWrapper";
import "./Hrms.css";

const Hrms = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="hrms-container">
          <div className="hrms-organizations">
            <MaxWidthWrapper>
              <div style={{ display: "flex", gap: "20px" }}>
                <div className="hrms-orgs-content">
                  <h1 className="hrms-orgs-heading">
                    Shifting organizations from transactional to transformative.
                  </h1>
                  <p className="hrms-orgs-description">
                    Designed to consumerize the employee service experience by
                    creating positive touch points offering a win-win scenario
                    for both the workforce and the organisation. Our cloud-based
                    SaaS platform makes all this absolutely effortless for you .
                  </p>
                </div>
                <div className="hrms-orgs-imgs">
                  <img
                    src="https://media.istockphoto.com/id/1386692335/photo/employee-are-meeting-via-video-conference.jpg?s=612x612&w=0&k=20&c=0jUu3pWUY3wH0K-qW3mrjHEsxvWDXBLD10DYYMrwt3A="
                    alt=""
                  />
                </div>
              </div>
            </MaxWidthWrapper>
          </div>
          <h2 className="hrms-title">We're human-centered</h2>
          <h1 className="hrms-heading">
            Employee board digital solution is designed for change agility and
            creating a captivating employee value proposition.
          </h1>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hrms;
