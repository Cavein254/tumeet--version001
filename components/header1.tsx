import { useState } from "react";
import Profile from "./header/Profile";
function Header1() {
  const [showDrop, setShowDrop] = useState(false);
  const handleShowDrop = () => {
    setShowDrop(!showDrop);
  };
  return (
    <div className="dark:bg-gray-700 dark:text-white py-4 w-screen gray-400 shadow-xl border-b-4 border-emerald-500">
      <div className="flex flex-row justify-evenly relative">
        <div>Tailwind Components</div>
        <div className=" flex-grow">
          <div className="flex flex-row justify-evenly invisible md:visible">
            <h4>Component</h4>
            <h4>Premium</h4>
            <h4>Tools</h4>
            <h4>Custom Development</h4>
          </div>
        </div>
        <div className="flex">
          <div>
            <span>sun</span>
          </div>
          <div>
            <button className="bt" onClick={handleShowDrop}>
              Drop
            </button>
          </div>
          {showDrop && <Profile />}
          <div>
            <button className="btn bg-white text-black font-normal dark:bg-black dark:text-white dark:outline-1 dark:outline-white outline-1 ">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header1;
