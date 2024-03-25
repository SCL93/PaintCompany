import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { toast } from "react-toastify";
import "../../css/AddEditCard.css";

const EditPaint = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { roles } = useGlobalContext();

  // get selected paint, then populate form with paint values
  useEffect(() => {
    axios
      .get("https://paintcompany.onrender.com/paint/paint/" + id)
      .then((res) => {
        setName(res.data.name);
        setQuantity(res.data.quantity);
      })
      .catch((err) => console.log(err));
  }, []);

  // include global "roles" in req.body for backend permission validation
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("https://paintcompany.onrender.com/paint/paint/" + id, {
        name,
        quantity,
        roles,
      })
      .then((res) => {
        if (res.data.updated) {
          toast.success("Edit Sucessful", {
            position: "top-center",
            toastId: "edit",
          });
          navigate("/paints");
        } else {
          toast.error("Edit Error", {
            position: "top-center",
            toastId: "edit",
          });
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="paint-container">
      <form className="paint-form" onSubmit={handleSubmit}>
        <h2>Edit Paint</h2>
        <div className="form-group">
          <label htmlFor="paint">Paint Name:</label>
          <input
            type="text"
            id="paint"
            name="paint"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quanity:</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditPaint;
