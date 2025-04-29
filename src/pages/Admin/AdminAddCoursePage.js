import React from "react";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import { Container, Row, Col } from "react-bootstrap";
import AdminAddCourse from "../../components/Admin/AdminAddCourse";

const AdminAddCoursePage = () => {
	return (
		<Container>
			<Row className="py-3">
				<Col sm="3" xs="2" md="2">
					<AdminSideBar />
				</Col>

				<Col sm="9" xs="10" md="10">
					<AdminAddCourse />
				</Col>
			</Row>
		</Container>
	);
};

export default AdminAddCoursePage;
