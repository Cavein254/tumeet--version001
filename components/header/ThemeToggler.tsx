import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
function ThemeToggler() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);
  const renderThemeChanger = () => {
    if (!ready) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <BsFillSunFill
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BsFillMoonStarsFill
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return <div>{renderThemeChanger()}</div>;
}

export default ThemeToggler;
