import { useState } from "react";
import "./Contact.css";

const API_BASE = import.meta.env.VITE_API_URL || "https://divyanshvijayportfolio.onrender.com";

export default function Contact() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [feedback, setFeedback] = useState("");
    const [message, setMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("Sending...");
        setSubmitting(true);

        try {
            const response = await fetch(`${API_BASE}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ firstname, lastname, email, phone, feedback }),
            });

            const result = await response.json();

            if (result.success) {
                setMessage("Thank you! Your feedback has been sent successfully.");
                setFirstname("");
                setLastname("");
                setEmail("");
                setPhone("");
                setFeedback("");
            } else {
                setMessage("Something went wrong. Please try again.");
            }
        } catch (error) {
            setMessage("Error connecting to the server.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="container-fluid contact-container">
            <div className="row text-center mt-5 p-5">
                <h1 className="text-white mb-4">Contact</h1>
                
                <div className="col-md-6 col-sm-12 mt-5">
                    <img 
                        src="images/contact.svg" 
                        className="img-fluid contact-image" 
                        alt="Contact illustration" 
                    />
                </div>

                <div className="col-md-6 col-sm-12 mt-5 align-self-center">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="row g-4">
                            {/* Name Inputs */}
                            <div className="col-md-6 col-12">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="form-control p-3 rounded-pill"
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-6 col-12">
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="form-control p-3 rounded-pill"
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Contact Info */}
                            <div className="col-md-6 col-12">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="form-control p-3 rounded-pill"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-6 col-12">
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="form-control p-3 rounded-pill"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Message Field */}
                            <div className="col-12">
                                <textarea
                                    placeholder="Your Message"
                                    className="form-control p-3 rounded-4"
                                    rows="5"
                                    value={feedback}
                                    onChange={(e) => setFeedback(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="col-12">
                                <button 
                                    type="submit" 
                                    className="btn bg-transparent text-white border-white btn-lg w-50 py-3"
                                    disabled={submitting}
                                >
                                    {submitting ? "Sending..." : "Send Message"}
                                </button>
                            </div>

                            {/* Social Links */}
                            <div className="col-12 mt-4">
                                <div className="d-flex justify-content-center gap-4">
                                    <a href="https://github.com/Divyansh2992" 
                                       className="text-decoration-none social-link text-white"
                                       target="_blank" 
                                       rel="noopener noreferrer" >
                                        <i className="fa-brands fa-github fa-3x "></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/divyansh-vijay-17187b227" 
                                       className="text-decoration-none social-link text-white"
                                       target="_blank" 
                                       rel="noopener noreferrer">
                                        <i className="fa-brands fa-linkedin-in fa-3x "></i>
                                    </a>
                                    <a href="mailto:Divyanshvijay92@gmail.com" 
                                       className="text-decoration-none social-link text-white">
                                        <i className="fa-solid fa-envelope fa-3x"></i>
                                    </a>
                                </div>
                            </div>

                            {/* Status Message */}
                            {message && (
                                <div className="col-12 mt-3">
                                    <div className={`alert ${submitting ? 'alert-info' : (message.includes("Thank you") ? 'alert-success' : 'alert-danger')}`}>
                                        {message}
                                    </div>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}