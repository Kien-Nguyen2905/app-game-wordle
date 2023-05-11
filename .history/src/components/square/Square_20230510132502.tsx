import React from "react";
interface Isquare {
  value: string;
  index: number;
}
const Square: React.FC<Isquare> = ({ value, index }) => {
  return <div>{value}</div>;
};

export default Square;
