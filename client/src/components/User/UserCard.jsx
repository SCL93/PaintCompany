import React from "react";
import Card from "../Card";

const UserCard = ({ user }) => {
  const { username, role, _id } = user;

  function mapPermissions(input) {
    switch (input) {
      case 1:
        return "view";
      case 2:
        return "view/edit";
      case 3:
        return "admin";
      default:
        return "view";
    }
  }

  return (
    <Card
      title={"Username: " + username}
      subtitle={"Permissions: " + mapPermissions(role)}
      id={_id}
      editPath={`/user/${_id}`}
      deletePath={`/deleteuser/${_id}`}
    />
  );
};

export default UserCard;
