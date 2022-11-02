import { useEffect } from "react";

export function Async() {
  useEffect(() => {
    setTimeout(() => {}, 1000);
  }, []);

  return (
    <div>
      <div>Hello World</div>
    </div>
  );
}

export default Async;
