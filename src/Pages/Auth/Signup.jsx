import { useState } from "react";
import toast from "react-hot-toast";
import SignupPresentation from "./SignupPresentation";

const Signup = () => {
	const [signUpState, setSignUpState] = useState({
		name: "",
		email: "",
		mobileNumber: "",
		password: "",
	});

	function handleUserInput(e) {
		const { name, value } = e.target;
		setSignUpState({
			...signUpState,
			[name]: value,
		});
	}

	function handleFormSubmit(e) {
		e.preventDefault();
		if (
			!signUpState.name ||
			!signUpState.email ||
			!signUpState.mobileNumber ||
			!signUpState.password
		) {
			toast.error("Please fill all the fields");
			return;
		}
		if (signUpState.mobileNumber.length !== 10) {
			toast.error("Please enter a valid mobile number");
			return;
		}
		if (signUpState.password.length < 6) {
			toast.error("Password should be atleast 6 characters long");
			return;
		}
		if (
			!signUpState.email.includes("@") ||
			!signUpState.email.includes(".")
		) {
			toast.error("Please enter a valid email address");
			return;
		}
		if (!signUpState.name.length > 3) {
			toast.error("Please enter a valid name");
			return;
		}
	}

	return (
		<SignupPresentation
			handleUserInput={handleUserInput}
			handleFormSubmit={handleFormSubmit}
		/>
	);
};

export default Signup;
