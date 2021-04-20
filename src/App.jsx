import React from "react";
import "./App.css";
import Routes from "./routes/routes";
function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "rgb(21, 32, 43)",
        minHeight: "100vh",
      }}
    >
      <Routes />
    </div>
  );
}

export default App;
