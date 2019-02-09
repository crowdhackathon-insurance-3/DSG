import React from "react";
import { VelocityTransitionGroup } from "velocity-react";

const Sidebar = ({ isOpen, click, open, close, currentPage }) => {
	return (
		<aside
			className={`Sidebar bg-grey shadow-lg ${isOpen ? "w-48" : "w-16"}`}
			onMouseEnter={open}
			onMouseLeave={close}
		>
			<ul className="list-reset px-5 pt-10">
				<li className="mb-8">
					<button
						className={`flex items-center hover:text-white focus:outline-none ${
							currentPage === "Temperature"
								? "text-blue hover:text-blue"
								: ""
						}`}
						onClick={() => click("Temperature")}
					>
						<i className="fas fa-thermometer-three-quarters fa-2x" />
						<VelocityTransitionGroup
							enter={{
								animation: "fadeIn",
								duration: 100,
								delay: 100
							}}
						>
							{isOpen && (
								<span className="ml-2 text-xl">
									Temperature
								</span>
							)}
						</VelocityTransitionGroup>
					</button>
				</li>
				<li className="mb-8">
					<button
						className={`flex items-center hover:text-white focus:outline-none ${
							currentPage === "Humidity"
								? "text-blue hover:text-blue"
								: ""
						}`}
						onClick={() => click("Humidity")}
					>
						<i className="fas fa-tint fa-2x" />
						<VelocityTransitionGroup
							enter={{
								animation: "fadeIn",
								duration: 100,
								delay: 100
							}}
						>
							{isOpen && (
								<span className="ml-2 text-xl">Humidity</span>
							)}
						</VelocityTransitionGroup>
					</button>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
