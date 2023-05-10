import axios from "axios";
import { useState, useEffect } from "react";
import { WagerIndex } from "./WagerIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Route, Routes } from "react-router-dom";

export function Content() {
  const [wagers, setWagers] = useState([]);

  const handleIndexWagers = () => {
    axios.get("http://localhost:3000/wagers.json").then((response) => {
      console.log(response);
      setWagers(response.data);
    });
  };

  useEffect(handleIndexWagers, []);
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<WagerIndex wagers={wagers} />} />
      </Routes>
    </div>
  );
}
