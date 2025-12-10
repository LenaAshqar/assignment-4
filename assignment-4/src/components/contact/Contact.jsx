import { useMemo, useState } from 'react';
import './Contact.css';

const initialState = {
    name: '',
    email: '',
    message: ''
};

const Contact = () => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validators = useMemo(
        () => ({
            name: value => {
                if (!value.trim()) {
                    return 'Please enter your name.';
                }
                if (value.trim().length < 2) {
                    return 'Name should be at least two characters long.';
                }
                return '';
            },
            email: value => {
                if (!value.trim()) {
                    return 'Please add a contact email.';
                }
                const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!pattern.test(value)) {
                    return 'Enter a valid email address.';
                }
                return '';
            },
            message: value => {
                if (!value.trim()) {
                    return 'Tell me a little about your project.';
                }
                if (value.trim().length < 20) {
                    return 'A little more detail helps me prepare—aim for 20+ characters.';
                }
                return '';
            }
        }),
        []
    );

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validateForm = currentData => {
        const nextErrors = {};

        Object.entries(validators).forEach(([field, validate]) => {
            const value = currentData[field] ?? '';
            const validationMessage = validate(value);
            if (validationMessage) {
                nextErrors[field] = validationMessage;
            }
        });

        return nextErrors;
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (isSubmitting) {
            return;
        }

        const validation = validateForm(formData);

        if (Object.keys(validation).length > 0) {
            setErrors(validation);
            setStatus({ type: 'error', message: 'Please fix the highlighted fields and try again.' });
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: 'pending', message: 'Sending your message…' });

        setTimeout(() => {
            setStatus({ type: 'success', message: 'Thanks for reaching out! I will be in touch shortly.' });
            setFormData(initialState);
            setErrors({});
            setIsSubmitting(false);
        }, 800);
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="section-inner" data-animate="fade">
                <div className="contact-card surface-card" data-animate="fade-up">
                    <div className="contact-grid">
                        <div className="contact-copy">
                            <span className="section-eyebrow">Contact</span>
                            <h2>Let&apos;s build something memorable.</h2>
                            <p>
                                I&apos;m currently open to internships, freelance collaborations, and research-led projects. Tell
                                me about the challenge you&apos;re facing and we&apos;ll explore it together.
                            </p>
                            <ul className="contact-details">
                                <li>Based in Dhahran, Saudi Arabia.</li>
                                <li>
                                    Prefer email? <a href="mailto:leena.alashqar2@gmail.com">leena.alashqar2@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                        <form className="contact-form" id="contactForm" noValidate onSubmit={handleSubmit}>
                            <div className={`form-row ${errors.name ? 'has-error' : ''}`}>
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    aria-invalid={errors.name ? 'true' : 'false'}
                                    aria-describedby={errors.name ? 'name-error' : undefined}
                                />
                                {errors.name && (
                                    <span id="name-error" className="error-text" role="alert">
                                        {errors.name}
                                    </span>
                                )}
                            </div>
                            <div className={`form-row ${errors.email ? 'has-error' : ''}`}>
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    aria-invalid={errors.email ? 'true' : 'false'}
                                    aria-describedby={errors.email ? 'email-error' : undefined}
                                />
                                {errors.email && (
                                    <span id="email-error" className="error-text" role="alert">
                                        {errors.email}
                                    </span>
                                )}
                            </div>
                            <div className={`form-row ${errors.message ? 'has-error' : ''}`}>
                                <label htmlFor="message">How can I help?</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Tell me about your project"
                                    value={formData.message}
                                    onChange={handleChange}
                                    aria-invalid={errors.message ? 'true' : 'false'}
                                    aria-describedby={errors.message ? 'message-error' : undefined}
                                ></textarea>
                                {errors.message && (
                                    <span id="message-error" className="error-text" role="alert">
                                        {errors.message}
                                    </span>
                                )}
                            </div>
                            <button type="submit" className="submit-button" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending…' : 'Send message'}
                            </button>
                            <p
                                id="formMsg"
                                className={`form-msg ${status.type ? `form-msg--${status.type}` : ''} ${
                                    status.message ? 'is-active' : ''
                                }`}
                                aria-live="polite"
                            >
                                {status.message}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
