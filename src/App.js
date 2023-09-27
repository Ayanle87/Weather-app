import "./App.css";
import Contact from "./components/Contact";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import WeatherForecast from "./views/WeatherForecast";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext } from "react";

import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

export const InputContext = createContext();

function Root() {
  const [searchbar, setSearchbar] = useState("");

  return (
    <div className="App">
      <InputContext.Provider value={[searchbar, setSearchbar]}>
        <Navbar />
        <Outlet />
      </InputContext.Provider>
    </div>
  );
}

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: "/" },
        { element: <WeatherForecast />, path: "/WeatherForecast" },
        { element: <Contact />, path: "/Contact" },
      ],
      element: <Root />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
