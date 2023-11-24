import axios from 'axios';
import { useState } from 'react';

export default function PostCreate() {
  const [title, setTitle] = useState<string>('');

  const onSubmit = async (event: SubmitEvent): Promise<any> => {
    event.preventDefault();
    await axios.post('http://localhost:4000/posts', {
      title,
    });
    setTitle('');
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title.toString()}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
}
