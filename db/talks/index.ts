import { revalidatePath } from "next/cache"
import { Talk } from "./types"
import { redirect } from "next/navigation"

const db = require("better-sqlite3")("./talks.db")
db.pragma("journal_mode = WAL")

function initialize() {
	db.prepare(
		`
CREATE TABLE IF NOT EXISTS Talks (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    description TEXT,
    speaker TEXT,
    title TEXT
);
`
	).run()
}

initialize()

export const talks = {
	async getAll() {
		return db.prepare("SELECT * FROM talks").all() as Talk[]
	},

	async create(formData: FormData) {
		const description = formData.get("description")
		const speaker = formData.get("speaker")
		const title = formData.get("title")

		db.prepare(
			`
        INSERT INTO Talks (description, speaker, title)
        VALUES (?, ?, ?)
        `
		).run(description, speaker, title)

		revalidatePath("/talk")
		redirect("/talk")
	}
}
