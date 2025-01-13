import React from "react";
import Pizzalogo from "../assets/Images/pizza1.png";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../Redux/Slices/AuthSlice";

const Layout = ({ children }) => {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const dispatch = useDispatch();
	async function handleLogout(e) {
		e.preventDefault();
		dispatch(logout());
	}
	return (
		<div>
			<nav className="flex items-center justify-around h-16 text-[#6B7280] font-mono border-none shadow-md">
				<div className="flex items-center justify-center">
					<p>Pizza App</p>
					<img
						src={Pizzalogo}
						alt="Pizza logo"
					/>
				</div>

				<div className="hidden md:block">
					<ul className="flex gap-4">
						<li className="hover:text-[#FF9110] cursor-pointer">
							{" "}
							<p>Menu </p>
						</li>

						<li className="hover:text-[#FF9110] cursor-pointer">
							{" "}
							<p>Services </p>
						</li>

						<li className="hover:text-[#FF9110] cursor-pointer">
							{" "}
							<p>About </p>
						</li>
					</ul>
				</div>
				<ul className="flex gap-4">
					<li className="hover:text-[#FF9110]">
						{isLoggedIn ? (
							<Link onClick={handleLogout}>Logout</Link>
						) : (
							<Link to={"/auth/login"}>Login</Link>
						)}
					</li>
				</ul>
				<div></div>
			</nav>
			{children}

			<Footer />
		</div>
	);
};

export default Layout;
