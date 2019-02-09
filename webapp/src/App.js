import React, { Component } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Grid from "./components/Grid/Grid";

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
		currentPage: "Temperature",
		currentPattern: {}
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

	selectPattern = pattern =>
		this.setState({
			currentPattern: pattern
		});

	render() {
		const { currentPage } = this.state;

		return (
			<div className="App">
				<main className="flex h-screen bg-grey-lighter">
					<Sidebar
						isOpen={this.state.isSideBarOpen}
						open={this.openSidebar}
						close={this.closeSidebar}
						click={this.changePage}
						currentPage={currentPage}
					/>
					<article className="p-10 w-full">
						<h1 className="text-blue mb-5">{currentPage}</h1>
						<Grid
							patterns={patterns[currentPage]}
							currentPage={currentPage}
							currentPattern={this.state.currentPattern}
							selectPattern={this.selectPattern}
						/>
					</article>
				</main>
			</div>
		);
	}
}

export default App;
