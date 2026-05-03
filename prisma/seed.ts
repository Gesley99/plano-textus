import { PrismaClient, UserRole } from '@prisma/client';
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('Troque@123', 12);
  await prisma.user.upsert({ where: { email: 'admin@textus.com' }, update: {}, create: { name: 'Administrador Textus', email: 'admin@textus.com', passwordHash, role: UserRole.ADMIN } });
  await prisma.user.upsert({ where: { email: 'colab@textus.com' }, update: {}, create: { name: 'Colaborador Textus', email: 'colab@textus.com', passwordHash, role: UserRole.COLABORADOR } });
}
main().finally(() => prisma.$disconnect());
