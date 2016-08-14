import React, {Component} from 'react';
import '../css/About.css';

class About extends Component {

  render() {
    return (
      <div className="about-component">
        <div className='about-container'>
          <div className='team-name'>
            <h8>About the Team</h8>
          </div>
          <div className="teammates">
            <div className="member-container denis">
              <div className='member-name'>
                <h4>Denis</h4>
              </div>
              <img className='about-pics' src="http://i63.tinypic.com/2i6pe7n.jpg" alt="Denis"/>
              <br></br>
              <a className='icons' href="https://www.linkedin.com/in/denis-koltsov"><img className="logo" src="http://i66.tinypic.com/2ege1dz.png" alt="LinkedIn"/></a>
              <a className='icons' href="https://github.com/deniskoltsov"><img className="logo" src="http://i64.tinypic.com/e8jy2g.png" alt="Github"/></a>
              <p className='member-story'>"The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee."
              </p>
            </div>
            <div className="member-container hiro">
              <div className='member-name'>
                <h4>Hiro</h4>
              </div>
              <img className='about-pics' src="http://i63.tinypic.com/4sbj7s.jpg" alt="Hiro"/>
              <br></br>
              <a className='icons' href="https://www.linkedin.com/in/hironarita"><img className="logo" src="http://i66.tinypic.com/2ege1dz.png" alt="LinkedIn"/></a>
              <a className='icons' href="https://github.com/hironarita"><img className="logo" src="http://i64.tinypic.com/e8jy2g.png" alt="Github"/></a>
              <p className='member-story'>"Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit."
              </p>
            </div>
            <div className="member-container maggie">
              <div className='member-name'>
                <h4>Maggie</h4>
              </div>
              <img className='about-pics' src="http://i63.tinypic.com/2j3ft5h.png" alt="Maggie"/>
              <br></br>
              <a className='icons' href="https://www.linkedin.com/in/maggiemerrell"><img className="logo" src="http://i66.tinypic.com/2ege1dz.png" alt="LinkedIn"/></a>
              <a className='icons' href="https://github.com/moodlemags">
                <img className="logo" src="http://i64.tinypic.com/e8jy2g.png" alt="Github"/></a>
              <p className='member-story'>"Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass."
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
