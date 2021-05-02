import React from 'react';
import myImg from '../../images/20200120_121749_2 (1).jpg'
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import './About.css'

const About = () => {
    return (
        <main style={{backgroundColor:'#0A192F',height:'100%',width:'100%'}}>
           <NavigationBar></NavigationBar>
            <div className="row">
                <div className="col-md-5 col-sm-6 col-12 offset-md-1 text-white mt-5">
                    <img style={{width:'300px',height:'300px'}} src={myImg} alt=""/>
                <h1>I'm Muhammad Naqib</h1>
                   <h4>MERN Stack Developer</h4>
                   <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                </div>
                <div className="col-md-6 col-sm-6 col-12 text-white mt-4">
                    <h4>Programming Skills</h4>
                   <div className='mt-3'>
                   <h5>My Skills Set</h5>
                    <span className="skills">JavaScript</span>
                        <span className="skills">ES6</span>
                        <span className="skills">React.js</span>
                        <span className="skills">Node.js</span>
                        <span className="skills">Express.jS</span>
                        <span className="skills">MongoDB</span>
                        <br />
                        <br />
                        <span className="skills">Redux.js</span>
                        <span className="skills">Git</span>
                        <span className="skills">Firebase</span>
                        <span className="skills">VS Code</span>
                        <span className="skills">JavaScript</span>
                   </div>
                   <div className='mt-4'>
                   <h5>Expertise</h5>
                        <span className="skills">JavaScript</span>
                        <span className="skills">ES6</span>
                        <span className="skills">React.js</span>
                        <span className="skills">Bootstrap</span>
                        <span className="skills">React-router</span>
                        <br /><br />
                        <span className="skills">Material Design</span>
                        <span className="skills">Html</span>
                        <span className="skills">CSS.</span>
                        <span className="skills">Git</span>
                   </div>
                   <div className='mt-4'>
                   <h5>Comfortable</h5>
                        <span className="skills">Redux</span>
                        <span className="skills">Node</span>
                        <span className="skills">Express</span>
                        <span className="skills">MongoDB</span>
                        <span className="skills">Express.jS</span>
                        <span className="skills">MongoDB</span><br /><br />
                        <span className="skills">Firebase</span>
                        <span className="skills">VS Code</span>
                   </div>
                   <div className='mt-4'>
                   <h5>Familiar</h5>
                        <span className="skills">Redux.js</span>
                        <span className="skills">GraphQ</span>
                        <span className="skills">React Native</span>
                   </div>
                   <div className='mt-4'>
                   <h5>Tools</h5>
                        <span className="skills">Git</span>
                        <span className="skills">VS Code</span>
                        <span className="skills">Chrome Dev tool</span><br /><br />
                        <span className="skills">Firebase</span>
                        <span className="skills">Netlify</span>
                        <span className="skills">Heroku.</span>
                   </div>
                </div>
            </div>
        </main>
    );
};

export default About;