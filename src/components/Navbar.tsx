import Image from "next/image";
import Login from "./Login";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { currentUser } from "@clerk/nextjs/server";

export default async function Navbar() {
	const user = await currentUser();
	return (
		<div className="flex justify-between px-10 py-5 items-center">
			<div className="flex items-center space-x-2">
				<Image src='/assets/feather.png' alt="logo" width={50} height={50}/>
				<span className="text-2xl font-bold">BlogLens</span>
			</div>
			<div>
				<SignedOut>
					<SignInButton />
					<Login />
				</SignedOut>
				<SignedIn>
					<div className="flex items-center space-x-2">
						<UserButton />
						{
							user && <div>{user.firstName}</div>
						}
					</div>
				</SignedIn>
			</div>
		</div>
	)
}