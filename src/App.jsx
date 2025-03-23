import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>test 3 branch - 2</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* 추가된 Link 태그 */}
      <nav>
        <Link to="/about">Go to About Page</Link>
      </nav>

      {/* Routes 정의 */}
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

// About 페이지 컴포넌트 추가
function About() {
  return <h2>This is the About Page</h2>;
}

export default App;
