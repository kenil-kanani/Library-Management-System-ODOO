import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "@/icons";

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
