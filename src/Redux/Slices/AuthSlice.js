// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axiosInstance from "../../Helpers/axiosInstance";
// import toast from "react-hot-toast";

// const initialState = {
// 	isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || false,
// 	role: localStorage.getItem("role") || "",
// 	data: JSON.parse(localStorage.getItem("data")) || {},
// };

// export const createAccount = createAsyncThunk(
// 	"/auth/createAccount",
// 	async (data) => {
// 		try {
// 			const response = axiosInstance.post("/users/create", data);
// 			toast.promise(response, {
// 				success: (resolvedPromise) => {
// 					return resolvedPromise?.data?.message;
// 				},
// 				loading: "Hold on, creating your account...",
// 				error: "Oh no! Something went wrong",
// 			});
// 			const apiResponse = await response;
// 			return apiResponse;
// 		} catch (error) {
// 			console.log("error", error);
// 		}
// 	}
// );

// export const login = createAsyncThunk("/auth/login", async (data) => {
// 	console.log("incoming data to the thunk", data);
// 	try {
// 		const response = axiosInstance.post("/auth/login", data);
// 		toast.promise(response, {
// 			success: (resolvedPromise) => {
// 				return resolvedPromise?.data?.message;
// 			},
// 			loading: "Hold on, creating your account...",
// 			error: "Oh no! Something went wrong",
// 		});
// 		const apiResponse = await response;
// 		return apiResponse;
// 	} catch (error) {
// 		console.log("error", error);
// 	}
// });

// export const logout = createAsyncThunk("/auth/logout", async () => {
// 	console.log("incoming data to the thunk");
// 	try {
// 		const response = axiosInstance.post("/auth/logout");
// 		toast.promise(response, {
// 			success: (resolvedPromise) => {
// 				return resolvedPromise?.data?.message;
// 			},
// 			loading: "Logging you out...",
// 			error: "Oh no! Something went wrong",
// 		});
// 		const apiResponse = await response;
// 		return apiResponse;
// 	} catch (error) {
// 		console.log("error", error);
// 	}
// });

// const AuthSlice = createSlice({
// 	name: "auth",
// 	initialState,
// 	reducers: {},
// 	extraReducers: (builder) => {
// 		builder
// 			.addCase(login.fulfilled, (state, action) => {
// 				state.isLoggedIn = true;
// 				state.role = action?.payload?.data?.data?.userRole;
// 				state.data = action?.payload?.data?.data?.userData;

// 				localStorage.setItem("isLoggedIn", true);
// 				localStorage.setItem(
// 					"role",
// 					action?.payload?.data?.data?.userRole
// 				);
// 				localStorage.setItem(
// 					"data",
// 					JSON.stringify(action?.payload?.data?.data?.userData)
// 				);
// 			})
// 			.addCase(logout.fulfilled, (state) => {
// 				localStorage.setItem("isLoggedIn", false);
// 				localStorage.setItem("role", "");
// 				localStorage.setItem("data", JSON.stringify({}));
// 				state.isLoggedIn = false;
// 				state.role = "";
// 				state.data = {};
// 			});
// 	},
// });

// export default AuthSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
	isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || false,
	role: localStorage.getItem("role") || "",
	data: localStorage.getItem("data")
		? JSON.parse(localStorage.getItem("data"))
		: {},
};

export const createAccount = createAsyncThunk(
	"/auth/createAccount",
	async (data) => {
		try {
			const response = await axiosInstance.post("/users/create", data); // Await the response
			toast.promise(response, {
				success: (resolvedPromise) => {
					return (
						resolvedPromise?.data?.message ||
						"Account created successfully!"
					);
				},
				loading: "Hold on, creating your account...",
				error: "Oh no! Something went wrong",
			});
			return response.data; // Return only necessary data
		} catch (error) {
			console.log("error", error);
			toast.error("Something went wrong");
		}
	}
);

export const login = createAsyncThunk("/auth/login", async (data) => {
	console.log("incoming data to the thunk", data);
	try {
		const response = await axiosInstance.post("/auth/login", data); // Await the response
		toast.promise(response, {
			success: (resolvedPromise) => {
				return resolvedPromise?.data?.message || "Login successful!";
			},
			loading: "Hold on, logging in...",
			error: "Oh no! Something went wrong",
		});
		return response.data; // Return only necessary data
	} catch (error) {
		console.log("error", error);
		toast.error("Login failed");
	}
});

export const logout = createAsyncThunk("/auth/logout", async () => {
	console.log("incoming data to the thunk");
	try {
		const response = await axiosInstance.post("/auth/logout"); // Await the response
		toast.promise(response, {
			success: (resolvedPromise) => {
				return resolvedPromise?.data?.message || "Logout successful!";
			},
			loading: "Logging you out...",
			error: "Oh no! Something went wrong",
		});
		return response.data; // Return necessary data
	} catch (error) {
		console.log("error", error);
		toast.error("Logout failed");
	}
});

const AuthSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(login.fulfilled, (state, action) => {
				state.isLoggedIn = true;
				state.role = action?.payload?.data?.userRole;
				state.data = action?.payload?.data?.userData;

				localStorage.setItem("isLoggedIn", true);
				localStorage.setItem("role", action?.payload?.data?.userRole);
				localStorage.setItem(
					"data",
					JSON.stringify(action?.payload?.data?.userData)
				);
			})
			.addCase(logout.fulfilled, (state) => {
				localStorage.setItem("isLoggedIn", false);
				localStorage.setItem("role", "");
				localStorage.setItem("data", JSON.stringify({}));
				state.isLoggedIn = false;
				state.role = "";
				state.data = {};
			});
	},
});

export default AuthSlice.reducer;
