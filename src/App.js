import React, { useState } from "react";
import "./App.css";
import UserInput from "./Components/UserInput";
import Data from "./Components/Data";
export default function App() {
  const [pass, setPass] = useState([]);
  function add({ updata }) {
    if(updata.trim() === ""){
      alert("Please enter your wish before updating the list");
      return;
    }
    setPass([...pass, updata]);
  }
  function clearAll(clear) {
    if (clear) {
      setPass([]);
    }
  }
  function DeleteItem(index) {
    let temp = [...pass];
    temp.splice(index, 1);
    setPass(temp);
  }
  return (
    <>
      <div id="parent">
        <h1 id="h1">Wish List Manager</h1>
        <UserInput addtothelist={add} clearAll={clearAll} />
        <Data sendData={pass} DeleteItem={DeleteItem} />
      </div>
    </>
  );
}