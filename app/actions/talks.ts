"use server"

import { talks } from "@/db/talks"

export async function allTalks() {
	return await talks.getAll()
}

export async function createTalk(formData: FormData) {
	return await talks.create(formData)
}
