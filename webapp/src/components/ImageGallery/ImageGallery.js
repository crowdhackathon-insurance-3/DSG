import React from "react";

const tempImges = ["vanilla.jpg", "low.jpg", "full.jpg", "med.jpg"];

const ImageGallery = ({ images }) => {
	return (
		<section className="flex items-center justify-center mt-12 mx-auto">
			{tempImges.map(img => (
				<button className="mx-10">
					<img
						src={`/scannedImages/${img}`}
						width="256"
						alt={img}
						className={`cursor-pointer patternImage border shadow-lg ${
							img === "full.jpg" ? "border-red" : "border-green"
						}`}
					/>
				</button>
			))}
		</section>
	);
};

export default ImageGallery;
