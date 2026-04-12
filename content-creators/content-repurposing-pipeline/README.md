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

**Source article:** *"AI Is Powering Small Business Growth in 2026"* — U.S. Chamber of Commerce  
**Tone:** Professional and direct

---

**LinkedIn post generated:**

> AI has officially moved from "nice to have" to strategic necessity for small businesses — and the numbers prove it.
>
> A new LinkedIn report makes one thing clear: 2026 is a defining year for how SMBs use artificial intelligence.
>
> Here's what stood out to me:
>
> → Half of U.S. small businesses say AI inspired them to pursue entrepreneurial paths they hadn't previously considered.  
> → LinkedIn has seen a 69% increase in people adding "founder" to their profiles.  
> → 57% of small businesses believe AI will improve their daily work lives.  
> → Most SMBs are already using AI — from email writing to data analysis.
>
> But here's what the data doesn't say loudly enough: SMBs make up over 90% of all businesses and employ half the global workforce. When AI adoption scales across that base, the economic ripple effect is enormous.
>
> The businesses that will lead aren't just the ones adopting AI fastest. They're the ones pairing it with upskilled teams and genuine relationship-building.
>
> Are you actively upskilling your team around AI — or still figuring out where to start?
>
> #SmallBusiness #ArtificialIntelligence #Entrepreneurship

---

**Tweet thread generated (8 tweets):**

> 1/ AI isn't just a tool for small businesses anymore — it's a strategic asset. A new LinkedIn report says 2026 will be a defining era for SMB adoption of AI. Here's what the data actually shows 🧵
>
> 2/ Half of U.S. small businesses say AI inspired them to pursue entrepreneurial paths they hadn't previously considered. That's not efficiency — that's transformation.
>
> 3/ LinkedIn has seen a 69% increase in people adding 'founder' to their profiles. AI is lowering the barrier to entrepreneurship in a real and measurable way.
>
> 4/ Most U.S. SMBs are already using AI for everyday tasks — email writing, data analysis, operations. 57% believe it will improve their daily work lives.
>
> 5/ Here's why this matters at scale: SMBs represent over 90% of all businesses and employ half the global workforce. Widespread AI adoption here = massive economic impact.
>
> 6/ But don't overlook this stat — nearly 75% of people say they verify information through someone they trust. AI won't replace authentic, community-driven credibility.
>
> 7/ The winning formula for 2026: invest in team upskilling + leverage AI effectively + prioritize relationship-building. All three. Not one or two.
>
> 8/ The real question isn't 'should we adopt AI?' It's 'are we building the trust and talent to make it work?' That's where the gap will show in 2026.

---

**Email blast generated:**

> **Subject:** Why 2026 Is AI's Defining Year for Small Business  
> **Preview:** Half of U.S. SMBs say AI inspired new entrepreneurial paths. Here's what that means.
>
> A new LinkedIn report just put hard numbers behind something many of us have been sensing: AI is no longer optional for small businesses. It's a strategic asset.
>
> **The growth signals are real** — Half of U.S. small businesses say AI inspired them to pursue entrepreneurial paths they hadn't previously considered. LinkedIn also saw a 69% jump in people adding "founder" to their profiles.
>
> **Adoption is already happening** — Most U.S. SMBs are already using AI for everyday tasks: writing emails, analyzing data, streamlining operations.
>
> **The scale of the opportunity is massive** — SMBs represent over 90% of all businesses and employ half the global workforce. When AI adoption accelerates across this base, the economic impact isn't incremental — it's transformational.
>
> **What to focus on right now:** Upskill your team, identify where AI reduces costs, and double down on trust-building with your audience.
>
> Forward this to a founder or business owner who needs to hear it.

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
