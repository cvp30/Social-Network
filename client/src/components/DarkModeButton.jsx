import { useState } from "react";
import { Moon, Sun } from "../icons";

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div className="w-7 h-7">
      <button onClick={handleMode} className="text-blue">
        {
          darkMode ?
            <Moon className="w-full h-full" />
            :
            <Sun className="w-full h-full" />
        }
      </button>
    </div>
  )
}

export default DarkModeButton;