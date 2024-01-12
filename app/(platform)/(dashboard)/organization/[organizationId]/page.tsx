import { db } from "@/lib/db";
import { Form } from "./form";

const OrganizationIdPage = async () =>{
    const boards = await db.board.findMany();

    return(
        <div className="flex flex-col space-y-4">
            <Form />
            <div className="space-y-2">
                {boards.map((board) =>(
                    <div key={board.id}>
                        Board title: {board.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OrganizationIdPage;



    //This function is basic of creating database in server.
    // async function create(formData: FormData){
    //     "use server";

    //     const title = formData.get("title") as string;

    //     await db.board.create({
    //         data:{
    //             title,
    //         }
    //     })
    // }