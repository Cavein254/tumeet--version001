import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

import Profile from "./header/Profile";
function Header1() {
  const { data: session, status } = useSession();
  console.log(session);

  const [showDrop, setShowDrop] = useState(false);
  const handleShowDrop = () => {
    setShowDrop(!showDrop);
  };
  return (
    <div className="max-w-screen h-24 min-w-min">
      <div className=" flex-wrap max-w-screen dark:bg-gray-700 dark:text-white py-4  gray-400 shadow-xl border-b-4 border-emerald-500 px-4">
        <div className="flex flex-row justify-evenly">
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

            <div className="">{showDrop && <Profile />}</div>
            {!session ? (
              <div>
                <button className="btn bg-white text-black font-normal dark:bg-black dark:text-white dark:outline-1 dark:outline-white outline-1 ">
                  <a
                    href={`/api/auth/signin`}
                    onClick={(e) => {
                      e.preventDefault();
                      signIn();
                    }}
                  >
                    Sign in
                  </a>
                </button>
              </div>
            ) : (
              <div>
                <button className="bt" onClick={handleShowDrop}>
                  Drop
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header1;
