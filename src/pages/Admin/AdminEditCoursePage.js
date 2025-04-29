import React from "react";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import { Container, Row, Col } from "react-bootstrap";
import AdminEditCourse from "../../components/Admin/AdminEditCourse";

const AdminEditCoursePage = () => {
	return (
		<div>
			<Container>
				<Row className="py-3">
					<Col sm="3" xs="2" md="2">
						<AdminSideBar />
					</Col>

					<Col sm="9" xs="10" md="10">
						<AdminEditCourse />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default AdminEditCoursePage;
