import Layout from "../components/layout";
import Invitation from "../components/main/Invitation";
import prisma from '../lib/prismadb';

export default function IndexPage({invites}) {
  const all_invites = invites.map(
    (invite) => (
      <Invitation key={invites.id} data={invite}/>
    )
  )
  return (
    <Layout>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-0">
        {all_invites}
      </div>
    </Layout>
  );
}

export async function getServerSideProps (){
  const data = await prisma?.invitation.findMany();
  const invites = JSON.parse(JSON.stringify(data));
  return {
    props: {invites},
  }
}

//TODO: Fix time errors
//TODO: Fix scrollbars
//TODO: Add container to overall layout
//TODO: Add protected route to
  // 1. My Invites
  // 2. Drafts
  // 3. api getway
//TODO: Fix onclick picture icon appearance
//TODO: Create Links to routes
//TODO: Add working onclick links to website on profile
//TODO: Add github 
//TODO: Add mailto functionality to email
//TODO: Create functionality add to list for favorites
//TODO: Add functionality to message button
//TODO: Add About me click to expand
//TODO: Add Hire Me functionality with a quote and message pop-up
//TODO: Add profile views
//TODO: Add profile loves
//TODO: Add Availability option
//TODO: Timezone functionality?
