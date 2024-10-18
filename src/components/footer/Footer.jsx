import React from "react";
import './Footer.css';

const Footer = props => {
	return (
		<footer>
			<div className="Footer">
				<div className="container-fluid">
					<div className="content row">
						<div className="col">
							<div className="social_networks">
								<ul>
									<li>
										<a href="https://www.facebook.com/guilherme.arduinobarlatti" target="_blank"><i class="bi bi-facebook"></i></a>
									</li>
								</ul>
								<ul>
									<li>
										<a href="https://www.instagram.com/gui_arduino/" target="_blank"><i class="bi bi-instagram"></i></a>
									</li>
								</ul>
								<ul>
									<li>
										<a href="https://www.linkedin.com/in/guilherme-arduino-barlatti-b0b6a474/" target="_blank"><i class="bi bi-linkedin"></i></a>
									</li>
								</ul>
								<ul>
									<li>
										<a href="https://github.com/guiarduino" target="_blank"><i class="bi bi-github"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;