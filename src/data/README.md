# RoleMate Career & Education Database — Part 1 (Foundation)

`src/data/careerDatabase.js` is a new, standalone data module. **It does not modify or replace
anything in `App.jsx`.** The existing Roadmap and Career Finder keep working exactly as before —
this file is the foundation for wiring a deeper Roadmap and an Adaptive Career Finder in later parts.

## What's in it

**539 nodes** across a real hierarchy:

```
Stage → Domain → Field / EducationPath → Specialization / Career
```

Example — the case the spec calls out explicitly:

```
After 12th → Healthcare → MBBS (EducationPath) → Orthopedic Surgery (Specialization)
```

A student never sees "Orthopedic Surgeon" as an option directly after 12th — it only appears as a
child of MBBS, reached through `childrenOf("health-medicine-mbbs")` or `ancestorsOf(id)`.

### Coverage by category (all from the spec)

| Category | Approx. nodes |
|---|---|
| After 10th (Science/Commerce/Arts streams, Diploma, ITI, Other) | 66 |
| Medicine (MBBS + 35 PG specializations) | 36 |
| Dentistry (BDS + 11 specializations) | 12 |
| Nursing & Allied Health | 24 |
| Engineering (12 computing + 26 core branches) | 38 |
| Technology careers (SWE, AI/ML, Data, Cyber, Cloud, etc.) | 34 |
| Commerce (Accounting, Finance, Business, Economics) | 34 |
| Business & Entrepreneurship | 23 |
| Arts & Humanities (7 subject groups) | 53 |
| Law | 16 |
| Design & Creative | 23 |
| Digital & Freelancing | 24 |
| Creator Economy | 18 |
| Education & Academia (school/higher-ed/research/17 subject professors) | 32 |
| Government & Public Service | 13 |
| Defence | 10 |
| Agriculture & Environment | 17 |
| Aviation | 9 |
| Hospitality & Tourism | 10 |
| Sports & Fitness | 12 |
| Skilled Trades (ITI + additional) | 21 |
| Performing Arts & Music (Singer, Dancer, Actor, Musician, etc.) | 10 |

Every ID is stable and independent of the display title (e.g. `health-medicine-orthopedics`,
`tech-career-software-engineer`, `biz-entrepreneur-startup-founder`).

## Node shape

```js
{
  id, parentId, stage, type, title, domain, category, subCategory,
  description, simpleExplanation, suitableStages, educationPath, eligibility,
  entranceExams, degrees, specializations, subjects, skills, activities,
  interests, strengths, workStyles, environments, values, relatedCareers,
  nextPaths, higherStudies, earning, challenges, advantages, tags,
  mathLevel, biologyLevel, technologyLevel, creativityLevel, communicationLevel,
  leadershipLevel, researchLevel, practicalLevel, theoreticalLevel,
  peopleInteractionLevel, educationLength, riskLevel, stabilityLevel, entrepreneurshipLevel
}
```

`interests` / `activities` / `strengths` / `values` / `environments` intentionally reuse the exact
same tag vocabulary as the current `App.jsx` (`INTEREST_LABELS`, `ACTIVITY_LABELS`, etc.), so a
future Adaptive Career Finder can score against this database with zero tag-mapping work.

### `type` values

- `Domain` — a top-level grouping (e.g. "Healthcare"), not shown as a career.
- `EducationPath` / `Subject` — a stream, degree, or subject area (e.g. PCM, MBBS, Psychology-as-a-
  subject). **`earning` is `null` on these when they aren't directly employable** (PCM, Arts
  subjects) — but degrees that ARE directly employable at that stage (MBBS, B.Com, a B.Tech branch,
  a Diploma) do carry real entry-level earning data, since a diploma-holder or MBBS graduate can
  genuinely go straight to work.
- `Specialization` — reached only through a parent (e.g. Cardiology under MBBS, Orthodontist under
  BDS). Always has real earning data.
- `Career` — a directly reachable, real job/role. Always has real earning data.

### Earning data

Three shapes, matching the spec:

```js
earning: { country: "India", type: "salary",   range: "₹4 LPA – ₹1.2 Cr+", note: "..." }
earning: { country: "India", type: "business",  range: "Variable",          note: "..." }   // entrepreneurship
earning: { country: "India", type: "creator",   range: "₹0 – Unlimited (∞)", note: "..." }  // creator economy
earning: { country: "India", type: "freelance", range: "₹15,000 – ₹2 LPA/month equivalent", note: "..." }
```

No invented precision, no guarantees — every entry includes a `note` explaining what the range
depends on.

## Helper functions exported

```js
import {
  CAREER_DB, STAGE_IDS, NODE_TYPES,
  getNode, childrenOf, ancestorsOf, domainsOf, nodesByStage, careersOnly,
  searchDatabase, validateDatabase,
} from "./data/careerDatabase.js";

getNode("health-medicine-orthopedics");        // -> the node
childrenOf("health-medicine-mbbs");             // -> all 35 specializations under MBBS
ancestorsOf("health-medicine-orthopedics");     // -> [Healthcare, MBBS]
domainsOf(STAGE_IDS.AFTER_10TH);                // -> top-level After-10th domains
searchDatabase("cardio");                       // -> [Cardiology]
validateDatabase();                             // -> [] if no dangling parentIds / bad stages
```

## Verified

- `validateDatabase()` returns **0 problems**: every `parentId` resolves, every `stage` is valid,
  539/539 IDs are unique.
- All 425 Career/Specialization nodes have non-empty scoring tags (an earlier pass had 47 medical/
  dental specializations with zero tags — patched, verified in Node).
- Confirmed with `vite build` (multiple times through this integration) that everything bundles
  cleanly.

## Status: wired into the app

As of this update, this database **is live in the app**, not just a standalone foundation:
- **Roadmap**: After 10th and After 12th now browse this database directly (Domain → Field →
  Specialization → Career, with real drill-down — e.g. Healthcare → MBBS → 35 specializations).
  After College / After M.Tech / After PhD still use the original `STAGES` data in `App.jsx`
  (not yet ported — see "Not done" below).
- **Career Finder**: all 425 Career/Specialization nodes are auto-converted into scoring profiles
  (`DB_AUTO_PROFILES` in `App.jsx`) and merged with the original hand-authored profiles for
  College/M.Tech/PhD (the old after10/after12 profiles were retired since the DB supersedes them).
  Results are de-duplicated by field name so the same career doesn't appear twice.
- **Search**: the search overlay now queries both this database and the remaining old-stage data.
- **Bookmarks**: `localStorage`-backed, work across both data sources.
- **PDF export**: results can be exported from the Career Finder results screen (lazy-loads `jspdf`
  on click, so it doesn't add to the main bundle).

## Not done (known gaps, honestly listed)

- After College / After M.Tech / After PhD are NOT yet ported into this database — they still run
  on the original `STAGES` data in `App.jsx`, which is why the Roadmap's depth is uneven across
  stages right now (very deep for 10th/12th, same as before for the later three).
- The main JS bundle is ~950KB (mostly this 539-node database, ~650KB of it). It works, but a
  lazy-load-by-stage pass would meaningfully shrink initial load time — not done here due to time,
  flagged as the top follow-up.
- Not every single bullet in the original spec got a hand-written unique paragraph — every category
  has real depth, but the architecture (copy-paste-edit a `mk(...)` call) makes deepening any one
  category a small, low-risk task rather than a redesign.
