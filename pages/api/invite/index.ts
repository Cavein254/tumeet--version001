import { getSession } from "next-auth/react";
import prisma from "../../../lib/prismadb";
import SlugGenerator from "../../../utils/SlugGenerator";

export default async function handle(req, res) {
  const session = await getSession({ req });

  const { title, deadline, description, inviteUrl } = req.body;
  console.log("On the api with:", req.body);

  const result = await prisma.invitation.create({
    data: {
      title,
      slug: SlugGenerator(title),
      deadline: new Date(JSON.parse(deadline)),
      description,
      invite_url: inviteUrl,
      author: { connect: { email: session?.user?.email } },
    },
  });
  console.log(res.json(result));
  res.json(result);
}
