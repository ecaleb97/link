import Link from "next/link";

interface PillProps {
	icon: React.ReactNode;
	name: string;
	href: string;
}

export function Pill({ icon, name, href }: PillProps) {
	return (
		<div className="flex items-center justify-between gap-4">
			{icon}
			<Link
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="text-lg font-light"
			>
				{name}
			</Link>
			<div></div>
		</div>
	);
}
