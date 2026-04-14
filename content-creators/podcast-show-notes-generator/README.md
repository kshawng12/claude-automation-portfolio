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

**Source:** Interview with Abel Grunfeld, Head of Marketing at Riverside  
**Episode:** "How AI Is Changing Podcasting — What Every Creator Needs to Know"  
**Show:** The Creator Edge Podcast

---

**Episode Summary generated:**

> In this episode, you'll get a front-row seat to how AI is reshaping every stage of the podcasting and video creation process — from pre-production all the way through to publishing. Abel Grunfeld, Head of Marketing at Riverside, breaks down exactly where AI is creating the biggest impact and how creators at every level can take advantage of it right now.
>
> You'll learn how AI is helping interviewers ask smarter, more original questions; how visual tools like Midjourney are eliminating weeks of pre-production guesswork; and how automated editing tools are slashing post-production time from hours down to minutes. Abel also tackles the big fear head-on — no, AI is not replacing human creators — and explains why emotional resonance and authentic storytelling will always require a human touch.
>
> Whether you're a seasoned podcaster looking to scale your workflow or a brand-new creator who's been holding back because of the technical learning curve, this episode gives you a clear, honest picture of where AI fits into your creative process.

---

**Timestamped highlights generated:**

| Timestamp | Topic |
|---|---|
| 0:00 | Introducing Abel Grunfeld from Riverside |
| 2:15 | AI is revolutionizing pre-production prep |
| 6:30 | Midjourney and visual concept testing |
| 11:00 | Magic Clips: turning hours of editing into minutes |
| 17:20 | Will AI make human creators obsolete? |
| 22:45 | AI is leveling the playing field for new creators |
| 26:10 | Top tools and the skill that compounds fastest |

---

**Key takeaways generated:**

- Use AI before the interview starts — researching your guest's perspective with AI tools leads to more original, high-quality questions that set your episode apart.
- Test your visual concepts with tools like Midjourney before production begins to align your team and eliminate costly creative guesswork.
- Automate your post-production with Riverside's Magic Clips to turn a 10-hour editing job into a task that takes minutes.
- Don't fear AI replacing you — focus on the emotional and narrative elements only you can deliver, and let AI handle the technical heavy lifting.
- Invest time in learning how to prompt AI effectively; it's a compounding skill that will make every other part of your workflow faster and better.

---

**Short platform description generated:**

> AI is rewriting the rules of podcasting — and it's happening fast. Abel Grunfeld from Riverside breaks down how smart creators are using AI to prep better, edit faster, and reach more people. Don't get left behind.

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
