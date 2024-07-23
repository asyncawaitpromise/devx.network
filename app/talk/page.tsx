import { createTalk, getTalks } from "../actions/talks"
import { type Talk } from "@/db/talks/types"

export default async function Talk() {
	const talks = await getTalks()

	return (
		<main className="p-4">
			<h2 className="text-2xl w-full text-center pb-4">Create a New Talk</h2>
			<form
				className="max-w-screen-md m-auto grid grid-cols-2 gap-2 text-lg p-2"
				action={createTalk}
			>
				<input className="p-2" type="text" placeholder="Speaker Name" name="speaker" autoFocus />
				<input className="p-2" type="text" placeholder="Talk Title" name="title" />
				<textarea
					className="p-2 col-span-2 resize-y"
					placeholder="Talk Description..."
					name="description"
				></textarea>
				<input className="btn hover:bg-accent hover:text-base-100 p-2" type="reset" value="Reset" />
				<button className="btn hover:bg-accent hover:text-base-100 p-2" type="submit">
					Submit
				</button>
			</form>
			{talks.length > 0 ? (
				<div className="pt-4 grid justify-center">
					<h2 className="text-2xl w-full text-center pb-4">Current Talks</h2>
					<ul className="list-none list-outside flex flex-col gap-4 py-4">
						{talks.map(({ id, description, speaker, title }) => (
							<li key={id} className="pl-8">
								<div className="flex flex-row items-baseline gap-3">
									<h3 className="text-lg font-bold">{title}</h3>
									<h3 className="text-sm italic">{speaker}</h3>
								</div>
								<p className="text-sm p-2">{description}</p>
							</li>
						))}
					</ul>
				</div>
			) : (
				<p>No talks yet...</p>
			)}
		</main>
	)
}
