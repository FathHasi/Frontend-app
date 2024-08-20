// src/components/AuthorCard.jsx
import React from "react";
import { Link } from "react-router-dom";

function AuthorCard({ author }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <img src={author.image} alt={author.name} className="w-full h-48 object-cover rounded" />
            <h3 className="text-lg font-bold mt-2">{author.name}</h3>
            <Link to={`/authors/${author.Id}`} className="text-blue-500 hover:underline mt-2 block">View Details</Link>
        </div>
    );
}

export default AuthorCard;