import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
	return (
		<div className="sidebar">
			<div className="side-line"></div>
			<div className="d-flex flex-column">
				<Link to="/admin/addcategory" style={{ textDecoration: "none" }}>
					<div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
						Add Category
					</div>
				</Link>
				<Link to="/admin/addcourse" style={{ textDecoration: "none" }}>
					<div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
						Add Course
					</div>
				</Link>
				<Link to="/admin/editcourse" style={{ textDecoration: "none" }}>
					<div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
						Edit Course
					</div>
				</Link>
				<Link to="/admin/addvideos" style={{ textDecoration: "none" }}>
					<div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
						Add Videos
					</div>
				</Link>
			</div>
		</div>
	);
};

export default AdminSideBar;
