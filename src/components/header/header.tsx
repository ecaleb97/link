import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function Header() {
	return (
		<header className="flex flex-col items-center justify-center p-4 my-8">
			<Avatar className="size-24">
				<AvatarImage
					src="https://github.com/ecaleb97.png"
					alt="Caleb Zamalloa"
					className="size-24"
				/>
				<AvatarFallback className="size-24 bg-[#F3F4F6] dark:bg-[#121212]">
					CZ
				</AvatarFallback>
			</Avatar>
			<h1 className="text-2xl font-semibold pt-4">Caleb Zamalloa</h1>
			<p className="text-pretty">Software Developer</p>
		</header>
	);
}
