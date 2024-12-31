import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

export default function Login() {
	return (
		<div className="flex space-x-2">
			<Button>Login</Button>
			<ModeToggle />
		</div>
  )
}