import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditPostForm from "../EditPostForm";

const PostDetail = ({ post, editPost, deletePost }) => {
	const [isEditing, setIsEditing] = useState(false);
	const toggleIsEditing = () => {
		setIsEditing((isEditing) => !isEditing);
	};

	const navigate = useNavigate();
	const { id, title, description, body } = post;

	if (isEditing)
		return (
			<EditPostForm
				post={post}
				editPost={editPost}
				toggleIsEditing={toggleIsEditing}
			/>
		);

	const handleDelete = () => {
		deletePost(id);
		navigate("/");
	};

	return (
		<section className="section">
			<div className="is-flex is-justify-content-space-between">
				<div>
					<h2 className="title is-2">{title}</h2>
					<p className="subtitle is-4">{description}</p>
				</div>
				<div>
					<button
						className="button is-info mr-3"
						onClick={toggleIsEditing}
					>
						Edit <i className="fa-solid fa-pen-to-square ml-3"></i>
					</button>
					<button className="button is-danger" onClick={handleDelete}>
						Delete <i className="fa-solid fa-trash ml-3"></i>
					</button>
				</div>
			</div>
			<div className="my-3">
				<p>{body}</p>
			</div>
		</section>
	);
};

export default PostDetail;
