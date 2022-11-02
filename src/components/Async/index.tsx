import { useEffect, useState } from "react";

export function Async() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {}, 1000);
  }, []);

  return (
    <div>
      <div>Hello World</div>
      {isButtonVisible && <button>Teste</button>}
    </div>
  );
}

export default Async;
