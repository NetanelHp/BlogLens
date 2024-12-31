import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Send } from 'lucide-react';
import { Input } from "@/components/ui/input"

export default function Post() {
	return (
		<div className="max-w-md">
			<Card>
				<CardHeader>
					<CardTitle>Card Title</CardTitle>
					<CardDescription>Card Description</CardDescription>
				</CardHeader>
				<CardContent>Content</CardContent>
				<CardFooter>
					<Input className="mr-2" placeholder="Type your message here" />
					<Button><Send/>Send</Button>
				</CardFooter>
			</Card>
		</div>
	)
}