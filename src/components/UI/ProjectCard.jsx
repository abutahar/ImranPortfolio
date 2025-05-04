import { Link } from "react-router-dom";

function ProjectCard({ project }) {
	return (
		<div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
			<img
				src={project.thumbnail}
				alt={project.title}
				className="w-full h-48 object-cover"
			/>
			<div className="p-6">
				<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
				<p className="text-gray-600 text-sm mb-2">{project.category}</p>
				<p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>
				<div className="flex justify-between items-center">
					<a
						href={project.videoUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 hover:underline">
						Watch Video
					</a>
					<Link
						to="/contact"
						className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
						Inquire
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
