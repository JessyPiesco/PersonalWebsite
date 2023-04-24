import React from "react";
import sophiaandI from '../pictures/SophiaandI.jpeg';
import meInMexico from '../pictures/meInMexico.jpeg';
import justinAndMe from '../pictures/JustinandMe.jpeg';


const Home = () => {
  return (
    <div id="aboutMe" className="container-fluid">

      <div className="row">
        <div className="col-12 about-jessy">
          <h2>About Jessy</h2>
          <p>I am a 36-year-old mother and self-proclaimed geek. I find great joy in playing games, coding, and solving problems. While I started my career in sales at the young age of 16, I have since discovered a passion for coding that allows me to create something from start to finish. As a neroDivergent individual with ADHD, I face challenges, but it also allows me to see things from a different perspective than others. I tend to grasp concepts quickly and am skilled at adapting the steps to my own projects. In past jobs, I have been a part of training new hires as I work well with others and understand different learning styles to help them learn in their own way. I am excited to take on new challenges and achieve new goals in my coding career.</p>
        </div>
        </div>
        <div className="row">
        <div className="col-12  family">
          <h2>Family</h2>
          <div className="row" id="1stPics">
            <div className="col-12 col-md-6">
              <img
                src={sophiaandI}
                alt="Jessy with daughter"
                className="img-fluid"
              />
              <p>Meet Sophia, my beautiful and spunky three-year-old daughter. Sophia is a bundle of fun-loving energy, and always keeps us on our toes! She's a bit stubborn at times, but that just adds to her charm. Sophia is a quick learner and already knows all her letters and can count up to 20. She's also a whiz at basic addition! She loves playing games, whether it's Candyland, video games, or any other kind of game. Sophia is my little helper in the kitchen, and we love bonding over our shared love of cooking. She's also an animal lover and loves to talk about dogs, cats, and even fire alarms! But nothing beats her favorite activity in the world - going swimming!</p>
            </div>
            <div className="col-12 col-md-6">
              <img
                src={justinAndMe}
                alt="Jessy with husband"
                className="img-fluid"
              />
<p>
My husband Justin and I have been happily married for almost 5 years now. He's a total geek just like me, with a degree in graphic design and a passion for helping me with my coding projects. Together, we love to explore new places and experience different cultures. We make it a priority to travel at least once a year, preferably twice, and our favorite destination is Mexico. We love snorkeling and soaking up the sun on the beautiful beaches there. When we're not traveling, we like to host game nights with our friends and indulge in our love for all things nerdy.
</p>
</div>


    </div>
    </div>
    </div>
    </div>
  );
};

export default Home;
