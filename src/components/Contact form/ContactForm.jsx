import React, { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import PropTypes from 'prop-types';
import SocialLinks from '../SocialLinks/SocialLinks';
import Button from '../Button/Button';
import './ContactForm.css';

const ContactForm = ({
    serviceId = 'default_service',
    templateId = 'template_default',
    userId = 'user_default',
    formTitle = 'Get In Touch',
    formDescription = 'Have a project in mind or just want to say hello? Drop me a message!',
    successMessage = 'Message sent successfully!',
    errorMessage = 'Failed to send message. Please try again.',
    buttonText = 'Send Message',
    buttonSendingText = 'Sending...',
    showSocialLinks = true,
    contactInfo = {
        email: 'your@email.com',
        phone: '+000 00000000',
        location: 'Your Location'
    }
}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [showStatus, setShowStatus] = useState(false);
    const formRef = useRef();

    useEffect(() => {
        emailjs.init(userId);
    }, [userId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current,
                userId
            );

            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Email send error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setShowStatus(true);
        }
    };

    const closeStatus = () => {
        setShowStatus(false);
        setSubmitStatus(null);
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Contact Me</h2>
                    <p><strong>Email:</strong> {contactInfo.email}</p>
                    <p><strong>Phone:</strong> {contactInfo.phone}</p>
                    <p><strong>Location:</strong> {contactInfo.location}</p>
                    {showSocialLinks && (
                        <div className="social-links">
                            <SocialLinks align='center' direction="row" />
                        </div>
                    )}
                </div>

                <div className="contact-form">
                    <h2>{formTitle}</h2>
                    <p>{formDescription}</p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button 
                            type="submit" 
                            className="submit-button"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? buttonSendingText : buttonText}
                        </button>
                    </form>

                    {showStatus && submitStatus && (
                        <div className={`form-status ${submitStatus}`}>
                            <p>
                                {submitStatus === 'success' ? successMessage : errorMessage}
                            </p>
                            <button 
                                className="close-status" 
                                onClick={closeStatus}
                                aria-label="Close status message"
                            >
                                <FaTimes />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

ContactForm.propTypes = {
    serviceId: PropTypes.string,
    templateId: PropTypes.string,
    userId: PropTypes.string,
    recipientEmail: PropTypes.string,
    formTitle: PropTypes.string,
    formDescription: PropTypes.string,
    successMessage: PropTypes.string,
    errorMessage: PropTypes.string,
    buttonText: PropTypes.string,
    buttonSendingText: PropTypes.string,
    showSocialLinks: PropTypes.bool,
    contactInfo: PropTypes.shape({
        email: PropTypes.string,
        phone: PropTypes.string,
        location: PropTypes.string
    })
};

export default ContactForm;