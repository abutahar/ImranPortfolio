import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

// eslint-disable-next-line no-unused-vars
export default function PublicLayout({ children }) {
	return (
		<div className="min-h-screen bg-gray-100">
			<Navbar />
			<main>
				<Outlet />
				{""}
			</main>
		</div>
	);
}
