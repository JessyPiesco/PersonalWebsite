import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import gryffinP from "../pictures/gryffin_puffs.png";
import space from "../pictures/solarsytem.png";
import snake from "../pictures/snake_game.png";


  const Projects = () => {
    const img = new Image();
    return (
      <Container id="projects">
        <div className="d-flex flex-column">
          <h2>Here is a list of some of my projects</h2>

          <div>
            <h3>Works in progress:</h3>
            <Button onClick={() => window.location.href="https://github.com/Quackathon-Quiz-Bot"}>
              <p className="proNames">Quack-Bot Repo</p>
            </Button>
            <p>D</p>
            <Button onClick={() => window.location.href="https://github.com/The-winos"}>
              <p className="proNames">Wino's Repo</p>
            </Button>
            <p>D.</p>
          </div>

          <div>
            <h3>Fully deployed projects:</h3>
            <div id="solar" className="d-flex align-items-center">
              <div>
                <Button onClick={() => window.location.href="https://planetquack.onrender.com/"}>
                  <p className="proNames">Solar System</p>
                </Button>
                <Button onClick={() => window.location.href="https://github.com/TeamPlanetQuack"}>
                  <p className="proNames">Solar System's Repo</p>
                </Button>
              </div>
              <img src={space} alt="space" className="projectPics ml-3 mr-0 align-self-end" />
            </div>


            <div id="puffs" className="d-flex align-items-center">
              <div>
                <Button onClick={() => window.location.href="https://acciobooks.onrender.com/"}>
                  <p className="proNames">Gryffin Puffs</p>
                </Button>
                <Button onClick={() => window.location.href="https://github.com/orgs/gryffinPuffs/repositories"}>
                  <p className="proNames">Gryffin Puffs Repo</p>
                </Button>
              </div>
              <img src={gryffinP} alt="Website" className="projectPics ml-3 mr-0 align-self-end" />
            </div>


            <div id="snake" className="d-flex align-items-center">
              <div>
                <Button onClick={() => window.location.href="https://animated-gaufre-b3edcf.netlify.app/"}>
                  <p className="proNames">Snake Game</p>
                </Button>
              </div>
              <img src={snake} alt="snake_game" className="projectPics ml-3 mr-0 align-self-end" />
            </div>

          </div>
        </div>
      </Container>
    );


  }



export default Projects;
