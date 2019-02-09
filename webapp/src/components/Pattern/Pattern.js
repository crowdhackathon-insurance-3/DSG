import React from "react";

const Pattern = ({ data, type, click, active }) => {
	return (
		<button
			className={`w-1/3 p-10 focus:outline-none ${
				active ? "border border-green-light shadow" : ""
			}`}
			onClick={click}
		>
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
				className={`patternImage shadow-md border bg-white ${
					active ? "active border-green-lighte1r" : ""
				}`}
			/>
		</button>
	);
};
export default Pattern;
