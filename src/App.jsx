import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Signup from "./Pages/Auth/Signup";
import Login from "./Pages/Auth/Login";
import NotFound from "./Pages/NotFound";

const App = () => {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/auth/signup"
					element={<Signup />}
				/>
				<Route
					path="/auth/login"
					element={<Login />}
				/>
				<Route
					path="*"
					element={<NotFound />}
				/>
			</Routes>
		</>
	);
};

export default App;
