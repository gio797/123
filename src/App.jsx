import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import logo from "./assets/Aerolab.jpeg";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
        <a href="https://ambebi.ge" target="_blank">
          <img src={logo} className="logo aerolab" alt="aerolab logo" />
        </a>
      </div>
      <h1>AeroLab</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Calibrate Your Tools</p>
      </div>
      <p className="read-the-docs">Click logo to learn more</p>
    </>
  );
}

export default App;
