import { socialNetworks } from "@/lib/data";
import { Pill } from "@/components/social/pill";

export function SocialLinks() {
	return (
		<section>
			<h2 className="text-xl font-light text-center">Social Networks</h2>
			<ul className="my-4 grid grid-cols-1 gap-4">
				{socialNetworks.map((network) => (
					<li
						className="border text-[#030712]/80 dark:text-[#fdfdfd] rounded-md p-3 w-72 hover:scale-110 border-[#121212]/10 dark:border-[#F3F4F6]/20"
						key={network.href}
					>
						<Pill
							name={network.name}
							href={network.href}
							icon={<network.icon />}
						/>
					</li>
				))}
			</ul>
		</section>
	);
}
