import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchBar() {
	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<p className="text-muted-foreground">
				Search our extensive product catalog.
			</p>
			<div className="flex w-full max-w-md items-center rounded-md border bg-background px-4 py-2 shadow-sm">
				<Input
					type="search"
					placeholder="Search products..."
					className="flex-1 border-none bg-transparent focus:ring-0"
				/>
				<Button variant="ghost" size="icon" className="rounded-full">
					<SearchIcon className="h-5 w-5" />
					<span className="sr-only">Search</span>
				</Button>
			</div>
		</div>
	);
}

function SearchIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="11" cy="11" r="8" />
			<path d="m21 21-4.3-4.3" />
		</svg>
	);
}

function XIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		</svg>
	);
}
