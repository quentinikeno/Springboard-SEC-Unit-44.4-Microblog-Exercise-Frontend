import React from "react";

const PostDetail = ({ post }) => {
	const { id, title, description, body } = post;
	return (
		<section className="section is-flex is-justify-content-space-between">
			<div>
				<h2 className="title is-2">{title}</h2>
				<p className="subtitle is-2">{description}</p>
			</div>
			<div>
				<button className="button is-info">
					Edit <i className="fa-solid fa-pen-to-square"></i>
				</button>
				<button className="button is-danger">
					Edit <i className="fa-solid fa-trash"></i>
				</button>
			</div>
			<div>
				<p>{body}</p>
			</div>
		</section>
	);
};

export default PostDetail;
