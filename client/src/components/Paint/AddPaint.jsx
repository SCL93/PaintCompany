import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "../../css/AddEditCard.css";

const AddPaint = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();
  const { roles } = useGlobalContext();

  // include global "roles" in req.body for backend permission validation
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/paint/add", { name, quantity, roles })
      .then((res) => {
        if (res.data.added) {
          navigate("/paints");
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="paint-container">
      <form className="paint-form" onSubmit={handleSubmit}>
        <h2>Add Paint</h2>
        <div className="form-group">
          <label htmlFor="paint">Paint Name:</label>
          <input
            type="text"
            id="paint"
            name="paint"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quanity:</label>
          <input
            type="text"
            id="quatity"
            name="quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddPaint;
