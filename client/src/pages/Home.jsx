import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { getAllBooks } from "@/api";
import { BookCard } from "@/components";

export default function Home() {
	const [newArrivals, setNewArrivals] = useState([]);
	const [popularBooks, setPopularBooks] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getAllBooks().then((data) => {
			setNewArrivals(data.slice(0, 4));
			setPopularBooks(data.slice(4, 8));
			setIsLoading(false);
		});
	}, []);

	// if (isLoading) {
	// 	return <BooksSkeleton />;
	// }

	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-grow container mx-auto px-4 py-8">
				<h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Library</h1>

				<section className="bg-gray-100 p-6 rounded-lg">
					<h2 className="text-2xl font-semibold mb-4">Library Services</h2>
					<ul className="space-y-4">
						<li>
							<strong>Book borrowing and returns:</strong> Access our extensive collection of physical books with flexible loan periods.
						</li>
						<li>
							<strong>Online catalog search:</strong> Easily find and reserve books using our user-friendly digital catalog system.
						</li>
						<li>
							<strong>E-book and audiobook access:</strong> Enjoy a wide range of digital content accessible from your devices 24/7.
						</li>
						<li>
							<strong>Study rooms reservation:</strong> Book quiet spaces for individual or group study sessions.
						</li>
						<li>
							<strong>Printing and scanning services:</strong> Conveniently print, copy, and scan documents at affordable rates.
						</li>
						<li>
							<strong>Research assistance:</strong> Get expert help from our librarians for your academic or personal research needs.
						</li>
						<li>
							<strong>Community events:</strong> Participate in book clubs, workshops, and educational programs for all ages.
						</li>
					</ul>
					<Link to="/services">
						<Button className="mt-6">Learn More About Our Services</Button>
					</Link>
				</section>

				<section className="mb-12 mt-6">
					<h2 className="text-2xl font-semibold mb-4">New Arrivals</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{newArrivals.map(book => (
							<BookCard key={book._id} book={book} />
						))}
					</div>
					<Link to="/books" className="block text-center mt-4 text-blue-600 hover:underline">
						View all new arrivals
					</Link>
				</section>

				<section className="mb-12">
					<h2 className="text-2xl font-semibold mb-4">Popular Books</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{popularBooks.map(book => (
							<BookCard key={book._id} book={book} />
						))}
					</div>
					<Link to="/books" className="block text-center mt-4 text-blue-600 hover:underline">
						View all popular books
					</Link>
				</section>
			</main>
			<footer className="bg-gray-200 py-6 text-center">
				<div className="container mx-auto">
					<p className="mb-2">&copy; 2023 Library Management System. All rights reserved.</p>
					<nav className="space-x-4">
						<Link to="/about" className="text-blue-600 hover:underline">About</Link>
						<Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
						<Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
					</nav>
				</div>
			</footer>
		</div>
	)
}
