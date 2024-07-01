import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [game, setGame] = useState({ id: 1, player: { name: "John" } });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "OBOE" } });
  };
  return (
    <div>
      <p>{game.player.name}</p>
      <button onClick={handleClick}>Update Name</button>
    </div>
  );
}

export default App;
