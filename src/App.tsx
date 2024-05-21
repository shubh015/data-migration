import "./App.css";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Arrow from "./components/Arrow";
import { StudentsProvider } from "./context/boxContext";

const App = () => {
  return (
    <div className="flex justify-center gap-5 items-center">
      <StudentsProvider>
        <Box1 />
        <Arrow />
        <Box2 />
      </StudentsProvider>
    </div>
  );
};

export default App;
