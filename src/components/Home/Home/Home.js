import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
import Header from '../Header/Header';

const Home = () => {
    return (
        <main style={{backgroundColor:'#0A192F',width:'100%'}}>
            <Header></Header>
            <section className='mt-5'>
                <h3 className='text-center text-white'>Featured Projects</h3>
                <FeaturedProjects></FeaturedProjects>
            </section>
            <section className='text-center text-white mt-5 mb-5'>
                <h2>Get In Touch</h2>
                <p> I'm currently looking for any new opportunities, my inbox is always open. <br/> Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                <Link to='/contact'><button className="btn btn-primary">Say Hello</button></Link>
            </section>
            <div className='mt-5'>
                <Footer></Footer>
            </div>
        </main>
    );
};

export default Home;