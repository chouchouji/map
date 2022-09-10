import * as React from "react";
import { Button } from "antd";
import reactLogo from "./assets/react.svg";
import "./App.css";

const App: React.FC = () => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        <Button type="primary">Hello World </Button>
      </p>
    </div>
  );
};

export default App;
