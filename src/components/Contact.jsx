import React from "react";

function Contact() {
	return (
		<section className="py-12 bg-gray-100">
			<div className="container mx-auto px-4">
				<h2 className="font-heading text-3xl font-bold text-gray-800 mb-8 text-center">
					Let's Collaborate
				</h2>
				<p className="font-body text-lg text-gray-700 mb-6 text-center">
					Have a project in mind? I'd love to hear about it. Fill out the form
					and I'll get back to you as soon as possible to discuss how we can
					work together.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Contact Form (Replace with a real form if needed) */}
					<div className="bg-white shadow-md rounded-md p-6">
						<form>
							<div className="mb-4">
								<label
									htmlFor="name"
									className="block font-body text-gray-700 text-sm font-bold mb-2">
									Your Name
								</label>
								<input
									type="text"
									id="name"
									className="shadow appearance-none border rounded w-full py-2 px-3 font-body text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									placeholder="Your name"
								/>
							</div>
							<div className="mb-4">
								<label
									htmlFor="email"
									className="block font-body text-gray-700 text-sm font-bold mb-2">
									Your Email
								</label>
								<input
									type="email"
									id="email"
									className="shadow appearance-none border rounded w-full py-2 px-3 font-body text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									placeholder="Your email"
								/>
							</div>
							<div className="mb-4">
								<label
									htmlFor="subject"
									className="block font-body text-gray-700 text-sm font-bold mb-2">
									Subject
								</label>
								<input
									type="text"
									id="subject"
									className="shadow appearance-none border rounded w-full py-2 px-3 font-body text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									placeholder="Project subject"
								/>
							</div>
							<div className="mb-6">
								<label
									htmlFor="message"
									className="block font-body text-gray-700 text-sm font-bold mb-2">
									Message
								</label>
								<textarea
									id="message"
									rows="4"
									className="shadow appearance-none border rounded w-full py-2 px-3 font-body text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									placeholder="Tell me about your project..."></textarea>
							</div>
							<div className="flex items-center justify-between">
								<button
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
									type="button">
									Send Message
								</button>
								{/* Add "Open Email Client" if needed */}
								{/* <a href="mailto:contact@cinematix.com" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                  Open Email Client
                </a> */}
							</div>
						</form>
					</div>
					{/* Contact Information */}
					<div>
						<h3 className="font-heading text-xl font-semibold text-gray-800 mb-4">
							Contact Info
						</h3>
						<p className="font-body text-gray-700">
							Email: contact@cinematix.com
						</p>
						<p className="font-body text-gray-700">Phone: (123) 456-7890</p>
						<p className="font-body text-gray-700">Location: Los Angeles, CA</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
