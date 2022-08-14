import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addPost } from "../store/postsSlice";
import useFormState from "../hooks/useFormState";

const NewPostForm = ({ initComment }) => {
	const initialState = { title: "", description: "", body: "" };
	const [formData, handleChange] = useFormState(initialState);
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		const id = uuid();
		dispatch(addPost({ ...formData, id }));
		initComment(id);
		navigate("/");
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
					<Link to="/" className="button is-link is-light">
						Cancel
					</Link>
				</div>
			</div>
		</form>
	);
};

export default NewPostForm;
