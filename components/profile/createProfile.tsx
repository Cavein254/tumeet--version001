import ImageProfile from "../header/ImageProfile";

function CreateProfile() {
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
                  <input placeholder='A Product Designer From Wembly' required className='w-[100%] px-2 dark:text-white'/>
                </div>
              </div>
            </div>
        </div>
          {/* end of top section  */}
          <div className="md:flex md:flex-row justify-between p-2 ">
            <div className="md:w-1/2 md:mr-4 bg-blue-50 p-2 rounded-md">
              <div className="border-b-gray-200 border-2 border-blue-50">
                <h2 className="text-lg font-bold dark:text-blue-700 ">About Me</h2>
                  <textarea
                  placeholder='I special in UX/UI design, brand strategy, and webflow development.'
                  rows={3}
                  required
                  className="dark:text-white w-[100%] rounded-md px-2 "
                  />
              </div>
              <div className="mt-2 border-2 border-b-gray-200  border-blue-50 ">
                <h3 className="text-lg font-bold dark:text-blue-700">Experience</h3>
                  <textarea 
                  placeholder='Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Neque ab repellendus aspernatur vero, iusto quasi, est
                  exercitationem iure pariatur dolore magnam mollitia quis ipsam
                  qui dolorum aperiam soluta provident. Ut.'
                  rows={6}
                  required
                  className="dark:text-white w-[100%] rounded-md px-2"
                  />
              </div>
            </div>
            {/* Another padding  */}
            <div className="md:w-1/2 p-2 bg-blue-50 rounded-md ">
              <div className="border-2 border-b-gray-200  border-blue-50">
                <div className="border-2 border-b-gray-200  border-blue-50 pb-4">
                  <h3 className="text-lg font-semibold dark:text-blue-800">Skills</h3>
                  <div>
                  <textarea
                  placeholder='photoshop, indesign, corel, pagemaker'
                  rows={2}
                  required
                  className="dark:text-white w-[100%] rounded-md px-2"
                  />
                  </div>
                </div>
                <div>
                  <div className="border-2 border-b-gray-200  border-blue-50">
                    <h3 className="text-lg dark:text-blue-800">Location</h3>
                    <div className="font-light mb-2 md:mb-0">
                  <input placeholder='Nikaragwa, Spain' required className='w-[100%] px-2 dark:text-white'/>
                </div>
                  </div>
                  <div className="border-2 border-b-gray-200  border-blue-50">
                    <h3 className="text-lg dark:text-blue-800">Github</h3>
                    <div className="font-light mb-2 md:mb-0">
                  <input placeholder='cavein254@github.com' required className='w-[100%] px-2 dark:text-white'/>
                </div>
                  </div>
                  <div className="border-2 border-b-gray-200  border-blue-50">
                    <h3 className="text-lg dark:text-blue-800">Website</h3>
                    <input placeholder='www.olddogs.com' className='w-[100%] px-2 dark:text-white'/>
                  </div>
                  <div className="border-2 border-b-gray-200 border-blue-50">
                    <h3 className="text-lg dark:text-blue-800">Email</h3>
                    <div className="flex flex-row items-center font-semibold">
                    <input placeholder='olddogs@gmail.com' className='w-[100%] px-2 dark:text-white'/>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-row items-center pt-2 w-max justify-end">
                    <div className="items-center">
                      <button className="btn border-2 border-green-600 font-bold mr-2 bg-white mb-2 dark:text-black text-green-600">
                        Update
                      </button>
                    </div>
                    <div className="items-center">
                      <button className="btn bg-red-600 text-white font-bold px-12">
                        Delete
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

export default CreateProfile;
