import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { FaLock } from "react-icons/fa";
import ThemeToggler from "./header/ThemeToggler";

import Link from "next/link";
import Profile from "./header/Profile";
function Header1() {
  const { data: session, status } = useSession();

  const [showDrop, setShowDrop] = useState(false);
  const handleShowDrop = () => {
    setShowDrop(!showDrop);
  };
  return (
    <div className="max-w-screen h-24 min-w-min">
      <div className=" flex-wrap max-w-screen dark:bg-gray-700 dark:text-white py-4  gray-400 shadow-xl border-b-4 border-emerald-500 px-4">
        <div className="flex flex-row justify-evenly items-center">
          <div>
            <span className="text-5xl font-extrabold text-green-600">TU</span><span className="italic font-extralight text-3xl dark:text-white">meet</span>
          </div>
          <nav className=" flex-grow">
            <ul className="flex flex-row justify-evenly invisible md:visible">
              <li><Link href='/create-profile'>Create Profile</Link></li>
              <li><Link href='/create-invite'>Create Invite</Link></li>
              <li>Premium</li>
              <li>Tools</li>
              <li>Custom Development</li>
            </ul>
          </nav>
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
