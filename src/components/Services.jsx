import React from "react";

const services = [
	{
		id: 1,
		title: "Video Editing",
		description:
			"Professional video editing with seamless transitions, color grading, and pacing to tell your story effectively.",
		image:
			"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
	},
	{
		id: 2,
		title: "Motion Graphics",
		description:
			"Eye-catching motion graphics and animations to enhance your video content and engage viewers.",
		image:
			"https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
	},
	{
		id: 3,
		title: "Post-Production",
		description:
			"Comprehensive post-production services including sound design, visual effects, and final delivery formats.",
		image:
			"https://images.unsplash.com/photo-1616530940355-351fabd68c46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
	},
	{
		id: 4,
		title: "Content Optimization",
		description:
			"Optimize your video content for different platforms and screens, ensuring maximum impact across all devices.",
		image:
			"https://images.unsplash.com/photo-1516321310764-908d0c94e6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
	},
	{
		id: 5,
		title: "Audio Enhancement",
		description:
			"Professional audio mixing, sound design, and music selection to complement and elevate your visual content.",
		image:
			"https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
	},
];

function Services() {
	return (
		<div className="min-h-screen bg-gradient-to-r from-blue-100 to-gray-100 pt-16">
			<div className="container mx-auto py-12 px-4">
				<h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
					Our Services
				</h2>
				<p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
					Elevate your visual content with our comprehensive video editing and
					post-production services.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service) => (
						<div
							key={service.id}
							className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
							<img
								src={service.image}
								alt={service.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-2xl font-semibold mb-3 text-blue-600">
									{service.title}
								</h3>
								<p className="text-gray-600">{service.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Services;
