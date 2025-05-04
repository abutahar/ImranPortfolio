import React from "react";

function Profile() {
	return (
		<section className="py-12 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2 className="font-heading text-3xl font-bold text-gray-800 mb-8 text-center">
					Editor Profile
				</h2>
				<p className="font-body text-lg text-gray-700 mb-8 text-center">
					This is a placeholder for the video editor's profile page. You can add
					more detailed information here, such as:
				</p>
				<ul className="list-disc list-inside font-body text-gray-700 mb-8">
					<li>Detailed bio and experience</li>
					<li>Specific skills and software proficiency</li>
					<li>Client testimonials</li>
					<li>Pricing information (optional)</li>
					<li>Links to social media profiles</li>
					<li>A professional headshot</li>
				</ul>
				<div className="bg-white shadow-md rounded-md p-6">
					{/* Example content */}
					<h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">
						About Me
					</h3>
					<p className="font-body text-gray-700 mb-4">
						I am a passionate video editor with 5+ years of experience in
						creating compelling visual stories.
					</p>
					<h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">
						Skills
					</h3>
					<p className="font-body text-gray-700">
						Adobe Premiere Pro, After Effects, DaVinci Resolve, Final Cut Pro,
						Motion Graphics, Color Grading
					</p>
				</div>
			</div>
		</section>
	);
}

export default Profile;
