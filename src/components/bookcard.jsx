function BookCard({ book }) {
    return (
      <div className="book-card">
        <div className="image-box">
          <img src={book.image} alt={book.name} className="book-image" />
        </div>
        <h3>{book.name}</h3>
        <p><strong>Genre:</strong> {book.genre}</p>
        <p><strong>Author:</strong> {book.author}</p>
      </div>
    );
  }
  
  export default BookCard;
  