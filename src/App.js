import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Routes, Route, Link } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />

      <Route
        path="/checkout"
        element={
          <>
            <Header />
            <Checkout />
          </>
        }
      />
    </Routes>
  );
}

export default App;
