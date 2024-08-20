import React from "react";
import { Link } from "react-router-dom";

// Sample data with Malayalam books including images
const books = [
    {
        Id: 1,
        title: "Bennyaminte aadhujeevitham",
        author: "Bennyamin",
        authorId: 1, 
        description: "Benyaminte Aadhujeevitham (also known as Goat Days) is a critically acclaimed novel by the Indian author Benyamin. The story is inspired by real-life events and narrates the harrowing experiences of Najeeb, an Indian migrant worker in Saudi Arabia. The novel delves into themes of survival, human endurance, and the dark side of the migrant experience, portraying Najeeb's life as a goat herder under extreme conditions. With its powerful narrative, Benyaminte Aadhujeevitham has resonated with readers and has been translated into multiple languages, becoming one of the most celebrated works in contemporary Malayalam literature.",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b5/Adujivitam.jpg"
    },
    {
        Id: 2,
        title: "Aarachaar",
        author: "K R Meera",
        authorId: 2, 
        description: "Aarachaar  provoking novel by renowned Malayalam author K R Meera. The novel centers around Chetna Grddha Mullick, the first female executioner in India, who comes from a long lineage of hangmen. Through Chetna's life and experiences, the novel explores complex themes such as justice, power, gender roles, and the weight of tradition.Aarachaar is lauded for its intricate character development and vivid storytelling, making it a landmark work in contemporary Malayalam literature. The novel has earned Meera critical acclaim and numerous awards, including the prestigious Kerala Sahitya Akademi Award.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGa2E3SToT3YYWWjkBBdZClVEBmaUJcogiQ&s"
    },
    {
        Id: 3,
        title: "Pathummayude aadu",
        author: "Vaikom Muhammad Basheer",
        authorId: 3, 
        description: "Pathummayude Aadu  is a beloved novel by the renowned Malayalam writer Vaikom Muhammad Basheer. The novel is a semi-autobiographical work that humorously and poignantly depicts the everyday life of the author's family in a rural village. Centered around the character of Pathumma, Basheer's sister, and her goat, the story captures the simplicity, warmth, and charm of rural life in Kerala. Through witty dialogues and vivid descriptions, Basheer provides an intimate glimpse into the quirks and dynamics of his family, making Pathummayude Aadu a classic in Malayalam literature.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdcNvSbSsaaxEKBZR6-P7jV2vVIyp6WIU_jjz6db7yoB-EV6UhXX7o3I417z0ty7qEJw&usqp=CAU"
    },{
        Id: 4,
        title:"Indhulekha",
        author:"O Chandhumenon",
        authorId: 4, 
        description: "Indulekha is a classic Malayalam novel written by O. Chandu Menon. Published in 1889, it is one of the earliest examples of modern Malayalam fiction. The novel is set in the 19th century and revolves around the life of the eponymous heroine, Indulekha, who is a strong-willed and progressive woman in a traditional society.Indulekha defies the norms of her time by seeking education and advocating for women's rights. The story highlights her struggle against societal constraints and her pursuit of personal freedom and intellectual growth. With its progressive themes and vivid portrayal of social issues, **Indulekha** is celebrated for its contribution to Malayalam literature and its impact on the social reform movement in Kerala.",
        image: "https://cdn.exoticindia.com/images/products/original/books-2019-022/uau900.webp"
    },
    {
        Id:5,
        title:"Ram c/o Aanandhi",
        author:"Akhil P Dharmajan",
        authorId:"5",
        description:"Ram C/O Aanandhi is a Malayalam movie that tells the story of Ram, a simple and kind-hearted man who finds himself in a series of unexpected events when he meets Aanandhi, a strong and independent woman. The film explores their journey as they navigate love, life, and the challenges that come with their different personalities. With a mix of humor, drama, and romance, the movie captures the essence of relationships and the impact of fate on people's lives.",
        image:"https://m.media-amazon.com/images/I/61De10B-ooL._AC_UF1000,1000_QL80_.jpg"
    },{
        Id:6,
        title:"Kaalam",
        author:"M T Vasudevan Nair",
        authorId:"6",
        description:"Kaalam is a celebrated Malayalam novel by M.T. Vasudevan Nair that intricately explores the passage of time and its impact on an individual's life. The story revolves around Sethu Madhavan, a young man from a traditional family in Kerala, who dreams of breaking free from the constraints of his social and economic background. As he moves through different phases of life—from his student days to adulthood—Sethu grapples with the challenges of ambition, love, and the inevitable changes brought by time. The novel delves deep into themes of identity, societal expectations, and the bittersweet nature of personal growth, making it a poignant reflection on the human experience.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTECvEnIrMhhWLnqeXsac1VTN8qqAttC4D9Jg&s"
    },{
        Id:7,
        title:"Manushyanu Oru Aamukham",
        author:"Subhash Chandran",
        authorId:"7",
        description:"Manushyanu Oru Aamukham is a renowned Malayalam novel by Subhash Chandran, known for its deep exploration of human existence and the complexities of life. The novel, whose title translates to A Preface to Man, spans multiple generations, weaving together the lives of its characters against the backdrop of a small village in Kerala. It follows the story of Jithendran, a man grappling with the philosophical questions of life, death, and destiny. Through rich narrative and introspective prose, the novel delves into themes of love, tradition, and the passage of time, offering a poignant and thought-provoking reflection on what it means to be human. The book has been widely praised for its literary depth and has won several prestigious awards.",
        image:"https://upload.wikimedia.org/wikipedia/en/5/5a/Manushyanu_Oru_Aamukham.jpg"
    },{
        Id:8,
        title:"Ente katha",
        author:"Kamala surayya",
        authorId:"8",
        description:"Ente Katha (My Story) is the bold and autobiographical work of Kamala Surayya, also known as Madhavikutty, a pioneering writer in Malayalam and English literature. Published in 1973, the book offers a candid and unfiltered look into her life, thoughts, and experiences as a woman navigating the complexities of love, identity, and societal expectations in a conservative society. Through her narrative, Kamala Surayya breaks away from traditional norms, exploring her desires, struggles, and the pursuit of freedom and self-expression.Ente Katha is celebrated for its raw honesty and literary excellence, making it a landmark work in Indian autobiographical writing and feminist literature.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkxiZ3Ivi_ytD7nYLy4T19awTrH6s6S10rsA&s"
    },{
        Id:9,
        title:"Oru sangeerthanam pole",
        author:"Perumbadavam sreedharan",
        authorId:"9",
        description:"Oru Sankeerthanam Pole is a celebrated Malayalam novel by Perumbadavam Sreedharan that imaginatively portrays a chapter in the life of the famous Russian novelist Fyodor Dostoevsky. Set against the backdrop of Dostoevsky's creation of his novel The Gambler,the story delves into the author's tumultuous personal life, particularly his relationship with Anna, a young stenographer who later becomes his wife. The novel beautifully captures Dostoevsky's struggles with his gambling addiction, creative genius, and the blossoming love between him and Anna. With rich, evocative prose, Sreedharan explores themes of love, suffering, and redemption, making Oru Sankeerthanam Pole a poignant and thought-provoking read that resonates with both lovers of literature and history.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxU2P6qgaLthLIc3EjFwDaDlac5ry3dIGgbA&s"
    },{
        Id:10,
        title:"Randidangazhi",
        author:"Thakazhi sivasankarapillai",
        authorId:"10",
        description:"Randidangazhi is a significant Malayalam novel by Thakazhi Sivasankara Pillai. The title, which translates to Two Measures,reflects the novel's exploration of social and economic disparities. Set in a rural village in Kerala, the story revolves around the life of a poor, struggling laborer named Naranathu, whose family and community face various hardships and injustices. Through a vivid portrayal of village life, Thakazhi Sivasankara Pillai delves into themes of poverty, exploitation, and social reform. Randidangazhi is celebrated for its realistic depiction of societal issues, its strong narrative, and its empathy for the marginalized, making it a powerful and influential work in Malayalam literature.",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1460745660l/12588437.jpg"
    }
];

function Books() {
    return (
        <main>
            <section className="py-20 container px-4 mx-auto">
                <h2 className="text-2xl font-bold">Malayalam Book Collection</h2>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {books.map((book) => (
                        <li key={book.Id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Link to={`/books/${book.Id}`} className="block text-center">
                                <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded" />
                                <h3 className="text-lg font-bold mt-4">{book.title}</h3>
                                <p className="text-gray-700">{book.author}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Books;