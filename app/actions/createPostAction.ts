"use server"

import { auth, currentUser } from "@clerk/nextjs/server"

export default async function createPostAction(formData:FormData) {
    const user = await currentUser()
    if(!user){
        throw new Error("User isn't Authenticated")
    }

    const postInput = formData.get("postInput") as string
    const image = formData.get("image") as File
}