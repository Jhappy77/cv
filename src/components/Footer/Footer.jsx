import React from 'react';
import './Footer.css';
import SocialMediaCard from './SocialMediaCard/SocialMediaCard.jsx';

function Footer() {

    var year = new Date().getFullYear();

    return <section className="footer" id="footer">
        <div className="footer__socialcontainer">
                    <SocialMediaCard name="LinkedIn" faType="fa-linkedin-in" link="https://www.linkedin.com/in/joel-happ-635606173/"></SocialMediaCard>
                    <SocialMediaCard name="GitHub" faType="fab fa-github" link="https://www.github.com/jhappy77"></SocialMediaCard>
                    <SocialMediaCard name="E-mail" faType="footer-fab fa fa-envelope" link="mailto:joel.happ1@ucalgary.ca"></SocialMediaCard>
                </div>
            <p className="footer__copyrighttext">Copyright © {year} Joel Happ.</p>
            <a className="footer__directorylink" href="#head">(Back to top)</a>

    </section>
}

export default Footer;