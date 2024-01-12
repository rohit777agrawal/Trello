import {PrismaClient} from '@prisma/client';


// JUST THIS IS NEEDED !! const prisma = new PrismaClient()
// Some notes: We do it little longer because the instance is not created again and again (hot reload) for warning.
// Global Avoids the hot reload. Good practice!!
declare global{
    var prisma: PrismaClient | undefined;
}
export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production") globalThis.prisma = db;

//End here for upper comment.