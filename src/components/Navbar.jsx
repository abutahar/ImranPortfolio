import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav className="bg-gray-900 shadow-md py-4">
			<div className="container mx-auto flex items-center justify-between px-4">
				<Link to="/" className="font-heading text-gray-500 text-2xl font-bold ">
					Cinematix
				</Link>
				<div className="hidden md:flex space-x-6">
					<Link to="/" className="font-body text-gray-200 hover:text-blue-500">
						Home
					</Link>
					<Link
						to="/portfolio"
						className="font-body text-gray-200 hover:text-blue-500">
						Portfolio
					</Link>
					<Link
						to="/services"
						className="font-body text-gray-200 hover:text-blue-500">
						Services
					</Link>
					<Link
						to="/about"
						className="font-body text-gray-200 hover:text-blue-500">
						About
					</Link>
					<Link
						to="/contact"
						className="font-body text-gray-200 hover:text-blue-500">
						Get In Touch
					</Link>
					<Link
						to="/profile"
						className="font-body text-gray-200 hover:text-blue-500">
						Profile
					</Link>
				</div>
				<div className="md:hidden">
					<button
						onClick={toggleMobileMenu}
						className="text-gray-200 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
						{isMobileMenuOpen ? (
							<XIcon className="h-6 w-6" />
						) : (
							<MenuIcon className="h-6 w-6" />
						)}
					</button>
				</div>
			</div>
			{isMobileMenuOpen && (
				<div className="md:hidden bg-gray-100 py-2 px-4">
					<Link
						to="/"
						className="block py-2 font-body text-gray-600 hover:text-blue-500">
						Home
					</Link>
					<Link
						to="/portfolio"
						className="block py-2 font-body text-gray-600 hover:text-blue-500">
						Portfolio
					</Link>
					<Link
						to="/services"
						className="block py-2 font-body text-gray-600 hover:text-blue-500">
						Services
					</Link>
					<Link
						to="/about"
						className="block py-2 font-body text-gray-600 hover:text-blue-500">
						About
					</Link>
					<Link
						to="/contact"
						className="block py-2 font-body text-gray-600 hover:text-blue-500">
						Get In Touch
					</Link>
					<Link
						to="/profile"
						className="block py-2 font-body text-gray-600 hover:text-blue-500">
						Profile
					</Link>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
