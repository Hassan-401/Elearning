import React from "react";

const AdminAddVideos = () => {
	return (
		<div className="my-5 d-felx aling-items-center ">
			<h1 className="my-4 fw-bold fs-4 text-muted">Add Videos</h1>
			<form action="" className="add-category my-4 p-3 border rounded fs-5">
				<label htmlFor="category" className="form-title">
					Category title<span className="text-danger">*</span>
				</label>
				<input
					placeholder="Enter the title of the category"
					type="text"
					name="category"
					id="category"
					className="form-input my-2"
				/>
				<button className="form-button">Create category</button>
			</form>
		</div>
	);
};

export default AdminAddVideos;
