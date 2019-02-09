import React from "react";
import { VelocityTransitionGroup } from "velocity-react";
import Pattern from "../Pattern/Pattern";

const Grid = ({ patterns, currentPage, currentPattern, selectPattern }) => {
	return (
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
			<section className="flex w-2/3 mx-auto" key={currentPage}>
				{patterns.map((pattern, i) => (
					<Pattern
						key={i}
						data={pattern}
						type={currentPage}
						active={pattern.filename === currentPattern}
						click={() => selectPattern(pattern.filename)}
					/>
				))}
			</section>
		</VelocityTransitionGroup>
	);
};

export default Grid;
