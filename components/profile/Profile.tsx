import ImageProfile from "../header/ImageProfile";
function Profile() {
  return (
    <div>
      <div className="bg-scroll bg-my_bg_image h-36 ">
        <div className="z-10 md:flex md:flex-row justify-between items-center p-4">
          <div className="md:flex md:flex-row items-center">
            <div>
              <ImageProfile height={150} width={150} />
            </div>
            <div>
              <div className="text-2xl font-extrabold ">
                <h1>Mina Winkel</h1>
              </div>
              <div className="font-light">
                <h4>A Product Designer From Wembly</h4>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <button className="btn border-2 border-black font-bold mr-2">
              Hire Me
            </button>
            <button className="btn bg-black text-white font-bold">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
