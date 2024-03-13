/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import React, { useState, useEffect } from "react";
import { fetchBooks } from "../api"; 

const Account = () => {
  
  const [userData, setUserData] = useState(null);
  
  const [loading, setLoading] = useState(true);

  
  const fetchUser = async () => {
    try {
      
      const data = await fetchUserData();
      
      setUserData(data);
      
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Account Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>User Info</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <h2>Books Checked Out</h2>
          <ul>
            {userData.booksCheckedOut.map((book) => (
              <li key={book.id}>{book.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Account;
