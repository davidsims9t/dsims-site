import React from "react"

const Footer = () => (
    <footer id="contact" className="footer" role="footer">
        <h3 className="footer-title">Get In Touch</h3>
        <div id="notice" className="notice">Thank you for contacting me! I'll be in touch soon.</div>
        <form id="contact-form" className="form container" name="contact" method="POST" data-netlify="true">
            <div className="form-row">
                <label className="form-label name-label">
                    Your Name:
                    <input type="text" name="name" className="form-field name-field" />
                </label>   
            </div>
            <div className="form-row">
                <label className="form-label email-label">
                    Your Email:
                    <input type="email" name="email" className="form-field email-field" />
                </label>
            </div>
            <div className="form-row">
                <label className="form-label msg-label">
                    Message:
                    <textarea name="message" className="form-field msg-field"></textarea>
                </label>
            </div>
            <div className="form-row">
                <button type="submit" className="send-btn">Send</button>
            </div>
        </form>
        <nav className="footer-nav container">
            <a className="footer-nav-link" href="https://twitter.com/dsims90" target="_blank" rel="noopener noreferrer">
                <img className="footer-nav-icon" src={require('../images/twitter.svg')} alt="Twitter" />
            </a>
            <a className="footer-nav-link" href="https://www.linkedin.com/in/davidesims/" target="_blank" rel="noopener noreferrer">
                <img className="footer-nav-icon" src={require('../images/linkedin.svg')} alt="LinkedIn" />
            </a>
            <a className="footer-nav-link" href="http://www.github.com/davidsims9t" target="_blank" rel="noopener noreferrer">
                <img className="footer-nav-icon" src={require('../images/github.svg')} alt="GitHub" />
            </a>
            <a className="footer-nav-link" href="https://www.behance.net/davidsims" target="_blank" rel="noopener noreferrer">
                <img className="footer-nav-icon" src={require('../images/behance.svg')} alt="Behance" />
            </a>
        </nav>
        <small className="credit">
            Icons made by Smashicons from www.flaticon.com 
        </small>
    </footer>
)

export default Footer