import { useState } from "react";

const useFormState = (initialState) => {
	const [formData, setFormData] = useState(initialState);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((formData) => ({ ...formData, [name]: value }));
	};

	return [formData, handleChange, setFormData];
};

export default useFormState;
