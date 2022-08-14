import { Routes, Route } from "react-router-dom";
import Homepage from "../home/Homepage";
import NewPostForm from "../posts/NewPostForm";
import FindPost from "../posts/detail/FindPost";

const AppRoutes = ({
	posts,
	addPost,
	editPost,
	deletePost,
	postComments,
	initComment,
	addComment,
	deleteComment,
}) => {
	return (
		<Routes>
			<Route path="/" element={<Homepage posts={posts} />} />
			<Route
				path="/new"
				element={
					<NewPostForm addPost={addPost} initComment={initComment} />
				}
			/>
			<Route
				path="/:postId"
				element={
					<FindPost
						posts={posts}
						editPost={editPost}
						deletePost={deletePost}
						addComment={addComment}
						deleteComment={deleteComment}
						postComments={postComments}
					/>
				}
			/>
		</Routes>
	);
};

export default AppRoutes;
