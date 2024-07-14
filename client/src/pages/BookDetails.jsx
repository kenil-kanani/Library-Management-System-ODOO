import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getBook } from "@/api";

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookDetails = async () => {
            setLoading(true);
            try {
                const data = await getBook(id);
                setBook(data);
            } catch (error) {
                console.error("Error fetching book details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBookDetails();
    }, [id]);

    const handleBorrow = () => {
        // Implement borrow functionality
        console.log("Borrow book:", book.id);
    };

    if (loading) return <BookDetailsSkeleton />;
    if (!book) return <div className="text-center py-8">Book not found</div>;

    return (
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden">
                <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/3 mb-6 lg:mb-0">
                            <img
                                src={book.thumbnail}
                                alt={book.title}
                                className="rounded-lg object-cover w-full h-96 lg:h-auto"
                            />
                        </div>
                        <div className="lg:w-2/3 lg:pl-8">
                            <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
                            <p className="text-xl text-gray-600 mb-4">{book.author}</p>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <BookDetail label="ISBN" value={book.ISBN} />
                                <BookDetail label="Publisher" value={book.publisher} />
                                <BookDetail label="Language" value={book.language} />
                                <BookDetail label="Year" value={book.year} />
                                <BookDetail label="Genre" value={book.genre} />
                                <BookDetail label="Page Count" value={book.pageCount} />
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg mb-6">
                                <h2 className="text-lg font-semibold mb-2">Availability</h2>
                                <div className="flex justify-between">
                                    <BookDetail label="Total Copies" value={book.quantity} />
                                    <BookDetail label="Available" value={book.available_quantity} />
                                    <BookDetail label="Borrowed" value={book.borrowers} />
                                </div>
                            </div>
                            <p className="mb-6"><strong>Description:</strong> {book.description}</p>
                            <Button onClick={handleBorrow} disabled={book.available_quantity === 0}>
                                {book.available_quantity > 0 ? "Borrow" : "Not Available"}
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

const BookDetail = ({ label, value }) => (
    <div>
        <span className="font-semibold">{label}:</span> {value}
    </div>
);

const BookDetailsSkeleton = () => (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Card>
            <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row">
                    <Skeleton className="w-full lg:w-1/3 h-96 lg:h-auto rounded-lg" />
                    <div className="lg:w-2/3 lg:pl-8 mt-6 lg:mt-0">
                        <Skeleton className="h-10 w-3/4 mb-4" />
                        <Skeleton className="h-6 w-1/2 mb-6" />
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            {[...Array(6)].map((_, i) => (
                                <Skeleton key={i} className="h-6 w-full" />
                            ))}
                        </div>
                        <Skeleton className="h-32 w-full mb-6" />
                        <Skeleton className="h-10 w-32" />
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
);

export default BookDetails;