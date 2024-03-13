


export const fetchBooks = async () => {
  try {
    const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching books:', error.message);
    throw error;
  }
};
