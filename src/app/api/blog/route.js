import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const path = request.nextUrl.searchParams.get('path')


  try {
    connectToDb();
    if (path) {
      revalidatePath(path)
      return Response.json({ revalidated: true, now: Date.now() })
    }

    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
