import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = numbers => {
  console.log("calculating average ...");
  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const AverageCallback = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  // for reusing a function
  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []); // create just once
  const onInsert = useCallback(
    e => {
      if (isNaN(parseInt(number))) return;

      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus();
    },
    [number, list]
  ); // create when number or list changed

  // useMemo will only recompute the memoized value when one of the dependencies has changed
  const avg = useMemo(() => getAverage(list), [list]);

  const ulStyle = {
    display: "flex",
    justifyContent: " space-between"
  };

  return (
    <div>
      <h2>Average : {avg} with useCallback</h2>
      {/* <h2>Average : {getAverage(list)}</h2> */}
      <input type="number" value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>Add</button>
      <ul style={ulStyle}>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default AverageCallback;
