import { Navbar } from "@/components";

export default function GenerateLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Navbar />
			<main>
				<span className="text-lg flex justify-center ">hola mundo</span>
				{children}
			</main>
		</>
	);
}
