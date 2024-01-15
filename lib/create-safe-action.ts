import { z } from "zod";

//error from zod valdation
export type FieldErrors<T> = {
  [K in keyof T]?: string[];
};

//This is the main function where
export type ActionState<TInput, TOutput> = {
    //fielderrors are inputed
  fieldErrors?: FieldErrors<TInput>;
  //if server error return string, otherwise null
  error?: string | null;
  // otherwise return the data
  data?: TOutput;
};

//This is where zod helps to check the fielderrors and return data accordingly!
//We have created functions that can use this in Action folder.
export const createSafeAction = <TInput, TOutput>(
  schema: z.Schema<TInput>,
  handler: (validatedData: TInput) => Promise<ActionState<TInput, TOutput>>
) => {
  return async (data: TInput): Promise<ActionState<TInput, TOutput>> => {
    const validationResult = schema.safeParse(data);
    if (!validationResult.success) {
      return {
        fieldErrors: validationResult.error.flatten().fieldErrors as FieldErrors<TInput>,
      };
    }

    return handler(validationResult.data);
  };
};

