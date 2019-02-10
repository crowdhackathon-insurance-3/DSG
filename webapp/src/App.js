import React, { Component } from "react";
import { VelocityTransitionGroup } from "velocity-react";
import Sidebar from "./components/Sidebar/Sidebar";
import Grid from "./components/Grid/Grid";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Stats from "./components/Stats/Stats";
import scans from "./scannedData.json";

const patterns = {
	Temperature: [
		{ range: [20, 30], filename: "temp_patt.png", symbol: "°C" },
		{ range: [30, 40], filename: "temp_rect.png", symbol: "°C" },
		{ range: [40, 50], filename: "temp_dots.png", symbol: "°C" }
	],
	Humidity: [
		{ range: [0, 30], filename: "humi_connection.png", symbol: "% rH" },
		{ range: [30, 50], filename: "humi_sieve.png", symbol: "% rH" },
		{ range: [50, 70], filename: "humi_angular.png", symbol: "% rH" }
	]
};

class App extends Component {
	state = {
		isDatasetLoaded: false,
		isSideBarOpen: false,
		currentPage: "Temperature",
		selectedCity: "Athens"
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

	loadDataset = () => this.setState({ isDatasetLoaded: true });

	handleMapClick = cityName => {
		this.setState({
			selectedCity: cityName
		});
	};

	render() {
		const {
			currentPage,
			currentPattern,
			isDatasetLoaded,
			selectedCity
		} = this.state;

		return (
			<div className="App">
				<main className="flex min-h-screen bg-grey-lighter">
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
							leave={{
								animation: "slideUp",
								duration: 400
							}}
						>
							{!isDatasetLoaded && (
								<Grid
									patterns={patterns[currentPage]}
									currentPage={currentPage}
									currentPattern={currentPattern}
									selectPattern={this.selectPattern}
								/>
							)}
						</VelocityTransitionGroup>
						<VelocityTransitionGroup
							enter={{
								animation: "fadeIn",
								duration: 200,
								delay: 200,
								display: "flex"
							}}
						>
							{currentPattern && !isDatasetLoaded && (
								<section
									key={typeof currentPattern}
									className="flex items-center justify-center w-2/3 mt-12 mx-auto"
								>
									<div className="w-1/3 text-center">
										<button
											className="bg-blue hover:bg-blue-darker text-white cursor-pointer p-4 shadow-md"
											onClick={this.loadDataset}
										>
											<i className="fas fa-upload" /> Load
											Last Cargo
										</button>
										<div className="my-5 font-bold">OR</div>
										<button
											className="bg-blue hover:bg-blue-darker text-white cursor-pointer p-4 shadow-md"
											onClick={this.loadDataset}
										>
											<i className="fas fa-calendar" />{" "}
											Select a Cargo
										</button>
									</div>
								</section>
							)}
						</VelocityTransitionGroup>
						<VelocityTransitionGroup
							enter={{
								animation: "fadeIn",
								duration: 200,
								delay: 400,
								display: "flex"
							}}
						>
							{isDatasetLoaded && (
								<div className="flex">
									<ImageGallery
										scans={scans[selectedCity].images}
										city={{
											date: scans[selectedCity].date,
											name: selectedCity
										}}
									/>
									<Stats
										scans={scans[selectedCity].images}
										mapClick={this.handleMapClick}
										selectedCity={selectedCity}
									/>
								</div>
							)}
						</VelocityTransitionGroup>
					</article>
				</main>
			</div>
		);
	}
}

export default App;
