import React, { useState } from "react";

const Home = () => {
  const [WishList, SetWishList] = useState("");
  const [items, setItems] = useState([]);

  const onimputChange = (e) => {
    SetWishList(e.target.value);
  };

  const HandleKeyUp = (e) => {
  if (e.key === "Enter" && WishList !== "") {
    setItems([...items, WishList]);
    SetWishList("");
  }
};

  const handleDelete = (indexToDelete) => {
    const updatedItems = items.filter((_, index) => index !== indexToDelete);
    setItems(updatedItems);
  };

  return (
    <div className="container mt-5 position-relative">
      <label htmlFor="list" className="form-label">Wish List</label>
      <input
        placeholder="Wish List"
        className="form-control"
        id="list"
        type="text"
        value={WishList}
        onChange={onimputChange}
        onKeyUp={HandleKeyUp}
      />
      <ul className="list-group mt-3">
        {items.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <p>{item}</p>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => handleDelete(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;