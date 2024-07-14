import {Link} from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";

export default function Home() {
	const books = [
		{
			id: 1,
			title: "Book Title 1",
			author: "Author Name 1",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, maiores placeat velit voluptates adipisci provident id, eaque magnam atque officiis tenetur nesciunt officia, qui mollitia! In accusantium tempore exercitationem nulla eligendi facere corporis minima, porro tempora soluta fugiat iure officiis, autem error labore!",
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7wtXdJMxjE-6CiVTVuyntkLjvzQ6Q9QhAg&s",
		},
		{
			id: 2,
			title: "Book Title 2",
			author: "Author Name 2",
			image: "/placeholder.svg",
		},
		{
			id: 3,
			title: "Book Title 3",
			author: "Author Name 3",
			image: "/placeholder.svg",
		},
		// Add more book objects as needed
	];
	return (
		<div className="flex flex-col min-h-screen bg-background">
			<NavBar />
			<SearchBar />
			<main className="flex-1 container mx-auto py-8 px-6 md:px-8">
				<section className="mb-8">
					<h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{books.map((book) => (
							<Card key={book.id}>
								<img
									src={book.image}
									alt={book.title}
									width={300}
									height={400}
									className="rounded-t-lg object-cover w-full h-56"
								/>
								<CardContent className="p-4">
									<h3 className="text-lg font-semibold mb-2">
										{book.title}
									</h3>
									<p className="text-muted-foreground mb-4">
										{book.author}
									</p>
                                    <p className="text-gray-700 line-clamp-2 text-base truncate uppercase">
                                        {book.description}
                                    </p>
									<Button className="w-full">Borrow</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</section>
				<section className="mb-8">
					<h2 className="text-2xl font-bold mb-4">Trending Books</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{books.map((book) => (
							<Card key={book.id}>
								<img
									src={book.image}
									alt={book.title}
									width={300}
									height={400}
									className="rounded-t-lg object-cover w-full h-56"
								/>
								<CardContent className="p-4">
									<h3 className="text-lg font-semibold mb-2">
										{book.title}
									</h3>
									<p className="text-muted-foreground mb-4">
										{book.author}
									</p>
									<Button className="w-full">Borrow</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</section>
			</main>
			<footer className="bg-primary text-primary-foreground py-4 px-6 md:px-8">
				<div className="container mx-auto flex items-center justify-between">
					<p className="text-sm">&copy; 2024 Library Management</p>
					<nav>
						<ul className="flex space-x-4">
							<li>
								<Link
									href="#"
									className="hover:underline"
									prefetch={false}
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:underline"
									prefetch={false}
								>
									Contact
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:underline"
									prefetch={false}
								>
									Privacy
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</footer>
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
