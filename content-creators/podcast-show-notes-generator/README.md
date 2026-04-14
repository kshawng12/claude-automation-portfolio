# Podcast / YouTube Show Notes Generator

**Turn a raw transcript into publish-ready show notes in under 60 seconds.**

You paste your transcript or rough notes. It produces a complete episode summary, timestamped highlights, key takeaways, guest bio, resource list, and a platform description — formatted and ready to copy straight into Spotify, YouTube, or your show website.

---

## The Problem

After recording an episode, most podcasters and YouTubers spend another 1-2 hours writing show notes manually — summarizing the conversation, pulling out key moments, listing resources, writing a platform description. It's repetitive work that keeps you from recording more content.

## The Solution

One script. One API call. Five outputs.

1. **Paste your transcript** — raw recording transcript or rough notes
2. **Enter episode details** — title, show name, guest, platform
3. **Get complete show notes** saved and ready to publish

No reformatting. No manually scanning for timestamps. No rewriting the same conversation you just recorded.

---

## Sample Output

**Source:** [This Past Weekend w/ Theo Von #652](https://www.youtube.com/watch?v=ljerfYGfCeE) — real YouTube episode  
**Guest:** Matt McCusker  
**Full sample:** [View complete show notes](sample_theo_von_ep652.md)

---

**Episode Summary generated:**

> In this episode, Theo Von sits down with stand-up comedian and co-host of the Matt and Shane's Secret Podcast, Matt McCusker, for a wide-ranging, hilarious conversation that feels like hanging out with two old friends. From the chaos of carrying too much stuff in your pockets to the surprisingly brutal world of backyard gardening, Theo and Matt find comedy in the everyday absurdities of life.
>
> You'll hear Matt break down his ongoing war against cotton rats destroying his backyard garden — complete with fiberglass rat poison, 4 lbs of red pepper flakes, and a very matter-of-fact exterminator who's seen it all. Along the way, the guys riff on the philosophy of gardening (Matt runs a ruthless, totalitarian garden — no babying allowed), the short shelf life of professional exterminators, and the unspoken social dynamics of adult group settings.

---

**Timestamped highlights generated:**

| Timestamp | Topic |
|---|---|
| 0:00 | Spring sale and intro to Matt McCusker |
| 1:30 | Men and their pockets — the purse debate |
| 2:45 | Matt's upcoming tour dates |
| 5:17 | Matt's backyard gardening obsession |
| 7:05 | The rat problem and extreme pest control |
| 10:00 | Spider allies and garden ecosystem |
| 11:40 | Extreme exterminators and bug bombs |
| 13:40 | Group activities and adult know-it-alls |

---

**Key takeaways generated:**

- If you're going to garden, commit fully — half-measures like dumping cayenne pepper won't stop determined pests; call a professional exterminator with the real stuff.
- Running a "totalitarian garden" — letting weak plants die instead of babying them — is Matt's philosophy for getting actual producers in the ground.
- Tour tickets in your city won't sell themselves — if a comedian you love is coming to your town, go buy the ticket.
- Any group of adults will have at least one unbearable know-it-all, so choose your gardening clubs wisely.
- Men need a better carry solution — the fanny pack debate is unresolved, but something has to give.

---

**Short platform description generated:**

> Comedian Matt McCusker stops by to talk tour life, backyard gardening gone wrong, and an all-out war against cotton rats. Chaos, laughs, and fiberglass rat poison. Don't miss it.

---

## What You Provide

| Input | Example |
|---|---|
| Transcript or notes | Raw recording transcript, interview notes, bullet point outline |
| Episode title | "How AI Is Changing Podcasting" |
| Show/channel name | "The Creator Edge Podcast" |
| Guest name | Optional — leave blank for solo episodes |
| Platform | Podcast or YouTube |

## What You Get

| Output | Details |
|---|---|
| Episode summary | 2-3 paragraphs, written for the audience |
| Timestamped highlights | 4-8 key moments with timestamps and descriptions |
| Key takeaways | 3-5 actionable bullet points |
| Guest bio | Derived from the transcript (if guest is present) |
| Resources mentioned | Any tools, books, or links from the episode |
| Platform description | ≤300 characters, optimized for Spotify / YouTube |

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Claude (Sonnet) | Transcript analysis, writing, structuring |
| Python | Script execution, file output |
| WAT Framework | Workflow SOP + deterministic tool execution |

---

## Cost Per Run

~$0.01–$0.04 per episode (one Claude API call, ~1,500–2,500 output tokens).

---

## Built With

WAT Framework — Workflows, Agents, Tools. Claude handles the reasoning; Python handles the execution.
