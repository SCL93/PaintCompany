import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

const Logout = () => {
  const { setRoles } = useGlobalContext();
  const navigate = useNavigate();
  setRoles("");
  navigate("/");
};

export default Logout;
