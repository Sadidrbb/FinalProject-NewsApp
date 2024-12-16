import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchArticles, setSearch } from '../redux/articlesSlice';

const Search = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = text.trim() || 'indonesia'; // Default ke Indonesia jika input kosong
    dispatch(setSearch(keyword));
    dispatch(fetchArticles(keyword));
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex">

      <input
        type="text"
        className="form-control me-2"
        placeholder="Search..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <button type="submit" className="btn btn-warning">Search</button>

    </form>
  );
};

export default Search;
