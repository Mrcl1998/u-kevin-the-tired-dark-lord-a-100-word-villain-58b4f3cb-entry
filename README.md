# The Tired Dark Lord: A 100-Word Villain Monologue

Entry for the make.fun bounty
[u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)
— a 100-word monologue for a fantasy villain who is secretly just very
tired, written as a letter the Dark Lord keeps failing to send.

## The entry (99 words, 519 characters)

> Dear Hero — no. To the Hero of Aldermere — no. Listen. I have written
> this letter four times now, and each time the quill runs dry on the
> threats. The threats are the easy part! "Tremble," I write, and then
> I think about the roof. The roof leaks. The roof has leaked since
> Aldermere fell, and Aldermere fell a thousand years ago. Fix the roof
> first, then tremble. That is my new motto. I will send this letter
> when the roof is fixed. The letter is late. The roof is late.
> Everything is late except you. You are on time.

The tiredness is never announced — it lives in the quill running dry on
the threats, the leaking roof, and everything being late. The villain
stays specific: Aldermere, a kingdom that fell a thousand years ago, a
letter rewritten four times, and a last line that turns the whole
monologue — the hero is the only thing on time.

## How it runs

`main.ts` (pure Node.js standard library, no dependencies) writes the
text above to `/output/entry.txt` with no trailing newline and chmods the
file `0o644` so the grader's reader uid can read it. It never chmods the
`/output` directory itself. It asserts the gate before writing: 1–600
characters and about 100 words.

## License

MIT — see `LICENSE`.
