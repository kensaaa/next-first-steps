import type { Metadata } from "next";

export const metadata: Metadata =  {
	title:'contact  title',
	description:'contact description '
} 

export default function ContactPage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<span className="text-5xl">Contact Page</span>
		</main>
	);
}
