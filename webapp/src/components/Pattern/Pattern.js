import React from "react";

const Pattern = ({ data, type }) => {
	return (
		<button className="w-1/3 p-10 focus:outline-none">
			<div className="flex justify-between mb-4 text-lg">
				<span className="whitespace-no-wrap">{`${data.range[0]} ${
					data.symbol
				}`}</span>
				<div className={`legendGradient w-full ${type}`} />
				<span className="whitespace-no-wrap">{`${data.range[1]} ${
					data.symbol
				}`}</span>
			</div>
			<img
				src={`/patterns/${data.filename}`}
				alt="Pattern"
				className="patternImage shadow-md border"
			/>
		</button>
	);
};
export default Pattern;
