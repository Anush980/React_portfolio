import React from 'react';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import './Contact.css';
import Button from '../../components/Button/button';

const Contact = () => {
  return (
    <section className="contacts" id="contact">
      <div className="contact">
        <div className="contact-info">
          <h2><span>Contact</span> Me</h2>
          <p><strong>Email:</strong> anush.stha232@gmail.com</p>
          <p><strong>Phone:</strong> +977 9826999469</p>
          <p><strong>Location:</strong> Nepal</p>

          <SocialLinks align='con' direction="row" />
        </div>

        <div className="contact-box">
          <h2>Get In Touch</h2>
          <p>Have a project in mind or just want to say hello? Drop me a message!</p>
          <form action="https://formspree.io/f/xqaqdebr" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <Button label='Send Message'/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
