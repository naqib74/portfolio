import React from 'react';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import img from '../../../images/20200120_121749_2 (1).jpg'
import { Link } from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

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
                   <a href="https://www.linkedin.com/in/muhammad-naqib-963b80180/" target='_blank'> <LinkedInIcon className="icon" style={{ fontSize: '30px' }} /></a>
                   <a href="https://github.com/naqib74" target='_blank'> <GitHubIcon className="icon" style={{ fontSize: '30px' }} /></a>
                   <a href="https://www.facebook.com/nakib.hassan.948" target='_blank'> <FacebookIcon className="icon" style={{ fontSize: '30px' }} /></a>
                   <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target='_blank'> <EmailIcon className="icon" style={{ fontSize: '30px' }} /></a>
                   <br/>
                   <a className='btn btn-primary mt-3' href="https://drive.google.com/uc?export=download&id=1yuL2Mr7tkxqGRJBNKjeYf6LLPe0p2G3l" target='_blink'><CloudDownloadIcon style={{ fontSize: '25px' }} /> Download Resume</a>
                    <Link to='/contact'><button style={{marginLeft:'10px'}} className='btn btn-primary mt-3'>Hire Me</button></Link>
               </div>
               <div className="col-md-5 col-sm-6 col-12 d-flex justify-content-center">
                   <img style={{width:'300px',height:'300px'}} src={img} alt=""/>
               </div>
            </div>

        </section>
    );
};

export default Header;