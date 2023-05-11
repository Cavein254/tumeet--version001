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

