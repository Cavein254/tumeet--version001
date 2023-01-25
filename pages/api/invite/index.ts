import { getSession } from "next-auth/react";
import prisma from "../../../lib/prismadb";
import SlugGenerator from "../../../utils/SlugGenerator";

export default async function handle(req, res) {
  const session = await getSession({ req });

  const { title, deadline, description, inviteUrl } = req.body;

  const result = await prisma.invitation.create({
    data: {
      title,
      slug: SlugGenerator(title),
      deadline: new Date(JSON.parse(deadline)),
      description,
      published: true,
      invite_url: inviteUrl,
      author: { connect: { email: session?.user?.email } },
    },
  });
  res.json(result);
}
