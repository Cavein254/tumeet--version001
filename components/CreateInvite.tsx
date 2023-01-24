import React, { useState } from "react";
import Datetime from "react-datetime";
import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";

function CreateInvite() {
  const [date, setDate] = useState();
  console.log(typeof date);
  return (
    <div>
      <Flatpickr
        data-enable-time
        value={date}
        onChange={([date]) => {
          setDate(date);
        }}
      />
      <div className="m-2 p-2 shadow-lg rounded-lg border-b-2 border-emerald-300 hover:shadow-2xl hover:shadow-gray-500 dark:bg-gray-800 dark:hover:shadow-emerald-500">
        <div>
          <div className="flex flex-row justify-between p-2 border-b-2 border-gray-300 items-center">
            <div></div>
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
            <div className="flex flex-1">
              <h1 className="font-bold text-lg leading-4 pt-2 px-2">
                <input
                  type="text"
                  name="title"
                  placeholder="Title of the invitation"
                />
              </h1>
            </div>
          </div>
          <div className="font-light text-sm pt-2 border-b-2 border-gray-300 px-2">
            <textarea
              rows={8}
              placeholder="Detailed description of the invite for example 'Need help creating a modal in react using redux. I have managed to ....."
              name="description"
            />
          </div>
          <div className="flex flex-row justify-between items-center px-2">
            <div>
              <div className="text-sm">13</div>
              <div className="text-xs font-extralight">Applicants</div>
            </div>
            <div>
              <div className="text-xs font-extralight"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateInvite;
