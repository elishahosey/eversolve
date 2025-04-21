# 🛠️ EverSolve To-Do List

Your personal coding dojo: tracking problems, building visuals, and leveling up problem-solving skills.

---

## 🔧 Core Features
- [🚧] Create MDX pages for LeetCode problems
- [🚧]  Setup folder structure for `puzzles`, `mathlab`, and `visuals`
- [ ] Add concept checklist section in each problem page (e.g., Used sliding window, Used hash map)
- [ ] Support YAML frontmatter for metadata (difficulty, tags, etc.)
- [ ] Build filtering by tag/difficulty (Array, Graphs, Easy, Hard)
- [ ] Add search functionality for problems
- [ ] Track solved vs unsolved status

---
## 📥 LeetCode Import Plan

- [🚧] Manually copy problems into MDX format
  - [x] Use template with `title`, `link`, `difficulty`, `tags`
  - [ ] Include code solution and personal notes
  - [ ] Add concept checklists (used sliding window, etc.)
  - [ ] Create visuals for select problems
- [ ] Create a batch of 5–10 key problems to start
- [ ] Store under `/problems/` directory
- [ ] Avoid automated scraping to comply with LeetCode’s TOS
- [🚧] Create a personal Python script using Selenium to:
  - [ ] Extract problem title, URL, and submitted code
  - [ ] Format the output into an `.mdx` template
  - [ ] Optionally save to a file for direct use in EverSolve

---

## 🎨 Visuals + Animations
- [🚧]  Add dendritic/fractal neuron animation background
- [ ] Build visuals per problem (optional `.tsx` or `.svg` per problem)
- [ ] Support animation components in MDX (e.g., Framer Motion or React Spring)
- [ ] Add fallback or static image for mobile users

---

## 📈 Learning & Notes
- [🚧]  Integrate Markdown-based notes into EverSolve
- [ ] Separate sections for:
  - [ ] Algorithm patterns (sliding window, binary search, etc.)
  - [ ] Math concepts (combinatorics, graph theory, etc.)
- [ ] Add linked notes from problem pages to concept pages
- [ ] Create Notion or local JSON sync option (optional)

---

## 📝 Content Workflow
- [ ] Manually copy key LeetCode problems into MDX format
- [ ] Use standard naming (`two-sum.mdx`, `move-zeroes.mdx`)
- [ ] Add `link:` and `tags:` metadata in each
- [ ] Optional: Include a solution timeline (first try → refined version)

---

## 📚 Docs & Housekeeping
- [🚧]  Clean up `README.md` to focus on how to run/use the app
- [x] Move all to-do and build notes to this file
- [ ] Optional: Add `CHANGELOG.md` for version tracking
- [ ] Add license and contribution guidelines (if open-sourcing later)

---

## 💡 Ideas
- [ ] Add streak or heatmap view for motivation
- [ ] Integrate code editor for trying problems inside app
- [ ] Add export option (PDF or markdown bundle)
- [ ] Consider showcasing hardest solved problems as a portfolio

---

