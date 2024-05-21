// Box2.tsx
import React, { useContext } from "react";
import { StudentsContext } from "../../context/boxContext";

const Box2: React.FC = () => {
  const { students, setStudents } = useContext(StudentsContext);
  const handleCheckboxChange = (registrationId: number) => {
    setStudents({
      type: "TOGGLE_CHECKBOX",
      registrationId,
    });
  };

  return (
    <div className="text-blue-600 border rounded-md min-h-96 px-8 py-3 min-w-60">
      <h2>Box 2</h2>
      <ul>
        {students
          .filter((student) => student.inBox2)
          .map((student) => (
            <li
              key={student.registrationId}
              className="flex gap-4 items-center py-3 px-4"
            >
              <input
                type="checkbox"
                checked={student.selected || false}
                onChange={() => handleCheckboxChange(student.registrationId)}
              />
              <h3>{student.name}</h3>
              <p>{student.marks}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Box2;
