function Header1() {
  return (
    <div className="dark:bg-gray-700 dark:text-white py-4 w-screen gray-400 shadow-xl border-b-4 border-emerald-500">
      <div className="flex flex-row justify-evenly relative">
        <div>Tailwind Components</div>
        <div className=" flex-grow">
          <div className="flex flex-row justify-evenly invisible md:visible">
            <li>Component</li>
            <li>Premium</li>
            <li>Tools</li>
            <li>Custom Development</li>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <span>sun</span>
          <button className="btn bg-white text-black font-normal dark:bg-black dark:text-white dark:outline-1 dark:outline-white outline-1 ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header1;
