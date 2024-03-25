import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";

const DeleteUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { roles } = useGlobalContext();

  // include global roles in req.body for backend permission validation
  useEffect(() => {
    axios
      .delete("http://localhost:3001/user/user/" + id, {
        data: { data: roles },
      })
      .then((res) => {
        if (res.data.deleted) {
          navigate("/users");
        }
      })
      .catch((err) => console.log(err));
  }, []);
};

export default DeleteUser;
