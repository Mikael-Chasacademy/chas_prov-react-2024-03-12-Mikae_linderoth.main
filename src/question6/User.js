import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, toggleComplete, deleteUser } from "./todoSlice";

const User = () => {
  const [text, setText] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleAddUser = () => {
    if (text) {
      dispatch(addUser(text));
      setText("");
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />{" "}
      <button onClick={handleAddUser}> Add User </button>{" "}
      <ul>
        {" "}
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              textDecoration: user.completed ? "line-through" : "none",
            }}
          >
            {user.text}{" "}
            <button onClick={() => handleToggleComplete(user.id)}>
              {" "}
              {user.completed ? "Mark Incomplete" : "Mark Complete"}{" "}
            </button>{" "}
            <button onClick={() => handleDeleteUser(user.id)}> Delete </button>{" "}
          </li>
        ))}{" "}
      </ul>{" "}
    </div>
  );
};

export default User;
