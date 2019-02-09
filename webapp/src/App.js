import React, { Component } from "react";
import Sidebar from "./components/Sidebar/Sidebar";

class App extends Component {
	state = {
		isSideBarOpen: false,
		currentPage: "temperature"
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
					<h1 className="text-blue">{currentPage}</h1>
				</main>
			</div>
		);
	}
}

export default App;
