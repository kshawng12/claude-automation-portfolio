# Newsletter Automation

**Fully automated newsletter pipeline — from topic to inbox.**

You give it a topic. It researches the web, writes the newsletter in your brand voice, generates custom images and charts, and delivers it to your subscribers. No copywriting. No manual formatting. No chasing down images.

---

## The Problem

Creating a high-quality newsletter takes hours: researching sources, synthesizing the key insights, writing in your voice, designing the layout, generating visuals, and finally sending. Most creators either burn out doing it manually or settle for generic, forgettable content.

## The Solution

A 10-step automated pipeline that handles every part of the process:

1. **Topic deduplication** — checks your history so you never repeat yourself
2. **Multi-angle research** — runs parallel searches for trends, stats, expert takes, and controversies
3. **Deep source scraping** — pulls full article content from top sources, not just snippets
4. **AI synthesis** — Claude structures a complete newsletter in your brand voice and tone
5. **Chart generation** — produces branded data visualizations automatically
6. **Image generation** — creates DALL-E images matched to your visual identity
7. **Cloud hosting** — uploads all assets to Cloudinary with permanent URLs
8. **HTML rendering** — compiles a cross-client responsive email via MJML
9. **Test send** — delivers to seed mailboxes for human review before production
10. **Subscriber delivery** — sends via Gmail or Beehiiv; logs everything to Google Sheets

---

## Sample Output

→ [View sample newsletter HTML](sample_output.html)

*(Opens in browser — shows full rendered email with brand styling, hero image, data chart, and CTA)*

---

## What You Provide

| Input | Example |
|---|---|
| Topic | "How AI is changing small business hiring" |
| CTA link | Your website, product page, or latest post |
| Delivery method | Gmail (direct send) or Beehiiv (subscriber platform) |
| Send timing | Now, scheduled datetime, or draft only |

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Claude (Sonnet) | Research synthesis, writing, structure |
| Tavily API | Web research — 8 parallel searches per issue |
| FireCrawl | Full-page scraping of top sources |
| DALL-E 3 | Custom hero and section images |
| Matplotlib | Branded data charts |
| Cloudinary | Permanent image hosting |
| MJML | Responsive email HTML rendering |
| Gmail API / Beehiiv API | Subscriber delivery |
| Google Sheets API | Issue logging and topic history |

---

## Results

- **Time saved:** ~3–4 hours per issue reduced to ~10 minutes of human review
- **Consistency:** Every issue follows the same research-to-delivery pipeline
- **Quality floor:** Multi-source research + brand voice rules produce on-brand copy every time

---

## Built With

WAT Framework — Workflows, Agents, Tools. Claude handles reasoning; Python handles execution.
