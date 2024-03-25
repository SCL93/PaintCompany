import axios from "axios";
import React, { useEffect, useState } from "react";
import PaintCard from "./PaintCard";
import "../../css/Paint.css";

const Paints = ({ role }) => {
  const [paints, setPaints] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/paint/paints")
      .then((res) => {
        setPaints(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="paint-list">
      {paints.map((paint) => {
        return <PaintCard key={paint.id} paint={paint}></PaintCard>;
      })}
    </div>
  );
};

export default Paints;
