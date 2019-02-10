import React from "react";

const Stats = ({ scans }) => {
	const itemCount = scans.length;
	const coverage = 0.5;
	const itemCost = 2165.34;
	const faultyClaimed = scans.length;
	const actualFaulty = scans.filter(item => item.thresholdPassed).length;
	return (
		<section className="w-2/3">
			<table className="w-3/5 mx-auto leading-normal text-xl shadow-md">
				<thead>
					<tr className="shadow font-bold">
						<td className="p-3 border" />
						<td className="p-3 border">CLAIMED</td>
						<td className="p-3 border">ACTUAL</td>
					</tr>
				</thead>
				<tbody>
					<tr className="shadow">
						<td className="p-3 border">TOTAL ITEMS</td>
						<td
							className="p-3 border font-bold text-center"
							colSpan="4"
						>
							{itemCount}
						</td>
					</tr>
					<tr className="shadow">
						<td className="p-3 border">FAULTY ITEMS</td>
						<td className="p-3 border font-bold text-red">
							{faultyClaimed}(
							{parseInt((faultyClaimed * 100) / itemCount)}%)
						</td>
						<td className="p-3 border font-bold text-green">
							{actualFaulty} (
							{parseInt((actualFaulty * 100) / itemCount)}%)
						</td>
					</tr>
					<tr className="shadow">
						<td className="p-3 border">INSURANCE COST</td>
						<td className="p-3 border font-bold text-red">
							{itemCost * coverage * faultyClaimed} €
						</td>
						<td className="p-3 border font-bold text-green">
							{itemCost * coverage * actualFaulty} €
						</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
};

export default Stats;
