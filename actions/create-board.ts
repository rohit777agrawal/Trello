"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import {z} from "zod";

const CreateBoard = z.object({
    title: z.string(),
});

export async function create(formData: FormData){

    // const title = formData.get("title") as string;
    //instead of uppercode use this to create title to check they are string
    const {title} = CreateBoard.parse({
        title: formData.get("title"),
    })

    await db.board.create({
        data:{
            title,
        }
    })

    revalidatePath("/organization/org_2apL7IeU41p9SDH7jDrQpuTJcx4");
}