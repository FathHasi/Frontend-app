// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="h-20 shadow-xl bg-teal-50">
            <div className="mx-auto container flex flex-row justify-between items-center h-full">
                <h1 className="text-2xl font-bold">Book Vaults</h1>
                <nav>
                    <ul className="flex flex-row gap-6">
                        <li className="hidden md:block">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hidden md:block">
                            <Link to="/books">Books</Link>
                        </li>
                        <li className="hidden lg:flex lg:flex-row lg:gap-6 lg:items-center">
                            <Link to="/authors">Authors</Link>
                        </li>
                        <li className="hidden lg:flex lg:flex-row lg:gap-6 lg:items-center">
                            <Link to="/help">Help</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;