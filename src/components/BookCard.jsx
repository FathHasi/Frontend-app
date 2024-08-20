// src/components/BookCard.jsx
import React from "react";
import { Link } from "react-router-dom";

function BookCard({ book }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded" />
            <h3 className="text-lg font-bold mt-2">{book.title}</h3>
            <p className="text-gray-700">{book.author}</p>
            <Link to={`/books/${book.Id}`} className="text-blue-500 align-center mt-2 block">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">view details</button>
            </Link>
        </div>
    );
}

export default BookCard;