import React, { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Searchbar.css";

function Searchbar({ onSubmit }) {
  const [request, setRequest] = useState("");

  const handleChange = (event) => {
    setRequest(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (request.trim() === "") {
      return toast.info("Type something to find a picture");
    }

    onSubmit(request);
    setRequest("");
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          onChange={handleChange}
          type="text"
          name="request"
          value={request}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
