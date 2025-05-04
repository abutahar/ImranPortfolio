import { createBrowserRouter } from "react-router";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import App from "./pages/Index";
import NotFound from "./pages/NotFound";
import PublicLayout from "./Layout/PublicLayout";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
	{
		errorElement: <NotFound></NotFound>,
	},
	{
		path: "/",
		element: <PublicLayout />,
		children: [
			{
				path: "/",
				element: <App></App>,
			},
			{
				path: "/services",
				element: <Services></Services>,
			},
			{
				path: "/portfolio",
				element: <Portfolio></Portfolio>,
			},
			{
				path: "/about",
				element: <About></About>,
			},
			{
				path: "/contact",
				element: <Contact></Contact>,
			},
			{
				path: "/profile",
				element: <Profile></Profile>,
			},
		],
	},
]);

export default router;
