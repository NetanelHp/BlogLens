import Posts from "../components/Posts/Posts";

export default function Home() {
	return (
		<div className="text-center mt-14">
			<h1 className="font-bold text-6xl max-w-screen-md mx-auto mb-4">Capturing Moments</h1>
			<h2 className="font-medium text-xl max-w-screen-md mx-auto">Your Visual Storytelling Hub</h2>
			<Posts />
		</div>
	)
}
