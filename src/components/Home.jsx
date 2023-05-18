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
import CSU from "../pictures/csu_certificate.png"

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Home = () => {
  return (
    <>
      <div id="aboutMe" className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-12 order-md-first sides-container pb-1 p-0">
            <LeftSide />
          </div>
          <div className="col-12 col-md-8 p-0">
            <div className="about-jessy rounded p-3">
              <h2>About Jessy</h2>
              <p>
              As a 37-year-old mother and self-proclaimed geek, I am a Colorado native who finds great joy in playing games, coding, and solving problems. After graduating from FullStack Academy's bootcamp I received a certificate in web development from Colorado State University. I have discovered a passion for coding that allows me to create something from start to finish. Being neurodivergent with ADHD, I face obstacles, but it also provides me with great pattern recognition and a unique perspective. I have a knack for grasping concepts quickly and am skilled at adapting the steps to my own projects. In my past jobs, I have enjoyed training new hires as I work well with others and understand different learning styles to help them learn in their own way. I particularly love backend work and am excited to take on new challenges and achieve new goals in my coding career.<br/><br/>
              <strong>Current skill building:</strong> <a href="https://itexperience.org/google-career-certificate-scholarship-program/" target="_blank" rel="noopener noreferrer">ITExperience </a> (Google Technical Support Fundamentals), <a href="https://discord.com/channels/1072704389447422056/1096564344633970709" target="_blank" rel="noopener noreferrer"> Discord Quackathon</a>, <a href="https://www.codecademy.com" target="_blank" rel="noopener noreferrer">codeCademy</a> (C++) <br/>
              <strong>•Favorite Movie:</strong> Startrek 2009  <strong>•Favorite Book:</strong> Wheel of Time Series  <strong>•Favorite Console Game: </strong>Horizon Zero Dawn  <strong>•Favorite Tabletop Game:</strong> Dominion
              </p>
            </div>
            <div className="logos pt-2 pb-4 p-0">
  <h2 className="pt-4">Proficient in these languages</h2>
  <div className="logos-container py-4 mx-auto">
    <div className="row justify-content-center">
      <div className="col-md-2">
        <div className="logo-item bg-light p-3 text-center rounded-circle">
          <img src={JavaScript} alt="JavaScript Logo" className="img-fluid" id="js"/>
        </div>
      </div>
      <div className="col-md-2">
        <div className="logo-item bg-light p-3 text-center rounded-circle">
          <img src={bootstrap} alt="Bootstrap Logo" className="img-fluid" id="bs"/>
        </div>
      </div>
      <div className="col-md-2">
        <div className="logo-item bg-light p-3 text-center rounded-circle">
          <img src={ReactLogo} alt="React Logo" className="img-fluid" id="rl" />
        </div>
      </div>
      <div className="col-md-2">
        <div className="logo-item bg-light p-3 text-center rounded-circle">
          <img src={CSS} alt="CSS Logo" className="img-fluid" id="css"/>
        </div>
      </div>
    </div>
    <div className="row justify-content-center pt-3" >
      <div className="col-md-2">
        <div className="logo-item bg-light p-3 text-center rounded-circle">
          <img src={PostgreSQL} alt="PostgreSQL Logo" className="img-fluid" id="psql"/>
        </div>
      </div>

      <div className="col-md-2">
        <div className="logo-item bg-light p-3 text-center rounded-circle">
          <img src={Html} alt="HTML Logo" className="img-fluid" id="html" />
        </div>
      </div>
    </div>
  </div>
</div>

<div className="Certificates pt-2 pb-4 p-0">
  <h2>Certificate</h2>
  <div className="col-md-12">
    <div className="certificate-item text-center mx-auto">
    <a href="/public_pics/csu_certificate.png" target="_blank">
      <img src={CSU} alt="CSU Certificate" className="img-fluid" id="csu" style={{ width: '50%', height: 'auto', borderRadius: 0 }} />
      </a>
    </div>
  </div>
</div>



            <div className="family pb-5 p-0">
            <h2>Family</h2>
            <div className="row" id="1stPics">
              <div className="col-12 col-md-6">
                <img
                  src={sophiaandI}
                  alt="Jessy with daughter"
                  className="img-fluid"
                />
                <p>
                  Meet Sophia, my beautiful and spunky three-year-old daughter.
                  Sophia is a bundle of fun-loving energy, and always keeps us
                  on our toes! She's a bit stubborn at times, but that just adds
                  to her charm. Sophia is a quick learner and already knows all
                  her letters and can count up to 20. She's also a whiz at basic
                  addition! She loves playing games, whether it's Candyland,
                  video games, or any other kind of game. Sophia is my little
                  helper in the kitchen, and we love bonding over our shared
                  love of cooking. She's also an animal lover and loves to talk
                  about dogs, cats, and even fire alarms! But nothing beats her
                  favorite activity in the world - going swimming!
                </p>
              </div>
              <div className="col-12 col-md-5">
                <img
                  src={justinAndMe}
                  alt="Jessy with husband"
                  className="img-fluid"
                />
                <p>
                  My husband Justin and I have been happily married for almost 5
                  years now. He's a total geek just like me, with a degree in
                  graphic design and a passion for helping me with my coding
                  projects. Together, we love to explore new places and
                  experience different cultures. We make it a priority to travel
                  at least once a year, preferably twice, and our favorite
                  destination is Mexico. We love snorkeling and soaking up the
                  sun on the beautiful beaches there. When we're not traveling,
                  we like to host game nights with our friends and indulge in
                  our love for all things nerdy.
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

export default Home
