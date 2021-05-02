import React from 'react';
import emailjs from 'emailjs-com';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';


const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1my634e', 'template_jly8xoo', e.target, 'user_c1LXxu10RHCtOIE5gQ9Pj')
            .then((result) => {
                alert("Mail send successfully");
            }, (error) => {
                alert(error.text);
            });
            e.target.reset()
    }

  
    return (
        <section style={{backgroundColor:'#0A192F'}}>
            <NavigationBar></NavigationBar>
            <div className="row mt-5">
                <div className="col-md-5 offset-md-1 text-white">
                <h2>Get In Touch</h2>
                <p> I'm currently looking for any new opportunities, my inbox is always open. <br/> Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                </div>
                <div className="col-md-5">
                <form className="contact-form" onSubmit={sendEmail}>
                       <div className="form-group">
                           <input type="text" name='subject' className="form-control" required placeholder="Subject* "/>
                       </div>
                       <div className="form-group">
                           <input type="text" name='name' className="form-control" placeholder="Your Name* "/>
                       </div>
                       <div className="form-group">
                           <input type="text" name='email' className="form-control" required placeholder="Your Email Address*"/>
                       </div>
                       <div className="form-group">
                           <textarea name="message" className="form-control" id="" cols="30" rows="10" placeholder="Write your message here"></textarea>
                       </div>
                       <div className="form-group">
                       <input type="submit" value="Send" />
                       </div>
                   </form>
           
                </div>
            </div>
        </section>
    );
};

export default Contact;