import axios from 'axios';
import React, { useState } from 'react';

export default function CommentCreate({ postId }) {
  const [content, setContent] = useState<string>('');

  const onSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form group">
          <label>New Comment</label>
          <input
            value={content}
            className="form-control"
            onChange={(e) =>
              setContent(e.target.value)
            }
          />
        </div>
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
}
