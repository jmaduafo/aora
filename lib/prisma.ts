// lib/prisma.ts or similar utility file
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg'; // The underlying database driver

const connectionString = process.env.DATABASE_URL;

// You may need to import "dotenv/config" at the entry point of your application
// to ensure process.env.DATABASE_URL is available at runtime.
if (!connectionString) {
  throw new Error('DATABASE_URL environment variable not set');
}

const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool); // Pass the pool/client instance to the adapter

// Create a single, shared instance of the Prisma Client
const prisma = new PrismaClient({ adapter });

// Optional: Use the global object to maintain a single instance in development with Hot Module Replacement (HMR)
// const globalForPrisma = global as unknown as { prisma: PrismaClient };
// export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });
// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;