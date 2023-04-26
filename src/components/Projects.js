import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import gryffinP from "../pictures/gryffin_puffs.png";
import space from "../pictures/solarsytem.png";
import snake from "../pictures/snake_game.png";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";


const Projects = () => {
  const img = new Image();
  return (
    <div id="projects" className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-12 sides-container pb-1 p-0">
          <LeftSide />
        </div>
        <div className="col-lg-8 col-12 d-flex flex-column ">
          <h2 className="pb-4 border-bottom text-center">Here is a list of some of my projects</h2>

          <div className="project-container">
  <h3>Works in progress:</h3>
  <h5 className='col-4 border-bottom pt-4'>Quack Bot</h5>
  <p>We are currently developing a Discord bot designed to assist junior developers in honing their skills. By entering the "!quiz" command, users can access a variety of programming languages and test their knowledge. They can choose to answer general quiz questions or focus on interview questions to prepare for job interviews.</p>
  <Button variant="outline-secondary" size="sm" onClick={() => window.location.href="https://github.com/Quackathon-Quiz-Bot"}>
    <p className="proNames">Quack-Bot Repo</p>
  </Button>
  <h5 className='border-bottom col-4 pt-3'>Wino's</h5>
  <p>Wino's is a dynamic full-stack web application designed to enhance the wine drinking experience. Through its interactive platform, users can effortlessly rate, save, and favorite their preferred wines. Say goodbye to guessing games when trying out new wines as Wino's provides a comprehensive and reliable rating system based on real user experiences. The app also lets you follow your friends and family to discover their favorite wines, as well as access the average price of each wine.</p>
  <Button variant="outline-secondary" size="sm" onClick={() => window.location.href="https://github.com/The-winos"}>
    <p className="proNames">Wino's Repo</p>
  </Button>



          </div>

          <div className="project-container pt-5 pb-5 ">
            <h3>Fully deployed projects:</h3>
            <h5 className='border-bottom col-4 pt-3'>Solar System</h5>
            <div id="solar" className="d-flex align-items-center">

              <p>Solar sytem description goes here here here adksjfkladjs dklsjf dksfj kladsjf kl adfadksjfkl adsjfkldj klf jadlfj </p>


                <Button variant="outline-secondary" size="sm" onClick={() => window.location.href="https://planetquack.onrender.com/"}>
                  <p className="proNames">Solar System</p>
                </Button>
                <Button variant="outline-secondary" size="sm" onClick={() => window.location.href="https://github.com/TeamPlanetQuack"}>
                  <p className="proNames">Solar System's Repo</p>
                </Button>

              <img src={space} alt="space" className="projectPics ml-3 mr-0 align-self-end" />
            </div>


            <div id="puffs" className="d-flex align-items-center">
              <div>
                <Button variant="outline-secondary" size="sm" onClick={() => window.location.href="https://acciobooks.onrender.com/"}>
                  <p className="proNames">Gryffin Puffs</p>
                </Button>
                <Button variant="outline-secondary" size="sm" onClick={() => window.location.href="https://github.com/orgs/gryffinPuffs/repositories"}>
                  <p className="proNames">Gryffin Puffs Repo</p>
                </Button>
              </div>
              <img src={gryffinP} alt="Website" className="projectPics ml-3 mr-0 align-self-end" />
            </div>


            <div id="snake" className="d-flex align-items-center">
              <div>
                <Button variant="outline-secondary" size="sm" onClick={() => window.location.href="https://animated-gaufre-b3edcf.netlify.app/"}>
                  <p className="proNames">Snake Game</p>
                </Button>
              </div>
              <img src={snake} alt="snake_game" className="projectPics ml-3 mr-0 align-self-end" />
            </div>

          </div>
        </div>
        <div className="col-lg-2 col-12 sides-container pb-1 p-0">
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default Projects;
