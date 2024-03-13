/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */



import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchBooks } from '../api'; 

const Book = () => {
  const { data: books, isLoading, isError } = useQuery('books', fetchBooks);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching books</div>;

  return (
    <div>
      <h2>Library Catalog</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Book;


