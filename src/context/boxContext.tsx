import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
} from "react";
import { Students } from "../types";
import { fetchStudents } from "../services/api";

interface Studentprops {
  students: Students[];
  setStudents: React.Dispatch<Action>;
  transferStudents: () => void;
}

const defaultValue: Studentprops = {
  students: [],
  setStudents: () => {},
  transferStudents: () => {}
};

export const StudentsContext = createContext<Studentprops>(defaultValue);

interface Action {
  type: string;
  payload?: Students[];
  registrationId?: number;
}

const reducer = (state: Students[], action: Action): Students[] => {
    switch (action.type) {
      case "SET_STUDENTS":
        return action.payload!;
      case "TOGGLE_CHECKBOX":
        return state.map((student) =>
          student.registrationId === action.registrationId ? { ...student, selected: !student.selected } : student
        );
      case "TRANSFER_STUDENTS":
        return state.map(student => {
          if (student.selected) {
            student.inBox2 = !student.inBox2;
            student.selected = false; 
          }
          return student;
        });
      default:
        return state;
    }
  };

interface StudentsProviderProps {
  children: ReactNode;
}

export const StudentsProvider: React.FC<StudentsProviderProps> = ({
  children,
}) => {
  const [students, dispatch] = useReducer(reducer, defaultValue.students);

  useEffect(() => {
    fetchStudents
      .then((data) => {
        dispatch({ type: "SET_STUDENTS", payload: data });
      })
      .catch((error) => {
        console.log("Error fetching students", error);
      });
  }, []);

  const transferStudents = () => {
    dispatch({
        type: "TRANSFER_STUDENTS",
        payload: []
    })
  }
  return (
    <StudentsContext.Provider value={{ students, setStudents: dispatch, transferStudents }}>
      {children}
    </StudentsContext.Provider>
  );
};
