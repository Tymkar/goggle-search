import React from "react";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { TheRoutes } from "./components/TheRoutes";
import { Footer } from "./components/Footer";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const changeTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} changeTheme={changeTheme} />
        <TheRoutes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
