import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/SearchBar";

const Books = () => {
    const [books, setBooks] = useState([
        {
            id: "8743893748917",
            title: "Book Title 1",
            author: "Author Name 1",
            description: "Lorem ipsum dolor sit amet...",
            image: "https://example.com/book1.jpg",
        },
        // Add more book objects as needed
    ]);

    const BookCard = ({ book }) => (
        <Card key={book.id}>
            <img
                src={book.image}
                alt={book.title}
                className="rounded-t-lg object-cover w-full h-56"
            />
            <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
                <p className="text-muted-foreground mb-4">{book.author}</p>
                <Link to={`/books/${book.id}`}>
                    <Button className="w-full">View Details</Button>
                </Link>
            </CardContent>
        </Card>
    );

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SearchBar />
            <main className="flex-1 container mx-auto py-8 px-6 md:px-8">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Books</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {books.map((book) => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                </section>
            </main>
            {/* Footer remains unchanged */}
        </div>
    );
};

export default Books;