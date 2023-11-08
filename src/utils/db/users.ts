import { PrismaClient } from "@prisma/client";

export default function User() {
  const prisma = new PrismaClient();

  async function createWithEmailAndPassword(email: string, password: string) {
    if (!email || !password) {
      throw new Error("Invalid data");
    }
    await prisma.$connect();
    prisma.user.create({
      data: {
        email,
        password,
      },
    });
  }
}
