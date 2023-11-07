import { PrismaClient } from "@prisma/client";

export async function GET(request: Request) {
  const prisma = new PrismaClient();
  // await prisma.user.create({
  //   data: {
  //     email: "asdf@adsf.com",
  //     name: "malik",
  //   },
  // });
  const user = await prisma.user.findMany();

  return Response.json(user);
}
