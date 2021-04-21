import React from "react";
import "./App.css";
import Routes from "./routes/routes";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-oldschool-dark";

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};
function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <div
        className="App"
        style={{
          backgroundColor: "rgb(21, 32, 43)",
          minHeight: "100vh",
        }}
      >
        <Routes />
      </div>
    </AlertProvider>
  );
}

export default App;
