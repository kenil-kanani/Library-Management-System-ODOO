import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "@/icons";

export default function SearchBar({ onSearch }) {
	return (
		<div className="w-full max-w-6xl mx-auto p-4">
			<div className="flex flex-col md:flex-row items-center gap-4">
				<div className="flex-grow flex items-center rounded-md border bg-background px-4 py-2 shadow-sm">
					<Input
						type="search"
						placeholder="Search books..."
						className="flex-grow border-none bg-transparent focus:ring-0 focus:outline-none"
						onChange={(e) => onSearch({ title: e.target.value })}
					/>
					<Button
						variant="ghost"
						size="icon"
						className="rounded-full focus:outline-none focus:ring-0 focus:ring-offset-0"
					>
						<SearchIcon className="h-5 w-5" />
						<span className="sr-only">Search</span>
					</Button>
				</div>
			</div>
		</div>
	);
}