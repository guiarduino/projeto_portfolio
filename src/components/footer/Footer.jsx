import React from "react";
import './Footer.css';

const Footer = props => {

	return (
		<footer>
			<div className="Footer">
				<div className="container-fluid">
					<div className="content row">
						<div className="col">
							{ (process.env.REACT_APP_EMAIL_CONTACT !== "" && typeof process.env.REACT_APP_EMAIL_CONTACT !== "undefined" ) && 
							<div className="contact_information">
								<span>e-mail para contato: {process.env.REACT_APP_EMAIL_CONTACT}</span>
							</div> }
						</div>
						<div className="col">
							<div className="social_networks">
								{ (process.env.REACT_APP_FACEBOOK_USER !== "" && typeof process.env.REACT_APP_FACEBOOK_USER !== "undefined" ) && 
								<ul>
									<li>
										<a href={`https://www.facebook.com/${process.env.REACT_APP_FACEBOOK_USER}`} target="_blank"><i className="bi bi-facebook"></i></a>
									</li>
								</ul> }
								{ (process.env.REACT_APP_INSTAGRAM_USER !== "" && typeof process.env.REACT_APP_INSTAGRAM_USER !== "undefined" ) && 
								<ul>
									<li>
										<a href={`https://www.instagram.com/${process.env.REACT_APP_INSTAGRAM_USER}`} target="_blank"><i className="bi bi-instagram"></i></a>
									</li>
								</ul> }
								{ (process.env.REACT_APP_LINKEDIN_USER !== "" && typeof process.env.REACT_APP_LINKEDIN_USER !== "undefined" ) && 
								<ul>
									<li>
										<a href={`https://www.linkedin.com/in/${process.env.REACT_APP_LINKEDIN_USER}`} target="_blank"><i className="bi bi-linkedin"></i></a>
									</li>
								</ul> }
								{ (process.env.REACT_APP_GITHUB_USER !== "" && typeof process.env.REACT_APP_GITHUB_USER !== "undefined" ) && 
								<ul>
									<li>
										<a href={`https://github.com/${process.env.REACT_APP_GITHUB_USER}`} target="_blank"><i className="bi bi-github"></i></a>
									</li>
								</ul> }
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;