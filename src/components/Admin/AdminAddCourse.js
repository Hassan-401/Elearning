import React from "react";
import Select from "react-select";
const AdminAddCourse = () => {
	const options = [{ value: "Hasasn", label: "Hasasn" }];
	return (
		<div className="my-5 d-felx aling-items-center ">
			<h1 className="my-4 fw-bold fs-4 text-muted">Create Course</h1>
			<form action="" className="add-category my-4 p-3 border rounded fs-5">
				<div>
					<label htmlFor="course-title" className="form-title">
						Course title<span className="text-danger">*</span>
					</label>
					<input
						placeholder="Enter the title"
						type="text"
						name="course-title"
						id="course-title"
						className="form-input my-2"
					/>
				</div>
				<div>
					<label htmlFor="course-dierector" className="form-title">
						Course dierector<span className="text-danger">*</span>
					</label>
					<input
						placeholder="Enter the name of the director"
						type="text"
						name="course-dierector"
						id="course-dierector"
						className="form-input my-2"
					/>
				</div>
				<div>
					<label htmlFor="course-rank" className="form-title">
						Course rank<span className="text-danger">*</span>
					</label>
					<input
						placeholder="Enter the course rank"
						type="number"
						name="course-rank"
						id="course-rank"
						className="form-input my-2"
					/>
				</div>
				<div>
					<label htmlFor="course-price" className="form-title">
						Course price<span className="text-danger">*</span>
					</label>
					<input
						placeholder="Enter the course price"
						type="number"
						name="course-price"
						id="course-price"
						className="form-input my-2"
					/>
				</div>
				<div>
					<label htmlFor="course-thumnail" className="form-title">
						Course thumnail<span className="text-danger">*</span>
					</label>
					<input
						placeholder="Put the link of the thumnail"
						type="file"
						name="course-thumnail"
						id="course-thumnail"
						className="form-input my-2"
					/>
				</div>
				<div>
					<label htmlFor="course-level" className="form-title">
						Course level<span className="text-danger">*</span>
					</label>
					<input
						placeholder="Enter the level of the course"
						type="text"
						name="course-level"
						id="course-level"
						className="form-input my-2"
					/>
				</div>
				<div>
					<label htmlFor="course-stuedents" className="form-title">
						Number of stuedents<span className="text-danger">*</span>
					</label>
					<input
						placeholder="Enter the number of stuedents"
						type="number"
						name="course-stuedents"
						id="course-stuedents"
						className="form-input my-2"
					/>
				</div>
				<div>
					<label htmlFor="course-language" className="form-title">
						Course language<span className="text-danger">*</span>
					</label>
					<input
						placeholder="Enter the language of the course"
						type="text"
						name="course-language"
						id="course-language"
						className="form-input my-2"
					/>
				</div>
				<div>
					<label htmlFor="course-descreption" className="form-title">
						Course descreption<span className="text-danger">*</span>
					</label>
					<input
						placeholder="Enter the course descreption"
						type="text"
						name="course-descreption"
						id="course-descreption"
						className="form-input my-2"
					/>
				</div>
				<div>
					<label htmlFor="course-lectures" className="form-title">
						Number of lectures<span className="text-danger">*</span>
					</label>
					<input
						placeholder="Enter the number of lectures"
						type="number"
						name="course-lectures"
						id="course-lectures"
						className="form-input my-2"
					/>
				</div>
				<div>
					<label htmlFor="course-hours" className="form-title">
						Total hours<span className="text-danger">*</span>
					</label>
					<input
						placeholder="Enter the number of hours"
						type="number"
						name="course-hours"
						id="course-hours"
						className="form-input my-2"
					/>
				</div>
				<div>
					<label htmlFor="course-hours" className="form-title">
						Total hours<span className="text-danger">*</span>
					</label>
					<Select options={options} />
				</div>
				<button className="form-button">Create category</button>
			</form>
		</div>
	);
};

export default AdminAddCourse;
