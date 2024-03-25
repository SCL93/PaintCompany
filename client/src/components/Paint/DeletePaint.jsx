import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { toast } from "react-toastify";

const DeletePaint = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { roles } = useGlobalContext();

  // include global "roles" in req.body for backend permission validation
  useEffect(() => {
    axios
      .delete("https://paintcompany.onrender.com/paint/paint/" + id, {
        data: { data: roles },
      })
      .then((res) => {
        if (res.data.deleted) {
          toast.success("Delete Sucessful", {
            position: "top-center",
            toastId: "delete",
          });
          navigate("/paints");
        }
      })
      .catch((err) => {
        toast.error("Delete Error", {
          position: "top-center",
          toastId: "delete",
        });

        console.log(err);
      });
  }, []);
};

export default DeletePaint;
