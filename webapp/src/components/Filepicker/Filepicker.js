import React from "react";

const Filepicker = ({ onChange }) => {
	return (
		<div className="w-1/3 text-center">
			<input
				className="hidden"
				id="filepicker"
				type="file"
				multiple="multiple"
				onChange={onChange}
			/>
			<label htmlFor="filepicker">
				<div className="bg-blue hover:bg-blue-darker text-white cursor-pointer p-4 shadow-md">
					<i className="fas fa-images" /> Upload photos to investigate
				</div>
			</label>
		</div>
	);
};

export default Filepicker;
