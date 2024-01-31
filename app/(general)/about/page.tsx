import type { Metadata } from "next";

export const metadata: Metadata =  {
	title:'about  title',
	description:'about description '
} 

export default function AboutPage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<span className="text-5xl">About Page</span>
		</main>
	);
}
