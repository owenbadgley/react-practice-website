import ListGroup from "./components/ListGroup";
import { useState } from "react";
import { AiFillBug } from "react-icons/ai";

function App() {
  const [isVisible, setVisibility] = useState(false);
  const [isApproved, setApproved] = useState(true);
  let count = 0;

  const handleClick = () => {
    count++;
    setVisibility(true);
    console.log(count);
  };

  return (
    <div>
      <button onClick={handleClick}>show</button>
    </div>
  );
}

export default App;
