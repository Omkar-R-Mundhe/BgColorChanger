import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  function changeColor(clr) {
    console.log("button clicked " + clr);
    setColor(clr);
  }
    const colors = ["red", "yellow", "green", "violet", "blue", "black"];

  return (
    <>
      <div
        className="relative min-h-screen flex items-center justify-center p-4"
        style={{ backgroundColor: color }}
      >
        <div
          className="absolute bottom-10 mb-4 flex space-x-4 p-4 rounded-full"
          style={{ backgroundColor: "whitesmoke" }}
        >
          {colors.map((clr) => (
            <button
              key={clr}
              type="button"
              className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800"
              onClick={() => changeColor(clr)}
              style={{ backgroundColor: clr, color: "white" }}
            >
              {clr}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
