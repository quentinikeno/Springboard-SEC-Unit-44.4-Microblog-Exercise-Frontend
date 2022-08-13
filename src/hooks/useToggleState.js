import { useState } from "react";

const useToggleState = () => {
	const [isToggled, setToggled] = useState(false);
	const toggle = () => {
		setIsEditing((isEditing) => !isEditing);
	};
	return [isToggled, toggle];
};

export default useToggleState;
