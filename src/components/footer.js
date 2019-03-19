import React from "react"

const Footer = () => (
    <footer id="footer" className="footer" role="footer">
        <h3 className="footer-title">Get In Touch</h3>
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
        <div className="credit">
            Icons made by Smashicons from www.flaticon.com 
        </div>
        <small className="copyright">
            &copy; David Sims {(new Date()).getFullYear()}
        </small>
    </footer>
)

export default Footer