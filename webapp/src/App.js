import React, { Component } from "react";
import { VelocityTransitionGroup } from "velocity-react";
import Sidebar from "./components/Sidebar/Sidebar";
import Grid from "./components/Grid/Grid";
import Filepicker from "./components/Filepicker/Filepicker";

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
		uploadedImages: [],
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

	selectPattern = pattern =>
		this.setState({
			currentPattern: pattern
		});

	handleUpload = e => Array.from(e.target.files).map(this.parseImage);

	parseImage = file => {
		console.log(file);
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			this.setState(prevState => {
				const images = prevState.uploadedImages.slice();
				images.push({
					name: file.name,
					url: reader.result
				});
				return {
					uploadedImages: images
				};
			});
		};
	};

	render() {
		const { currentPage, currentPattern, uploadedImages } = this.state;

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
							currentPattern={currentPattern}
							selectPattern={this.selectPattern}
						/>
						<VelocityTransitionGroup
							enter={{
								animation: "fadeIn",
								duration: 200,
								delay: 200,
								display: "flex"
							}}
							leave={{
								animation: "fadeOut",
								duration: 200
							}}
						>
							{currentPattern && uploadedImages.length === 0 && (
								<section
									key={typeof currentPattern}
									className="flex items-center justify-center w-2/3 mt-12 mx-auto"
								>
									<Filepicker onChange={this.handleUpload} />
								</section>
							)}
						</VelocityTransitionGroup>
					</article>
				</main>
			</div>
		);
	}
}

export default App;
