import Layout from "../components/layout"

function createInvite() {
  return (
    <Layout>
     <main className="flex justify-center items-center container m-4 p-3 shadow-xl bg-gray-100 rounded-lg dark:hover:shadow-2xl dark:hover:shadow-green-300">
      <form className="flex justify-center flex-col">
        <h1 className="text-center font-extrabold text-2xl dark:text-green-600 ">Enter Invitation Details</h1>
        <div className="w-[90%]">
          <input placeholder="Title of the Invite" className="w-[110%]  text-4xl px-2 rounded-md text-gray-600 "/>
          <textarea rows={6} placeholder="Description of the Invite" className="w-[110%]  text-md px-2 rounded-md text-gray-400 mt-2"/>
        </div>
      </form>
     </main>
    </Layout>
  )
}

export default createInvite
