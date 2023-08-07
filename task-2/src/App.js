import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchQuote();
    console.log(
      "%cEmpty dependancy array",
      "color: black; background-color: white; margin: 10px;padding:5px;font-size:20px"
    );
  }, []);

  useEffect(() => {
    console.log(
      "%cWithout depandancy",
      "color: black; background-color: white; margin: 10px;padding:5px;font-size:20px"
    );
  });

  useEffect(() => {
    console.log(
      "%cWith dependancy array",
      "color: black; background-color: white; margin: 10px;padding:5px;font-size:20px"
    );
  }, [quote]);

  const fetchQuote = async () => {
    setError("");

    try {
      const response = await axios.get("http://localhost:8000/get-quote"); // Calls your backend proxy
      if (response.data && response.data.quoteText) {
        setQuote(response.data.quoteText);
      } else {
        setError("No quote found.");
      }
    } catch (error) {
      setError("Error fetching quote.");
    }
  };

  return (
    <div className="App">
      <div className="container" onClick={fetchQuote}>
        <center>
          <p>{quote !== "" ? quote : error}</p>
        </center>
      </div>
    </div>
  );
};

export default App;
