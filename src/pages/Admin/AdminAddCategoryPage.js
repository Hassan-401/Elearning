import React from "react";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import { Container, Row, Col } from "react-bootstrap";
import AdminAddCategory from "../../components/Admin/AdminAddCategory";
const AdminAddCategoryPage = () => {
	return (
		<Container>
			<Row className="py-3">
				<Col sm="3" xs="2" md="2">
					<AdminSideBar />
				</Col>

				<Col sm="9" xs="10" md="10">
					<AdminAddCategory />
				</Col>
			</Row>
		</Container>
	);
};

export default AdminAddCategoryPage;
