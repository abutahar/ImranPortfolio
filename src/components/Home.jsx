import React from "react";
import { Link } from "react-router-dom";
import StockVideoImage from "../assets/images/stock-video.jpg"; // Replace with your thumbnail
import { PlayIcon } from "@heroicons/react/solid"; // Ensure @heroicons/react is installed

function Home() {
	return (
		<section className="bg-gray-900 text-center py-24 md:py-32 relative overflow-hidden">
			{" "}
			{/* Increased padding */}
			<div className="absolute inset-0">
				<iframe
					width="560"
					height="315"
					className="block w-full h-full"
					src="ttps://www.youtube.com/embed/fmq6ERvKpWI?si=Q_2bw583rT3Rk9am"
					title=""
					frameborder="4"
					allow=" autoplay; clipboard-write; encrypted-media; gyroscope;  web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen></iframe>
			</div>
			<div className="container mx-auto px-4 relative z-10 text-center">
				<p className="font-sans text-xl md:text-5xl font-extrabold text-gray-300 mb-8">
					Crafting Visual Stories That Captivate
				</p>
				<p className="font-body text-md md:text-lg text-gray-400 mb-8">
					Professional video editing and post-production to bring your vision to
					life
				</p>
				<div className="space-x-4">
					<Link
						to="/portfolio"
						className="bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 px-6 rounded-full transition duration-200 ease-in-out transform hover:scale-105">
						View My Work
					</Link>
					<Link
						to="/contact"
						className="bg-green-500 hover:bg-green-700 active:bg-green-800 text-white font-bold py-3 px-6 rounded-full transition duration-200 ease-in-out transform hover:scale-105">
						Let's Collaborate ▷
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Home;
