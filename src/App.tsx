import { useState } from "react";
import { atoms } from "@/packages/design-kit";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Design System</h1>
      <div className="card">
        <atoms.Button
          className="text-brand-secondary bg-brand-primary"
          onClick={() => {
            setCount((count) => count + 1);
            console.log("count is", count);
          }}
        >
          count is {count}
        </atoms.Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
