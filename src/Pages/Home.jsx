import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
	return (
		<div>
			{/* Hero section */}
			<section className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 bg-gradient-to-r from-amber-50 to-orange-300">
				<div className="w-4/6 ml-4 text-center md:w-2/6 md:text-left">
					<div className="flex justify-center text-4xl md:justify-normal">
						<h1 className="pb-5 font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text">
							Enjoy the Slice{" "}
						</h1>
						<h1>😋</h1>
					</div>

					<p className="pb-4 text-[#6B7280]">
						The pizza app brings you hot, fresh, and delicious
						pizzas with a side of joy. Order now and get a free
						drink with your favorite pizza – because you deserve
						more than just a meal, you deserve an experience! 🍕🥤
					</p>

					<button className="px-4 py-2 flex items-center gap-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 group">
						Order Now
						<span className="transition-transform ease-in-out group-hover:translate-x-2">
							{" "}
							<FaArrowRightLong />
						</span>
					</button>
				</div>
			</section>
		</div>
	);
};

export default Home;
