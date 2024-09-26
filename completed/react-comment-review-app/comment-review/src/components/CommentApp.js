import React, { useState } from 'react';

const CommentApp = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [error, setError] = useState('');

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (name.trim() === '' || comment.trim() === '') {
      setError('Name and Comment fields cannot be empty.');
      return;
    }

    // Add new comment to the list
    setComments([...comments, { name, comment }]);
    setName(''); // Clear the name input
    setComment(''); // Clear the comment input
    setError(''); // Reset error
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Comment/Review Application</h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">Comment</label>
          <textarea
            className="form-control"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="3"
            placeholder="Write your comment..."
          ></textarea>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {/* Display the list of comments */}
      <div className="mt-5">
        <h4>All Comments</h4>
        {comments.length > 0 ? (
          <ul className="list-group">
            {comments.map((c, index) => (
              <li key={index} className="list-group-item">
                <strong>{c.name}:</strong> {c.comment}
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default CommentApp;
