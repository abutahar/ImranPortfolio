import React from "react";
import { Link } from "react-router-dom";

function About() {
	return (
		<section className="py-12 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="font-heading text-3xl font-bold text-gray-800 mb-8 text-center">
					About Cinematix
				</h2>
				<p className="font-body text-lg text-gray-700 mb-6">
					At Cinematix, I believe in the power of visual storytelling to connect
					with audiences on a deeper level. With years of experience in video
					editing and post-production, I bring a blend of technical expertise
					and creative vision to every project.
				</p>
				<p className="font-body text-lg text-gray-700 mb-6">
					My style combines technical precision with creative storytelling to
					produce videos that not only look stunning but also effectively
					communicate messages and evoke emotions.
				</p>
				<p className="font-body text-lg text-gray-700 mb-8">
					Whether it's commercial projects, documentaries, or creative content,
					I approach each project with dedication to craft and attention to
					detail, ensuring that every frame serves the overall vision.
				</p>
				<div className="md:flex items-start justify-between gap-8">
					<div>
						<h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">
							Technical Skills
						</h3>
						<ul className="list-disc list-inside font-body text-gray-700 mb-6">
							<li>Adobe Premiere Pro</li>
							<li>After Effects</li>
							<li>DaVinci Resolve</li>
							<li>Final Cut Pro</li>
						</ul>
					</div>
					<div>
						<h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">
							Specialties
						</h3>
						<ul className="list-disc list-inside font-body text-gray-700 mb-8">
							<li>Cinematic Editing</li>
							<li>Color Grading</li>
							<li>Motion Graphics</li>
							<li>Sound Design</li>
						</ul>
					</div>
				</div>
				<div className="text-center mt-8">
					<Link
						to="/contact"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
						Contact Me
					</Link>
					{/* Add Download Resume link if you have a resume file */}
					{/* <a href="/path/to/resume.pdf" download className="ml-4 text-blue-500 hover:text-blue-700">
            Download Resume
          </a> */}
				</div>
			</div>
		</section>
	);
}
export default About;
