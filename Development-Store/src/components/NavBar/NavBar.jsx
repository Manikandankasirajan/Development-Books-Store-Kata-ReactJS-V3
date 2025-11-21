import React from "react";
import { FaBagShopping } from "react-icons/fa6";

const NavBar = () => {
	return (
		<>
			<header>
				<nav className="w-full flex justify-between px-10 py-6 bg-slate-800 shadow-lg">
					<h1 className="text-3xl font-bold text-white">
						Development Books Store
					</h1>
					<section className="flex justify-around items-center ml-5">
						<button className="mr-3 text-3xl text-white font-bold cursor-pointer hover:scale-110 transition delay-150 duration-300 ease-in-out">
							<FaBagShopping />
						</button>
					</section>
				</nav>
			</header>
		</>
	);
};

export default NavBar;
