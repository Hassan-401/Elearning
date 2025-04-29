import LoginPage from "./pages/Auth/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/Auth/RegisterPage";
import HomePage from "./pages/Home/HomePage";
import CoursePage from "./pages/Courses/CoursePage";
import AboutUsPage from "./pages/Info/AboutUsPage";
import ContactUsPage from "./pages/Info/ContactUsPage";
import CoursesPage from "./pages/Courses/CoursesPage";
import AdminAddCategoryPage from "./pages/Admin/AdminAddCategoryPage";
import AdminAddCoursePage from "./pages/Admin/AdminAddCoursePage";
import AdminEditCoursePage from "./pages/Admin/AdminEditCoursePage";
import AdminAddVideosPage from "./pages/Admin/AdminAddVideosPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/" element={<HomePage />} />
				<Route path="/course" element={<CoursePage />} />
				<Route path="/about-us" element={<AboutUsPage />} />
				<Route path="/contact-us" element={<ContactUsPage />} />
				<Route path="/courses" element={<CoursesPage />} />
				<Route path="/admin/addcategory" element={<AdminAddCategoryPage />}/>
				<Route path="/admin/addcourse" element={<AdminAddCoursePage />}/>
				<Route path="/admin/editcourse" element={<AdminEditCoursePage />}/>
				<Route path="/admin/addvideos" element={<AdminAddVideosPage />}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
