import React from "react";
import useInputs from "./useInputs";

const InfoReducer = () => {
  const [state, onChange] = useInputs({ name: "", nickname: "" });
  const { name, nickname } = state;

  return (
    <div>
      <h2>
        Name : {name}, Nick : {nickname} with useReducer
      </h2>
      <div>
        <b>Name: </b>
        <input name="name" value={name} onChange={onChange} />
        <br />
        <b>Nick: </b>
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
    </div>
  );
};

export default InfoReducer;
