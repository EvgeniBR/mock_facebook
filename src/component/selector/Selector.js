import React from "react";
import "./Selector.css";

const counter = (from, to) => {
  let count = [];
  for (let i = from; i <= to; i++) {
    count.push(i);
  }
  return count;
};

const getMonths = [
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

const getDays = counter(1, 31);
const getYears = counter(1905, 2020);

const Selector = ({ id }) => {
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

  const options = optionSelector(id).map((option) => {
    return <option value={option}>{option}</option>;
  });
  return <select id={id}>{options}</select>;
};

export default Selector;
