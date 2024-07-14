import AppContext from '@/context/AppContext'
import { withRoleProtection } from '@/utils'
import React, { useContext } from 'react'

const UserDashboard = () => {

    const { user } = useContext(AppContext);

    const borrowedBooks = [
        { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", dueDate: "2023-06-15" },
        { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", dueDate: "2023-06-20" },
        { id: 3, title: "1984", author: "George Orwell", dueDate: "2023-06-25" },
    ]

    return (
        <div className="bg-white min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, {user.name}</h1>

                <div className="bg-gray-100 rounded-lg p-4 mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">User Information</h2>
                    <p className="text-gray-600"><span className="font-medium">Name:</span> {user.name}</p>
                    <p className="text-gray-600"><span className="font-medium">Email:</span> {user.email}</p>
                </div>

                <div className="bg-gray-100 rounded-lg p-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Borrowed Books</h2>
                    <ul className="space-y-4">
                        {borrowedBooks.map(book => (
                            <li key={book.id} className="bg-white p-4 rounded-md shadow">
                                <h3 className="font-semibold text-lg text-gray-800">{book.title}</h3>
                                <p className="text-gray-600">by {book.author}</p>
                                <p className="text-sm text-gray-500 mt-2">Due: {book.dueDate}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default withRoleProtection(UserDashboard, ["user"])