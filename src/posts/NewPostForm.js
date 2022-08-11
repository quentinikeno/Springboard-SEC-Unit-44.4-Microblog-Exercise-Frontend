import { useState } from "react";

const NewPostForm = () => {
	const initalState = { title: "", description: "", body: "" };
	const [formData, setFormData] = useState(initalState);
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((formData) => ({ ...formData, [name]: value }));
	};
	return (
		<form>
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
					/>
				</div>
			</div>
			<div className="field is-grouped">
				<div className="control">
					<button className="button is-link">Save</button>
				</div>
				<div className="control">
					<button className="button is-link is-light">Cancel</button>
				</div>
			</div>
		</form>
	);
};

export default NewPostForm;
