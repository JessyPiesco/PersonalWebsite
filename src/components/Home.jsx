import React from "react";
import sophiaandI from "../pictures/SophiaandI.jpeg";
import justinAndMe from "../pictures/JustinandMe.jpeg";
import bootstrap from "../pictures/Bootstrap.png";
import CSS from "../pictures/CSS.png";
import Html from "../pictures/Html.png";
import JavaScript from "../pictures/Javascript.png";
import PostgreSQL from "../pictures/PostgreSQ.png";
import ReactLogo from "../pictures/React.png";
import ComputerGirl from "../pictures/computerGirl.jpeg";
import CSU from "../pictures/csu_certificate.png";
import WellsFargo from "../pictures/wells_fargo_cert.png";

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Certificates from "./Certificates";

const Home = () => {
  return (
    <>
      <div id="aboutMe" className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-12 order-md-first sides-container pb-1 p-0">
            <LeftSide />
          </div>
          <div className="col-12 col-md-8 p-0">
            <div className="about-jessy rounded p-3 mt-3">
              <h3>My Story</h3>
              <p>
                As a 37-year-old mother and self-proclaimed geek, I am a
                Colorado native with a passion for coding and problem-solving.
                With a certificate in web development from FullStack Academy through CSU, I
                thrive on creating projects from start to finish. Despite facing
                obstacles as a neurodivergent individual with ADHD, I possess
                strong pattern recognition and a unique perspective that aids in
                my quick grasp of concepts. Adaptability is one of my strengths,
                allowing me to tailor steps and approaches to my own projects.
                In previous roles, I have found joy in training new hires,
                leveraging my ability to work well with others and accommodate
                different learning styles.
                <br />
                <br />
                <strong>Current skill building:</strong>{" "}
                <a
                  href="https://itexperience.org/google-career-certificate-scholarship-program/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ITExperience{" "}
                </a>{" "}
                (Google IT Support),{" "}
                <a
                  href="https://discord.com/channels/1072704389447422056/1096564344633970709"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Discord Quackathon
                </a>
                ,{" "}
                <a
                  href="https://www.codecademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  codeCademy
                </a>{" "}
                (C++) <br />
                <strong>•Favorite Movie:</strong> Star Trek 2009{" "}
                <strong>•Favorite Book:</strong> The Wheel of Time Series{" "}
                <strong>•Favorite Console Game: </strong>Horizon Zero Dawn{" "}
                <strong>•Favorite Tabletop Game:</strong> Dominion
              </p>
            </div>
            <div className="logos pt-2 pb-4 p-0">
              <h2 className="pt-4">Proficient in these languages</h2>
              <div className="logos-container py-4 mx-auto">
                <div className="row justify-content-center">
                  <div className="col-md-2">
                    <div className="logo-item bg-light p-3 text-center rounded-circle">
                      <img
                        src={JavaScript}
                        alt="JavaScript Logo"
                        className="img-fluid"
                        id="js"
                        title="JavaScript"
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="logo-item bg-light p-3 text-center rounded-circle">
                      <img
                        src={bootstrap}
                        alt="Bootstrap Logo"
                        className="img-fluid"
                        id="bs"
                        title="Bootstrap"
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="logo-item bg-light p-3 text-center rounded-circle">
                      <img
                        src={ReactLogo}
                        alt="React Logo"
                        className="img-fluid"
                        id="rl"
                        title="React"
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="logo-item bg-light p-3 text-center rounded-circle">
                      <img
                        src={CSS}
                        alt="CSS Logo"
                        className="img-fluid"
                        id="css"
                        title="CSS"
                      />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center pt-3">
                  <div className="col-md-2">
                    <div className="logo-item bg-light p-3 text-center rounded-circle">
                      <img
                        src={PostgreSQL}
                        alt="PostgreSQL Logo"
                        className="img-fluid"
                        id="psql"
                        title="Postgres"
                      />
                    </div>
                  </div>

                  <div className="col-md-2">
                    <div className="logo-item bg-light p-3 text-center rounded-circle">
                      <img
                        src={Html}
                        alt="HTML Logo"
                        className="img-fluid"
                        id="html"
                        title="HTML"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Certificates />

            <div className="family pb-5 p-0">
              <h2 className="pt-4 pb-2">Family</h2>
              <div className="row" id="1stPics">
                <div className="col-12 col-md-6">
                  <img
                    src={sophiaandI}
                    alt="Jessy with daughter"
                    className="img-fluid"
                  />
                  <p>
                    Meet Sophia, my energetic and bright four-year-old daughter.
                    She's become quite the board game enthusiast, loving
                    tabletop games like Cooties. Sophia's counting, letters, and
                    colors skills have flourished, impressing us with her
                    ability to count up to 30, recognize all of her letters and
                    even write some. She also can identify various shades and
                    hues. She's a helpful little superstar, always eager to lend
                    a hand around the house. Cooking together has become a
                    special bonding activity, and her passion for it continues
                    to grow. Sophia's love for animals extends to dogs, cats,
                    and even fire alarms, which she finds fascinating. But
                    nothing brings her more joy than swimming - she's a true
                    water lover. Watching her grow and develop is an absolute
                    joy for me as a parent.
                  </p>
                </div>
                <div className="col-12 col-md-5">
                  <img
                    src={justinAndMe}
                    alt="Jessy with husband"
                    className="img-fluid"
                  />
                  <p>
                    My husband Justin and I have been happily married for 5
                    years now. He's a total geek just like me, with a degree in
                    graphic design and a passion for helping me with my coding
                    projects. Together, we love to explore new places and
                    experience different cultures. We make it a priority to
                    travel at least once a year, preferably twice, and our
                    favorite destination is Mexico. We love snorkeling and
                    soaking up the sun on the beautiful beaches there. When
                    we're not traveling, we like to host game nights with our
                    friends and indulge in our love for all things nerdy.
                  </p>
                  <img
                    src={ComputerGirl}
                    alt="Ai girl on computer"
                    className="img-fluid"
                    style={{ height: "30%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-12 order-md-last sides-container  pb-1 p-0">
            <RightSide />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
