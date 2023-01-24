import "flatpickr/dist/themes/material_green.css";
import { useEffect, useState } from "react";

import Flatpickr from "react-flatpickr";
import ImageProfile from "./header/ImageProfile";

function CreateInvite() {
  const [date, setDate] = useState(Date.now());
  const initialState = {
    title: "",
    description: "",
    deadline: date,
    inviteUrl: "",
  };
  const [data, setData] = useState(initialState);
  let remaining_time = initialState.deadline - date;
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };
  useEffect(() => {}, [date]);
  console.log(data);
  return (
    <div className="mx-12 overflow-hidden">
      <div className="m2 p-2 shadow-2xl border-2 rounded-lg border-b-2 border-emerald-300 hover:shadow-2xl hover:shadow-gray-500 dark:bg-gray-800 dark:hover:shadow-emerald-500">
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
          <div className="mx-6 my-4 p-2 flex flex-col flex-1 border-b-2 border-gray-300">
            <div className="">
              <input
                type="text"
                name="title"
                placeholder="Title of the invitation"
                className="font-bold text-lg leading-4 pt-2 px-2 w-full rounded-md focus:ring-transparent"
                value={data.title}
                onChange={handleChange}
              />
            </div>

            <div className="mt-2">
              <input
                type="text"
                name="inviteUrl"
                placeholder="The url of the invitation"
                className="font-bold text-lg leading-4 pt-2 px-2 w-full rounded-md focus:ring-transparent"
                value={data.inviteUrl}
                onChange={handleChange}
              />
            </div>
            <div className="mt-2 ">
              <textarea
                rows={8}
                placeholder="Detailed description of the invite for example 'Need help creating a modal in react using redux. I have managed to ....."
                name="description"
                className="font-light text-sm pt-2 border-b-2  px-2 w-full rounded-md"
                value={data.description}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center px-2">
            <div>
              <div className="font-bold">
                Enter the date and time of the meet
              </div>
              <div>{remaining_time}</div>
            </div>
            <div>
              <div className="font-bold rounded-md">
                <Flatpickr
                  data-enable-time
                  name="deadline"
                  value={date}
                  onChange={(e) => setDate(date)}
                  className="rounded-md px-2 my-2"
                />
              </div>
              <div className="mt-2">
                <button className="btn mx-2 bg-red-500">Cancel</button>
                <button className="btn bg-green-600">Create</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateInvite;
