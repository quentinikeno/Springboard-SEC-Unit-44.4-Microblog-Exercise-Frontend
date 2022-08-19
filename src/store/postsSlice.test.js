import { store } from "./store";
import {
	addPost,
	editPost,
	deletePost,
	addComment,
	deleteComment,
	incDecVotes,
} from "./postsSlice";

const initialState = { posts: {}, isLoading: false, error: null };
const testPost = {
	id: 1,
	title: "Test",
	description: "This is a test.",
	body: "Does this even work?",
	votes: 0,
};
const testComment = { id: 1, text: "This is a test comment." };

test("That the state starts with no posts", () => {
	expect(store.getState().posts).toEqual(initialState);
});

describe("test postsSlice reducers", () => {
	test("addPost adds a post to the posts state", () => {
		store.dispatch(addPost(testPost));
		expect(store.getState().posts).toEqual({
			...initialState,
			posts: {
				[testPost.id]: {
					title: "Test",
					description: "This is a test.",
					body: "Does this even work?",
					votes: 0,
					comments: [],
				},
			},
		});
	});

	//Add a test post before the tests below
	beforeEach(() => {
		store.dispatch(addPost(testPost));
	});

	test("editPost edits an existing post in the state", () => {
		const postEdits = {
			title: "Edited post",
			description: "This is an updated post.",
			body: "I guess this does work.",
		};
		store.dispatch(editPost({ id: testPost.id, ...postEdits }));
		const { posts } = store.getState().posts;
		expect(posts).toEqual({
			[testPost.id]: {
				votes: 0,
				comments: [],
				...postEdits,
			},
		});
	});

	test("deletePost deletes a post", () => {
		store.dispatch(deletePost(testPost.id));
		const { posts } = store.getState().posts;
		expect(posts).not.toHaveProperty(`${testPost.id}`);
	});

	test("addComment adds a comment to state for posts", () => {
		store.dispatch(
			addComment({
				postId: testPost.id,
				commentId: testComment.id,
				text: testComment.text,
			})
		);
		const { posts } = store.getState().posts;
		expect(posts).toEqual({
			[testPost.id]: {
				title: "Test",
				description: "This is a test.",
				body: "Does this even work?",
				votes: 0,
				comments: [testComment],
			},
		});
	});

	test("deleteComment deletes a comment for a post.", () => {
		store.dispatch(
			addComment({
				postId: testPost.id,
				commentId: testComment.id,
				text: testComment.text,
			})
		);
		const { posts } = store.getState().posts;
		store.dispatch(
			deleteComment({ postId: testPost.id, commentId: testComment.id })
		);
		expect(posts[testPost.id].comments).not.toContain(testComment);
	});

	describe("test incDecVotes", () => {
		test("Incrementing votes", () => {
			store.dispatch(
				incDecVotes({ postId: testPost.id, direction: "up" })
			);
			const { votes } = store.getState().posts.posts[testPost.id];
			expect(votes).toEqual(1);
		});

		test("Decrementing votes", () => {
			store.dispatch(
				incDecVotes({ postId: testPost.id, direction: "down" })
			);
			const { votes } = store.getState().posts.posts[testPost.id];
			expect(votes).toEqual(-1);
		});
	});
});
