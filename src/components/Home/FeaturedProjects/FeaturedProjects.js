import React from 'react';
import startup from '../../../images/startup.png'
import boiwala from '../../../images/boiwala.png'
import './FeaturedProjects.css'
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
const FeaturedProjects = () => {
    return (
        <section>
            <div className="row mt-5">
                <div className="col-md-5 col-sm-6 col-12 offset-md-1 text-white projects-card">
                    <h1 style={{borderBottom:'3px solid gray',width:'60%'}}>Startup Consultant</h1>
                    <img className='img-fluid' style={{width:'600px',height:'400px'}} src={startup} alt=""/>
                    <p>A single page application created with React. Where user can authenticated and order services according to their choice.Admin can add or delete Service and modify the service list. Google sign in and dashboard was included.</p>
                    <a style={{marginRight:'30px'}} className='btn btn-primary' href="https://startup-consultant.web.app/" target='_blink'><LaunchIcon style={{ fontSize: '30px' }}/></a>
                    <a className='btn btn-primary' href="https://github.com/naqib74/startup-clinet" target='_blink'> <GitHubIcon style={{ fontSize: '30px' }} /></a>

                </div>
                <div className="col-md-5 col-sm-6 col-12 text-white projects-card">
                    <h1 style={{borderBottom:'3px solid gray',width:'35%'}}>Book Shop</h1>
                    <img className='img-fluid' style={{width:'600px',height:'400px'}} src={boiwala} alt=""/>
                    <p>A single page application created with React. Where user can authenticated and order book according to their choice.Admin can add or delete books and modify the books list. Google sign in and dashboard was included.</p>
                    <a style={{marginRight:'30px'}} className='btn btn-primary' href="https://book-shop-8e2f0.web.app/" target='_blink'><LaunchIcon style={{ fontSize: '30px' }}/></a>
                    <a className='btn btn-primary' href="https://github.com/naqib74/boiwalaa-client" target='_blink'> <GitHubIcon style={{ fontSize: '30px' }} /></a>

                </div>
            </div>
            <div className='d-flex justify-content-center mt-5'>
                <Link style={{backgroundColor:'#FC1056',color:'white'}} className='btn' to='/projects'> See more projects</Link>
            </div>
    
        </section>
    );
};

export default FeaturedProjects;