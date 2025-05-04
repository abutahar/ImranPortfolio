import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className="bg-gray-800 text-white py-8 mt-12">
			<div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
				<div>
					<h3 className="font-heading text-lg font-semibold mb-4">Cinematix</h3>
					<p className="font-body text-sm text-gray-400">
						Professional video editing services for impactful visual
						storytelling.
					</p>
				</div>
				<div>
					<h3 className="font-heading text-md font-semibold mb-4">
						Quick Links
					</h3>
					<ul className="font-body text-sm text-gray-400 space-y-2">
						<li>
							<Link to="/" className="hover:text-blue-500">
								Home
							</Link>
						</li>
						<li>
							<Link to="/portfolio" className="hover:text-blue-500">
								Portfolio
							</Link>
						</li>
						<li>
							<Link to="/services" className="hover:text-blue-500">
								Services
							</Link>
						</li>
						<li>
							<Link to="/about" className="hover:text-blue-500">
								About
							</Link>
						</li>
						<li>
							<Link to="/contact" className="hover:text-blue-500">
								Get In Touch
							</Link>
						</li>
						<li>
							<Link to="/profile" className="hover:text-blue-500">
								Profile
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="font-heading text-md font-semibold mb-4">Services</h3>
					<ul className="font-body text-sm text-gray-400 space-y-2">
						<li>Video Editing</li>
						<li>Motion Graphics</li>
						<li>Color Grading</li>
						<li>Post Production</li>
						<li>Audio Enhancement</li>
					</ul>
				</div>
				<div>
					<h3 className="font-heading text-md font-semibold mb-4">
						Contact Info
					</h3>
					<p className="font-body text-sm text-gray-400">Los Angeles, CA</p>
					<p className="font-body text-sm text-gray-400">
						contact@cinematix.com
					</p>
					<p className="font-body text-sm text-gray-400">(123) 456-7890</p>
				</div>
			</div>
			<div className="text-center text-gray-400 mt-8">
				<p className="font-body text-xs">
					&copy; 2025 Cinematix. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
