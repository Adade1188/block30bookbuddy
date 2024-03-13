/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import React from "react";

const SingleBook = ({ book }) => {
  return (
    <div>
      <h2>Book Details</h2>
      <div>
        <strong>Title:</strong> {book.title}
      </div>
      <div>
        <strong>Author:</strong> {book.author}
      </div>
      <div>
        <strong>Genre:</strong> {book.genre}
      </div>
      {/* Add more book details here */}
    </div>
  );
};

export default SingleBook;
