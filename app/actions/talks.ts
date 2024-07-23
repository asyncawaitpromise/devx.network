"use server"

import { talks } from "@/db/talks"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function allTalks() {
	return talks.getAll()
}

export async function createTalk(formData: FormData) {
	talks.create(formData)

	revalidatePath("/talk")
	redirect("/talk")
}
