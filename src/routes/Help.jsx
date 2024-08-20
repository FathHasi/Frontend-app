import React from "react";

function Help() {
    return (
        <main>
            <section className="py-20 container px-4 mx-auto">
                <h2 className="text-3xl font-bold mb-6">Help & Support</h2>
                <p className="text-lg mb-4">
                    Welcome to the Help section! Here you can find answers to common questions and guidance on how to use our website.
                </p>

                <div className="space-y-8">
                    {}
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Getting Started</h3>
                        <p className="text-gray-700 mb-2">
                            To begin using our site, you can start by browsing our collection of books and authors. If you are looking for a specific book or author, use the search functionality available on the homepage.
                        </p>
                        <p className="text-gray-700">
                            For more detailed instructions, visit our <a href="#" className="text-blue-500 hover:underline">Getting Started Guide</a>.
                        </p>
                    </div>

                    {/* FAQ */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-xl font-semibold">How do I search for a book?</h4>
                                <p className="text-gray-700">
                                    Use the search bar located at the top of the homepage. Enter the title, author, or keyword related to the book you’re looking for.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold">How can I contact support?</h4>
                                <p className="text-gray-700">
                                    You can reach out to our support team via the <a href="mailto:support@example.com" className="text-blue-500 hover:underline">support email</a> or use the contact form on our <a href="/contact" className="text-blue-500 hover:underline">Contact Page</a>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Troubleshooting */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Troubleshooting</h3>
                        <p className="text-gray-700 mb-2">
                            If you encounter any issues while using our website, try the following steps:
                        </p>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Refresh the page or clear your browser cache.</li>
                            <li>Ensure you are using a modern browser with the latest updates.</li>
                            <li>If the problem persists, check our <a href="#" className="text-blue-500 hover:underline">Troubleshooting Guide</a> for more solutions.</li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
                        <p className="text-gray-700 mb-2">
                            If you need further assistance, feel free to contact our support team. We are here to help you!
                        </p>
                        <p className="text-gray-700">
                            Email: <a href="mailto:support@example.com" className="text-blue-500 hover:underline">safe.haseeba@gmail.com</a>
                        </p>
                        <p className="text-gray-700">
                            Phone: <a href="tel:+91 9400787291" className="text-blue-500 hover:underline">+91 7909118443</a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Help;
