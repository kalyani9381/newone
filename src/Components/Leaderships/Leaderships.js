import React from "react";
import "./Leaderships.css";
import MaxWidthWrapper from "../utils/maxWidthWrapper";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Leaderships = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="leadership-container">
          <h1>Our Leadership</h1>
          <span style={{ fontSize: "18px", paddingTop: "14px" }}>
            Our executive board wholeheartedly believes in the power of people.
            They are industry leaders with substantial experience in the B2B
            SaaS space, bringing in a bag full of knowledge and diversity with a
            common goal - to revolutionize the HR space.
          </span>
          <div className="leaderships">
            <div className="leadership-contents">
              <img
                className="leadership-image"
                src="https://mlhaktxbwgci.i.optimole.com/cb:Pn4d.200fd/w:auto/h:auto/q:mauto/https://akriviahcm.com/wp-content/uploads/2022/01/Rahul-Varma-Kalidindi.png"
                alt=""
              />
              <span className="leadership-name">Raghavendra Ghanjam</span>
              <span>CEO</span>
              {/* <svg
                width="260"
                height="78"
                viewBox="0 0 260 78"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.2952,21.2231 C24.8717,21.2231 12.0366,5.87273 8.86367,0.426255 C8.80347,0.31628 8.70762,0.229705 8.59167,0.180574 C8.47571,0.131442 8.34645,0.122626 8.22482,0.155559 C8.10318,0.188492 7.99631,0.26125 7.92154,0.362023 C7.84676,0.462796 7.80846,0.585683 7.81284,0.710771 V73.6082 C7.81284,74.6269 8.22046,75.6038 8.94603,76.3242 C9.67159,77.0445 10.6557,77.4492 11.6818,77.4492 H247.319 C248.405,77.4492 249.446,77.0209 250.214,76.2587 C250.982,75.4964 251.413,74.4626 251.413,73.3846 V25.2877 C251.413,24.2097 250.982,23.1758 250.214,22.4136 C249.446,21.6513 248.405,21.2231 247.319,21.2231 H43.2952 Z"
                  fill="rgb(88, 91, 213)"
                />
              </svg> */}
            </div>
            <div className="leadership-content">
              <div className="leadership-content_span-cont">
                <span></span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <p>
                  Raghavendra Ghanjam CEO, Co-Founder Raghavendra, a tech
                  enterprenuer and an alumnus of the prestigious UC Berkeley
                  College of Engineering, brings vigorous industry experience to
                  Employee board. He is passionate about argumentation of humanz
                  tasks by intelligence systems by empowering human resource
                  (HR) professionals worldwide with cloud-based HR solutions
                  embedding data insights and analytics into HR. He dreams of
                  Employee board as a game-changing technology reinventing
                  organisations to become responsive to emerging and sustainable
                  changes.
                </p>
                <div
                  style={{
                    display: "flex",
                    fontSize: "26px",
                    gap: "15px",
                    paddingTop: "15px",
                  }}
                >
                  <FaLinkedin color="blue" />
                  <FaTwitter color="blue" />
                </div>
              </div>
            </div>
          </div>
          <div className="leaderships2">
            <div className="leadership-content2">
              <div className="leadership-content_span-cont2">
                <span></span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <p>
                  With decades of experience, renowned academician, and
                  visionary, Raghavendra has been an achiever par excellence in
                  all his endeavors. He aims to develop a cutting-edge HR
                  automation platform that provides solutions in all facets of
                  human resource management.
                </p>
                <div
                  style={{
                    display: "flex",
                    fontSize: "26px",
                    gap: "15px",
                    paddingTop: "15px",
                  }}
                >
                  <FaLinkedin color="blue" />
                </div>
              </div>
            </div>
            <div className="leadership-contents2">
              <img
                className="leadership-image2"
                src="https://mlhaktxbwgci.i.optimole.com/cb:Pn4d.200fd/w:auto/h:auto/q:mauto/https://akriviahcm.com/wp-content/uploads/2021/12/Raghu-Sir-1-1.png"
                alt=""
              />
              <span className="leadership-name2">Raghavendra Ghanjam</span>
              <span>CEO Co-Founder of Company</span>
              {/* <svg
                width="260"
                height="78"
                viewBox="0 0 260 78"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.2952,21.2231 C24.8717,21.2231 12.0366,5.87273 8.86367,0.426255 C8.80347,0.31628 8.70762,0.229705 8.59167,0.180574 C8.47571,0.131442 8.34645,0.122626 8.22482,0.155559 C8.10318,0.188492 7.99631,0.26125 7.92154,0.362023 C7.84676,0.462796 7.80846,0.585683 7.81284,0.710771 V73.6082 C7.81284,74.6269 8.22046,75.6038 8.94603,76.3242 C9.67159,77.0445 10.6557,77.4492 11.6818,77.4492 H247.319 C248.405,77.4492 249.446,77.0209 250.214,76.2587 C250.982,75.4964 251.413,74.4626 251.413,73.3846 V25.2877 C251.413,24.2097 250.982,23.1758 250.214,22.4136 C249.446,21.6513 248.405,21.2231 247.319,21.2231 H43.2952 Z"
                  fill="rgb(88, 91, 213)"
                />
              </svg> */}
            </div>
          </div>

          <div className="loctions">
            <h1>We are Located in</h1>
            <img
              src="https://mlhaktxbwgci.i.optimole.com/cb:Pn4d.200fd/w:210/h:166/q:mauto/https://akriviahcm.com/wp-content/uploads/2021/12/Hyderabad.png"
              alt=""
            />
            <h2>Hyderabad</h2>
          </div>
          <div className="social-icons">
            <h1>Let's get Social</h1>
            <div className="icons">
              <span>
                <FaLinkedin />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaFacebook />
              </span>
              <span>
                <FaInstagram />
              </span>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Leaderships;
