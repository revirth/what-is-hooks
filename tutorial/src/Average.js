import React, { useState, useMemo } from "react";

const getAverage = numbers => {
  console.log("calculating average ...");
  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = e => {
    setNumber(e.target.value);
  };
  const onInsert = e => {
    if (isNaN(parseInt(number))) return;

    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  // useMemo will only recompute the memoized value when one of the dependencies has changed
  // for reusing a variable like number, string and object
  const avg = useMemo(() => getAverage(list), [list]);

  const ulStyle = {
    display: "flex",
    justifyContent: " space-between"
  };

  return (
    <div>
      <h2>Average : {avg}</h2>
      {/* <h2>Average : {getAverage(list)}</h2> */}
      <input type="number" value={number} onChange={onChange} required />
      <button onClick={onInsert}>Add</button>
      <ul style={ulStyle}>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Average;
