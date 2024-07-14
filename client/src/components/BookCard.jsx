import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
    const truncatedTitle = book.title.length > 30 ? `${book.title.substring(0, 30)}...` : book.title;
    return (
        <Card>
            <img
                src={book.thumbnail}
                alt={truncatedTitle}
                className="rounded-t-lg object-cover w-full h-56"
            />
            <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">{truncatedTitle}</h3>
                <p className="text-muted-foreground mb-4">{book.author}</p>
                <Link to={`/books/${book._id}`}>
                    <Button className="w-full">View Details</Button>
                </Link>
            </CardContent>
        </Card>
    );
}