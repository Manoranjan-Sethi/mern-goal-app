import React from "react";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";
import { AiFillDelete } from "react-icons/ai";

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();

  //   const deleteGoal = () => {};

  return (
    <div className="goal">
      <h2>{goal.text}</h2>
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        <AiFillDelete />
      </button>
    </div>
  );
};

export default GoalItem;
