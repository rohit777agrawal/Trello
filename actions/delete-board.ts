"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteBoard(id: string){

    await db.board.delete({
        where: {
            id
        }
    });

    revalidatePath("/organization/org_2apL7IeU41p9SDH7jDrQpuTJcx4");
}