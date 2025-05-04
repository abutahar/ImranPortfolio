import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PublicLayout from "../Layout/PublicLayout";

function App() {
	return (
		<>
			<Home></Home>
			<Portfolio></Portfolio>
			<Services></Services>
			<About></About>
			<Contact></Contact>
			<Footer></Footer>
		</>
	);
}

export default App;
