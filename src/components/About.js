import React, { Component } from 'react';
import '../css/About.css';

class About extends Component {

  render() {
    return (
      <div className="about-component">
        <div className='about-conatiner'>
          <h3>ABOUT TEAM</h3>
          <div className="teammates">
            <div className="denis"><h4>Denis</h4>
                <img src="src/components/teampics/denis.jpg" alt="denis" /> <br />
                  <a href="https://www.linkedin.com/in/denis-koltsov"><img className="logo" src="src/components/teampics/linkedin.png" alt="LinkedIn"/></a>
                  <a href="https://github.com/deniskoltsov"><img className="logo" src="src/components/teampics/github.png" alt="Github"/></a>

            </div>
            <div className="hiro"><h4>Hiro</h4>
                <img src="src/components/teampics/hiro.jpg" alt="hiro" /><br />
                  <a href="https://www.linkedin.com/in/hironarita"><img className="logo" src="src/components/teampics/linkedin.png" alt="LinkedIn"/></a>
                  <a href="https://github.com/hironarita"><img className="logo" src="src/components/teampics/github.png" alt="Github"/></a>
            </div>
            <div className="maggie"><h4>Maggie</h4>
                <img src="src/components/teampics/maggie.png" alt="maggie" /> <br />
                <a href="https://www.linkedin.com/in/maggiemerrell"><img className="logo" src="src/components/teampics/linkedin.png" alt="LinkedIn"/></a>
                <a href="https://github.com/moodlemags"><img className="logo" src="src/components/teampics/github.png" alt="Github"/></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
