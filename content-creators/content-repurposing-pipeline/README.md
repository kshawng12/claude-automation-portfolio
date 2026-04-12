# Content Repurposing Pipeline

**Turn one piece of content into three platform-ready posts — in under 60 seconds.**

You give it a blog post, article, or transcript. It outputs a LinkedIn post, a tweet thread, and an email blast, each written natively for that platform and matched to your brand voice.

---

## The Problem

You spend hours writing one great piece of content, then it sits on your blog and reaches maybe 200 people. Meanwhile, your audience on LinkedIn, Twitter, and email never sees it — because repurposing takes just as long as writing it in the first place.

## The Solution

One script. One API call. Three outputs.

1. **Paste your content** — blog post, newsletter, video transcript, anything
2. **Describe your tone** — "professional and direct", "casual and witty", "bold and technical"
3. **Get three ready-to-publish posts** saved as markdown files you can copy straight into your platforms

No rewriting. No reformatting. No context-switching between four different tools.

---

## Sample Output

Given this blog excerpt:

> *AI is changing how small businesses hire. In the past year, tools powered by large language models have made it possible for a two-person company to screen 500 resumes in minutes... The future of hiring is not corporate. It is small, fast, and AI-assisted.*

**LinkedIn post generated:**
> The hiring gap between small businesses and Fortune 500s just closed.
>
> A year ago, a two-person team couldn't compete with a corporate recruiting machine. Today, AI handles the parts that used to require a full HR department — resume screening, job description writing, interview scheduling.
>
> The cost of hiring has dropped ~40% for early adopters. Not because the process got cheaper. Because the bottlenecks got removed.
>
> The small bakery in Ohio now has the same infrastructure as Amazon.
>
> The question isn't whether to adopt AI hiring tools. It's how fast you can move before your competitors do.
>
> What's the biggest hiring bottleneck in your business right now?
>
> #SmallBusiness #AIHiring #FutureOfWork

**Tweet thread generated (6 tweets):**
> 1/ The hiring gap between small businesses and enterprises just disappeared. Here's what changed 🧵
>
> 2/ AI tools now let a 2-person team screen 500 resumes in minutes. What used to take a week now takes a lunch break.
>
> 3/ Job descriptions that took an hour to write? 30 seconds. Interview scheduling that required a coordinator? Automated.
>
> 4/ Early adopters report ~40% lower hiring costs. Not from cutting corners — from cutting bottlenecks.
>
> 5/ A small bakery in Ohio now has the same hiring infrastructure as a Fortune 500. That's not an exaggeration. That's the product reality.
>
> 6/ The future of hiring isn't corporate. It's small, fast, and AI-assisted. The question is whether you're in that future yet.

**Email blast generated:**
> **Subject:** The hiring gap just closed
> **Preview:** Small businesses now have Fortune 500 hiring tools — here's what that means for you

---

## What You Provide

| Input | Example |
|---|---|
| Source content | Blog post, newsletter, video transcript, article |
| Tone description | "Professional and direct" / "Casual and energetic" / "Bold and technical" |
| Author/brand name | Optional — helps Claude match your voice |

## What You Get

| Output | Format |
|---|---|
| LinkedIn post | 150–300 words, hook + body + CTA, max 3 hashtags |
| Tweet thread | 5–8 tweets, each ≤ 280 characters, every tweet delivers value |
| Email blast | Subject line, preview text, and full body copy |

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Claude (Sonnet) | Content analysis, rewriting, platform adaptation |
| Python | Script execution, file output |
| WAT Framework | Workflow SOP + deterministic tool execution |

---

## Cost Per Run

~$0.01–$0.03 per repurpose (one Claude API call, ~1,000–2,000 output tokens).

---

## Built With

WAT Framework — Workflows, Agents, Tools. Claude handles the reasoning; Python handles the execution.
