import React, { useState, useEffect } from 'react';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import './Contact.css';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import { FaTimes } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [showStatus, setShowStatus] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };


    useEffect(() => {
        let timer;
        if (showStatus) {
            timer = setTimeout(() => {
                setShowStatus(false);
                setSubmitStatus(null);
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [showStatus]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/xqaqdebr", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
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
                    <Title first='Contact' label='Me' />
                    <p><strong>Email:</strong> anush.stha232@gmail.com</p>
                    <p><strong>Phone:</strong> +977 9826999469</p>
                    <p><strong>Location:</strong> Nepal</p>
                    <SocialLinks align='center' direction="row" />
                </div>

                <div className="contact-form">
                    <h2>Get In Touch</h2>
                    <p>Have a project in mind or just want to say hello? <br/>Drop me a message!</p>
                    <form onSubmit={handleSubmit}>
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
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>

                    {showStatus && submitStatus && (
                        <div className={`form-status ${submitStatus}`}>
                            <p>
                                {submitStatus === 'success'
                                    ? 'Message sent successfully!'
                                    : 'Failed to send message. Please try again.'}
                            </p>
                            <button
                                className="close-status"
                                onClick={closeStatus}
                                aria-label="Close message"
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

export default Contact;