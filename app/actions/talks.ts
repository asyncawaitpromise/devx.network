"use server"

import { talks } from "@/db/talks"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function allTalks() {
	return await talks.getAll()
}

export async function createTalk(formData: FormData) {
	await talks.create(formData)

	revalidatePath("/talk")
	redirect("/talk")
}
