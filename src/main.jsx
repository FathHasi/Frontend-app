import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import Books from "./routes/Books";
import Book from "./routes/Book";
import Authors from "./routes/Authors";
import Author from "./routes/author";
import Help from "./routes/Help";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/books", element: <Books /> },
      { path: "/books/:bookId", element: <Book /> },
      { path: "/authors", element: <Authors /> },
      { path: "/authors/:authorId", element: <Author /> },
      { path: "/help", element: <Help /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
