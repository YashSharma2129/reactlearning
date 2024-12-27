import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-gray-800">
      <header className="flex flex-col items-center gap-4 py-6">
        <div className="flex items-center gap-2">
          <img
            src={viteLogo}
            className="w-12 h-12 animate-spin-slow"
            alt="Vite logo"
          />
          <img src={reactLogo} className="w-12 h-12" alt="React logo" />
        </div>
        <h1 className="text-3xl font-bold text-green-500">TailwindCSS Learn</h1>
        <p className="text-gray-600">
          Start building with React and TailwindCSS!
        </p>
      </header>

      <main className="flex flex-col items-center gap-6">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        >
          Clicked {count} {count === 1 ? "time" : "times"}
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
        >
          Reset Count
        </button>
      </main>

      <footer className="mt-8 text-gray-500 text-sm">
        <p>Powered jje by Vite + React + TailwindCSS</p>
      </footer>
    </div>
  );
}

export default App;
