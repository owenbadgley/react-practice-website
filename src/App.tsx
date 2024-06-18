import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  let items = ["New York", "Los Angeles", "San Francisco"];
  const heading = "Cities";
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
