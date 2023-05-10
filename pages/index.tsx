import Layout from "../components/layout";

export default function IndexPage({invites}) {
  console.log(invites);
  return (
    <Layout>
      <h1>NextAuth.js Example</h1>
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
