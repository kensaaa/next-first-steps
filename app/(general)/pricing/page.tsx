import type { Metadata } from "next";

export const metadata: Metadata =  {
	title:'princig  title',
	description:'princig description '
} 

export default function PrincigPage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<span className="text-5xl">Princig Page</span>
		</main>
	);
}
