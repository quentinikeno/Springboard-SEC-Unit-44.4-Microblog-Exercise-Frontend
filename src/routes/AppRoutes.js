import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../home/Homepage";
import NewPostForm from "../posts/NewPostForm";
import PostDetail from "../posts/detail/PostDetail";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/new" element={<NewPostForm />} />
			<Route path="/:postId" element={<PostDetail />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default AppRoutes;
