import "./styles.css";
import ChildComp from "./ChildComp";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("Batman");
  return (
    <div className="App">
      <h1>What's your Real Name ?</h1>
      <h1>{name}</h1>
      <ChildComp realname={(name) => setName(name)} />
    </div>
  );
}
