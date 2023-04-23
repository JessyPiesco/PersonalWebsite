import React from "react";
import space from '../pictures/solarsytem.png';

const Projects = () => {
  return (
    <div id="projects">


      <p><h2>Here is a list of some of my projects</h2></p>
    <p><div id="solar">
      <img src={space} alt="space" className="projectPics"/>
      <button onClick={() => window.location.href="https://planetquack.onrender.com/"}>
  <p className="proNames">Solar System</p>
</button>

      <p>Our team recently completed a Quackathon project, a visually-stunning solar system website with unique planet profile pages, created entirely out of CSS! As the primary backend developer, I utilized PostgreSQL, Node.js, and Express to build a RESTful API and implemented foreign keys to ensure data was stored efficiently. Additionally, I collaborated with the front-end team to develop the quiz, ensuring questions and answers were displayed correctly.
      </p>
    </div></p>
    <p>
      <div id="makingMoney">
        <img src="/Pictures/money.jpeg" alt="money" className="projectPics"/>
        <h3 className="proNames">
          Making Money
        </h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi at earum fuga harum alias nobis, eaque optio laudantium dolor sed eligendi consequatur distinctio aperiam accusantium, architecto exercitationem perferendis minus error.

<p></p> Fuga dolore impedit suscipit, vero odit, sequi in deleniti, odio ipsa facere et. Consequatur modi cum ullam adipisci unde amet qui sed odio officia ipsa omnis earum quibusdam, dolor totam? <p>
  Consequatur modi cum ullam adipisci unde amet qui sed odio officia ipsa omnis earum quibusdam, dolor totam?
Fuga dolore impedit suscipit, vero odit, sequi in deleniti. </p> </p>

      </div>
    </p>
    </div>
  );
};

export default Projects;
