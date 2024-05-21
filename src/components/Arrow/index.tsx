import React, { useContext } from "react";
import {
  BsArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";
import { StudentsContext } from "../../context/boxContext";

const Arrow: React.FC = () => {
  const { transferStudents } = useContext(StudentsContext);
  return (
    <div className="flex flex-col gap-5">
      <BsArrowRightSquareFill fontSize={50} color="black" onClick={transferStudents} />
      <BsFillArrowLeftSquareFill fontSize={50} color="black" onClick={transferStudents} />
    </div>
  );
};

export default Arrow;
