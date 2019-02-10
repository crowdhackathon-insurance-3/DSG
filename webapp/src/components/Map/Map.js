import React from "react";
import data from "./greece.json";
import {
	ComposableMap,
	ZoomableGroup,
	Geographies,
	Geography,
	Markers,
	Marker
} from "react-simple-maps";

const markers = [
	{
		markerOffset: -14,
		name: "Athens",
		coordinates: [23.7279843, 37.9841493]
	},
	{
		markerOffset: -14,
		name: "Lamia",
		coordinates: [22.4341691, 38.9004584]
	},
	{
		markerOffset: -14,
		name: "Larissa",
		coordinates: [22.4160706, 39.6383092]
	}
];
const MapComponent = ({ click, selectedCity }) => {
	return (
		<div className="w-3/5 mx-auto mt-10">
			<ComposableMap
				projectionConfig={{ scale: 3700 }}
				width={600}
				height={600}
			>
				<ZoomableGroup center={[25, 37]}>
					<Geographies geography={data}>
						{(geographies, projection) =>
							geographies.map((geography, i) => (
								<Geography
									key={i}
									geography={geography}
									projection={projection}
								/>
							))
						}
					</Geographies>
					<Markers>
						{markers.map((marker, i) => (
							<Marker
								className="cursor-pointer"
								onClick={() => click(marker.name)}
								key={i}
								marker={marker}
								style={{
									default: {
										fill: `${
											selectedCity === marker.name
												? "#57FF22"
												: "#FF5722"
										}`
									},
									hover: { fill: "#FFFFFF" },
									pressed: {
										fill: `${
											selectedCity === marker.name
												? "#57FF22"
												: "#FF5722"
										}`
									}
								}}
							>
								<circle
									cx={0}
									cy={0}
									r={10}
									style={{
										stroke: `${
											selectedCity === marker.name
												? "#57FF22"
												: "#FF5722"
										}`,
										strokeWidth: 3,
										opacity: 0.9
									}}
								/>

								<text
									textAnchor="middle"
									y={marker.markerOffset}
									x={marker.markerOffset}
									style={{
										fontFamily: "Roboto, sans-serif",
										fill: "#607D8B"
									}}
								>
									{marker.name}
								</text>
							</Marker>
						))}
					</Markers>
				</ZoomableGroup>
			</ComposableMap>
		</div>
	);
};

export default MapComponent;
