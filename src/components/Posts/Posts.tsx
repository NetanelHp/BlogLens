import Post from "./Post";
import { auth, currentUser } from '@clerk/nextjs/server';

export default async function Cards() {
	return (
		<div className="text-left mt-14">
			<h1>Posts</h1>
			<Post />
		</div>
  	);
}