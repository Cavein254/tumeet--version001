import "flatpickr/dist/themes/material_green.css";
import moment from "moment";
import { useState } from "react";
import Flatpickr from "react-flatpickr";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fetcher from "../fetcher/Fetcher";
import ImageProfile from "./header/ImageProfile";
function CreateInvite() {
  const [date, setDate] = useState(Date.now());
  const initialState = {
    title: "",
    description: "",
    deadline: '["1970-01-25T19:50:00.000Z"]',
    inviteUrl: "",
  };
  const [data, setData] = useState(initialState);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };
  const handleDate = (date) => {
    setDate(date);
    setData({ ...data, deadline: date });
    console.log(date);
  };
  const laterDate = new Date(JSON.parse(data.deadline)).getTime();
  const now = new Date().getTime();
  const remainingTime = laterDate - now;
  let day = moment(remainingTime).day();
  let hour = moment(remainingTime).hour();
  let minute = moment(remainingTime).minute();
  let second = moment(remainingTime).second();

  const isValidURL = (string) => {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  };

  const isValidDate = () => {
    if (now <= laterDate) {
      return true;
    }
    return false;
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setData({ ...data, title: "", description: "", inviteUrl: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, inviteUrl, deadline } = data;
    if (title == "") {
      toast.error("Please provide a title", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (description == "") {
      toast.error("Please provide a description", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!isValidURL(inviteUrl)) {
      toast.error("Please a valid Url", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!isValidDate()) {
      toast.error("Please a valid Date", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      Fetcher("/api/invite/", "post", data);
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
                <div>{`${day} days ${hour} hours ${minute} minutes`}</div>
              </div>
              <div>
                <div className="font-bold rounded-md">
                  <Flatpickr
                    data-enable-time
                    name="deadline"
                    value={date}
                    onChange={(date) => handleDate(JSON.stringify(date))}
                    className="rounded-md px-2 my-2"
                  />
                </div>
                <div className="mt-2">
                  <button
                    className="btn mx-2 bg-red-500"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button className="btn bg-green-600" onClick={handleSubmit}>
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateInvite;
