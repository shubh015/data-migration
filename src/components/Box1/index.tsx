import React, { useContext } from "react";
import { StudentsContext } from "../../context/boxContext";

const Box1: React.FC = () => {
  const { setStudents, students } = useContext(StudentsContext);

  const handleCheckboxChange = (registrationId: number) => {
    setStudents({ type: "TOGGLE_CHECKBOX", registrationId });
  };
  return (
    <div className="text-red- 600 border rounded-md min-h-96 px-8 py-3 min-w-60">
      <h1>Box 1</h1>
      <ul>
        {students
          .filter((student) => !student.inBox2)
          .map((student) => (
            <li
              key={student.registrationId}
              className="flex gap-3 items-center py-4 px-8"
            >
              <input
                type="checkbox"
                checked={student?.selected || false}
                onChange={() => handleCheckboxChange(student?.registrationId)}
              />
              <h1>{student.name}</h1>
              <p>{student.marks}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Box1;
