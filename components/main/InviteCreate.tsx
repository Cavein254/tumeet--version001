
function InviteCreate() {
  return (
      <div className="flex justify-center px-2">
        <form className="flex flex-col bg-gray-100 mt-4 px-4 py-4 rounded-md min-w-full shadow-lg hover:shadow-gray-400 dark:hover:shadow-green-300">
            <h1 className="text-center text-green-600 text-2xl font-extrabold">Enter Invitation Details</h1>
            <div className="pt-2">
                <input placeholder="Enter Title" className="w-[100%] rounded-md px-2 font-thin text-xl "/>
            </div>
            <div>
                <textarea placeholder="Enter Description" rows={6} className="w-[100%] mt-4 rounded-md px-1 font-thin text-xl"/>
            </div>
            <div className="flex justify-end">
            <div className="items-center">
                      <button className="btn border-2 border-green-600 font-bold px-12 text-green-600 hover:shadow-lg hover:shadow-red-400">
                        Send
                      </button>
            </div>
            </div>
        </form>
      </div>
  )
}
export default InviteCreate
