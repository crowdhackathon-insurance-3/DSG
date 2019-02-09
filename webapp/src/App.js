import React, { Component } from "react";
import { VelocityTransitionGroup } from "velocity-react";
import Sidebar from "./components/Sidebar/Sidebar";
import Pattern from "./components/Pattern/Pattern";

const patterns = {
	Temperature: [
		{ range: [20, 30], filename: "temp_1.svg", symbol: "°C" },
		{ range: [30, 40], filename: "temp_2.svg", symbol: "°C" },
		{ range: [40, 50], filename: "temp_3.svg", symbol: "°C" }
	],
	Humidity: [
		{ range: [0, 30], filename: "humi_1.svg", symbol: "% rH" },
		{ range: [30, 50], filename: "humi_2.svg", symbol: "% rH" },
		{ range: [50, 70], filename: "humi_3.svg", symbol: "% rH" }
	]
};

class App extends Component {
	state = {
		isSideBarOpen: false,
		currentPage: "Temperature"
	};

	openSidebar = () =>
		this.setState({
			isSideBarOpen: true
		});

	closeSidebar = () =>
		this.setState({
			isSideBarOpen: false
		});

	changePage = pageKey =>
		this.setState({
			currentPage: pageKey
		});

	render() {
		const { currentPage } = this.state;

		return (
			<div className="App">
				<main className="flex h-screen">
					<Sidebar
						isOpen={this.state.isSideBarOpen}
						open={this.openSidebar}
						close={this.closeSidebar}
						click={this.changePage}
						currentPage={currentPage}
					/>
					<article className="p-10 w-full">
						<h1 className="text-blue mb-5">{currentPage}</h1>
						<VelocityTransitionGroup
							enter={{
								animation: "fadeIn",
								duration: 200,
								delay: 200
							}}
							leave={{
								animation: "fadeOut",
								duration: 200
							}}
						>
							<div
								className="flex w-2/3 mx-auto"
								key={currentPage}
							>
								{patterns[currentPage].map((pattern, i) => (
									<Pattern
										key={i}
										data={pattern}
										type={currentPage}
									/>
								))}
							</div>
						</VelocityTransitionGroup>
					</article>
				</main>
			</div>
		);
	}
}

export default App;
