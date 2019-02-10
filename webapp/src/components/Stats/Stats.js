import React from "react";
import Map from "../Map/Map";

const Stats = ({ scans, mapClick, selectedCity }) => {
	const itemCount = scans.length;
	const actualFaulty = scans.filter(item => item.thresholdPassed).length;
	return (
		<section className="w-2/3 p-16">
			<table className="w-3/5 mx-auto leading-normal text-xl shadow-md">
				<tbody>
					<tr className="shadow">
						<td className="p-3 border">TOTAL ITEMS</td>
						<td className="p-3 border font-bold">{itemCount}</td>
					</tr>
					<tr className="shadow">
						<td className="p-3 border">FAULTY ITEMS</td>
						<td
							className={`p-3 border font-bold ${
								actualFaulty > 0 ? "text-red" : "text-green"
							}`}
						>
							{actualFaulty} (
							{parseInt((actualFaulty * 100) / itemCount)}%)
						</td>
					</tr>
				</tbody>
			</table>
			<Map click={mapClick} selectedCity={selectedCity} />
		</section>
	);
};

export default Stats;
