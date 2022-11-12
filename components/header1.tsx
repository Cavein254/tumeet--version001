import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { FaLock } from "react-icons/fa";
import ThemeToggler from "../components/header/ThemeToggler";

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
        <div className="flex flex-row justify-evenly items-center">
          <div>Tailwind Components</div>
          <div className=" flex-grow">
            <div className="flex flex-row justify-evenly invisible md:visible">
              <h4>Component</h4>
              <h4>Premium</h4>
              <h4>Tools</h4>
              <h4>Custom Development</h4>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div>
              <ThemeToggler />
            </div>

            {showDrop && <Profile />}
            {!session ? (
              <div>
                <button className="btn ml-2  border-emerald-500 hover:bg-black bg-white font-normal dark:bg-black dark:text-white dark:outline-1 dark:outline-white border-2 ">
                  <a
                    href={`/api/auth/signin`}
                    onClick={(e) => {
                      e.preventDefault();
                      signIn();
                    }}
                  >
                    <FaLock
                      // size={16}
                      className="hover:text-emerald-500"
                    />
                  </a>
                </button>
              </div>
            ) : (
              <button onClick={handleShowDrop}>
                <Image
                  className="rounded-full"
                  src={session?.user?.image}
                  height={50}
                  width={50}
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header1;
