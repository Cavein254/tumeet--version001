import { GetStaticPaths, GetStaticProps } from "next";
import Invitations from "../../../components/main/Invitations";
import prisma from "../../../lib/prismadb";

export default function invite({invites}) {
  console.log(invites);
  return;
  <Invitations />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const invites = await prisma?.invitation.findMany({
    where: {
      published: true,
    },
  });
  const paths = invites.map((invite) => ({
    return{
      params:{slug: invite.slug},
    }
  }));
  return {
    paths,
    fallback:false,
  }

};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log("On the event context");
  console.log(context);
  const data = await prisma?.invitation.findMany({
    where: {
      published: true,
    },
  });
  const invites = JSON.stringify(data);
  console.log(invites);
  return {
    props:{
      invites,
    }
  }
};
