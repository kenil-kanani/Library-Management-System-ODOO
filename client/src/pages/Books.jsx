import { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import { BookCard } from '@/components';
import { getAllBooks } from '@/api';

export default function Books() {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [trendingBooks, setTrendingBooks] = useState([]);
    const [searchTitle, setSearchTitle] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllBooks().then((data) => {
            setBooks(data);
            setFilteredBooks(data);
            setTrendingBooks(data);
            setIsLoading(false);
        });
    }, []);

    const handleSearch = (searchParams) => {
        setSearchTitle(searchParams.title || '');
    };

    useEffect(() => {
        if (searchTitle.trim() === '') {
            setFilteredBooks(books);
        } else {
            const result = books.filter(book =>
                book.title.toLowerCase().includes(searchTitle.toLowerCase())
            );
            setFilteredBooks(result);
        }
    }, [books, searchTitle]);

    if (isLoading) {
        return <BooksSkeleton />;
    }

    return (
        <div className="flex flex-col md:flex-row gap-4 p-4">
            <div className="flex-grow overflow-y-auto">
                <SearchBar onSearch={handleSearch} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    {filteredBooks.map(book => (
                        <BookCard key={book._id} book={book} />
                    ))}
                </div>
            </div>
            <div className="w-1/4 min-w-[250px] p-4 overflow-y-auto">
                <h2 className="text-lg font-semibold mb-4 mx-auto w-fit">Trending Books</h2>
                {trendingBooks.slice(0, 4).map(book => (
                    <BookCard key={book._id} book={book} />
                ))}
            </div>
        </div>
    );
}


function BooksSkeleton() {
    return (
        <div className="flex flex-col md:flex-row gap-4 p-4 animate-pulse">
            <div className="flex-grow overflow-y-auto">
                <div className="h-10 bg-gray-200 rounded mb-4"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="bg-gray-200 h-64 rounded"></div>
                    ))}
                </div>
            </div>
            <div className="w-1/4 min-w-[250px] p-4 overflow-y-auto">
                <div className="h-6 bg-gray-200 w-32 mx-auto mb-4 rounded"></div>
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="bg-gray-200 h-32 mb-4 rounded"></div>
                ))}
            </div>
        </div>
    );
}