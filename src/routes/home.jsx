import React, { useState } from "react";
import BookCard from "../components/BookCard";

function Home(props) {
    const [books] = useState([
        {
            Id: 1,
            title: "Bennyaminte Aadhujeevitham",
            author: "Bennyamin",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8UKn-KAIHv6r8-FuH_gNpAxP56kPMO8_VGw&s"
        },
        {
            Id: 2,
            title: "Aarachaar",
            author: "K R Meera",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGa2E3SToT3YYWWjkBBdZClVEBmaUJcogiQ&s"
        },
        {
            Id: 3,
            title: "Pathummayude Aadu",
            author: "Basheer",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdcNvSbSsaaxEKBZR6-P7jV2vVIyp6WIU_jjz6db7yoB-EV6UhXX7o3I417z0ty7qEJw&usqp=CAU"
        },
        {
            Id: 4,
            title: "Indhulekha",
            author: "O Chandhumenon",
            image: "https://cdn.exoticindia.com/images/products/original/books-2019-022/uau900.webp"
        },
        {
            Id: 5,
            title: "Ram C/O Aanandhi",
            author: "Akhil P Dharmajan",
            image: "https://m.media-amazon.com/images/I/61De10B-ooL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            Id: 6,
            title: "Kaalam",
            author: "M T Vasudevan Nair",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTECvEnIrMhhWLnqeXsac1VTN8qqAttC4D9Jg&s"
        },
        {
            Id: 7,
            title: "Manushyanu Oru Aamukham",
            author: "Subhash Chandran",
            image: "https://upload.wikimedia.org/wikipedia/en/5/5a/Manushyanu_Oru_Aamukham.jpg"
        },
        {
            Id: 8,
            title: "Ente Katha",
            author: "Kamala Surayya",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkxiZ3Ivi_ytD7nYLy4T19awTrH6s6S10rsA&s"
        },
        {
            Id: 9,
            title: "Oru Sankeerthanam Pole",
            author: "Perumbadavam Sreedharan",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnx9pq_5s9hWlXNOTVP-Sp6O1CWoNV3lnliw&s"
        },
        {
            Id: 10,
            title: "Randidangazhi",
            author: "Thakazhi Sivasankara Pillai",
            image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1460745660l/12588437.jpg"
        }
    ]);

    return (
        <main className="bg-beige-50">
            <section className="py-20 container px-4 mx-auto">
                <h2 className="text-2xl font-bold">Recommended Books and Authors</h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-5 mt-10">
                    {books.map(book => (
                        <BookCard key={book.Id} book={book} />
                    ))}
                </div>
            </section>

            <section className="py-20 container px-4 mx-auto">
                <h2 className="text-3xl font-bold">Library News</h2>
                <div className="mt-10">
                    <p className="text-2xl">"Join our upcoming workshops and seminars on various topics including creative writing, digital literacy, and bookbinding. These workshops are designed to enrich your skills and knowledge. Check our website or visit the library for more details and registration information."</p>
                </div>
            </section>

            <section className="py-15 container px-4 mx-auto">
                <h2 className="text-2xl font-bold">Featured Video</h2>
                <div className="mt-10">
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/-ZOvJVnHhY0"
                        title="Library Advertisement"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </main>
    );
}
export default Home;