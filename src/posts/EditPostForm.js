import { useSelector, useDispatch } from "react-redux";
import { updatePostFromAPI } from "../store/postsSlice";
import useFormState from "../hooks/useFormState";

const EditPostForm = ({ postId, toggleIsEditing }) => {
	const post = useSelector((state) => state.posts.posts[postId]);
	const [formData, handleChange] = useFormState(post);
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(updatePostFromAPI({ ...formData, id: postId }));
		toggleIsEditing();
	};

	const handleCancel = (event) => {
		event.preventDefault();
		toggleIsEditing();
	};

	return (
		<form onSubmit={handleSubmit} className="my-5">
			<div className="field">
				<label htmlFor="title" className="label">
					Title
				</label>
				<div className="control">
					<input
						type="text"
						className="input"
						onChange={handleChange}
						id="title"
						name="title"
						value={formData.title}
						required
					/>
				</div>
			</div>
			<div className="field">
				<label htmlFor="description" className="label">
					Description
				</label>
				<div className="control">
					<input
						type="text"
						className="input"
						onChange={handleChange}
						id="description"
						name="description"
						value={formData.description}
						required
					/>
				</div>
			</div>
			<div className="field">
				<label htmlFor="body" className="label">
					Body
				</label>
				<div className="control">
					<textarea
						className="textarea"
						onChange={handleChange}
						id="body"
						name="body"
						value={formData.body}
						required
					/>
				</div>
			</div>
			<div className="field is-grouped">
				<div className="control">
					<button type="submit" className="button is-link">
						Save
					</button>
				</div>
				<div className="control">
					<button
						className="button is-link is-light"
						onClick={handleCancel}
					>
						Cancel
					</button>
				</div>
			</div>
		</form>
	);
};

export default EditPostForm;
