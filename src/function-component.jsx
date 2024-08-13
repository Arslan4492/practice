import { useState } from "react";

function FunctionComponent() {
  const [count, setCount] = useState(0);
  return (
    <div className="grid place-content-center">
      <div className="flex items-center gap-4">
        <button onClick={() => setCount(count - 1)}>-</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default FunctionComponent;
