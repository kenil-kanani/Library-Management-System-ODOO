import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        // Fetch book details here
        // For now, we'll use mock data
        setBook({
            id: id,
            title: "Book Title",
            author: "Author Name",
            ISBN: "1234567890",
            publisher: "Publisher Name",
            language: "English",
            year: "2023",
            genre: "Fiction",
            pageCount: 300,
            quantity: 5,
            available_quantity: 3,
            borrowers: 2,
            description: "Lorem ipsum dolor sit amet...",
            image: "https://example.com/book.jpg",
        });
    }, [id]);

    if (!book) return <div>Loading...</div>;

    return (
        <div className="container mx-auto py-8 px-6 md:px-8">
            <Card>
                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row">
                        <img
                            src={book.image}
                            alt={book.title}
                            className="rounded-lg object-cover w-full md:w-1/3 h-64 md:h-auto"
                        />
                        <div className="md:ml-6 mt-4 md:mt-0">
                            <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
                            <p className="text-xl mb-4">{book.author}</p>
                            <p><strong>ISBN:</strong> {book.ISBN}</p>
                            <p><strong>Publisher:</strong> {book.publisher}</p>
                            <p><strong>Language:</strong> {book.language}</p>
                            <p><strong>Year:</strong> {book.year}</p>
                            <p><strong>Genre:</strong> {book.genre}</p>
                            <p><strong>Page Count:</strong> {book.pageCount}</p>
                            <p><strong>Quantity:</strong> {book.quantity}</p>
                            <p><strong>Available:</strong> {book.available_quantity}</p>
                            <p><strong>Borrowers:</strong> {book.borrowers}</p>
                            <p className="mt-4"><strong>Description:</strong> {book.description}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default BookDetails;