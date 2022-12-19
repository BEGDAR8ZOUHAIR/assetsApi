import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";
import { updateGoal } from "../features/goals/goalSlice";

function GoalItem({ goal }) {
  
  const [id, setId] = useState(goal._id);
  const [text, setText] = useState(goal.text);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(text, id);
    const div = document.querySelector(".update-form");
    div.style.display = "none";
    dispatch(updateGoal({id, text}));
  };

  return (
    <div className="goal">
      <div className="title">{text}</div>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        X
      </button>
      <button
        onClick={() => {
          const div = document.querySelector(".update-form");
          div.style.display = "block";
        }}
        className="update"
      >
        Update
      </button>
     
      <div className="date">
        {new Date(goal.createdAt).toLocaleString("en-US")}
      </div>
      {/* update form */}
      <form className="update-form" onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control"
          placeholder="Update your goal"
        />
        <button type="submit-form">Update</button>
      </form>
    </div>
  );
}

export default GoalItem;
