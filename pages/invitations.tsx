import { GetServerSideProps } from "next";
import Layout from "../components/layout";
import Invitations from "../components/main/Invitations";
import prisma from "../lib/prismadb";
function invitations({ invites }) {
  return (
    <Layout>
      <Invitations invites={invites} />
    </Layout>
  );
}

export default invitations;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const data = await prisma?.invitation.findMany();
  const invites = JSON.stringify(data);
  return {
    props: {
      invites,
    },
  };
};
