// src/routes/author.jsx
import React from "react";
import { useParams } from "react-router-dom";

// Sample authors data (this could be moved to a separate file or fetched from an API)
const authors = [
    {
        Id: 1,
        name: "Bennyamin",
        bio: "Bennyamin, a quiet observer in a bustling city, had a secret: he was a writer. Each evening, he crafted stories blending reality with dreams. One day, he was drawn into an old bookshop on Elm Street by a shimmering book titled “The Chronicles of Hidden Realms.” That night, Bennyamin discovered the book was a portal to fantastical worlds. His experiences there inspired captivating stories that delighted readers everywhere. The once-quiet observer had become a celebrated storyteller, forever enchanted by the magic that lay just beyond the ordinary.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Benyamin_Writer.jpg/640px-Benyamin_Writer.jpg"
    },
    {
        Id: 2,
        name: "K R Meera",
        bio: "KR Meera was a reclusive artist living in a quaint cottage surrounded by hills and forests. Her paintings, filled with fantastical landscapes and mysterious beings, were rumored to reveal hidden truths and evoke deep emotions.One rainy day, young artist Sam sought shelter at her cottage and was captivated by her work. Meera, usually reserved, shared the stories behind her paintings, filled with dreams and legends. Inspired by this encounter, Meera’s art took on new depth, bridging her secluded world with the vibrant life beyond.",
        image: "https://www.asuitableagency.com/wp-content/uploads/2020/11/k-r-meera-profile-photo.jpg"
    },
    {
        Id: 3,
        name: "Vaikom Muhammad Basheer",
        bio: "Vaikkom Muhammad Basheer was a celebrated Indian writer known for his vivid storytelling and deep compassion. Hailing from the town of Vaikkom, his works, often laced with humor and humanity, captured the essence of everyday life and the struggles of the common man. Basheer's unique voice and profound insights made him a cherished literary figure, leaving a lasting impact on Malayalam literature.His stories, such as Balyakalasakhi and Pathummayude Aadu, showcased his ability to blend simplicity with profound emotion, reflecting the cultural and social fabric of Kerala. Despite facing numerous hardships, Basheer’s resilience and creativity turned him into an enduring icon of literary excellence.",
        image: "https://fl-i.thgim.com/public/magazine/vzk9sj/article30178806.ece/alternates/FREE_1200/20100115270116801jpg"
    },{
        Id: 4,
        name: "O Chandhumenon",
        bio: "O. Chandu Menon (1847–1899) was a pioneering Malayalam writer and one of the earliest contributors to modern Malayalam literature. He is best known for his landmark novel Indulekha, published in 1889, which is considered one of the first modern novels in Malayalam.Chandu Menon was a social reformer and an advocate for educational and social progress. His works often addressed contemporary social issues and aimed to challenge traditional norms.Indulekha is notable for its progressive portrayal of women's issues and its critique of the rigid social structure of 19th-century Kerala.Menon's writing is characterized by its blend of realism and social commentary, making him a significant figure in the evolution of Malayalam literature and the broader Indian literary landscape.",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Chandu_Menon.jpg/220px-Chandu_Menon.jpg"
    },{
        Id:5,
        name:"Akhil p dharmajan",
        bio:"Akhil P Dharmajan is a noted Malayalam screenwriter and filmmaker known for his ability to craft engaging and relatable narratives. With a keen eye for detail and a deep understanding of human emotions, he has made a significant mark in the Malayalam film industry. Akhil's work often reflects the complexities of relationships, society, and personal struggles, resonating with a wide audience. His contributions have earned him recognition for both his storytelling and his commitment to authentic cinema.",
        image:"https://www.mathrubhumi.com/image/contentid/policy:1.9434809:1711334104/akhil%20p%20dharmajan%20(1).jpg?$p=608d25a&f=1x1&w=1080&q=0.8"
    },{
        Id:6,
        name:"M.T. Vasudevan Nair",
        bio:"M.T. Vasudevan Nair, often referred to as MT, is one of the most revered writers in Malayalam literature. A master storyteller, he is known for his profound exploration of human emotions, complex characters, and the socio-cultural landscape of Kerala. MT has written numerous acclaimed novels, short stories, and screenplays, with works like Kaalam,Randamoozham,and Nalukettu earning him a place as a literary icon. His narratives often focus on the intricacies of life in rural Kerala, capturing the essence of tradition, change, and the human condition. In addition to his literary achievements, MT is also a celebrated filmmaker, having directed and written scripts for several critically acclaimed Malayalam films. His contributions to literature and cinema have earned him numerous awards, including the Jnanpith Award, India's highest literary honor.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwYumOm00zmuMdifc_Ywrqe98Bjk5tPJy_2Q&s"
    },{
        Id:7,
        name:"Subhash chandran",
        bio:"Subhash Chandran is a prominent Malayalam writer and novelist known for his profound and introspective storytelling. His works often explore the complexities of human emotions, societal changes, and philosophical questions, making him a distinctive voice in contemporary Malayalam literature. Chandran's writing is marked by its rich language, deep characterizations, and the ability to weave intricate narratives that resonate with readers. His most famous work,Manushyanu Oru Aamukham, has earned critical acclaim and multiple awards, solidifying his place as one of the leading literary figures in Kerala. In addition to his novels, he has also written short stories and essays that continue to influence and inspire readers and writers alike.",
        image:"https://upload.wikimedia.org/wikipedia/commons/e/e9/Novelist_Subhash_Chandran_from_Kerala%2C_India.jpg"
    },{
        Id:8,
        name:"Kamala surayya",
        bio:"Kamala Surayya, also known as Madhavikutty in Malayalam and Kamala Das in English, was a trailblazing Indian writer and poet known for her fearless exploration of love, sexuality, and identity. Born in 1934 in Kerala, she gained prominence with her poetry and autobiographical works that broke societal taboos, especially regarding women's inner lives and desires. Her most famous work,Ente Katha(My Story), is an autobiographical book that offers an unflinching look at her life and thoughts, challenging the conservative norms of the time. Writing in both English and Malayalam, Kamala Surayya's literary contributions have made her an iconic figure in Indian literature, and she is celebrated for her bold voice, emotional depth, and lyrical style.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw_fWiTqIVTdpiilis_MPnMp4zClHVWv7Kyg&s"
    },{
        Id:9,
        name:"Perumbadavam sreedharan",
        bio:"Perumbadavam Sreedharan is a distinguished Malayalam writer renowned for his engaging storytelling and deep understanding of human emotions. Born in 1945, Sreedharan has made significant contributions to modern Malayalam literature through his novels, short stories, and essays. His works often explore complex themes such as love, societal issues, and personal struggles with a blend of realism and empathy. One of his most notable works,Oru Sankeerthanam Pole, creatively imagines the life of Russian novelist Fyodor Dostoevsky. Sreedharan's writing is celebrated for its literary depth, narrative skill, and ability to capture the essence of human experiences, earning him a respected place in contemporary Malayalam literature.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnx9pq_5s9hWlXNOTVP-Sp6O1CWoNV3lnliw&s"
    },{
        Id:10,
        name:"Thakazhi sivasankara pillai",
        bio:"Thakazhi Sivasankara Pillai (1912–1999) was a renowned Malayalam writer whose works have left a lasting impact on Indian literature. Known for his vivid portrayal of rural Kerala and its social issues, Thakazhi's novels and stories explore themes of poverty, class struggle, and societal transformation. His narrative style is characterized by its realism and deep empathy for the underprivileged. His most famous works include Chemmeen, a novel about the life of fisherfolk, and Randidangazhi, which addresses social inequities. Thakazhi Sivasankara Pillai's contributions to Malayalam literature have earned him widespread acclaim and numerous awards, cementing his place as a seminal figure in Indian literary history.",
        image:"https://upload.wikimedia.org/wikipedia/commons/d/dc/Thakazhi_1.jpg"
    }
];

function Author() {
    const { authorId } = useParams();

    // Find the author with the matching ID
    const author = authors.find((a) => a.Id.toString() === authorId);

    // If author not found, display a message or handle the error
    if (!author) {
        return <div>Author not found!</div>;
    }

    return (
        <main>
            <section className="py-20 container px-4 mx-auto">
                <h2 className="text-3xl font-bold">{author.name}</h2>
                <img src={author.image} alt={author.name} className="w-48 h-48 object-cover rounded-full mx-auto" />
                <p className="mt-5">{author.bio}</p>
            </section>
        </main>
    );
}

export default Author;