import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import startup from '../../images/startup.png'
import boiwala from '../../images/boiwala.png'
import doctors from '../../images/doctors.png'
import LaunchIcon from '@material-ui/icons/Launch';
import GitHubIcon from '@material-ui/icons/GitHub';

const Projects = () => {
    return (
        <section style={{backgroundColor:'#0A192F', height:'100%'}}>
            <NavigationBar></NavigationBar>

            <div className="row mt-5">
                <div className='col-md-3 mx-5 mb-5 text-white projects-card'>
                <h1 style={{borderBottom:'3px solid gray',width:'60%'}}>Startup Consultant</h1>
                    <img className='img-fluid mb-2' style={{width:'600px',height:'400px'}} src={startup} alt=""/>
                    <p>A single page application created with React. Where user can authenticated and order services according to their choice.Admin can add or delete Service and modify the service list. Google sign in and dashboard was included.</p>
                    <a style={{marginRight:'30px'}} className='btn btn-primary' href="https://startup-consultant.web.app/" target='_blink'><LaunchIcon style={{ fontSize: '30px' }}/></a>
                    <a className='btn btn-primary' href="https://github.com/naqib74/startup-clinet" target='_blink'> <GitHubIcon style={{ fontSize: '30px' }} /></a>

                </div>
                <div className='col-md-3 mx-5 mb-5 text-white projects-card'>
                <h1 style={{borderBottom:'3px solid gray',width:'60%'}}>Book Shop</h1>
                    <img className='img-fluid mb-3' style={{width:'600px',height:'400px'}} src={boiwala} alt=""/>
                    <p className='mb-4'>A single page application created with React. Where user can authenticated and order book according to their choice.Admin can add or delete books and modify the books list. Google sign in and dashboard was included.</p>
                    <a style={{marginRight:'30px'}} className='btn btn-primary' href="https://book-shop-8e2f0.web.app/" target='_blink'><LaunchIcon style={{ fontSize: '30px' }}/></a>
                    <a className='btn btn-primary' href="https://github.com/naqib74/boiwalaa-client" target='_blink'> <GitHubIcon style={{ fontSize: '30px' }} /></a>

                </div>
                <div className='col-md-3 mb-5 mx-5 text-white projects-card'>
                <h1 style={{borderBottom:'3px solid gray',width:'60%'}}>Doctor's Portal</h1>
                    <img className='img-fluid mb-3' style={{width:'600px',height:'400px'}} src={doctors} alt=""/>
                    <p>A single page application created with React. Where patient can authenticated and apply for a doctor appointment. Google sign in and dashboard was included.</p>
                    <a style={{marginRight:'30px'}} className='btn btn-primary' href="https://doctors-portal-27cde.web.app/" target='_blink'><LaunchIcon style={{ fontSize: '30px' }}/></a>
                    <a className='btn btn-primary' href="https://github.com/naqib74/doctors-portal" target='_blink'> <GitHubIcon style={{ fontSize: '30px' }} /></a>

                </div>
            </div>
            
        </section>
    );
};

export default Projects;