import React from "react";

const ImageGallery = ({ scans, city }) => {
	return (
		<section className="w-1/2 flex flex-col items-start justify-center mx-auto">
			<div className="pl-10 mb-5 text-blue-dark">
				<h2 className="">
					<span className="mr-2">{city.name}:</span>
					<span className="text-blue-darker">{city.date}</span>
				</h2>
				<h3 className="">
					<span className="mr-2">THRESHOLD:</span>
					<span className="text-blue-darker">20°C</span>
				</h3>
			</div>
			{scans.map((scan, i) => (
				<div
					key={i}
					className={`flex flex-row mx-10 mb-4 shadow-lg p-5 pr-8 ${
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
								<td className="pl-4">{4312 + i}</td>
							</tr>
							<tr>
								<td className="font-bold">PATTERN TYPE:</td>
								<td className="pl-4">TEMPERATURE</td>
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
