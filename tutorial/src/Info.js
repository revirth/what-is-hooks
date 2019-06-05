import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = e => setName(e.target.value);

  const onChangeNickname = e => setNickname(e.target.value);

  useEffect(() => {
    console.error("[effect]", "Info componentDidMount");
  }, []);

  useEffect(() => {
    console.warn("[effect]", "name changed, not nickname");
  }, [name]);

  useEffect(() => {
    console.log("[effect] rending is done");
    console.log({ name, nickname });

    return () => {
      // cleanup func, just before update
      console.log("[clenup]");
    };
  });

  return (
    <div>
      <h2>
        Name : {name}, Nick : {nickname}
      </h2>
      <div>
        <b>Name: </b>
        <input value={name} onChange={onChangeName} />
        <br />
        <b>Nick: </b>
        <input value={nickname} onChange={onChangeNickname} />
      </div>
    </div>
  );
};

export default Info;
