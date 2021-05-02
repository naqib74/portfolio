import React from 'react';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import img from '../../../images/20200120_121749_2 (1).jpg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section>
            <NavigationBar></NavigationBar>

            <div className='row mt-5'>
               <div className="col-md-5 col-sm-6 col-12 offset-md-1 text-white">
                   <h4>Hello I'm</h4>
                   <h1>Muhammad Naqib</h1>
                   <h4>MERN Stack Developer</h4>
                   <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                   <a className='btn btn-primary' href="https://drive.google.com/uc?export=download&id=1yuL2Mr7tkxqGRJBNKjeYf6LLPe0p2G3l" target='_blink'>Resume</a>
                    <Link to='/contact'><button style={{marginLeft:'10px'}} className='btn btn-primary'>Hire Me</button></Link>
               </div>
               <div className="col-md-5 col-sm-6 col-12 d-flex justify-content-center">
                   <img style={{width:'300px',height:'300px'}} src={img} alt=""/>
               </div>
            </div>

        </section>
    );
};

export default Header;