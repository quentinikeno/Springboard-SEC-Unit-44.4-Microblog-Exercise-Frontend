import { useDispatch } from "react-redux";
import useFormState from "../../hooks/useFormState";
import { sendCommentToAPI } from "../../store/postsSlice";

const NewCommentForm = ({ postId }) => {
	const initialState = { text: "" };
	const [formData, handleChange, setFormData] = useFormState(initialState);
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(sendCommentToAPI({ postId, text: formData.text }));
		setFormData(initialState);
	};

	return (
		<form onSubmit={handleSubmit} className="my-5">
			<div className="field">
				<label htmlFor="text" className="label">
					Comment
				</label>
				<div className="control">
					<textarea
						className="textarea"
						onChange={handleChange}
						id="text"
						name="text"
						value={formData.text}
						required
					/>
				</div>
			</div>
			<div className="field is-grouped">
				<div className="control">
					<button type="submit" className="button is-link">
						Add Comment
					</button>
				</div>
			</div>
		</form>
	);
};

export default NewCommentForm;
