import { useState } from 'react';
import { BsArrowBarDown } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import ImageProfile from "../header/ImageProfile";

function Profile() {
  const [readMe, setReadMe] = useState(false);
  return (
    <div>
      <div className="bg-scroll bg-my_bg_image h-36 my-clip-path"></div>
      <div className="px-4 -mt-20">
        <div>
          <div className="md:flex md:flex-row md:justify-between items-center relative justify-center m-2">
            <div className="md:flex md:flex-row items-center">
              <div>
                <ImageProfile
                  height={150}
                  width={150}
                  classname="rounded-full border-4 border-blue-50 shadow-lg mr-4"
                />
              </div>
              <div>
                <div className="text-2xl font-extrabold ">
                  <h1>Mina Winkel</h1>
                </div>
                <div className="font-light mb-2 md:mb-0">
                  <h4>A Product Designer From Wembly</h4>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center mb-2 md:mb-0">
              <button className="btn border-2 border-black font-bold mr-2">
                Hire Me
              </button>
              <button className="btn bg-black text-blue-50 font-bold">
                Follow
              </button>
            </div>
          </div>
          {/* end of top section  */}
          <div className="md:flex md:flex-row justify-between p-2 ">
            <div className="md:w-1/2 md:mr-4 bg-blue-50 p-2 rounded-md">
              <div className="border-b-gray-200 border-2 border-blue-50">
                <h2 className="text-lg font-bold dark:text-blue-700 ">About Me</h2>
                <h4 className="dark:text-blue-700">
                  I specialize in UX/UI design, brand strategy, and webflow
                  development.{" "}
                </h4>
              </div>
              <div className="mt-2 border-2 border-b-gray-200  border-blue-50 ">
                <h3 className="text-lg font-bold dark:text-blue-700">Experience</h3>
                <p className="dark:text-blue-700">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Neque ab repellendus aspernatur vero, iusto quasi, est
                  exercitationem iure pariatur dolore magnam mollitia quis ipsam
                  qui dolorum aperiam soluta provident. Ut.
                </p>

                <div className="flex flex-row items-center text-lg font-bold hover:text-blue-700">
                  <div>
                    <h6 className='text-blue-700'>Read More </h6>
                  </div>
                  <div className="ml-2">
                    <span>
                      <BsArrowBarDown size={16} className="font-bold text-blue-700" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Another padding  */}
            <div className="md:w-1/2 p-2 bg-blue-50 rounded-md ">
              <div className="border-2 border-b-gray-200  border-blue-50">
                <div className="border-2 border-b-gray-200  border-blue-50 pb-4">
                  <h3 className="text-lg font-semibold dark:text-blue-800">Skills</h3>
                  <div>
                    <span className="border-2 px-2 py-1 mr-2 border-black font-bold rounded-lg dark:text-black">
                      Photoshop
                    </span>
                    <span className="border-2 px-2 py-1  border-black font-bold rounded-lg dark:text-black">
                      Instagram
                    </span>
                  </div>
                </div>
                <div>
                  <div className="border-2 border-b-gray-200  border-blue-50">
                    <h3 className="text-lg dark:text-blue-800">Location</h3>
                    <span className="font-semibold dark:text-blue-800">Nikaragwa, Spain</span>
                  </div>
                  <div className="border-2 border-b-gray-200  border-blue-50">
                    <h3 className="text-lg dark:text-blue-800">Website</h3>
                    <div className="flex flex-row items-center font-semibold">
                      <div>
                        <span className='dark:text-blue-800'>www.olddogs.com</span>
                      </div>
                      <div className='dark:text-blue-800'>
                        <FiArrowUpRight />
                      </div>
                    </div>
                  </div>
                  <div className="border-2 border-b-gray-200 border-blue-50">
                    <h3 className="text-lg dark:text-blue-800">Email</h3>
                    <div className="flex flex-row items-center font-semibold">
                      <div>
                        <span className='dark:text-blue-800'>olddogs@gmail.com</span>
                      </div>
                      <div className='dark:text-blue-800'>
                        <FiArrowUpRight />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center pt-2 w-max justify-center">
                    <div className="items-center">
                      <button className="btn border-2 border-black font-bold mr-2 bg-white mb-2 dark:text-black">
                        Add To List
                      </button>
                    </div>
                    <div className="items-center">
                      <button className="btn bg-black text-white font-bold px-12">
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
