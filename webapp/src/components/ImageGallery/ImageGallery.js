import React from "react";

const ImageGallery = ({ scans }) => {
	return (
		<section className="w-1/2 flex flex-col items-start justify-center mx-auto">
			{scans.map((scan, i) => (
				<div
					key={i}
					className={`flex flex-row mx-10 mb-4 shadow-lg p-4 pr-8 ${
						scan.thresholdPassed
							? "bg-red text-white"
							: "bg-green-lightest"
					}`}
				>
					<img
						src={`/scannedImages/${scan.filename}`}
						width="256"
						alt={`Scan ${i}`}
					/>
					<table className="leading-normal ml-4">
						<tbody>
							<tr>
								<td className="font-bold">LOT:</td>
								<td className="pl-4">1810911</td>
							</tr>
							<tr>
								<td className="font-bold">ID:</td>
								<td className="pl-4">19284</td>
							</tr>
							<tr>
								<td className="font-bold">PATTERN TYPE:</td>
								<td className="pl-4">TEMPERATURE</td>
							</tr>
							<tr>
								<td className="font-bold">THRESHOLD:</td>
								<td className="pl-4">20°C</td>
							</tr>
							<tr>
								<td className="font-bold">DATE:</td>
								<td className="pl-4">2019-02-10</td>
							</tr>
							<tr>
								<td className="font-bold">INSURANCE COST:</td>
								<td className="pl-4 font-bold">2165.34€</td>
							</tr>
						</tbody>
					</table>
				</div>
			))}
		</section>
	);
};

export default ImageGallery;
