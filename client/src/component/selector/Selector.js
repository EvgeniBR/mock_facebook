import React from "react";
import "./Selector.css";

const counter = (from, to, optionTitle) => {
  let count = [];
  count.push(optionTitle);
  for (let i = from; i <= to; i++) {
    count.push(i);
  }
  return count;
};

const getMonths = [
  "Month",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const getDays = counter(1, 31, "Day");
const getYears = counter(1905, 2020, "Year");

const Selector = ({ id , handleChange}) => {
  const optionSelector = (info) => {
    if (info === "months") {
      return getMonths;
    }
    if (info === "days") {
      return getDays;
    }
    if (info === "years") {
      return getYears;
    }
  };

  const options = optionSelector(id).map((option, index) => {
    return <option key={index} value={option}>{option}</option>;
  });
  return <select className="selectBtn" onChange={(e) => handleChange(e.target.value)} id={id}>{options}</select>;
};

export default Selector;
