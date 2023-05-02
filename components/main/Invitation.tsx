import ImageProfile from "../header/ImageProfile";

function Invitation() {
  return (
    <div className="m-2 p-2 shadow-lg rounded-lg border-b-2 border-emerald-300 hover:shadow-2xl hover:shadow-gray-500 dark:bg-gray-800 dark:hover:shadow-emerald-500">
      <div>
        <div className="flex flex-row justify-between p-2 border-b-2 border-gray-300 items-center">
          <div>
            <ImageProfile />
          </div>
          <div>
            <div>
              <h4 className="font-bold text-sm">Dianne Robinson</h4>
            </div>
            <div>
              <h5 className="font-light text-xs">System Analyst</h5>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-lg leading-4 pt-2 px-2">
            Lorem ipsum dolor, sit amet con. Lorem ipsum dolor, sit amet con
          </h1>
        </div>
        <div className="font-light text-sm pt-2 border-b-2 border-gray-300 px-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            libero perspiciatis! Quis sit molestias nemo ipsam? Quis quidem
            voluptas reprehenderit deserunt ex qui, labore ducimus accusantium,
            explicabo unde nemo fuga.
          </p>
        </div>
        <div className="flex flex-row justify-between items-center px-2">
          <div>
            <div className="text-sm">13</div>
            <div className="text-xs font-extralight">Applicants</div>
          </div>
          <div>
            <div className="text-sm">30 min Remaining</div>
            <div className="text-xs font-extralight">Created 12 hours ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invitation;
