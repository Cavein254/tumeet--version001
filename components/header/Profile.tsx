import Link from "next/link";

function Profile() {
  return (
    <div className="z-50 right-0 left-[68%] top-[6%] md:left-[75%] bg-gray-200 fixed dark:bg-black w-[100%] rounded-md shadow-lg flex flex-col justify-center">
      <div className="mx-2 my-4 px-2 py-2 w-[100%] justify-center">
        <div>
          <Link href={'/create-invite'} className="md:text-xl dark:text-white  hover:text-green-600">Create Invite</Link>
        </div>
        
        <div className="mt-2">
          <Link href={'/create-invite'} className="md:text-xl dark:text-white  hover:text-green-600">Current Invites</Link>
        </div>
        <div className="mt-2">
          <Link href={'/create-invite'} className="md:text-xl dark:text-white  hover:text-green-600">Past Invites</Link>
        </div>
        <div className="mt-2">
          <Link href={'/create-invite'} className="md:text-xl dark:text-white  hover:text-green-600">History</Link>
        </div>
        <hr className="w-[100%] -ml-[1.1rem] border-2 border-green-400 mt-4"/>
        <div className="mt-2">
          <Link href={'/me'} className="md:text-xl dark:text-white  hover:text-green-600">My Profile</Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
