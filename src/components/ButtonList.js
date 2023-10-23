import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming Shows",
    "BollyWood Music",
    "Ghazal",
    "Live Shows",
    "Comedy",
    "Cricket",
    "Volleyball",
    "Soccer",
    "Indian Pop Music",
  ];
  return (
    <div>
      <Button list={list} />
    </div>
  );
};

export default ButtonList;
