import ListGroup from "./components/ListGroup";
import { useState } from "react";
import { AiFillBug } from "react-icons/ai";

function App() {
  const [person, setPerson] = useState({
    firstName: "owen",
    lastName: "badgley",
  });
  const [isLoading, setLoading] = useState("false");
  const fullName = person.firstName + " " + person.lastName;

  const handleClick = () => {};

  return <div>{fullName}</div>;
}

export default App;
