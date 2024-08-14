import { Header } from "@/components/header/header";
import { SocialLinks } from "@/components/social/social-links";
import { ModeToggle } from "@/components/theme/theme-toggle";

export default function Home() {
	return (
		<div className="max-w-5xl min-h-dvh mx-auto mt-14 flex flex-col">
			<div className="self-end px-4">
				<ModeToggle />
			</div>
			<Header />
			<main className="flex flex-col items-center">
				<SocialLinks />
			</main>
		</div>
	);
}
