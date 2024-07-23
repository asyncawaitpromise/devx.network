import { createTalk, allTalks } from "../actions/talks"
import "./page.css"
import { type Talk } from "@/db/talks/types"

export default async function Talk() {
	const talks = await allTalks()

	return (
		<main>
			<h2>Current Talks</h2>
			<ul className="list-none list-outside">
				{talks.map(({ id, description, speaker, title }) => (
					<li key={id} className="pl-8 py-2">
						<h3 className="text-lg font-bold">
							{title}
							<span className="text-sm italic pl-4">{speaker}</span>
						</h3>
						<p className="text-sm py-2 pl-4">{description}</p>
					</li>
				))}
			</ul>
			<form className="max-w-screen-md m-auto" action={createTalk}>
				<input type="text" placeholder="Speaker Name" name="speaker" />
				<input type="text" placeholder="Talk Title" name="title" />
				<textarea placeholder="Talk Description..." name="description"></textarea>
				<input className="btn hover:bg-accent hover:text-base-100" type="reset" value="Reset" />
				<button className="btn hover:bg-accent hover:text-base-100" type="submit">
					Submit
				</button>
			</form>
		</main>
	)
}
