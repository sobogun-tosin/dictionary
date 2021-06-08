import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchWords } from "../../redux/DictionaryAction";
import { GoSearch } from "react-icons/go";
import "./search.scss";

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(searchWords(query));
    setQuery("");
  };
  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input
          placeholder="...search words"
          value={query}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setQuery(e.currentTarget.value)
          }
        />
        <button type="submit" className="search-btn">
          <GoSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
