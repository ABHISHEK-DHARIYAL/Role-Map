import React, { useState, useMemo, useEffect, useCallback, createContext, useContext } from "react";
import {
  ArrowLeft, ArrowRight, Compass, Search, ChevronRight, X, Sun, Moon, Pencil, Check, Bookmark, BookmarkCheck, Download, Layers,
} from "lucide-react";
import {
  STAGE_IDS as DB_STAGE_IDS, getNode as dbGetNode, childrenOf as dbChildrenOf,
  ancestorsOf as dbAncestorsOf, domainsOf as dbDomainsOf, careersOnly as dbCareersOnly, searchDatabase as dbSearch,
} from "./data/careerDatabase.js";

/* ============================== THEME ============================== */
// Two palettes sharing the same keys — every screen/component already reads colors
// exclusively through these keys, so swapping LIGHT <-> DARK re-themes the whole app.
const LIGHT = {
  paper: "#EAE2CC", paperDeep: "#DED2B0", card: "#F8F3E4",
  ink: "#232C24", inkSoft: "#5B6659", trail: "#4B6455",
  trailDeep: "#334A3A", rust: "#BD5B38", gold: "#A9823D",
  overlay: "rgba(35,44,36,0.55)", shadow: "rgba(35,44,36,0.25)",
};
const DARK = {
  paper: "#181A16", paperDeep: "#232620", card: "#20231E",
  ink: "#EDE7D6", inkSoft: "#A7A492", trail: "#7FA087",
  trailDeep: "#4C6F58", rust: "#E08A5F", gold: "#DFB35B",
  overlay: "rgba(0,0,0,0.6)", shadow: "rgba(0,0,0,0.45)",
};
const THEME_KEY = "role-map-theme";

const ThemeContext = createContext({ mode: "light", C: LIGHT, toggleTheme: () => {} });
function useTheme() { return useContext(ThemeContext); }

function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch {}
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches) return "dark";
    return "light";
  });

  useEffect(() => {
    try { localStorage.setItem(THEME_KEY, mode); } catch {}
    if (typeof document !== "undefined") document.documentElement.dataset.theme = mode;
  }, [mode]);

  const toggleTheme = useCallback(() => setMode((m) => (m === "light" ? "dark" : "light")), []);
  const C = mode === "dark" ? DARK : LIGHT;
  const value = useMemo(() => ({ mode, C, toggleTheme }), [mode, C, toggleTheme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

function ThemeToggle({ size = "md" }) {
  const { mode, toggleTheme, C } = useTheme();
  const dim = size === "sm" ? 32 : 38;
  return (
    <button
      onClick={toggleTheme}
      aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center justify-center rounded-full flex-shrink-0"
      style={{ width: dim, height: dim, background: C.card, border: `1px solid ${C.paperDeep}`, color: C.ink }}
    >
      {mode === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
const FONT = { display: "'Fraunces', serif", body: "'Inter', sans-serif", mono: "'Space Mono', monospace" };

/* ============================== DATA MODEL ============================== */
// f() builds a field with sane defaults so each entry only states what applies.
const f = (id, name, blurb, o = {}) => ({
  id, name, blurb,
  subjects: [], suitableFor: [], eligibility: "", duration: "",
  exams: [], degrees: [], skills: [], careers: [], leadsTo: [],
  higherStudies: [], govt: [], priv: [], advantages: [], challenges: [],
  nextPaths: [], earning: null, ...o,
});
const g = (id, title, blurb, fields) => ({ id, title, blurb, fields });
const s = (id, code, title, blurb, groups) => ({ id, code, title, blurb, groups });

const STAGES = [
  /* ---------------------------- AFTER 10TH ---------------------------- */
  s("after10", "01", "After 10th Standard",
    "Your first real fork in the road. The stream and path you pick now shapes what's easy to study next — but almost nothing here is a one-way door.",
    [
      g("sci10", "Science", "For students who enjoy how and why things work — numbers, experiments, logic.", [
        f("pcm", "PCM (Physics, Chemistry, Maths)",
          "The classic science combination for anyone who might want to build things, code, or work with numbers and machines.", {
          earning: "Not a career yet — opens Engineering/Defence/Pure Science (₹4 LPA – ₹1.5 Cr+ later, role-dependent)",
          subjects: ["Physics", "Chemistry", "Mathematics", "English", "one optional (often Computer Science)"],
          suitableFor: ["Likes solving numerical and logical problems", "Curious about how machines, structures or systems work"],
          eligibility: "Pass 10th with reasonable marks in Maths and Science (most schools ask for 60%+ in these).",
          duration: "2 years (11th + 12th)",
          exams: ["No entrance exam needed for 11th itself — it's chosen after 10th results"],
          degrees: ["Leads to B.Tech/B.E., B.Arch, B.Sc., Defence academies later"],
          skills: ["Problem-solving", "Analytical thinking", "Basic proofs and calculations"],
          careers: ["Not a career yet — this is a subject choice that opens engineering, architecture, defence and pure sciences after 12th"],
          leadsTo: ["PCM (11th–12th)", "Engineering / Architecture entrance exams", "B.Tech or B.Arch", "Engineering career"],
          higherStudies: ["After 12th: Engineering, Architecture, B.Sc., Defence"],
          advantages: ["Keeps the widest range of options open (engineering, defence, pure science)"],
          challenges: ["Maths-heavy — needs consistent practice, not just last-minute revision"],
          nextPaths: [{ label: "See what PCM leads to after 12th → Engineering", stageId: "after12", fieldId: "eng-cs" }],
        }),
        f("pcb", "PCB (Physics, Chemistry, Biology)",
          "The science combination for students interested in the human body, health, and living systems — the usual route toward medicine.", {
          earning: "Not a career yet — opens Medicine/Healthcare (₹6 LPA – ₹80 LPA+ later, role-dependent)",
          subjects: ["Physics", "Chemistry", "Biology", "English", "one optional"],
          suitableFor: ["Interested in how the body and living things work", "Comfortable with detailed memorising alongside concepts"],
          eligibility: "Pass 10th with good marks in Science.",
          duration: "2 years (11th + 12th)",
          degrees: ["Leads to MBBS, BDS, nursing, pharmacy, allied health after 12th + NEET"],
          skills: ["Observation", "Memory-based learning", "Scientific reasoning"],
          leadsTo: ["PCB (11th–12th)", "NEET", "MBBS/BDS/Nursing/Pharmacy", "Healthcare career"],
          higherStudies: ["After 12th: MBBS, BDS, BAMS, BHMS, Nursing, Pharmacy, Allied Health"],
          advantages: ["Direct route into every healthcare profession"],
          challenges: ["NEET is highly competitive — needs early, sustained preparation"],
          nextPaths: [{ label: "See where PCB leads → Medicine & Healthcare", stageId: "after12", fieldId: "med-mbbs" }],
        }),
        f("pcmb", "PCMB (Physics, Chemistry, Maths & Biology)",
          "Taking both Maths and Biology together — keeps engineering and medical entrance routes open at the same time, at the cost of a heavier workload.", {
          earning: "Not a career yet — keeps both the PCM and PCB earning ranges open",
          subjects: ["Physics", "Chemistry", "Maths", "Biology", "English"],
          suitableFor: ["Genuinely undecided between engineering and medicine", "Comfortable with a heavier study load"],
          eligibility: "Same as PCM/PCB; offered only in some schools.",
          duration: "2 years (11th + 12th)",
          advantages: ["Doesn't force the medicine-vs-engineering decision at 15–16"],
          challenges: ["Five subjects is demanding; not every school offers this combination"],
          nextPaths: [{ label: "Compare with PCM", stageId: "after10", fieldId: "pcm" }, { label: "Compare with PCB", stageId: "after10", fieldId: "pcb" }],
        }),
        f("sci-cs", "Science with Computer Science",
          "PCM (or sometimes PCB) plus Computer Science as an additional subject — a head start for anyone drawn to coding.", {
          earning: "Not a career yet — an early step toward tech roles (₹4 LPA – ₹1.5 Cr+ later)",
          subjects: ["Physics", "Chemistry", "Maths", "Computer Science", "English"],
          suitableFor: ["Enjoys logic puzzles or has already tried some coding"],
          duration: "2 years (11th + 12th)",
          skills: ["Basic programming", "Logical structuring of problems"],
          advantages: ["Early exposure to programming before choosing a CS-related degree"],
          nextPaths: [{ label: "See Computer Science Engineering", stageId: "after12", fieldId: "eng-cs" }],
        }),
      ]),
      g("com10", "Commerce", "For students interested in money, business, and how organisations run.", [
        f("com-maths", "Commerce with Mathematics",
          "Business subjects plus Maths — keeps options like CA, CFA, economics and business analytics open.", {
          earning: "Not a career yet — opens CA/Finance/Economics (₹3 LPA – ₹60 LPA+ later)",
          subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "English"],
          suitableFor: ["Interested in business and also comfortable with numbers"],
          duration: "2 years (11th + 12th)",
          leadsTo: ["12th Commerce", "B.Com / BBA / Economics", "CA / CFA / Finance career"],
          higherStudies: ["B.Com, BBA, Economics (Hons), CA/CS/CMA"],
          nextPaths: [{ label: "See Commerce & Finance after 12th", stageId: "after12", fieldId: "com-bcom" }],
        }),
        f("com-no-maths", "Commerce without Mathematics",
          "The same business foundation, without Maths — a common choice for students planning B.Com, BBA or CS/CA-style careers that lean less on advanced maths.", {
          earning: "Not a career yet — opens B.Com/BBA-style roles (₹3 LPA – ₹30 LPA+ later)",
          subjects: ["Accountancy", "Business Studies", "Economics", "an optional (often Informatics Practices)", "English"],
          suitableFor: ["Interested in business but prefers to avoid heavy Maths"],
          duration: "2 years (11th + 12th)",
          leadsTo: ["12th Commerce", "B.Com / BBA", "Business or accounting career"],
          challenges: ["Rules out a few Maths-mandatory routes like actuarial science later"],
        }),
      ]),
      g("art10", "Arts / Humanities",
          "For students curious about people, society, culture, and how the world is governed and understood.", [
        f("arts-humanities", "Arts & Humanities",
          "A broad stream covering subjects like History, Political Science, Geography, Economics, Psychology, Sociology, Languages and Fine Arts — usually 4–5 chosen together.", {
          earning: "Not a career yet — outcomes range widely, e.g. Law/Civil Services/Media (₹3 LPA – ₹1 Cr+ later)",
          subjects: ["History", "Political Science", "Geography", "Economics", "Psychology", "Sociology", "English/Languages", "Fine Arts (optional)"],
          suitableFor: ["Enjoys reading, writing and discussing ideas", "Curious about society, culture, or human behaviour"],
          eligibility: "Pass 10th; usually no subject-specific cutoff.",
          duration: "2 years (11th + 12th)",
          leadsTo: ["12th Arts", "BA / Law / Design / Journalism", "Wide range of careers — civil services, law, media, psychology, teaching"],
          higherStudies: ["BA (various), Integrated Law, Design, Journalism, Psychology"],
          advantages: ["Widest range of subjects; keeps law, design, media, civil services and academic routes open"],
          challenges: ["Often under-valued compared to Science/Commerce despite leading to strong careers — the stream itself doesn't limit outcomes"],
        }),
      ]),
      g("dip10", "Diploma / Polytechnic",
          "A 3-year technical course that replaces 11th–12th and gives you a hands-on engineering qualification directly.", [
        f("diploma", "Diploma (Polytechnic)",
          "A practical, job-focused alternative to the 11th–12th route — you study a specific engineering branch for 3 years right after 10th.", {
          earning: "₹1.8 LPA – ₹6 LPA as a junior technician/engineer; higher after lateral entry into B.Tech",
          subjects: ["Core engineering subjects for your chosen branch (Mechanical, Civil, Electrical, Electronics, Computer/IT, Automobile, and others)"],
          suitableFor: ["Wants hands-on technical training earlier, or an earlier start on working", "Prefers doing over long theory-heavy years"],
          eligibility: "Pass 10th; admission usually through state polytechnic entrance tests or merit.",
          duration: "3 years",
          exams: ["State Polytechnic/Diploma entrance exams (varies by state)"],
          degrees: ["Diploma certificate in the chosen branch"],
          skills: ["Practical, workshop-based technical skills specific to the branch"],
          careers: ["Junior technician/engineer roles in industry right after the diploma"],
          leadsTo: ["Diploma (3 yrs)", "Job as junior engineer/technician", "Lateral entry to B.Tech 2nd year (optional)", "Degree engineer"],
          higherStudies: ["Lateral entry into B.Tech 2nd year without repeating 11th–12th-style exams"],
          advantages: ["Faster route to a technical job; direct entry into B.Tech 2nd year if you want a degree later"],
          challenges: ["Fewer non-technical options later; branch chosen fairly early"],
        }),
      ]),
      g("iti10", "ITI / Vocational Education",
          "Short, skill-focused training for a specific trade — the fastest route from 10th to a working job.", [
        f("iti", "ITI (Industrial Training Institute)",
          "Trade-specific vocational training, usually 6 months to 2 years, aimed at making you job-ready in one skilled trade.", {
          earning: "₹1.2 LPA – ₹4.5 LPA for skilled trades (electrician, fitter, welder, mechanic, etc.)",
          subjects: ["One chosen trade: Electrician, Fitter, Welder, Plumber, Mechanic, COPA (computer operator), and many others"],
          suitableFor: ["Wants to start earning sooner with a hands-on skill", "Prefers a short, focused course over a long academic one"],
          eligibility: "Pass 10th (some trades accept 8th pass).",
          duration: "6 months – 2 years, depending on trade",
          degrees: ["ITI certificate (NCVT/SCVT recognised)"],
          careers: ["Skilled tradesperson — electrician, technician, mechanic, and similar roles"],
          higherStudies: ["Can pursue an Apprenticeship, or a Diploma via lateral entry afterward"],
          advantages: ["Shortest, cheapest path to a real skill and a job"],
          challenges: ["Career growth beyond the trade may need further study (like a diploma) later"],
        }),
      ]),
      g("other10", "Other Paths After 10th",
          "Careers built on a specific talent or interest rather than a traditional stream.", [
        f("agri10", "Agriculture", "Study of farming, crops, soil and food production — useful in both traditional farming and modern agri-business.", {
          earning: "Not a career yet — leads to Agricultural Sciences (₹3 LPA – ₹18 LPA later)",
          suitableFor: ["Interest in farming, environment, or food systems"],
          leadsTo: ["12th with Agriculture/Science", "B.Sc. Agriculture", "Agricultural scientist / agri-business career"],
        }),
        f("design10", "Design & Creative Arts", "Covers Fashion, Graphic Design, Animation and Multimedia — for visually and creatively inclined students.", {
          earning: "Not a career yet — leads to Design careers (₹2.5 LPA – ₹30 LPA later)",
          suitableFor: ["Enjoys drawing, design, or visual storytelling"],
          leadsTo: ["Foundation/diploma in design", "Bachelor's in Design (B.Des)", "Design career"],
        }),
        f("hospitality10", "Hospitality & Hotel Management", "Hands-on training in running hotels, restaurants and events.", {
          earning: "Not a career yet — leads to Hotel Management (₹2.5 LPA – ₹20 LPA later)",
          suitableFor: ["Enjoys working with people and organising experiences"],
          leadsTo: ["Diploma/Degree in Hotel Management", "Hospitality career in hotels, airlines, or events"],
        }),
        f("sports10", "Sports", "A path for students seriously training in a sport, alongside regular schooling or a sports-focused school.", {
          earning: "Highly variable — from small stipends to crore-level contracts and endorsements for top athletes",
          suitableFor: ["Already training seriously in a sport"],
          advantages: ["Sports quota admissions and scholarships available at many colleges"],
          challenges: ["Needs a backup academic/career plan alongside sport"],
        }),
        f("defence10", "Defence Preparation", "Early preparation for the armed forces — usually via Science stream plus NDA later.", {
          earning: "Not a career yet — leads to Armed Forces officer pay (₹6 LPA – ₹25 LPA+ with allowances & pension)",
          suitableFor: ["Interested in serving in the Army, Navy or Air Force"],
          leadsTo: ["12th (Science, for NDA)", "NDA entrance exam", "National Defence Academy", "Officer in the Armed Forces"],
        }),
      ]),
    ]),

  /* ---------------------------- AFTER 12TH ---------------------------- */
  s("after12", "02", "After 12th Standard",
    "The stream you picked in 11th–12th now turns into an actual degree — and usually an entrance exam.",
    [
      g("eng12", "Engineering & Technology",
          "4-year degrees (B.Tech/B.E.) built around a specific branch of engineering.", [
        f("eng-cs", "Computer Science / IT",
          "Studying how software, data and computers work — one of the most in-demand engineering branches today.", {
          earning: "₹4 LPA – ₹1.5 Cr+ (fresher avg ₹6–12 LPA; senior/product-company engineers ₹40 LPA – 1.5 Cr+)",
          subjects: ["Programming", "Data Structures & Algorithms", "Databases", "Operating Systems", "Networks", "AI/ML basics"],
          suitableFor: ["Enjoys logical problem-solving", "Curious about how apps, websites or AI systems are built"],
          eligibility: "12th with PCM; entrance exam rank.",
          duration: "4 years (B.Tech/B.E.)",
          exams: ["JEE Main / JEE Advanced", "State CETs", "BITSAT", "private university entrance tests"],
          degrees: ["B.Tech / B.E. in Computer Science or IT"],
          skills: ["Coding", "Problem-solving", "System design (developed over the course)"],
          careers: ["Software Engineer", "Data Engineer/Scientist", "Product roles", "Cybersecurity", "Cloud Engineer"],
          leadsTo: ["B.Tech CS", "Software Engineer", "Senior Engineer", "Tech Lead / Architect / Engineering Manager"],
          higherStudies: ["M.Tech, MS, MBA, or direct industry entry"],
          govt: ["PSU IT roles via GATE", "Government tech departments"],
          priv: ["IT services companies", "Product companies", "Startups"],
          advantages: ["High job demand across almost every industry"],
          challenges: ["Fast-changing field — needs continuous learning beyond college"],
          nextPaths: [{ label: "See what's after B.Tech", stageId: "afterCollege", fieldId: "work" }],
        }),
        f("eng-mech", "Mechanical Engineering", "Studying machines, engines, manufacturing and how physical things are designed and built.", {
          earning: "₹3 LPA – ₹40 LPA (fresher ₹3.5–6 LPA; senior design/automotive leads ₹20–40 LPA)",
          subjects: ["Thermodynamics", "Design", "Manufacturing", "Robotics basics", "Mechanics"],
          exams: ["JEE Main/Advanced", "State CETs"],
          careers: ["Design Engineer", "Manufacturing/Production Engineer", "Automotive Engineer", "Robotics Engineer"],
          leadsTo: ["B.Tech Mechanical", "Design/Production Engineer", "Senior Engineer", "Engineering Manager"],
          govt: ["Railways, Defence production, PSUs via GATE"],
        }),
        f("eng-civil", "Civil Engineering", "Studying the design and construction of buildings, roads, bridges and infrastructure.", {
          earning: "₹3 LPA – ₹35 LPA (fresher ₹3–5 LPA; senior project/structural leads ₹18–35 LPA)",
          subjects: ["Structural Engineering", "Surveying", "Construction Materials", "Environmental Engineering"],
          exams: ["JEE Main/Advanced", "State CETs"],
          careers: ["Site Engineer", "Structural Engineer", "Urban Planner", "Construction Project Manager"],
          govt: ["Public Works Department, Railways, Municipal bodies, PSUs via GATE"],
        }),
        f("eng-ee", "Electrical & Electronics Engineering", "Studying power systems, circuits, and communication technology (covers EE and ECE together).", {
          earning: "₹3.2 LPA – ₹40 LPA (fresher ₹3.5–6 LPA; senior power/telecom leads ₹20–40 LPA)",
          subjects: ["Circuits", "Signals & Systems", "Power Systems", "Communication Systems", "Embedded Systems"],
          exams: ["JEE Main/Advanced", "State CETs"],
          careers: ["Electronics/Hardware Engineer", "Power Engineer", "Telecom Engineer", "Embedded Systems Engineer"],
          govt: ["Power sector PSUs, Railways, Telecom (BSNL), via GATE"],
        }),
        f("eng-chem-biotech", "Chemical & Biotechnology Engineering", "Studying industrial chemical processes, or applying biology to create products like medicines and food tech.", {
          earning: "₹3.5 LPA – ₹35 LPA (fresher ₹4–7 LPA; senior process/pharma R&D ₹18–35 LPA)",
          subjects: ["Process Engineering", "Organic Chemistry", "Bioprocessing", "Genetics basics"],
          exams: ["JEE Main/Advanced", "State CETs"],
          careers: ["Process Engineer", "Biotech R&D", "Pharma industry roles", "Food technology"],
        }),
        f("eng-aero", "Aerospace Engineering", "Studying aircraft and spacecraft design — a specialised, smaller-intake branch.", {
          earning: "₹4 LPA – ₹40 LPA (govt/ISRO/HAL scales lower to start; private aerospace design roles higher)",
          subjects: ["Aerodynamics", "Propulsion", "Structures", "Avionics"],
          exams: ["JEE Main/Advanced (limited colleges offer this branch)"],
          careers: ["Aerospace/Design Engineer", "Roles at ISRO, HAL, aviation companies"],
          govt: ["ISRO, HAL, DRDO — via GATE or direct recruitment"],
        }),
        f("eng-webmobile", "Web & Mobile Development", "A specialisation within Computer Science focused on building websites and apps people use directly.", {
          earning: "₹3.5 LPA – ₹1 Cr+ (strong freelance/remote/startup upside on top of standard salaries)",
          subjects: ["Frontend & backend development", "Databases", "APIs", "Mobile app frameworks"],
          eligibility: "Usually a specialisation chosen within a CS/IT degree, or picked up via self-study and projects.",
          careers: ["Frontend Developer", "Backend Developer", "Full-Stack Developer", "Mobile App Developer"],
          skills: ["Coding", "Building real products end-to-end", "Debugging"],
          advantages: ["Skills are very demonstrable — a portfolio of apps/sites often matters as much as the degree"],
        }),
        f("eng-datasci", "Data Science", "Using data, statistics and code to find patterns and support decisions.", {
          earning: "₹5 LPA – ₹1.2 Cr+ (fresher ₹6–10 LPA; senior data scientists at top firms 40 LPA – 1.2 Cr+)",
          subjects: ["Statistics", "Programming (Python/R)", "Machine Learning basics", "Data visualisation"],
          eligibility: "Usually a specialisation within CS/IT/Statistics, or a postgraduate route (M.Sc./MS in Data Science).",
          careers: ["Data Analyst", "Data Scientist", "Business Intelligence roles"],
          skills: ["Statistical thinking", "Programming", "Communicating findings clearly"],
          higherStudies: ["M.Sc./MS in Data Science or Statistics"],
        }),
        f("eng-ai", "Artificial Intelligence / Machine Learning", "Building systems that learn patterns from data to make predictions or decisions.", {
          earning: "₹6 LPA – ₹1.5 Cr+ (AI/ML specialists command a premium; senior roles at top firms cross ₹1 Cr)",
          subjects: ["Maths (linear algebra, probability)", "Programming", "Machine Learning", "Deep Learning basics"],
          eligibility: "Usually a specialisation within CS/IT, often deepened at postgraduate level.",
          careers: ["ML Engineer", "AI Researcher (with higher study)", "Applied Scientist"],
          higherStudies: ["M.Tech/MS in AI/ML", "Research (PhD) for core research roles"],
          challenges: ["A fast-moving field — strong maths and continuous learning matter more than any single course"],
        }),
        f("eng-cyber", "Cybersecurity", "Protecting computer systems, networks and data from attacks and breaches.", {
          earning: "₹4 LPA – ₹80 LPA (fresher ₹4–8 LPA; senior security architects ₹40–80 LPA)",
          subjects: ["Networks", "Cryptography basics", "Ethical hacking", "System security"],
          eligibility: "Usually a specialisation within CS/IT, plus industry certifications.",
          careers: ["Security Analyst", "Penetration Tester", "Security Engineer"],
          skills: ["Attention to detail", "Systematic problem-solving", "Staying current with new threats"],
          govt: ["Government cybersecurity and defence-related roles"],
        }),
        f("eng-cloud", "Cloud & DevOps", "Managing the infrastructure that software runs on — servers, deployment, and reliability.", {
          earning: "₹5 LPA – ₹90 LPA (fresher ₹5–9 LPA; senior cloud/DevOps/SRE leads ₹40–90 LPA)",
          subjects: ["Cloud platforms (AWS/Azure/GCP)", "Networking", "Automation & scripting", "System reliability"],
          eligibility: "Usually a specialisation within CS/IT, often built through certifications and hands-on projects.",
          careers: ["Cloud Engineer", "DevOps Engineer", "Site Reliability Engineer"],
        }),
      ]),
      g("med12", "Medicine & Healthcare",
          "Degrees that lead to treating patients or supporting healthcare — eligibility and entrance requirements differ by course.", [
        f("med-mbbs", "MBBS (Medicine)", "The core medical degree to become a doctor.", {
          earning: "₹6 LPA – ₹80 LPA+ (govt scales start lower; specialists (MD/MS) and private practice earn significantly more over time)",
          subjects: ["Anatomy", "Physiology", "Pharmacology", "Pathology", "Clinical subjects"],
          eligibility: "12th with PCB.",
          duration: "5.5 years (incl. internship)",
          exams: ["NEET-UG (mandatory)"],
          degrees: ["MBBS"],
          careers: ["Doctor (General Physician)", "Specialist after postgraduate study (MD/MS)"],
          leadsTo: ["MBBS", "Internship", "MD/MS specialisation (optional)", "Practising Doctor / Specialist"],
          higherStudies: ["MD/MS (postgraduate medical specialisation)"],
          advantages: ["Respected, stable, direct path to practising medicine"],
          challenges: ["NEET is extremely competitive; the course itself is long and demanding"],
        }),
        f("med-bds", "BDS (Dental)", "The core degree to become a dentist.", {
          earning: "₹3.5 LPA – ₹25 LPA (own dental practice can exceed this considerably)",
          eligibility: "12th with PCB.", duration: "5 years (incl. internship)",
          exams: ["NEET-UG"], degrees: ["BDS"],
          careers: ["Dentist", "Oral surgeon (with further specialisation)"],
        }),
        f("med-ayush", "AYUSH (BAMS / BHMS)", "Degrees in Ayurveda or Homeopathy — alternative medicine systems recognised in India.", {
          earning: "₹3 LPA – ₹15 LPA (established private practice can be higher)",
          eligibility: "12th with PCB.", duration: "5.5 years approx.",
          exams: ["NEET-UG"], careers: ["Ayurvedic/Homeopathic Doctor"],
        }),
        f("med-nursing-pharma", "Nursing & Pharmacy", "Nursing trains you in patient care; Pharmacy trains you in medicines — both are separate professional degrees.", {
          earning: "₹2.5 LPA – ₹18 LPA (nursing pay is notably higher abroad, e.g. Gulf/UK/US)",
          eligibility: "12th with PCB (Science generally).", duration: "4 years (B.Sc Nursing / B.Pharm)",
          exams: ["Some states/colleges have entrance tests; many admit on merit"],
          careers: ["Registered Nurse", "Pharmacist", "Hospital administration (with experience)"],
          govt: ["Government hospitals, PSU pharma companies"],
        }),
        f("med-allied", "Allied Healthcare",
          "Specialised health support careers — Physiotherapy, Occupational Therapy, Medical Lab Technology, Radiology.", {
          earning: "₹2.5 LPA – ₹15 LPA (physiotherapy/lab tech/radiology; experienced private-practice higher)",
          eligibility: "12th with PCB (Science).", duration: "3–4 years depending on course",
          careers: ["Physiotherapist", "Lab Technologist", "Radiology Technician", "Occupational Therapist"],
          advantages: ["Growing demand, shorter/less competitive entry than MBBS"],
        }),
      ]),
      g("sci12", "Pure Sciences", "Degrees in a single science subject — a base for research or further specialisation.", [
        f("bsc-physical", "B.Sc. — Physics / Chemistry / Maths",
          "A focused science degree, often the first step toward research or teaching.", {
          earning: "₹3 LPA – ₹20 LPA (higher with M.Sc./PhD and research or teaching roles)",
          eligibility: "12th with Science.", duration: "3 years (or 4-year Honours)",
          exams: ["Mostly merit-based; some universities have entrance tests (e.g. CUET)"],
          careers: ["Researcher (with further study)", "Lab work", "Teaching (with B.Ed)", "Data-related roles for Maths/Stats"],
          higherStudies: ["M.Sc.", "PhD", "Research career"],
        }),
        f("bsc-cs-stats", "B.Sc. — Computer Science / Statistics",
          "A science-track (not engineering) route into computing or data analysis.", {
          earning: "₹4 LPA – ₹35 LPA",
          eligibility: "12th with Science.", duration: "3 years",
          careers: ["Software Developer", "Data Analyst", "Statistician"],
          higherStudies: ["M.Sc./MCA", "MS", "Data Science specialisation"],
        }),
      ]),
      g("com12", "Commerce & Finance", "Degrees and qualifications built around business, accounting and money.", [
        f("com-bcom", "B.Com & CA / CS / CMA",
          "A commerce degree, often paired with a professional qualification like CA for accounting and finance careers.", {
          earning: "₹3 LPA – ₹40 LPA (qualified CA: ₹7–60 LPA+; Partner-level/Big 4 much higher)",
          subjects: ["Accounting", "Taxation", "Business Law", "Economics", "Finance"],
          eligibility: "12th (any stream, Commerce preferred for CA/CMA path).", duration: "3 years (B.Com); CA/CS/CMA run in parallel, 3–5 years",
          exams: ["CA Foundation", "CS Foundation", "CMA Foundation"],
          careers: ["Chartered Accountant", "Company Secretary", "Cost Accountant", "Finance Executive", "Auditor"],
          leadsTo: ["B.Com / CA Foundation", "CA Articleship", "Qualified CA", "Senior Finance roles / Partner"],
        }),
        f("com-banking-econ", "Banking & Economics",
          "Degrees focused on financial systems, markets and economic policy.", {
          earning: "₹3.5 LPA – ₹40 LPA (Bank PO entry ₹4–8 LPA; RBI Grade B and senior analysts higher)",
          eligibility: "12th (any stream, Maths helpful).", duration: "3 years",
          careers: ["Bank PO", "Economic Analyst", "Policy Research", "Financial Analyst"],
          govt: ["Bank PO/Clerk via IBPS/SBI exams", "RBI Grade B"],
        }),
      ]),
      g("mgmt12", "Management", "Business-focused degrees for students interested in running or growing organisations.", [
        f("bba", "BBA / Business Management",
          "An undergraduate business degree covering marketing, finance, HR and operations broadly before you specialise.", {
          earning: "₹3 LPA – ₹30 LPA (MBA afterward: ₹10–80 LPA+ from top B-schools)",
          eligibility: "12th (any stream).", duration: "3 years",
          exams: ["Many colleges have their own entrance test; some accept CUET or merit"],
          careers: ["Management Trainee", "Marketing Executive", "HR Executive", "Business Analyst"],
          higherStudies: ["MBA (via CAT/XAT/CMAT)"],
        }),
        f("mgmt-product", "Product Management",
          "Deciding what a company should build next — sitting between business, design and technology.", {
          earning: "₹8 LPA – ₹1.2 Cr+ (Associate PM to Product Manager/Head of Product at top tech firms)",
          eligibility: "Usually entered after a BBA/B.Tech, often with an MBA or a few years of work experience.",
          duration: "Reached via BBA/B.Tech + experience, or an MBA",
          careers: ["Associate Product Manager", "Product Manager", "Head of Product (senior)"],
          skills: ["Communication", "Prioritisation", "Understanding both users and technology"],
          higherStudies: ["MBA is a common (not mandatory) route into product roles"],
        }),
      ]),
      g("law12", "Law", "Legal education — usually a 5-year integrated degree straight after 12th.", [
        f("law-integrated", "Integrated Law (BA LLB / BBA LLB)",
          "A 5-year degree combining a regular Bachelor's with a Law degree.", {
          earning: "₹3.5 LPA – ₹1 Cr+ (fresher litigation lower; top corporate law firm associates/partners 50 LPA – 1 Cr+)",
          eligibility: "12th (any stream).", duration: "5 years",
          exams: ["CLAT", "AILET", "other university law entrance tests"],
          careers: ["Litigation Lawyer", "Corporate Lawyer", "Legal Consultant", "Judiciary (after further exams)"],
          govt: ["Government legal services, judiciary exams"],
        }),
      ]),
      g("arts12", "Arts & Humanities", "Degrees exploring society, mind, and communication — often the base for research, civil services, media or psychology careers.", [
        f("ba-psych", "Psychology", "The study of the mind and behaviour.", {
          earning: "₹3 LPA – ₹25 LPA (clinical/counselling practice can exceed this with experience)",
          eligibility: "12th (any stream).", duration: "3 years",
          careers: ["Counsellor / Therapist (with further study)", "HR", "Research", "Academia"],
          higherStudies: ["M.A./M.Sc. Psychology, then further clinical training"],
        }),
        f("ba-journalism", "Journalism & Mass Communication", "Training in reporting, writing and media production.", {
          earning: "₹2.5 LPA – ₹30 LPA (senior editors/anchors/content leads at the higher end)",
          eligibility: "12th (any stream).", duration: "3 years",
          careers: ["Journalist", "Content Creator", "PR & Communications", "Broadcast/Digital Media"],
        }),
        f("ba-social-sciences", "Social Sciences (History, Political Science, Economics, Sociology)",
          "A strong base for civil services, research, policy work, or teaching.", {
          earning: "₹3 LPA – ₹25 LPA (IAS/IPS gross pay ₹9–25 LPA incl. allowances, plus non-monetary perks)",
          eligibility: "12th (any stream).", duration: "3 years",
          careers: ["Civil Services (after UPSC)", "Research Analyst", "Policy roles", "Teaching"],
          govt: ["UPSC Civil Services", "State PSCs"],
        }),
      ]),
      g("design12", "Design", "Creative, visually-driven degrees for product, fashion or communication design.", [
        f("design-uxproduct", "Product / UX Design", "Designing how digital products look, feel, and work for users.", {
          earning: "₹4 LPA – ₹60 LPA (fresher ₹4–7 LPA; senior/lead UX & Product Designers ₹25–60 LPA)",
          exams: ["UCEED", "NID entrance", "individual college tests"],
          careers: ["UX/UI Designer", "Product Designer"],
        }),
        f("design-fashion-graphic", "Fashion & Graphic Design", "Designing clothing, visual identity, and communication materials.", {
          earning: "₹2.5 LPA – ₹30 LPA (established designers/brand leads at the higher end)",
          exams: ["NIFT entrance", "individual college tests"],
          careers: ["Fashion Designer", "Graphic Designer", "Brand/Visual Designer"],
        }),
      ]),
      g("arch12", "Architecture", "Designing buildings and spaces — a licensed profession.", [
        f("architecture", "Architecture (B.Arch)", "A 5-year professional degree in designing buildings and spaces.", {
          earning: "₹3.5 LPA – ₹40 LPA (own practice/senior principal architects can exceed this)",
          eligibility: "12th with PCM.", duration: "5 years",
          exams: ["NATA", "JEE Main Paper 2"],
          careers: ["Architect", "Urban Designer", "Interior Architect"],
        }),
      ]),
      g("agri12", "Agriculture", "Degrees applying science to farming, food and rural development.", [
        f("agri-sciences", "Agricultural Sciences & Allied Fields", "Covers agriculture, horticulture, forestry and food technology.", {
          earning: "₹3 LPA – ₹18 LPA (ICAR/agri-scientist roles and agribusiness leadership at the higher end)",
          eligibility: "12th with Science (PCB/PCM, varies by course).", duration: "4 years (B.Sc. Agriculture)",
          careers: ["Agricultural Scientist", "Agri-business", "Food Technologist", "Forest Officer"],
          govt: ["ICAR institutes", "State agriculture departments", "Forest Service (via exam)"],
        }),
      ]),
      g("defence12", "Defence", "Educational and entry routes into the Armed Forces.", [
        f("defence", "Defence Entry Routes", "Multiple routes into the Army, Navy and Air Force as an officer or soldier.", {
          earning: "₹6 LPA – ₹25 LPA+ (rank-based pay, plus housing, allowances and pension — non-cash value is significant)",
          exams: ["NDA (after 12th)", "CDS (after graduation)", "Technical Entry Scheme"],
          careers: ["Armed Forces Officer"],
        }),
      ]),
      g("aviation12", "Aviation", "Training to fly commercially, or to manage airline/airport operations.", [
        f("aviation", "Aviation (Pilot Training / Aviation Management)", "Either flight training to become a commercial pilot, or a management degree for the aviation industry.", {
          earning: "₹4 LPA – ₹1 Cr+ (junior First Officers lower; senior Commercial Captains ₹80 LPA – 1 Cr+)",
          eligibility: "12th with PCM (for pilot training).",
          careers: ["Commercial Pilot", "Airport/Airline Operations", "Cabin Crew (shorter training route)"],
          challenges: ["Pilot training is expensive; research licensing costs carefully"],
        }),
      ]),
      g("hosp12", "Hospitality & Tourism", "Degrees in running hotels, tourism and events at a professional level.", [
        f("hotel-mgmt", "Hotel Management & Tourism", "Professional training in hospitality operations, tourism and events.", {
          earning: "₹2.5 LPA – ₹20 LPA (General Manager and international hotel-chain roles at the higher end)",
          exams: ["NCHM JEE (for top hotel management institutes)"],
          careers: ["Hotel Management roles", "Tourism/Travel roles", "Event Management"],
        }),
      ]),
      g("edu12", "Education", "Pathways into teaching as a profession.", [
        f("education", "Teaching & Education Degrees", "Degrees and training that lead to becoming a school or college teacher.", {
          earning: "₹2.5 LPA – ₹18 LPA (school teaching); Professors with a PhD earn more, especially at senior grades",
          eligibility: "Graduation required for B.Ed (usually taken after a Bachelor's, not right after 12th).",
          careers: ["School Teacher", "Academic Coordinator", "Later: Professor (with a Master's/PhD)"],
        }),
      ]),
      g("govt12", "Government Careers", "A broad category — specific eligibility and exams vary a lot by role.", [
        f("govt-overview", "Government Careers (Overview)",
          "Roles across administration, banking, defence, railways, teaching and public sector companies — each with its own exam and eligibility.", {
          earning: "₹3 LPA – ₹25 LPA (varies hugely by post — IAS/IPS/IFS and RBI Grade B sit at the top end)",
          govt: ["UPSC (after graduation)", "SSC", "Banking (IBPS/SBI)", "Railways", "State PSCs", "Defence"],
          challenges: ["Eligibility, age limits and exams vary a lot by post — always check the specific notification"],
        }),
      ]),
    ]),

  /* ---------------------------- AFTER COLLEGE ---------------------------- */
  s("afterCollege", "03", "After College (Undergraduate)",
    "Four broad directions from here: start working, study further, aim for government service, or build something of your own.",
    [
      g("work-group", "Start Working", "Enter the job market directly with your undergraduate degree.", [
        f("work", "Direct Job / Industry Role",
          "Taking up a job right after graduation — through campus placement or direct applications.", {
          earning: "Entirely role- and company-dependent — roughly ₹3 LPA – ₹1 Cr+ across industries",
          careers: ["Private companies & MNCs", "Startups", "Core industry roles", "Software/Technology", "Consulting", "Finance", "Operations & Sales"],
          advantages: ["Income and real-world experience start immediately"],
          challenges: ["Specialisation happens on the job rather than through further study"],
          nextPaths: [{ label: "Consider higher studies later", stageId: "afterCollege", fieldId: "pg-technical" }],
        }),
      ]),
      g("pg-group", "Higher Studies", "Postgraduate study to specialise further or pivot fields.", [
        f("pg-technical", "M.Tech / MS / M.Sc.",
          "Technical postgraduate study — deepens expertise in engineering or science.", {
          earning: "Typically lifts fresher pay — M.Tech/MS graduates commonly start at ₹6–40 LPA",
          exams: ["GATE (for M.Tech in India)", "GRE (for MS abroad)"],
          careers: ["R&D roles", "Specialist engineering roles", "Research"],
          nextPaths: [{ label: "See what's after M.Tech", stageId: "afterMTech", fieldId: "mtech-industry" }],
        }),
        f("pg-mba-mca", "MBA / MCA",
          "MBA builds management and leadership skills; MCA is a computing postgraduate degree for non-engineering graduates.", {
          earning: "MBA: ₹8 LPA – ₹80 LPA+ from top B-schools; MCA: ₹4 LPA – ₹25 LPA",
          exams: ["CAT/XAT/CMAT (MBA)", "NIMCET or university tests (MCA)"],
          careers: ["Management roles", "Software roles (MCA)"],
        }),
        f("pg-humanities", "MA / M.Ed. / Law / PhD",
          "Postgraduate study in humanities, education, law or research — often the base for academia, civil services or specialised legal practice.", {
          earning: "₹3 LPA – ₹25 LPA depending on path (academia, law, civil services, research)",
          careers: ["Academic career", "Teaching", "Legal practice", "Research"],
          nextPaths: [{ label: "See PhD paths", stageId: "afterMTech", fieldId: "mtech-phd" }],
        }),
      ]),
      g("govt-group", "Government Careers", "Public service roles — eligibility depends on the specific exam and post.", [
        f("govt-college", "Government Careers After Graduation",
          "A graduate degree opens up a wide range of government exams and roles.", {
          earning: "₹3 LPA – ₹25 LPA depending on the specific exam/post cleared",
          govt: ["UPSC Civil Services", "State PSC", "SSC", "Banking", "Railways", "Defence (CDS)", "Teaching (after B.Ed)"],
          challenges: ["Not every graduate is eligible for every exam — always check the specific post's eligibility"],
        }),
      ]),
      g("prof-group", "Professional Qualifications", "Certifications that build specialised, recognised expertise on top of a degree.", [
        f("prof-quals", "Professional & Technical Certifications",
          "Qualifications like CA, CS, CMA, CFA, or technology certifications (cloud, data, AI) that add specific, verifiable expertise.", {
          earning: "CA/CS/CMA: ₹7 LPA – ₹60 LPA+; CFA: ₹6 LPA – ₹50 LPA+; cloud/data/AI certifications: ₹6 LPA – ₹40 LPA",
          careers: ["Chartered Accountant / Company Secretary / Cost Accountant", "Financial Analyst (CFA)", "Cloud/Data/AI certified roles"],
          advantages: ["Signals specific expertise employers can verify directly"],
        }),
      ]),
      g("entre-group", "Entrepreneurship", "Building your own venture instead of, or alongside, a job.", [
        f("entrepreneurship-college", "Starting a Company",
          "Building a startup, freelance practice, or family business — usually strongest with a validated idea and some initial experience.", {
          earning: "₹0 – Unlimited (∞) — income depends entirely on the business; many early founders draw no salary at first",
          advantages: ["Full ownership and direction over what you build"],
          challenges: ["Higher risk and uncertainty than a job; needs funding, resilience and often a co-founder"],
        }),
      ]),
      g("intl-group", "International Opportunities", "Studying or working outside India.", [
        f("international-college", "Master's / Jobs Abroad",
          "Pursuing a Master's degree, research, or a job opportunity in another country.", {
          earning: "Varies widely by country — often 2–5x equivalent Indian salaries pre-tax, offset by cost of living",
          exams: ["GRE/GMAT + English tests (IELTS/TOEFL) for study; visa and work-permit processes for jobs"],
          challenges: ["Costs, visas and job markets vary widely by country — research the specific country and course carefully"],
        }),
      ]),
    ]),

  /* ---------------------------- AFTER M.TECH ---------------------------- */
  s("afterMTech", "04", "After M.Tech",
    "Specialised enough now to go deep in industry, research, or both.",
    [
      g("mtech-ind-group", "Industry", "Applying your specialisation directly in a company.", [
        f("mtech-industry", "Core & Product Industry Roles",
          "Specialist roles in software, core engineering, or R&D that use your M.Tech specialisation directly.", {
          earning: "₹8 LPA – ₹1.2 Cr+ (specialist R&D/product roles command a real premium over a plain B.Tech)",
          careers: ["R&D Engineer", "AI/ML Engineer", "Embedded Systems Engineer", "Product companies", "Semiconductor roles"],
          advantages: ["Specialisation often means better pay and more focused, senior-track roles"],
        }),
      ]),
      g("mtech-research-group", "Research", "Working in a research role without necessarily doing a PhD.", [
        f("mtech-research", "Research Engineer / Scientist Roles",
          "Applied research roles in industry or national labs that build on your thesis work.", {
          earning: "₹6 LPA – ₹40 LPA (government/national labs lower; private industry R&D higher)",
          careers: ["Research Engineer", "Applied Scientist"],
          govt: ["DRDO", "ISRO", "CSIR labs", "BARC"],
        }),
      ]),
      g("mtech-phd-group", "PhD", "Going deeper into a single research question over several years.", [
        f("mtech-phd", "Pursuing a PhD",
          "A research degree where you investigate an original question in depth, usually over 4–6 years, ending in a thesis.", {
          earning: "Stipend of roughly ₹31,000 – ₹42,000/month during the PhD (JRF/SRF-linked norms); career earnings follow after",
          subjects: ["Coursework (early years)", "Original research", "Publications", "Thesis writing"],
          eligibility: "M.Tech/M.Sc. (or an excellent B.Tech in some programmes) plus a written/interview admission process.",
          duration: "4–6 years typically",
          careers: ["Sets up academia, research scientist, or advanced R&D roles"],
          nextPaths: [{ label: "See what's after PhD", stageId: "afterPhD", fieldId: "phd-academia" }],
        }),
      ]),
      g("mtech-teach-group", "Teaching / Academia", "Teaching at a college or university level.", [
        f("mtech-teaching", "Lecturer / Assistant Professor",
          "Teaching roles at engineering colleges — a PhD is usually needed for permanent university-level positions.", {
          earning: "₹5 LPA – ₹20 LPA as Lecturer; increases substantially as Assistant/Associate Professor with a PhD",
          careers: ["Lecturer (with M.Tech)", "Assistant Professor (usually needs PhD)"],
        }),
      ]),
      g("mtech-govt-group", "Government / PSU / Research Orgs", "Public sector and government research opportunities.", [
        f("mtech-govt", "PSU & Government Research Roles",
          "Technical roles in public sector companies and government research organisations.", {
          earning: "₹6 LPA – ₹20 LPA (PSU/DRDO/ISRO/BARC pay scales plus allowances)",
          govt: ["PSUs via GATE score", "DRDO", "ISRO", "BARC", "national research labs"],
        }),
      ]),
      g("mtech-entre-group", "Entrepreneurship", "Technical or research-based startups.", [
        f("mtech-entrepreneurship", "Technical Entrepreneurship",
          "Founding a startup built on deep technical or research expertise — common in deep-tech and hardware.", {
          earning: "₹0 – Unlimited (∞) — deep-tech founder income depends entirely on the venture",
          advantages: ["Deep specialisation is a real edge in technical/deep-tech startups"],
        }),
      ]),
      g("mtech-intl-group", "International Opportunities", "Research or industry roles abroad.", [
        f("mtech-international", "Research / Industry Abroad",
          "Continuing research (like a PhD abroad) or taking up a specialist industry role in another country.", {
          earning: "Varies by country — often 2–4x equivalent Indian pay for specialist roles",
          exams: ["GRE + English tests, university-specific applications"],
        }),
      ]),
    ]),

  /* ---------------------------- AFTER PHD ---------------------------- */
  s("afterPhD", "05", "After PhD",
    "The path forks between building knowledge and applying it at scale.",
    [
      g("phd-academia-group", "Academia", "Teaching and research at a university.", [
        f("phd-academia", "Professor / Academic Career",
          "Postdoc first, then typically Assistant Professor, moving up through research output, grants, and teaching.", {
          earning: "₹7 LPA – ₹35 LPA (Assistant to Senior Professor, govt pay scale + research grants)",
          leadsTo: ["Postdoc", "Assistant Professor", "Associate Professor", "Professor / Research Chair"],
          skills: ["Grant writing", "Mentoring students", "Publishing", "Teaching"],
          advantages: ["Freedom to pursue your own research questions long-term"],
          challenges: ["Academic positions are competitive; income growth is often slower than industry"],
        }),
      ]),
      g("phd-research-group", "Research", "Research-focused roles outside a teaching post.", [
        f("phd-research", "Research Scientist / Postdoctoral Research",
          "Full-time research roles at universities, government labs, or private research organisations.", {
          earning: "₹6 LPA – ₹40 LPA (postdoc stipends lower; Principal Investigator roles higher over time)",
          careers: ["Postdoctoral Researcher", "Research Scientist", "Principal Investigator (over time)"],
        }),
      ]),
      g("phd-industry-group", "Industry R&D", "Applying deep research skills inside a company.", [
        f("phd-industry", "Industry Research Scientist",
          "Research roles inside companies — AI/ML labs, semiconductor R&D, biotech, or advanced engineering teams.", {
          earning: "₹10 LPA – ₹1.5 Cr+ (industry research scientists, especially in AI/biotech, at the top end)",
          careers: ["Research Scientist (industry)", "Principal Engineer / Technical Lead"],
          advantages: ["Often better-resourced and faster-paced than academic research, with real-world application"],
        }),
      ]),
      g("phd-govt-group", "Government Research", "Research roles in national labs and institutes.", [
        f("phd-govt", "Government / National Lab Research",
          "Research positions at national institutes — eligibility and roles vary by organisation.", {
          earning: "₹7 LPA – ₹25 LPA (ISRO/DRDO/CSIR national-lab scientist pay scales)",
          govt: ["ISRO", "CSIR", "DRDO", "and international equivalents"],
        }),
      ]),
      g("phd-consult-group", "Consulting", "Advising organisations using deep subject expertise.", [
        f("phd-consulting", "Research & Technical Consulting",
          "Advising companies or governments on technical decisions using your specialised research background.", {
          earning: "₹10 LPA – ₹60 LPA+ (deep domain-expertise consulting commands a premium)",
          careers: ["Technical Consultant", "Strategy roles requiring deep domain expertise"],
        }),
      ]),
      g("phd-entre-group", "Entrepreneurship", "Founding a company built on your research.", [
        f("phd-entrepreneurship", "Deep-Tech / Research-Based Startups",
          "Founding a company that commercialises your own research — common in biotech, AI, and materials science.", {
          earning: "₹0 – Unlimited (∞) — deep-tech/biotech founder income depends entirely on the venture",
          advantages: ["Rare, defensible expertise as a founder"],
          challenges: ["Business skills (fundraising, hiring, sales) usually need to be learned separately"],
        }),
      ]),
      g("phd-sci-comm-group", "Science / Technical Communication", "Explaining research to wider audiences.", [
        f("phd-sci-comm", "Science Communication & Technical Writing",
          "Translating complex research into clear writing for the public, policymakers, or other researchers.", {
          earning: "₹4 LPA – ₹25 LPA (science writers, technical writers, policy communicators)",
          careers: ["Science Writer", "Technical Writer", "Policy Research Communicator"],
        }),
      ]),
      g("phd-ip-group", "Intellectual Property", "Working with patents and technology transfer.", [
        f("phd-ip", "Patents & Technology Transfer",
          "Helping researchers and companies protect and license new inventions.", {
          earning: "₹6 LPA – ₹30 LPA (patent analysts/agents, technology transfer officers)",
          careers: ["Patent Analyst/Agent", "Technology Transfer Officer"],
        }),
      ]),
      g("phd-intl-group", "International Research Careers", "Research roles in other countries.", [
        f("phd-intl", "Postdoc / Research Abroad",
          "Continuing research at a university or lab in another country.", {
          earning: "Varies by country — postdocs abroad often earn roughly $45k–$75k/year (~₹37L–62L)",
          challenges: ["Visa, funding, and position availability vary a lot by country — research early"],
        }),
      ]),
    ]),
];

/* ============================== HELPERS ============================== */
const STAGE_SHORT = { after10: "10th", after12: "12th", afterCollege: "College", afterMTech: "M.Tech", afterPhD: "PhD" };
function shortName(stage) { return stage.short || STAGE_SHORT[stage.id] || stage.title; }
function findFieldMeta(fieldId) {
  for (const stage of STAGES) {
    for (const group of stage.groups) {
      const field = group.fields.find((x) => x.id === fieldId);
      if (field) return { field, group, stage };
    }
  }
  return null;
}
function allFieldsFlat() {
  const out = [];
  for (const stage of STAGES) {
    // after10/after12 now browse through the career database (see StageScreen) — the old
    // hand-authored fields for those two stages are superseded and excluded here to avoid
    // showing duplicate/inconsistent results in search.
    if (stage.id === DB_STAGE_IDS.AFTER_10TH || stage.id === DB_STAGE_IDS.AFTER_12TH) continue;
    for (const group of stage.groups)
      for (const field of group.fields)
        out.push({ field, group, stage });
  }
  return out;
}

/* ------------------------ Career Database adapter ------------------------ */
// Converts a careerDatabase.js node into the exact shape FieldScreen already
// renders, plus a couple of extra fields (_children, _dbNode) that DBFieldScreen
// uses for recursive drill-down. This is how the 539-node database plugs into
// the existing Roadmap UI without rewriting FieldScreen.
function formatDbEarning(earning) {
  if (!earning) return null;
  const label = earning.type === "business" ? "Business income (India)"
    : earning.type === "creator" ? "Creator income (India)"
    : earning.type === "freelance" ? "Freelance income (India)"
    : "Indicative earning range (India)";
  return { text: `${earning.range}${earning.note ? " — " + earning.note : ""}`, label };
}
function dbNodeToFieldShape(node) {
  const children = dbChildrenOf(node.id);
  const earningFmt = formatDbEarning(node.earning);
  return {
    id: node.id,
    name: node.title,
    blurb: node.description || node.simpleExplanation || "",
    earning: earningFmt ? earningFmt.text : null,
    earningLabel: earningFmt ? earningFmt.label : null,
    subjects: node.subjects || [],
    suitableFor: node.simpleExplanation ? [node.simpleExplanation] : [],
    eligibility: (node.eligibility || []).join("; "),
    duration: node.educationLength || "",
    exams: node.entranceExams || [],
    degrees: node.degrees || [],
    skills: node.skills || [],
    careers: [],
    leadsTo: node.educationPath && node.educationPath.length ? node.educationPath : [],
    higherStudies: node.higherStudies || [],
    govt: [], priv: [],
    advantages: node.advantages || [],
    challenges: node.challenges || [],
    nextPaths: [],
    _dbChildren: children,
    _dbInformationalNext: node.nextPaths || [],
    _dbNode: node,
  };
}
function dbBreadcrumbChain(nodeId) {
  return [...dbAncestorsOf(nodeId), dbGetNode(nodeId)].filter(Boolean);
}

/* ============================== CAREER FINDER: DATA ============================== */
// Option label lookups (ids used by both questions and career profiles for scoring).
const INTEREST_LABELS = {
  math: "Mathematics", physics: "Physics", chemistry: "Chemistry", biology: "Biology",
  "computer-science": "Computer Science", economics: "Economics", business: "Business",
  accounting: "Accounting", psychology: "Psychology", history: "History", geography: "Geography",
  "political-science": "Political Science", languages: "Languages", literature: "Literature",
  art: "Art", design: "Design", technology: "Technology", statistics: "Statistics", research: "Research",
};
const ACTIVITY_LABELS = {
  "solve-problems": "Solving difficult problems", "build-things": "Building things", programming: "Programming",
  "work-computers": "Working with computers", "analyze-info": "Analyzing information", "work-numbers": "Working with numbers",
  "help-people": "Helping people", teach: "Teaching others", "design-things": "Designing things",
  "create-content": "Creating content", writing: "Writing", research: "Researching",
  "manage-projects": "Managing projects", "lead-people": "Leading people", "work-machines": "Working with machines",
  "work-nature": "Working with nature", healthcare: "Working in healthcare", "work-business": "Working with businesses",
  "start-own": "Starting something of my own", "work-data": "Working with data",
};
const STRENGTH_LABELS = {
  logical: "Logical thinking", "problem-solving": "Problem solving", creativity: "Creativity", communication: "Communication",
  mathematics: "Mathematics", leadership: "Leadership", patience: "Patience", "attention-detail": "Attention to detail",
  research: "Research", writing: "Writing", teaching: "Teaching", organization: "Organization",
  technical: "Technical skills", people: "Working with people", "quick-learning": "Learning quickly", "hands-on": "Practical / hands-on work",
};
const VALUE_LABELS = {
  income: "Good income", stability: "Job stability", creativity: "Creativity", "helping-people": "Helping people",
  innovation: "Innovation", "work-life-balance": "Work-life balance", leadership: "Leadership",
  "intellectual-challenge": "Intellectual challenge", research: "Research", freedom: "Freedom / flexibility",
  entrepreneurship: "Entrepreneurship", "social-impact": "Social impact", international: "International opportunities",
};
const ENV_LABELS = {
  "office-tech": "Office / technology", "lab-research": "Laboratory / research", hospital: "Hospital / healthcare",
  "business-corp": "Business / corporate", "outdoor-field": "Outdoor / field work", "creative-studio": "Creative studio",
  "workshop-eng": "Workshop / engineering environment", classroom: "Classroom / education", "flexible-remote": "Flexible / remote",
};
// Q14 answers map onto the same environment tag-space so both questions feed one match set.
const WORKARR_TO_ENV = { office: "office-tech", remote: "flexible-remote", field: "outdoor-field", lab: "lab-research", hospital: "hospital" };
const CAREERPREF_TO_CATEGORY = {
  "building-tech": "technology", "treating-people": "healthcare", "understanding-how-things-work": "science",
  "managing-business": "business", "analyzing-finance": "business", designing: "creative", research: "science",
  teaching: "education", "law-policy": "law", "media-content": "creative", machines: "engineering",
  data: "technology", cybersecurity: "technology", entrepreneurship: "business", government: "law",
};

const QUESTIONS = [
  // ---- About You ----
  { id: "stage", category: "About You", question: "Where are you currently in your education?", type: "single", options: [
    { id: "after10", label: "After 10th" }, { id: "after12", label: "After 12th" }, { id: "college", label: "Undergraduate / College" },
    { id: "mtech", label: "M.Tech / Postgraduate" }, { id: "phd", label: "PhD" }, { id: "working", label: "Working" }, { id: "other", label: "Other" },
  ]},

  // ---- What You Like ----
  { id: "interests", category: "What You Like", question: "Which subjects or areas do you enjoy the most?", type: "multi", options: [
    ...Object.entries(INTEREST_LABELS).map(([id, label]) => ({ id, label })), { id: "not-sure", label: "Not sure yet" },
  ]},
  { id: "activities", category: "What You Like", question: "What kind of activities do you enjoy?", type: "multi", options: Object.entries(ACTIVITY_LABELS).map(([id, label]) => ({ id, label })) },
  { id: "problemType", category: "What You Like", question: "What type of problem sounds most satisfying to solve?", type: "single", options: [
    { id: "technical", label: "Building a technical solution" }, { id: "nature", label: "Understanding how nature/science works" },
    { id: "people", label: "Helping a person solve a problem" }, { id: "business", label: "Improving a business" },
    { id: "creative", label: "Designing something creative" }, { id: "leadership", label: "Managing people or resources" },
    { id: "research", label: "Investigating an unknown problem" }, { id: "not-sure", label: "Not sure" },
  ]},
  { id: "focus", category: "What You Like", question: "What would you rather spend most of your day working with?", type: "single", options: [
    { id: "people", label: "People" }, { id: "computers", label: "Computers / software" }, { id: "numbers", label: "Numbers / data" },
    { id: "machines", label: "Machines" }, { id: "science", label: "Scientific experiments" }, { id: "design", label: "Designs / creative work" },
    { id: "business", label: "Business / strategy" }, { id: "mixture", label: "A mixture of these" },
  ]},

  // ---- Branching follow-ups: only shown if earlier answers point that direction ----
  { id: "techFollowUp", category: "What You Like", question: "You've shown a pull toward tech — what part excites you most?", type: "single",
    showIf: (a) => (a.interests || []).some((i) => ["computer-science", "technology"].includes(i)) || a.focus === "computers" || a.problemType === "technical",
    options: [
      { id: "software", label: "Building software / apps" }, { id: "data", label: "Working with data / AI" },
      { id: "security", label: "Securing systems from attacks" }, { id: "hardware", label: "Hardware / electronics" }, { id: "not-sure", label: "Not sure yet" },
    ]},
  { id: "healthFollowUp", category: "What You Like", question: "You've shown a pull toward science/biology — what appeals to you most in healthcare or research?", type: "single",
    showIf: (a) => (a.interests || []).some((i) => ["biology", "chemistry"].includes(i)) || a.focus === "science" || a.problemType === "nature",
    options: [
      { id: "patients", label: "Treating patients directly" }, { id: "surgery", label: "Surgery / hands-on procedures" },
      { id: "research", label: "Lab or scientific research" }, { id: "allied", label: "Supporting care through allied health/tech" }, { id: "not-sure", label: "Not sure yet" },
    ]},
  { id: "bizFollowUp", category: "What You Like", question: "You've shown a pull toward business — what part interests you most?", type: "single",
    showIf: (a) => (a.interests || []).some((i) => ["business", "economics"].includes(i)) || a.focus === "business" || a.problemType === "business",
    options: [
      { id: "finance", label: "Numbers, finance and accounting" }, { id: "leading", label: "Leading a team or department" },
      { id: "marketing", label: "Marketing and creative strategy" }, { id: "startup", label: "Starting my own thing" }, { id: "not-sure", label: "Not sure yet" },
    ]},
  { id: "designFollowUp", category: "What You Like", question: "You've shown a pull toward design/creativity — what kind of creative work appeals most?", type: "single",
    showIf: (a) => (a.interests || []).some((i) => ["art", "design"].includes(i)) || a.focus === "design" || a.problemType === "creative",
    options: [
      { id: "digital", label: "Digital design (apps, websites, products)" }, { id: "physical", label: "Physical/fashion design" },
      { id: "fineart", label: "Fine art / illustration" }, { id: "animation", label: "Animation, film or motion" }, { id: "not-sure", label: "Not sure yet" },
    ]},
  { id: "lawFollowUp", category: "What You Like", question: "You've shown a pull toward law/policy — what direction interests you most?", type: "single",
    showIf: (a) => (a.interests || []).some((i) => ["political-science"].includes(i)) || a.problemType === "leadership",
    options: [
      { id: "litigation", label: "Arguing cases / litigation" }, { id: "corporate", label: "Corporate & business law" },
      { id: "policy", label: "Public policy & government" }, { id: "not-sure", label: "Not sure yet" },
    ]},

  // ---- What You Are Good At ----
  { id: "strengths", category: "What You Are Good At", question: "Which strengths describe you best?", type: "multi", options: Object.entries(STRENGTH_LABELS).map(([id, label]) => ({ id, label })) },
  { id: "mathComfort", category: "What You Are Good At", question: "How comfortable are you with Mathematics?", type: "scale" },
  { id: "techComfort", category: "What You Are Good At", question: "How comfortable are you with Computers / Technology?", type: "scale",
    showIf: (a) => (a.interests || []).some((i) => ["computer-science", "technology", "math", "physics"].includes(i)) || (a.activities || []).some((x) => ["programming", "work-computers"].includes(x)) || a.problemType === "technical" || a.focus === "computers" },
  { id: "commComfort", category: "What You Are Good At", question: "How comfortable are you with Communication / Public Speaking?", type: "scale",
    showIf: (a) => (a.interests || []).some((i) => ["psychology", "political-science", "languages", "literature", "business"].includes(i)) || (a.activities || []).some((x) => ["help-people", "teach", "writing"].includes(x)) || a.problemType === "people" || a.leadershipPref === "lead-business" || a.leadershipPref === "helping" },
  { id: "practicalTheory", category: "What You Are Good At", question: "Which sounds more enjoyable to you?", type: "single", options: [
    { id: "theory", label: "Understanding concepts deeply" }, { id: "applied", label: "Applying concepts to real problems" },
    { id: "hands", label: "Building something with my hands" }, { id: "mixture", label: "A mixture of theory and practice" },
  ]},

  // ---- How You Like To Work ----
  { id: "workStyle", category: "How You Like To Work", question: "How do you prefer to work?", type: "single", options: [
    { id: "independent", label: "Mostly independently" }, { id: "small-team", label: "In a small team" },
    { id: "large-team", label: "In a large team" }, { id: "leading", label: "I enjoy leading teams" }, { id: "not-sure", label: "I don't know yet" },
  ]},
  { id: "environment", category: "How You Like To Work", question: "What kind of work environment sounds most interesting?", type: "single", options: [
    ...Object.entries(ENV_LABELS).map(([id, label]) => ({ id, label })), { id: "not-sure", label: "Not sure" },
  ]},
  { id: "workArrangement", category: "How You Like To Work", question: "What kind of future work arrangement would you prefer?", type: "single", options: [
    { id: "office", label: "Mostly office-based" }, { id: "remote", label: "Remote / flexible" }, { id: "field", label: "Field-based" },
    { id: "lab", label: "Laboratory-based" }, { id: "hospital", label: "Hospital / clinical" }, { id: "doesnt-matter", label: "Doesn't matter" }, { id: "not-sure", label: "Not sure" },
  ]},
  { id: "leadershipPref", category: "How You Like To Work", question: "Which of these sounds most interesting?", type: "single", options: [
    { id: "expert", label: "Becoming a deep technical expert" }, { id: "lead-tech", label: "Leading a technical team" },
    { id: "lead-business", label: "Managing a business" }, { id: "helping", label: "Helping / serving people directly" },
    { id: "independent-creator", label: "Creating something independently" }, { id: "researcher", label: "Researching new ideas" },
  ]},

  // ---- What You Want ----
  { id: "values", category: "What You Want", question: "What matters most to you in a future career?", type: "multi", options: Object.entries(VALUE_LABELS).map(([id, label]) => ({ id, label })) },
  { id: "careerPreference", category: "What You Want", question: "Which type of work sounds most interesting to you?", type: "single", options: [
    { id: "building-tech", label: "Building technology" }, { id: "treating-people", label: "Treating / helping people" },
    { id: "understanding-how-things-work", label: "Understanding how things work" }, { id: "managing-business", label: "Managing businesses" },
    { id: "analyzing-finance", label: "Analyzing money and finance" }, { id: "designing", label: "Designing things" },
    { id: "research", label: "Conducting research" }, { id: "teaching", label: "Teaching" },
    { id: "law-policy", label: "Working with law and policy" }, { id: "media-content", label: "Creating media / content" },
    { id: "machines", label: "Working with machines" }, { id: "data", label: "Working with data" },
    { id: "cybersecurity", label: "Protecting systems / cybersecurity" }, { id: "entrepreneurship", label: "Starting a business" },
    { id: "government", label: "Working in government / public service" }, { id: "not-sure", label: "Not sure" },
  ]},
  { id: "risk", category: "What You Want", question: "Which future sounds more comfortable to you?", type: "single", options: [
    { id: "stable", label: "A stable job with predictable growth" }, { id: "risk-flex", label: "A high-growth career with some uncertainty" },
    { id: "entrepreneurial", label: "Building my own business" }, { id: "in-between", label: "Somewhere in between" }, { id: "not-sure", label: "I'm not sure" },
  ]},

  // ---- Education & Commitment ----
  { id: "educationPreference", category: "Education & Commitment", question: "How do you feel about higher education?", type: "single", options: [
    { id: "long-study", label: "I want to study for many years" }, { id: "postgrad-ok", label: "I am comfortable with postgraduate study" },
    { id: "shorter-path", label: "I prefer a shorter educational path" }, { id: "work-asap", label: "I want to start working as soon as possible" },
    { id: "not-sure", label: "I am not sure" },
  ]},
  { id: "longEducation", category: "Education & Commitment", question: "How do you feel about studying for 7–10+ years if the career strongly interests you (e.g. Medicine, Research, PhD)?", type: "single", options: [
    { id: "yes", label: "Yes, I am comfortable with it" }, { id: "maybe", label: "Maybe, depending on the field" },
    { id: "shorter", label: "I prefer a shorter path" }, { id: "asap", label: "I definitely want to start working earlier" },
  ]},
];

// The quiz is adaptive: a question only appears if its showIf(answers) passes (or it has none).
// Both the quiz itself and the review screen call this so they always agree on what was actually asked.
function getVisibleQuestions(answers) {
  return QUESTIONS.filter((q) => !q.showIf || q.showIf(answers));
}


// Scoring-only metadata layer. `fieldId` points at the SAME field used by the Roadmap —
// no career content is duplicated here, only the tags used to rank and explain matches.
const p = (id, fieldId, category, stage, o = {}) => ({
  id, fieldId, category, stage, schoolStreamOnly: false,
  interests: [], activities: [], strengths: [], values: [], environments: [],
  mathWeight: 0, techWeight: 0, commWeight: 0, ...o,
});

const CAREER_PROFILES = [
  // School streams (After 10th) — surface strongly for after10 users, hidden for everyone else.
  p("s-pcm", "pcm", "science", "after10", { schoolStreamOnly: true, interests: ["math", "physics", "technology"], activities: ["solve-problems", "build-things", "work-numbers"], strengths: ["logical", "mathematics", "problem-solving"], environments: ["workshop-eng", "office-tech"], mathWeight: 1, techWeight: 0.6 }),
  p("s-pcb", "pcb", "healthcare", "after10", { schoolStreamOnly: true, interests: ["biology", "chemistry"], activities: ["help-people", "healthcare", "analyze-info"], strengths: ["patience", "attention-detail"], environments: ["hospital", "lab-research"], mathWeight: 0.2 }),
  p("s-com", "com-maths", "business", "after10", { schoolStreamOnly: true, interests: ["business", "economics", "accounting"], activities: ["work-numbers", "work-business", "manage-projects"], strengths: ["organization", "mathematics"], environments: ["business-corp"], mathWeight: 0.6 }),
  p("s-arts", "arts-humanities", "creative", "after10", { schoolStreamOnly: true, interests: ["history", "political-science", "psychology", "languages", "literature"], activities: ["writing", "research", "help-people"], strengths: ["writing", "communication", "research"], environments: ["classroom", "creative-studio"], commWeight: 0.7 }),
  p("s-diploma", "diploma", "engineering", "after10", { schoolStreamOnly: true, interests: ["technology"], activities: ["build-things", "work-machines"], strengths: ["hands-on", "technical"], environments: ["workshop-eng"], techWeight: 0.6 }),

  // Technology
  p("c-swe", "eng-cs", "technology", "after12", { interests: ["computer-science", "math", "technology"], activities: ["programming", "solve-problems", "build-things", "work-computers"], strengths: ["logical", "problem-solving", "technical"], values: ["innovation", "income", "intellectual-challenge"], environments: ["office-tech", "flexible-remote"], mathWeight: 0.7, techWeight: 1 }),
  p("c-web", "eng-webmobile", "technology", "after12", { interests: ["computer-science", "design", "technology"], activities: ["programming", "build-things", "design-things"], strengths: ["technical", "creativity", "problem-solving"], values: ["innovation", "freedom"], environments: ["office-tech", "flexible-remote"], techWeight: 0.9, mathWeight: 0.3 }),
  p("c-datasci", "eng-datasci", "technology", "after12", { interests: ["statistics", "math", "computer-science"], activities: ["work-data", "analyze-info", "research"], strengths: ["logical", "research", "attention-detail"], values: ["intellectual-challenge", "innovation"], environments: ["office-tech", "lab-research"], mathWeight: 0.9, techWeight: 0.8 }),
  p("c-ai", "eng-ai", "technology", "after12", { interests: ["computer-science", "math", "research"], activities: ["research", "programming", "solve-problems"], strengths: ["logical", "research", "quick-learning"], values: ["innovation", "intellectual-challenge"], environments: ["office-tech", "lab-research"], mathWeight: 1, techWeight: 1 }),
  p("c-cyber", "eng-cyber", "technology", "after12", { interests: ["computer-science", "technology"], activities: ["work-computers", "solve-problems", "analyze-info"], strengths: ["attention-detail", "technical", "logical"], values: ["stability", "intellectual-challenge"], environments: ["office-tech"], techWeight: 1, mathWeight: 0.4 }),
  p("c-cloud", "eng-cloud", "technology", "after12", { interests: ["computer-science", "technology"], activities: ["work-computers", "build-things", "manage-projects"], strengths: ["technical", "organization"], values: ["stability", "income"], environments: ["office-tech", "flexible-remote"], techWeight: 0.9 }),
  p("c-uiux", "design-uxproduct", "creative", "after12", { interests: ["design", "art", "technology"], activities: ["design-things", "create-content"], strengths: ["creativity", "attention-detail", "people"], values: ["creativity", "innovation"], environments: ["creative-studio", "office-tech"], techWeight: 0.4 }),
  p("c-pm", "mgmt-product", "technology", "college", { interests: ["business", "technology", "design"], activities: ["manage-projects", "lead-people", "analyze-info"], strengths: ["communication", "organization", "leadership"], values: ["innovation", "leadership"], environments: ["office-tech", "business-corp"], commWeight: 0.7 }),

  // Engineering
  p("c-mech", "eng-mech", "engineering", "after12", { interests: ["physics", "math", "technology"], activities: ["build-things", "work-machines", "solve-problems"], strengths: ["logical", "hands-on", "technical"], environments: ["workshop-eng"], mathWeight: 0.8, techWeight: 0.5 }),
  p("c-civil", "eng-civil", "engineering", "after12", { interests: ["physics", "math", "geography"], activities: ["build-things", "manage-projects", "work-nature"], strengths: ["organization", "technical", "hands-on"], environments: ["outdoor-field", "workshop-eng"], mathWeight: 0.7 }),
  p("c-ee", "eng-ee", "engineering", "after12", { interests: ["physics", "math", "technology"], activities: ["build-things", "solve-problems", "work-machines"], strengths: ["logical", "technical"], environments: ["workshop-eng", "lab-research"], mathWeight: 0.8, techWeight: 0.6 }),
  p("c-chembio", "eng-chem-biotech", "engineering", "after12", { interests: ["chemistry", "biology", "research"], activities: ["research", "analyze-info", "work-nature"], strengths: ["research", "attention-detail"], environments: ["lab-research"], mathWeight: 0.4 }),
  p("c-aero", "eng-aero", "engineering", "after12", { interests: ["physics", "math", "technology"], activities: ["build-things", "solve-problems", "research"], strengths: ["logical", "technical", "research"], environments: ["workshop-eng", "lab-research"], mathWeight: 0.9 }),

  // Healthcare
  p("c-mbbs", "med-mbbs", "healthcare", "after12", { interests: ["biology", "chemistry"], activities: ["help-people", "healthcare", "analyze-info"], strengths: ["patience", "attention-detail", "people"], values: ["helping-people", "social-impact", "stability"], environments: ["hospital"], mathWeight: 0.1 }),
  p("c-bds", "med-bds", "healthcare", "after12", { interests: ["biology", "chemistry"], activities: ["help-people", "healthcare"], strengths: ["patience", "hands-on", "attention-detail"], values: ["helping-people", "stability"], environments: ["hospital"] }),
  p("c-ayush", "med-ayush", "healthcare", "after12", { interests: ["biology", "chemistry"], activities: ["help-people", "healthcare"], strengths: ["patience", "people"], values: ["helping-people"], environments: ["hospital"] }),
  p("c-nursepharma", "med-nursing-pharma", "healthcare", "after12", { interests: ["biology", "chemistry"], activities: ["help-people", "healthcare", "work-numbers"], strengths: ["patience", "organization", "people"], values: ["helping-people", "stability"], environments: ["hospital"] }),
  p("c-allied", "med-allied", "healthcare", "after12", { interests: ["biology"], activities: ["help-people", "healthcare"], strengths: ["patience", "hands-on", "people"], values: ["helping-people", "stability"], environments: ["hospital"] }),

  // Science / research
  p("c-physsci", "bsc-physical", "science", "after12", { interests: ["physics", "chemistry", "math", "research"], activities: ["research", "analyze-info"], strengths: ["logical", "research", "quick-learning"], values: ["intellectual-challenge", "research"], environments: ["lab-research"], mathWeight: 0.7 }),
  p("c-cs-stats", "bsc-cs-stats", "science", "after12", { interests: ["computer-science", "statistics"], activities: ["work-data", "programming", "analyze-info"], strengths: ["logical", "research"], values: ["intellectual-challenge"], environments: ["lab-research", "office-tech"], mathWeight: 0.7, techWeight: 0.6 }),
  p("c-research", "mtech-research", "science", "mtech", { interests: ["research", "technology"], activities: ["research", "analyze-info"], strengths: ["research", "quick-learning", "patience"], values: ["intellectual-challenge", "research"], environments: ["lab-research"], mathWeight: 0.5, techWeight: 0.5 }),

  // Business / finance
  p("c-ca", "com-bcom", "business", "after12", { interests: ["accounting", "economics", "business", "math"], activities: ["work-numbers", "manage-projects", "analyze-info"], strengths: ["mathematics", "organization", "attention-detail"], values: ["stability", "income"], environments: ["business-corp", "office-tech"], mathWeight: 0.6 }),
  p("c-banking", "com-banking-econ", "business", "after12", { interests: ["economics", "math", "business"], activities: ["work-numbers", "analyze-info"], strengths: ["mathematics", "logical", "organization"], values: ["stability", "income"], environments: ["business-corp"], mathWeight: 0.7 }),
  p("c-bba", "bba", "business", "after12", { interests: ["business", "economics"], activities: ["manage-projects", "lead-people", "work-business"], strengths: ["leadership", "communication", "organization"], values: ["leadership", "income", "entrepreneurship"], environments: ["business-corp", "office-tech"], commWeight: 0.6 }),
  p("c-marketing", "bba", "business", "after12", { interests: ["business", "design", "psychology"], activities: ["create-content", "work-business", "lead-people"], strengths: ["creativity", "communication", "people"], values: ["creativity", "innovation"], environments: ["business-corp", "creative-studio"], commWeight: 0.7 }),

  // Law / public service
  p("c-law", "law-integrated", "law", "after12", { interests: ["political-science", "history", "languages"], activities: ["research", "writing", "help-people"], strengths: ["communication", "writing", "research"], values: ["social-impact", "stability", "leadership"], environments: ["office-tech", "classroom"], commWeight: 0.8 }),
  p("c-civilservices", "govt-overview", "law", "college", { interests: ["political-science", "history", "geography", "economics"], activities: ["research", "help-people", "manage-projects"], strengths: ["leadership", "communication", "organization"], values: ["stability", "social-impact", "leadership"], environments: ["business-corp", "classroom"], commWeight: 0.6 }),

  // Creative
  p("c-designgraphic", "design-fashion-graphic", "creative", "after12", { interests: ["art", "design"], activities: ["design-things", "create-content"], strengths: ["creativity", "attention-detail"], values: ["creativity"], environments: ["creative-studio"] }),
  p("c-architecture", "architecture", "creative", "after12", { interests: ["math", "art", "design"], activities: ["design-things", "build-things"], strengths: ["creativity", "technical", "attention-detail"], values: ["creativity", "innovation"], environments: ["creative-studio", "workshop-eng"], mathWeight: 0.5 }),
  p("c-media", "ba-journalism", "creative", "after12", { interests: ["languages", "literature", "history"], activities: ["writing", "create-content", "research"], strengths: ["writing", "communication", "creativity"], values: ["creativity", "social-impact"], environments: ["creative-studio", "flexible-remote"], commWeight: 0.8 }),

  // Education
  p("c-teaching", "education", "education", "college", { interests: ["languages", "history", "psychology"], activities: ["teach", "help-people"], strengths: ["teaching", "patience", "communication"], values: ["helping-people", "stability", "social-impact"], environments: ["classroom"], commWeight: 0.7 }),

  // Other
  p("c-agri", "agri-sciences", "other", "after12", { interests: ["biology", "chemistry", "geography"], activities: ["work-nature", "research"], strengths: ["patience", "research", "hands-on"], values: ["social-impact"], environments: ["outdoor-field", "lab-research"] }),
  p("c-hospitality", "hotel-mgmt", "other", "after12", { interests: ["business"], activities: ["help-people", "manage-projects", "work-business"], strengths: ["communication", "organization", "people"], values: ["work-life-balance", "international"], environments: ["business-corp"], commWeight: 0.6 }),
  p("c-entrepreneurship", "entrepreneurship-college", "business", "college", { interests: ["business"], activities: ["start-own", "manage-projects", "lead-people"], strengths: ["leadership", "creativity", "quick-learning"], values: ["entrepreneurship", "freedom", "innovation"], environments: ["flexible-remote", "business-corp"] }),
  p("c-defence", "defence", "other", "after12", { interests: [], activities: ["lead-people", "work-machines"], strengths: ["leadership", "patience", "hands-on"], values: ["stability", "social-impact"], environments: ["outdoor-field"] }),
  p("c-psych", "ba-psych", "healthcare", "after12", { interests: ["psychology"], activities: ["help-people", "research"], strengths: ["patience", "people", "research"], values: ["helping-people", "social-impact"], environments: ["classroom", "hospital"], commWeight: 0.5 }),

  // ---- Previously unprofiled fields (added so the Career Finder can recommend every roadmap field) ----
  // After 10th
  p("s-pcmb", "pcmb", "science", "after10", { schoolStreamOnly: true, interests: ["math", "physics", "chemistry", "biology"], activities: ["solve-problems", "analyze-info"], strengths: ["logical", "attention-detail", "patience"], environments: ["workshop-eng", "lab-research"], mathWeight: 0.6, techWeight: 0.2 }),
  p("s-sci-cs", "sci-cs", "technology", "after10", { schoolStreamOnly: true, interests: ["math", "physics", "computer-science", "technology"], activities: ["programming", "solve-problems"], strengths: ["logical", "technical"], environments: ["workshop-eng", "office-tech"], mathWeight: 0.6, techWeight: 0.7 }),
  p("s-com-no-maths", "com-no-maths", "business", "after10", { schoolStreamOnly: true, interests: ["business", "economics", "accounting"], activities: ["work-business", "manage-projects"], strengths: ["organization", "communication"], environments: ["business-corp"], commWeight: 0.4 }),
  p("s-agri10", "agri10", "other", "after10", { schoolStreamOnly: true, interests: ["biology", "geography"], activities: ["work-nature"], strengths: ["patience", "hands-on"], values: ["social-impact"], environments: ["outdoor-field"] }),
  p("s-design10", "design10", "creative", "after10", { schoolStreamOnly: true, interests: ["art", "design"], activities: ["design-things", "create-content"], strengths: ["creativity", "attention-detail"], values: ["creativity"], environments: ["creative-studio"] }),
  p("s-hosp10", "hospitality10", "other", "after10", { schoolStreamOnly: true, activities: ["help-people", "work-business"], strengths: ["communication", "organization", "people"], values: ["work-life-balance"], environments: ["business-corp"], commWeight: 0.4 }),
  p("s-sports10", "sports10", "other", "after10", { schoolStreamOnly: true, strengths: ["patience", "quick-learning"], values: ["work-life-balance"], environments: ["outdoor-field"] }),
  p("s-defence10", "defence10", "other", "after10", { schoolStreamOnly: true, activities: ["lead-people", "work-machines"], strengths: ["leadership", "patience", "hands-on"], values: ["stability", "social-impact"], environments: ["outdoor-field"] }),
  p("s-iti", "iti", "engineering", "after10", { schoolStreamOnly: true, activities: ["build-things", "work-machines"], strengths: ["hands-on", "technical"], values: ["stability"], environments: ["workshop-eng"], techWeight: 0.4 }),

  // After 12th
  p("c-aviation", "aviation", "other", "after12", { interests: ["physics", "technology"], activities: ["work-machines"], strengths: ["technical", "quick-learning", "attention-detail"], values: ["income", "freedom"], environments: ["outdoor-field"], mathWeight: 0.4, techWeight: 0.4 }),
  p("c-ba-social", "ba-social-sciences", "law", "after12", { interests: ["political-science", "history", "economics", "geography"], activities: ["research", "help-people"], strengths: ["research", "communication", "writing"], values: ["social-impact", "stability"], environments: ["classroom", "business-corp"], commWeight: 0.5 }),

  // After College (undergraduate)
  p("cg-work", "work", "business", "college", { activities: ["work-business", "manage-projects"], values: ["income", "stability"], environments: ["office-tech", "business-corp"] }),
  p("cg-govt", "govt-college", "law", "college", { interests: ["political-science", "economics"], activities: ["help-people", "manage-projects"], strengths: ["organization", "leadership"], values: ["stability", "social-impact"], environments: ["business-corp", "classroom"], commWeight: 0.5 }),
  p("cg-prof", "prof-quals", "business", "college", { interests: ["accounting", "economics", "math"], activities: ["work-numbers", "analyze-info"], strengths: ["mathematics", "attention-detail", "organization"], values: ["income", "stability"], environments: ["business-corp", "office-tech"], mathWeight: 0.5 }),
  p("cg-intl", "international-college", "other", "college", { values: ["international", "freedom"], environments: ["flexible-remote"] }),
  p("cg-pg-hum", "pg-humanities", "education", "college", { interests: ["languages", "literature", "history", "political-science"], activities: ["research", "writing", "teach"], strengths: ["research", "writing", "teaching"], values: ["intellectual-challenge", "social-impact"], environments: ["classroom", "lab-research"], commWeight: 0.5 }),
  p("cg-mba", "pg-mba-mca", "business", "college", { interests: ["business", "economics"], activities: ["manage-projects", "lead-people"], strengths: ["leadership", "organization", "communication"], values: ["leadership", "income"], environments: ["business-corp"], commWeight: 0.6 }),
  p("cg-mca", "pg-mba-mca", "technology", "college", { interests: ["computer-science", "technology"], activities: ["programming", "work-computers"], strengths: ["technical", "logical"], values: ["income", "innovation"], environments: ["office-tech"], techWeight: 0.7 }),
  p("cg-pg-tech", "pg-technical", "technology", "college", { interests: ["math", "physics", "computer-science", "research"], activities: ["research", "solve-problems"], strengths: ["logical", "research", "technical"], values: ["intellectual-challenge", "research"], environments: ["lab-research", "office-tech"], mathWeight: 0.7, techWeight: 0.6 }),

  // After M.Tech
  p("mt-industry", "mtech-industry", "technology", "mtech", { interests: ["technology", "research"], activities: ["build-things", "solve-problems", "research"], strengths: ["technical", "logical", "quick-learning"], values: ["income", "innovation"], environments: ["office-tech", "lab-research"], techWeight: 0.8, mathWeight: 0.5 }),
  p("mt-teach", "mtech-teaching", "education", "mtech", { activities: ["teach", "research"], strengths: ["teaching", "communication", "patience"], values: ["stability", "social-impact"], environments: ["classroom"], commWeight: 0.6 }),
  p("mt-govt", "mtech-govt", "science", "mtech", { activities: ["research", "analyze-info"], strengths: ["research", "technical"], values: ["stability", "research"], environments: ["lab-research"], techWeight: 0.5 }),
  p("mt-entre", "mtech-entrepreneurship", "business", "mtech", { activities: ["start-own", "lead-people"], strengths: ["leadership", "creativity", "quick-learning"], values: ["entrepreneurship", "freedom", "innovation"], environments: ["flexible-remote", "office-tech"] }),
  p("mt-intl", "mtech-international", "science", "mtech", { values: ["international", "freedom"], environments: ["lab-research", "flexible-remote"] }),
  p("mt-phd", "mtech-phd", "science", "mtech", { interests: ["research"], activities: ["research", "analyze-info"], strengths: ["research", "patience", "quick-learning"], values: ["intellectual-challenge", "research"], environments: ["lab-research"] }),

  // After PhD
  p("phdc-academia", "phd-academia", "education", "phd", { activities: ["research", "teach"], strengths: ["research", "teaching", "patience"], values: ["intellectual-challenge", "research", "stability"], environments: ["classroom", "lab-research"], commWeight: 0.4 }),
  p("phdc-research", "phd-research", "science", "phd", { activities: ["research", "analyze-info"], strengths: ["research", "patience", "quick-learning"], values: ["intellectual-challenge", "research"], environments: ["lab-research"] }),
  p("phdc-industry", "phd-industry", "technology", "phd", { activities: ["research", "solve-problems"], strengths: ["research", "technical", "logical"], values: ["income", "innovation", "intellectual-challenge"], environments: ["office-tech", "lab-research"], techWeight: 0.5 }),
  p("phdc-govt", "phd-govt", "science", "phd", { activities: ["research", "analyze-info"], strengths: ["research", "patience"], values: ["stability", "research"], environments: ["lab-research"] }),
  p("phdc-consult", "phd-consulting", "business", "phd", { activities: ["analyze-info", "research"], strengths: ["research", "communication", "logical"], values: ["income", "intellectual-challenge"], environments: ["business-corp", "office-tech"], commWeight: 0.4 }),
  p("phdc-entre", "phd-entrepreneurship", "business", "phd", { activities: ["start-own", "research"], strengths: ["leadership", "creativity", "research"], values: ["entrepreneurship", "innovation", "freedom"], environments: ["flexible-remote", "lab-research"] }),
  p("phdc-scicomm", "phd-sci-comm", "creative", "phd", { activities: ["writing", "create-content", "teach"], strengths: ["writing", "communication", "research"], values: ["social-impact", "creativity"], environments: ["creative-studio", "flexible-remote"], commWeight: 0.7 }),
  p("phdc-ip", "phd-ip", "law", "phd", { activities: ["research", "analyze-info", "writing"], strengths: ["attention-detail", "writing", "research"], values: ["intellectual-challenge", "stability"], environments: ["office-tech"] }),
  p("phdc-intl", "phd-intl", "science", "phd", { values: ["international", "research"], environments: ["lab-research", "flexible-remote"] }),
];

// Signal-boost maps: these let quick, easy-to-answer questions (problem type, daily focus,
// leadership style, practical/theory) reinforce the SAME tag vocabulary already used by every
// career profile, rather than requiring a second parallel tagging system.
const PROBLEMTYPE_BOOST = {
  technical: { interests: ["technology"], activities: ["solve-problems"] },
  nature: { interests: ["biology", "physics"], activities: ["research"] },
  people: { activities: ["help-people"], values: ["helping-people"] },
  business: { interests: ["business"], activities: ["manage-projects"] },
  creative: { interests: ["design", "art"], activities: ["create-content"] },
  leadership: { strengths: ["leadership"], activities: ["manage-projects"] },
  research: { activities: ["research"], strengths: ["research"] },
};
const FOCUS_BOOST = {
  people: { activities: ["help-people"] },
  computers: { interests: ["computer-science", "technology"], activities: ["programming"] },
  numbers: { interests: ["math"], activities: ["work-numbers", "work-data"] },
  machines: { activities: ["work-machines"] },
  science: { activities: ["research"], environments: ["lab-research"] },
  design: { interests: ["design"], activities: ["design-things"] },
  business: { interests: ["business"], activities: ["work-business"] },
};
const LEADERSHIP_BOOST = {
  expert: { strengths: ["technical", "research"] },
  "lead-tech": { strengths: ["leadership"], activities: ["lead-people"] },
  "lead-business": { values: ["leadership"], activities: ["manage-projects"] },
  helping: { values: ["helping-people"] },
  "independent-creator": { values: ["freedom", "creativity"] },
  researcher: { values: ["research"], activities: ["research"] },
};
const PRACTICALTHEORY_BOOST = {
  theory: { values: ["intellectual-challenge"], strengths: ["research"] },
  hands: { strengths: ["hands-on"], activities: ["build-things"] },
  applied: { activities: ["solve-problems"] },
};

// Branching follow-up boosts — these only fire when their question was actually shown
// (per showIf in QUESTIONS), representing a deliberate deep-dive answer that adds more
// specific interest/activity/strength tags on top of the broad first-pass questions above.
const TECH_FOLLOWUP_BOOST = {
  software: { interests: ["computer-science"], activities: ["programming"] },
  data: { interests: ["computer-science", "statistics"], activities: ["work-data", "research"] },
  security: { interests: ["technology"], activities: ["solve-problems"], strengths: ["attention-detail"] },
  hardware: { interests: ["physics", "technology"], activities: ["build-things"] },
};
const HEALTH_FOLLOWUP_BOOST = {
  patients: { activities: ["help-people", "healthcare"], values: ["helping-people"] },
  surgery: { strengths: ["hands-on", "attention-detail"], activities: ["healthcare"] },
  research: { activities: ["research"], strengths: ["research"] },
  allied: { activities: ["healthcare"], strengths: ["technical"] },
};
const BIZ_FOLLOWUP_BOOST = {
  finance: { interests: ["accounting", "economics"], activities: ["work-numbers"] },
  leading: { strengths: ["leadership"], activities: ["manage-projects"] },
  marketing: { interests: ["design"], activities: ["create-content"] },
  startup: { values: ["entrepreneurship"], activities: ["start-own"] },
};
const DESIGN_FOLLOWUP_BOOST = {
  digital: { interests: ["design", "computer-science"], activities: ["design-things"] },
  physical: { interests: ["design"], activities: ["build-things"] },
  fineart: { interests: ["art"], activities: ["create-content"] },
  animation: { interests: ["art", "design"], activities: ["create-content"] },
};
const LAW_FOLLOWUP_BOOST = {
  litigation: { strengths: ["communication"], activities: ["research"] },
  corporate: { interests: ["business"], activities: ["research"] },
  policy: { interests: ["political-science"], values: ["social-impact"] },
};

function addAll(set, arr) { for (const t of arr || []) set.add(t); }

const STAGE_RANK = { after10: 0, after12: 1, college: 2, working: 2, other: 2, mtech: 3, phd: 4 };
function matchRatio(userSet, tags) {
  if (!tags || !tags.length) return 0;
  let hit = 0;
  for (const t of tags) if (userSet.has(t)) hit++;
  return hit / tags.length;
}
function scaleNorm(v) { return v ? (v - 1) / 4 : 0.5; } // 1-5 -> 0-1, default neutral

// Domain (from careerDatabase.js) -> the same category taxonomy CAREER_PROFILES already uses,
// so career-preference matching (prefScore) applies consistently across both data sources.
const DB_DOMAIN_TO_CATEGORY = {
  "Healthcare": "healthcare", "Engineering": "engineering", "Technology": "technology",
  "Business": "business", "Creative": "creative", "Law": "law", "Education": "education",
  "Government": "law", "Agriculture": "science", "Digital": "technology", "Skilled Trades": "engineering",
  "Arts / Humanities": "creative", "Other": "other", "Vocational": "engineering",
};

// Auto-generated scoring profiles from the 539-node career database — every Career/Specialization
// node already carries interests/activities/strengths/values/environments in the exact same tag
// vocabulary as the hand-authored CAREER_PROFILES below, so no separate tagging pass is needed.
const DB_AUTO_PROFILES = dbCareersOnly().map((node) => ({
  id: `db-${node.id}`, fieldId: node.id, source: "db",
  category: DB_DOMAIN_TO_CATEGORY[node.domain] || "other",
  stage: node.stage === DB_STAGE_IDS.AFTER_10TH ? "after10" : node.stage === DB_STAGE_IDS.AFTER_12TH ? "after12"
    : node.stage === DB_STAGE_IDS.AFTER_MTECH ? "mtech" : node.stage === DB_STAGE_IDS.AFTER_PHD ? "phd" : "college",
  schoolStreamOnly: false,
  interests: node.interests || [], activities: node.activities || [], strengths: node.strengths || [],
  values: node.values || [], environments: node.environments || [], workStyles: [],
  mathWeight: (node.mathLevel || 0) / 5, techWeight: (node.technologyLevel || 0) / 5, commWeight: (node.communicationLevel || 0) / 5,
}));

function computeMatches(answers) {
  const userInterests = new Set((answers.interests || []).filter((x) => x !== "not-sure"));
  const userActivities = new Set(answers.activities || []);
  const userStrengths = new Set(answers.strengths || []);
  const userValues = new Set(answers.values || []);
  const userEnv = new Set([answers.environment, WORKARR_TO_ENV[answers.workArrangement]].filter(Boolean));

  if (answers.risk === "risk-flex") userValues.add("entrepreneurship");
  if (answers.risk === "entrepreneurial") userValues.add("entrepreneurship");
  if (answers.risk === "stable") userValues.add("stability");

  // Fold the newer discriminating questions into the same tag space.
  const followUpBoosts = [
    TECH_FOLLOWUP_BOOST[answers.techFollowUp], HEALTH_FOLLOWUP_BOOST[answers.healthFollowUp],
    BIZ_FOLLOWUP_BOOST[answers.bizFollowUp], DESIGN_FOLLOWUP_BOOST[answers.designFollowUp], LAW_FOLLOWUP_BOOST[answers.lawFollowUp],
  ];
  for (const boost of [PROBLEMTYPE_BOOST[answers.problemType], FOCUS_BOOST[answers.focus], LEADERSHIP_BOOST[answers.leadershipPref], PRACTICALTHEORY_BOOST[answers.practicalTheory], ...followUpBoosts]) {
    if (!boost) continue;
    addAll(userInterests, boost.interests);
    addAll(userActivities, boost.activities);
    addAll(userStrengths, boost.strengths);
    addAll(userValues, boost.values);
    addAll(userEnv, boost.environments);
  }

  const userStageRank = STAGE_RANK[answers.stage] ?? 1;
  const prefCategory = CAREERPREF_TO_CATEGORY[answers.careerPreference];

  // A person who's explicitly fine with 7-10+ years of study should see PhD/research/medicine
  // tracks discounted less; someone who wants to work ASAP should see them discounted more.
  const longEdu = answers.longEducation;
  const laterStagePenalty = longEdu === "yes" ? 0.95 : longEdu === "maybe" ? 0.85 : longEdu === "shorter" ? 0.72 : longEdu === "asap" ? 0.6 : 0.85;

  const answeredCount = ["interests", "activities", "strengths", "values"].filter((k) => (answers[k] || []).length > 0).length;
  const lightAnswers = answeredCount <= 1; // very few answers — soften scoring, don't penalize hard

  const oldProfiles = CAREER_PROFILES
    .filter((prof) => prof.stage !== "after10" && prof.stage !== "after12") // superseded by DB_AUTO_PROFILES for these two stages
    .map((prof) => ({ ...prof, id: `old-${prof.id}`, source: "old" }));
  const pool = [...oldProfiles, ...DB_AUTO_PROFILES];

  const results = pool
    .filter((prof) => !(prof.schoolStreamOnly && answers.stage !== "after10"))
    .map((prof) => {
      const meta = prof.source === "db"
        ? (() => { const node = dbGetNode(prof.fieldId); const st = node && STAGES.find((s) => s.id === node.stage); return node && st ? { field: dbNodeToFieldShape(node), group: null, stage: st } : null; })()
        : findFieldMeta(prof.fieldId);
      if (!meta) return null;

      const interestRatio = matchRatio(userInterests, prof.interests);
      const activityRatio = matchRatio(userActivities, prof.activities);
      const strengthRatio = matchRatio(userStrengths, prof.strengths);
      const valuesRatio = matchRatio(userValues, prof.values);
      const envRatio = matchRatio(userEnv, prof.environments);

      const interestScore = interestRatio * 22;
      const activityScore = activityRatio * 18;
      const strengthScore = strengthRatio * 14;
      const valuesScore = valuesRatio * 12;
      const hasWorkStyles = prof.workStyles && prof.workStyles.length > 0;
      const workStyleScore = hasWorkStyles ? (prof.workStyles.includes(answers.workStyle) ? 7 : 0) : 3.5;
      const envScore = envRatio * 7;
      const prefScore = prefCategory && prefCategory === prof.category ? 6 : 0;
      const weightSum = (prof.mathWeight || 0) + (prof.techWeight || 0) + (prof.commWeight || 0);
      const comfortScore = weightSum
        ? ((scaleNorm(answers.mathComfort) * (prof.mathWeight || 0)) + (scaleNorm(answers.techComfort) * (prof.techWeight || 0)) + (scaleNorm(answers.commComfort) * (prof.commWeight || 0))) / weightSum * 5
        : 2.5;
      const stageScore = 3.5; // small baseline so an unanswered/neutral dimension never zeroes out a whole match

      let raw = interestScore + activityScore + strengthScore + valuesScore + workStyleScore + envScore + prefScore + comfortScore + stageScore;
      if (lightAnswers) raw = raw * 0.7 + 30; // pull very-sparse profiles toward a neutral middle instead of near-zero

      const profRank = STAGE_RANK[prof.stage] ?? 1;
      let laterLabel = null;
      if (profRank > userStageRank) { raw *= laterStagePenalty; laterLabel = "A later step — needs more education first"; }

      const score = Math.max(1, Math.min(99, Math.round(raw))); // never claim 0% or 100% certainty

      const reasons = [];
      for (const t of prof.interests || []) if (userInterests.has(t)) reasons.push(INTEREST_LABELS[t]);
      for (const t of prof.activities || []) if (userActivities.has(t)) reasons.push(ACTIVITY_LABELS[t]);
      for (const t of prof.strengths || []) if (userStrengths.has(t)) reasons.push(STRENGTH_LABELS[t]);
      for (const t of prof.values || []) if (userValues.has(t)) reasons.push(VALUE_LABELS[t]);

      const breakdown = {
        interest: Math.round(interestRatio * 100),
        activity: Math.round(activityRatio * 100),
        strength: Math.round(strengthRatio * 100),
        values: Math.round(valuesRatio * 100),
        goalFit: Math.round(((workStyleScore / 7) + (envScore / 7) + (prefScore / 6)) / 3 * 100),
      };

      return { profile: prof, source: prof.source, field: meta.field, group: meta.group, stage: meta.stage, score, laterLabel, reasons: reasons.slice(0, 6), breakdown };
    })
    .filter(Boolean)
    // De-dupe: an old field and its DB counterpart can both score highly for the same underlying
    // career — keep only the single highest-scoring entry per displayed field name.
    .reduce((acc, r) => {
      const key = r.field.name.toLowerCase();
      const existing = acc.get(key);
      if (!existing || r.score > existing.score) acc.set(key, r);
      return acc;
    }, new Map());

  const deduped = Array.from(results.values()).sort((a, b) => b.score - a.score);
  return { results: deduped, lightAnswers, answeredCount };
}
function matchLabel(score) {
  if (score >= 82) return "Strong Match";
  if (score >= 65) return "Good Match";
  if (score >= 48) return "Worth Exploring";
  return "Lower Match";
}

/* ============================== SMALL UI PIECES ============================== */
function Contours() {
  const { C } = useTheme();
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.3 }} preserveAspectRatio="none" viewBox="0 0 400 900">
      {[80, 160, 260, 400, 560, 700, 820].map((y, i) => (
        <path key={i} d={`M-20,${y} C 80,${y - 30} 160,${y + 30} 260,${y} S 420,${y - 20} 460,${y}`} fill="none" stroke={C.trail} strokeWidth="1" />
      ))}
    </svg>
  );
}
function Connector({ flip }) {
  const { C } = useTheme();
  return (
    <svg width="40" height="56" viewBox="0 0 40 56" style={{ transform: flip ? "scaleX(-1)" : "none" }}>
      <path d="M8,0 C8,20 32,20 32,40 C32,48 26,52 20,56" fill="none" stroke={C.trailDeep} strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" />
    </svg>
  );
}
function Badge({ code, size = 44, fs = 15 }) {
  const { C } = useTheme();
  return (
    <div className="flex items-center justify-center rounded-full flex-shrink-0" style={{
      width: size, height: size, background: C.rust, color: C.card, fontFamily: FONT.mono, fontWeight: 700, fontSize: fs,
      boxShadow: "0 2px 0 rgba(35,44,36,0.25)",
    }}>{code}</div>
  );
}
function Eyebrow({ children, color }) {
  const { C } = useTheme();
  const col = color || C.rust;
  return (
    <div style={{ fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: col, marginBottom: 10 }}>
      {children}
    </div>
  );
}
function Section({ label, children, color }) {
  const { C } = useTheme();
  return (
    <div className="mb-7">
      <Eyebrow color={color}>{label}</Eyebrow>
      {children}
    </div>
  );
}
function Chip({ children }) {
  const { C } = useTheme();
  return (
    <span className="inline-block rounded-full px-3 py-1 mr-2 mb-2" style={{
      background: C.card, border: `1px solid ${C.paperDeep}`, fontFamily: FONT.body, fontSize: 12.5, color: C.ink,
    }}>{children}</span>
  );
}
function TopBar({ title, onBack, onSearch }) {
  const { C } = useTheme();
  return (
    <div className="flex items-center gap-2.5 px-5 pt-6 pb-3">
      {onBack && (
        <button onClick={onBack} aria-label="Go back" className="flex items-center justify-center rounded-full flex-shrink-0"
          style={{ width: 36, height: 36, background: C.card, border: `1px solid ${C.paperDeep}`, color: C.ink }}>
          <ArrowLeft size={18} />
        </button>
      )}
      <span style={{ fontFamily: FONT.mono, fontSize: 12, letterSpacing: "0.12em", color: C.inkSoft, textTransform: "uppercase", flex: 1 }}>
        {title}
      </span>
      {onSearch && (
        <button onClick={onSearch} aria-label="Search" className="flex items-center justify-center rounded-full flex-shrink-0"
          style={{ width: 36, height: 36, background: C.card, border: `1px solid ${C.paperDeep}`, color: C.ink }}>
          <Search size={16} />
        </button>
      )}
      <ThemeToggle size="sm" />
    </div>
  );
}
function Breadcrumbs({ items }) {
  const { C } = useTheme();
  return (
    <div className="flex flex-wrap items-center gap-1 px-5 pb-3" style={{ fontFamily: FONT.body, fontSize: 12, color: C.inkSoft }}>
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <ChevronRight size={11} />}
          {it.onClick ? (
            <button onClick={it.onClick} style={{ color: i === items.length - 1 ? C.ink : C.inkSoft, fontWeight: i === items.length - 1 ? 600 : 400 }}>
              {it.label}
            </button>
          ) : (
            <span style={{ fontWeight: 600, color: C.ink }}>{it.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}

/* ============================== SEARCH OVERLAY ============================== */
function SearchOverlay({ onClose, onPick }) {
  const { C } = useTheme();
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    if (!q.trim()) return [];
    const needle = q.toLowerCase();
    const oldResults = allFieldsFlat()
      .filter(({ field }) => field.name.toLowerCase().includes(needle) || field.blurb.toLowerCase().includes(needle))
      .map(({ field, group, stage }) => ({ id: field.id, name: field.name, blurb: field.blurb, crumb: `${stage.title} · ${group.title}`, source: "old" }));
    const dbResults = dbSearch(q)
      .filter((n) => n.type === "Career" || n.type === "Specialization" || n.type === "EducationPath" || n.type === "Subject")
      .map((n) => ({ id: n.id, name: n.title, blurb: n.description, crumb: `${n.domain} · ${n.category}`, source: "db" }));
    return [...oldResults, ...dbResults].slice(0, 14);
  }, [q]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col" style={{ background: C.paper }}>
      <div className="flex items-center gap-3 px-5 pt-6 pb-3">
        <div className="flex-1 flex items-center gap-2 rounded-full px-4 py-2.5" style={{ background: C.card, border: `1px solid ${C.paperDeep}` }}>
          <Search size={16} color={C.inkSoft} />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search: Engineering, CA, Medicine, PhD..."
            style={{ background: "transparent", border: "none", outline: "none", flex: 1, fontFamily: FONT.body, fontSize: 14, color: C.ink }}
          />
        </div>
        <button onClick={onClose} aria-label="Close search" className="flex items-center justify-center rounded-full flex-shrink-0"
          style={{ width: 36, height: 36, background: C.card, border: `1px solid ${C.paperDeep}`, color: C.ink }}>
          <X size={18} />
        </button>
      </div>
      <div className="px-5 flex-1 overflow-auto pb-10">
        {q.trim() && results.length === 0 && (
          <p style={{ fontFamily: FONT.body, fontSize: 13.5, color: C.inkSoft, marginTop: 20 }}>No matches. Try a broader term.</p>
        )}
        <div className="flex flex-col gap-2.5 mt-2">
          {results.map((r) => (
            <button key={r.id} onClick={() => onPick(r.id, r.source)} className="text-left rounded-xl p-3.5"
              style={{ background: C.card, border: `1px solid ${C.paperDeep}` }}>
              <div style={{ fontFamily: FONT.mono, fontSize: 10.5, color: C.rust, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {r.crumb}
              </div>
              <div style={{ fontFamily: FONT.display, fontWeight: 600, fontSize: 15.5, color: C.ink, marginTop: 2 }}>{r.name}</div>
              <div style={{ fontFamily: FONT.body, fontSize: 12.5, color: C.inkSoft, marginTop: 2 }}>{r.blurb}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================== SCREENS ============================== */
function HomeScreen({ onOpenRoadmap, onOpenCareerFinder, onOpenFavorites, favoritesCount }) {
  const { C } = useTheme();
  const features = [
    {
      id: "roadmap", emoji: "🗺️", title: "Roadmap",
      tagline: "I know my stage. Show me my options.",
      desc: "Explore career and education paths manually — from After 10th all the way to After PhD.",
      onClick: onOpenRoadmap,
    },
    {
      id: "careerFinder", emoji: "🧭", title: "Career Finder",
      tagline: "I don't know what suits me. Ask me questions.",
      desc: "Answer a short questionnaire and discover career paths that may match your interests and strengths.",
      onClick: onOpenCareerFinder,
    },
  ];
  return (
    <div className="min-h-screen relative" style={{ background: C.paper }}>
      <Contours />
      <div className="relative px-5 pt-10 pb-6">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2" style={{ color: C.rust }}>
            <Compass size={20} strokeWidth={2.2} />
            <span style={{ fontFamily: FONT.mono, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase" }}>Role Map</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={onOpenFavorites} aria-label="Saved careers" className="flex items-center justify-center rounded-full relative" style={{ width: 38, height: 38, background: C.card, border: `1px solid ${C.paperDeep}`, color: C.ink }}>
              <Bookmark size={16} />
              {favoritesCount > 0 && (
                <span style={{ position: "absolute", top: -3, right: -3, background: C.rust, color: C.card, borderRadius: 999, fontSize: 9.5, fontFamily: FONT.mono, fontWeight: 700, minWidth: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 3px" }}>
                  {favoritesCount}
                </span>
              )}
            </button>
            <ThemeToggle size="sm" />
          </div>
        </div>
        <h1 style={{ fontFamily: FONT.display, fontSize: 34, fontWeight: 600, color: C.ink, lineHeight: 1.15 }}>
          Find your next step.
        </h1>
        <p style={{ fontFamily: FONT.body, color: C.inkSoft, fontSize: 15, marginTop: 8 }}>
          Two ways to explore — browse the map yourself, or answer a few questions.
        </p>
      </div>
      <div className="relative px-5 flex flex-col gap-4 pb-10">
        {features.map((t) => (
          <button key={t.id} onClick={t.onClick} className="text-left rounded-2xl p-5 flex items-start gap-4"
            style={{ background: C.card, border: `1px solid ${C.paperDeep}` }}>
            <div className="flex items-center justify-center rounded-full flex-shrink-0" style={{ width: 46, height: 46, background: C.trail, fontSize: 20 }}>
              {t.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <div style={{ fontFamily: FONT.display, fontWeight: 600, fontSize: 19, color: C.ink }}>{t.title}</div>
              <div style={{ fontFamily: FONT.mono, fontSize: 11, color: C.rust, marginTop: 2, textTransform: "uppercase", letterSpacing: "0.04em" }}>{t.tagline}</div>
              <div style={{ fontFamily: FONT.body, fontSize: 13, color: C.inkSoft, marginTop: 6, lineHeight: 1.5 }}>{t.desc}</div>
            </div>
            <ArrowRight size={18} color={C.inkSoft} style={{ flexShrink: 0, marginTop: 4 }} />
          </button>
        ))}
      </div>
    </div>
  );
}

function FavoritesScreen({ favorites, onBack, onHome, onOpen, onRemove }) {
  const { C } = useTheme();
  const sorted = [...favorites].sort((a, b) => (b.savedAt || 0) - (a.savedAt || 0));
  return (
    <div className="min-h-screen relative" style={{ background: C.paper }}>
      <Contours />
      <div className="relative">
        <TopBar title="Saved Careers" onBack={onBack} />
        <Breadcrumbs items={[{ label: "Role Map", onClick: onHome }, { label: "Saved Careers" }]} />
        <div className="px-5">
          <h2 style={{ fontFamily: FONT.display, fontSize: 24, fontWeight: 600, color: C.ink }}>Saved Careers</h2>
          <p style={{ fontFamily: FONT.body, color: C.inkSoft, fontSize: 13.5, marginTop: 4, marginBottom: 18, lineHeight: 1.5 }}>
            {sorted.length === 0 ? "Careers you bookmark while exploring will show up here." : `${sorted.length} saved for later.`}
          </p>

          {sorted.length === 0 ? (
            <div className="rounded-xl p-6 flex flex-col items-center text-center" style={{ background: C.card, border: `1px dashed ${C.paperDeep}` }}>
              <Bookmark size={22} color={C.inkSoft} />
              <p style={{ fontFamily: FONT.body, fontSize: 13, color: C.inkSoft, marginTop: 10 }}>
                Tap the bookmark icon on any career page to save it here.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-2.5 mb-8">
              {sorted.map((item) => (
                <div key={item.id} className="flex items-center gap-3 rounded-xl p-3.5" style={{ background: C.card, border: `1px solid ${C.paperDeep}` }}>
                  <button onClick={() => onOpen(item)} className="flex-1 min-w-0 text-left">
                    <div style={{ fontFamily: FONT.display, fontWeight: 600, fontSize: 14.5, color: C.ink }}>{item.title}</div>
                    <div style={{ fontFamily: FONT.mono, fontSize: 10, color: C.rust, marginTop: 2, textTransform: "uppercase" }}>Tap to view →</div>
                  </button>
                  <button onClick={() => onRemove(item.id)} aria-label="Remove bookmark" className="flex items-center justify-center rounded-full flex-shrink-0"
                    style={{ width: 32, height: 32, background: C.paper, color: C.inkSoft }}>
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function RoadmapScreen({ onBack, onOpenStage, onSearch }) {
  const { C } = useTheme();
  return (
    <div className="min-h-screen relative" style={{ background: C.paper }}>
      <Contours />
      <div className="relative">
        <TopBar title="Role Map" onBack={onBack} onSearch={onSearch} />
        <div className="px-5 pb-2">
          <h2 style={{ fontFamily: FONT.display, fontSize: 26, fontWeight: 600, color: C.ink }}>The Roadmap</h2>
          <p style={{ fontFamily: FONT.body, color: C.inkSoft, fontSize: 14, marginTop: 4 }}>
            Five stages, each opening into every real path from there. Tap one to start exploring.
          </p>
        </div>
        <div className="px-5 pt-4 pb-14">
          {STAGES.map((s, i) => {
            const fieldCount = s.groups.reduce((n, g) => n + g.fields.length, 0);
            return (
              <div key={s.id}>
                <button onClick={() => onOpenStage(s.id)}
                  className={`w-full flex items-center gap-4 rounded-2xl p-4 text-left ${i % 2 === 0 ? "mr-4 sm:mr-7" : "ml-4 sm:ml-7"}`}
                  style={{ background: C.card, border: `1px solid ${C.paperDeep}` }}>
                  <Badge code={s.code} />
                  <div className="flex-1 min-w-0">
                    <div style={{ fontFamily: FONT.display, fontWeight: 600, fontSize: 17, color: C.ink }}>{s.title}</div>
                    <div style={{ fontFamily: FONT.body, fontSize: 12.5, color: C.inkSoft, marginTop: 2 }}>{s.blurb}</div>
                    <div style={{ fontFamily: FONT.mono, fontSize: 10.5, color: C.rust, marginTop: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      {fieldCount} paths to explore
                    </div>
                  </div>
                  <ArrowRight size={18} color={C.inkSoft} style={{ flexShrink: 0 }} />
                </button>
                {i < STAGES.length - 1 && (
                  <div className="flex" style={{ justifyContent: i % 2 === 0 ? "flex-start" : "flex-end", marginLeft: i % 2 === 0 ? 20 : 0, marginRight: i % 2 === 0 ? 0 : 20 }}>
                    <Connector flip={i % 2 !== 0} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ============================== CAREER FINDER: SCREENS ============================== */
function CareerFinderLanding({ onBack, onHome, onStart, hasProgress, onResume, onPickDirect }) {
  const { C } = useTheme();
  const [q, setQ] = useState("");
  const needle = q.trim().toLowerCase();
  const directResults = useMemo(() => {
    if (!needle) return [];
    const rank = (name, blurb) => {
      const n = name.toLowerCase();
      if (n.startsWith(needle)) return 0;
      if (n.includes(needle)) return 1;
      if ((blurb || "").toLowerCase().includes(needle)) return 2;
      return 3;
    };
    const oldResults = allFieldsFlat()
      .filter(({ field }) => field.name.toLowerCase().includes(needle) || field.blurb.toLowerCase().includes(needle))
      .map(({ field, stage }) => ({ id: field.id, name: field.name, crumb: stage.title, source: "old", _rank: rank(field.name, field.blurb) }));
    // No type filter here on purpose — "all topics" means education paths, subjects and streams
    // (e.g. MBBS, PCM) should surface too, not only leaf career titles, so broader phrasing works.
    const dbResults = dbSearch(q)
      .map((n) => ({
        id: n.id, name: n.title, source: "db", _rank: rank(n.title, n.description),
        crumb: n.type === "Career" || n.type === "Specialization" ? n.category : `${n.category} · ${n.type === "EducationPath" ? "Education path" : n.type}`,
      }));
    return [...oldResults, ...dbResults].sort((a, b) => a._rank - b._rank).slice(0, 10);
  }, [needle, q]);

  return (
    <div className="min-h-screen relative" style={{ background: C.paper }}>
      <Contours />
      <div className="relative">
        <TopBar title="Role Map" onBack={onBack} />
        <Breadcrumbs items={[{ label: "Role Map", onClick: onHome }, { label: "Career Finder" }]} />
        <div className="px-5 pt-4 flex flex-col items-start">
          <div className="flex items-center justify-center rounded-full mb-4" style={{ width: 52, height: 52, background: C.trail, fontSize: 24 }}>🧭</div>
          <h2 style={{ fontFamily: FONT.display, fontSize: 27, fontWeight: 600, color: C.ink, lineHeight: 1.2 }}>Find Your Career Path</h2>
          <p style={{ fontFamily: FONT.body, color: C.inkSoft, fontSize: 14.5, marginTop: 10, marginBottom: 20, lineHeight: 1.55 }}>
            Already have something in mind, or want us to help you figure it out — either way works.
          </p>

          {/* Path 1: already know what you want */}
          <div className="w-full rounded-xl p-4 mb-4" style={{ background: C.card, border: `1px solid ${C.paperDeep}` }}>
            <div style={{ fontFamily: FONT.display, fontWeight: 600, fontSize: 15, color: C.ink, marginBottom: 2 }}>Already know what you want to become?</div>
            <div style={{ fontFamily: FONT.body, fontSize: 12.5, color: C.inkSoft, marginBottom: 10 }}>Type it in — Singer, Doctor, Software Engineer, anything — and jump straight to it.</div>
            <div className="flex items-center gap-2 rounded-full px-4 py-2.5" style={{ background: C.paper, border: `1px solid ${C.paperDeep}` }}>
              <Search size={14} color={C.inkSoft} />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="e.g. Singer, Doctor, Data Scientist..."
                style={{ background: "transparent", border: "none", outline: "none", flex: 1, fontFamily: FONT.body, fontSize: 13.5, color: C.ink }}
              />
            </div>
            {needle && (
              <div className="flex flex-col gap-1.5 mt-2.5">
                {directResults.length === 0 ? (
                  <div style={{ fontFamily: FONT.body, fontSize: 12, color: C.inkSoft, padding: "6px 2px" }}>No match yet — keep typing, or try the quiz below.</div>
                ) : (
                  directResults.map((r) => (
                    <button key={r.id} onClick={() => onPickDirect(r.id, r.source)} className="w-full flex items-center justify-between text-left rounded-lg px-3 py-2.5"
                      style={{ background: C.paper, border: `1px solid ${C.paperDeep}` }}>
                      <div>
                        <div style={{ fontFamily: FONT.body, fontSize: 13, fontWeight: 600, color: C.ink }}>{r.name}</div>
                        <div style={{ fontFamily: FONT.mono, fontSize: 9.5, color: C.rust, textTransform: "uppercase" }}>{r.crumb}</div>
                      </div>
                      <ArrowRight size={14} color={C.rust} />
                    </button>
                  ))
                )}
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 w-full mb-4">
            <div style={{ flex: 1, height: 1, background: C.paperDeep }} />
            <span style={{ fontFamily: FONT.mono, fontSize: 10.5, color: C.inkSoft, textTransform: "uppercase" }}>or</span>
            <div style={{ flex: 1, height: 1, background: C.paperDeep }} />
          </div>

          {/* Path 2: no idea — take the quiz */}
          <div className="w-full rounded-xl p-4 mb-5" style={{ background: C.card, border: `1px solid ${C.paperDeep}` }}>
            <div style={{ fontFamily: FONT.display, fontWeight: 600, fontSize: 15, color: C.ink, marginBottom: 2 }}>No idea what to become?</div>
            <div style={{ fontFamily: FONT.body, fontSize: 12.5, color: C.inkSoft, lineHeight: 1.5 }}>
              Totally fine — answer a short questionnaire about your interests, strengths and goals, and we'll suggest careers that fit.
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4" style={{ fontFamily: FONT.mono, fontSize: 11.5, color: C.rust, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            <span>⏱ Takes about 6–10 minutes</span>
          </div>

          {hasProgress && (
            <button onClick={onResume} className="w-full flex items-center justify-center gap-2 rounded-xl p-4 mb-3"
              style={{ background: C.trailDeep, color: C.paper, fontFamily: FONT.display, fontWeight: 600, fontSize: 15 }}>
              Resume where you left off <ArrowRight size={16} />
            </button>
          )}
          <button onClick={onStart} className="w-full flex items-center justify-center gap-2 rounded-xl p-4 mb-3"
            style={{
              background: hasProgress ? "transparent" : C.rust,
              border: hasProgress ? `1px solid ${C.paperDeep}` : "none",
              color: hasProgress ? C.ink : C.card,
              fontFamily: FONT.display, fontWeight: 600, fontSize: 15.5,
            }}>
            {hasProgress ? "Start Over" : "No idea — help me explore"} <ArrowRight size={17} />
          </button>
          <div className="rounded-xl p-4 w-full mb-5" style={{ background: C.card, border: `1px solid ${C.paperDeep}` }}>
            <p style={{ fontFamily: FONT.body, fontSize: 12, color: C.ink, lineHeight: 1.55 }}>
              There's no single "perfect" career. Quiz results are guidance based on your answers, meant to help you explore realistic possibilities — not a final decision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuizProgress({ index, total }) {
  const { C } = useTheme();
  const pct = Math.round(((index + 1) / total) * 100);
  return (
    <div className="px-5 pb-2">
      <div style={{ fontFamily: FONT.mono, fontSize: 11, color: C.inkSoft, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
        Question {index + 1} of {total}
      </div>
      <div className="rounded-full overflow-hidden" style={{ height: 6, background: C.paperDeep }}>
        <div style={{ height: "100%", width: `${pct}%`, background: C.rust, transition: "width 200ms ease" }} />
      </div>
    </div>
  );
}

function AnswerOption({ label, selected, onClick }) {
  const { C } = useTheme();
  return (
    <button onClick={onClick} aria-pressed={selected} className="w-full text-left rounded-xl p-4 mb-2.5 flex items-center justify-between"
      style={{
        background: selected ? C.trailDeep : C.card,
        border: `1.5px solid ${selected ? C.trailDeep : C.paperDeep}`,
        color: selected ? C.paper : C.ink,
      }}>
      <span style={{ fontFamily: FONT.body, fontSize: 14, fontWeight: selected ? 600 : 400 }}>{label}</span>
      <div className="rounded-full flex-shrink-0 flex items-center justify-center" style={{
        width: 20, height: 20, border: `1.5px solid ${selected ? C.gold : C.inkSoft}`, background: selected ? C.gold : "transparent",
      }}>
        {selected && <div style={{ width: 8, height: 8, borderRadius: 9999, background: C.trailDeep }} />}
      </div>
    </button>
  );
}

const SCALE_LABELS = ["Really dislike it", "Not very comfortable", "Okay", "Comfortable", "Really enjoy it"];
function ScaleAnswer({ value, onChange }) {
  const { C } = useTheme();
  return (
    <div className="flex flex-col gap-2.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <AnswerOption key={n} label={`${n} — ${SCALE_LABELS[n - 1]}`} selected={value === n} onClick={() => onChange(n)} />
      ))}
    </div>
  );
}

function QuizScreen({ answers, setAnswers, index, setIndex, onExit, onFinish }) {
  const { C } = useTheme();
  const visibleQuestions = useMemo(() => getVisibleQuestions(answers), [answers]);
  const clampedIndex = Math.min(index, visibleQuestions.length - 1);
  const q = visibleQuestions[clampedIndex];
  const isLast = clampedIndex === visibleQuestions.length - 1;
  const value = answers[q.id];

  function canAdvance() {
    if (q.type === "multi") return true; // multi-select can be empty/skippable
    return value !== undefined && value !== null;
  }
  function next() {
    if (isLast) onFinish();
    else setIndex(clampedIndex + 1);
  }
  function back() {
    if (clampedIndex === 0) onExit();
    else setIndex(clampedIndex - 1);
  }
  function selectSingle(optId) { setAnswers({ ...answers, [q.id]: optId }); }
  function toggleMulti(optId) {
    const arr = new Set(answers[q.id] || []);
    if (arr.has(optId)) arr.delete(optId); else arr.add(optId);
    setAnswers({ ...answers, [q.id]: Array.from(arr) });
  }
  function setScale(n) { setAnswers({ ...answers, [q.id]: n }); }

  return (
    <div className="min-h-screen relative flex flex-col" style={{ background: C.paper }}>
      <Contours />
      <div className="relative flex-1 flex flex-col">
        <TopBar title="Career Finder" onBack={back} />
        <QuizProgress index={clampedIndex} total={visibleQuestions.length} />

        <div className="px-5 pt-3 flex-1">
          <div style={{ fontFamily: FONT.mono, fontSize: 10.5, color: C.rust, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>
            {q.category}
          </div>
          {q.showIf && (
            <div className="flex items-center gap-1.5 mb-2" style={{ fontFamily: FONT.body, fontSize: 11.5, color: C.trailDeep, fontStyle: "italic" }}>
              <Compass size={12} /> Asked because of your earlier answers
            </div>
          )}
          <h2 style={{ fontFamily: FONT.display, fontSize: 21, fontWeight: 600, color: C.ink, lineHeight: 1.3, marginBottom: 16 }}>
            {q.question}
          </h2>

          {q.type === "single" && (
            <div>{q.options.map((o) => <AnswerOption key={o.id} label={o.label} selected={value === o.id} onClick={() => selectSingle(o.id)} />)}</div>
          )}
          {q.type === "multi" && (
            <div>
              <p style={{ fontFamily: FONT.body, fontSize: 12, color: C.inkSoft, marginBottom: 10 }}>Select all that apply.</p>
              {q.options.map((o) => <AnswerOption key={o.id} label={o.label} selected={(value || []).includes(o.id)} onClick={() => toggleMulti(o.id)} />)}
            </div>
          )}
          {q.type === "scale" && <ScaleAnswer value={value} onChange={setScale} />}
        </div>

        <div className="px-5 pt-4 pb-6 flex gap-3 sticky bottom-0" style={{ background: C.paper, borderTop: `1px solid ${C.paperDeep}` }}>
          <button onClick={back} className="flex-1 flex items-center justify-center gap-1.5 rounded-xl p-3.5"
            style={{ background: C.card, border: `1px solid ${C.paperDeep}`, color: C.ink, fontFamily: FONT.body, fontSize: 14, fontWeight: 600, minHeight: 48 }}>
            <ArrowLeft size={15} /> Back
          </button>
          <button onClick={next} disabled={!canAdvance()} className="flex-[2] flex items-center justify-center gap-1.5 rounded-xl p-3.5"
            style={{ background: canAdvance() ? C.rust : C.paperDeep, color: C.card, fontFamily: FONT.body, fontSize: 14, fontWeight: 600, opacity: canAdvance() ? 1 : 0.7, minHeight: 48 }}>
            {isLast ? "Review Answers" : "Next"} <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

function BreakdownBar({ label, pct, color }) {
  const { C } = useTheme();
  return (
    <div className="flex items-center gap-2 mb-1">
      <span style={{ fontFamily: FONT.mono, fontSize: 9.5, color: C.inkSoft, width: 62, flexShrink: 0, textTransform: "uppercase", letterSpacing: "0.03em" }}>{label}</span>
      <div className="rounded-full overflow-hidden flex-1" style={{ height: 5, background: C.paper }}>
        <div style={{ height: "100%", width: `${pct}%`, background: color, borderRadius: 999 }} />
      </div>
      <span style={{ fontFamily: FONT.mono, fontSize: 9.5, color: C.inkSoft, width: 26, textAlign: "right", flexShrink: 0 }}>{pct}%</span>
    </div>
  );
}

function formatAnswer(q, value) {
  if (value === undefined || value === null || (Array.isArray(value) && value.length === 0)) return "Not answered";
  if (q.type === "scale") return `${value} — ${SCALE_LABELS[value - 1]}`;
  if (q.type === "multi") return value.map((id) => q.options.find((o) => o.id === id)?.label || id).join(", ");
  return q.options.find((o) => o.id === value)?.label || value;
}

function ReviewScreen({ answers, onEdit, onBack, onConfirm, onHome }) {
  const { C } = useTheme();
  const visibleQuestions = useMemo(() => getVisibleQuestions(answers), [answers]);
  const groups = [];
  for (const q of visibleQuestions) {
    let g = groups.find((x) => x.category === q.category);
    if (!g) { g = { category: q.category, items: [] }; groups.push(g); }
    g.items.push(q);
  }
  const answeredCount = visibleQuestions.filter((q) => {
    const v = answers[q.id];
    return v !== undefined && v !== null && !(Array.isArray(v) && v.length === 0);
  }).length;

  return (
    <div className="min-h-screen relative" style={{ background: C.paper }}>
      <Contours />
      <div className="relative">
        <TopBar title="Career Finder" onBack={onBack} />
        <Breadcrumbs items={[{ label: "Role Map", onClick: onHome }, { label: "Career Finder" }, { label: "Review" }]} />
        <div className="px-5">
          <h2 style={{ fontFamily: FONT.display, fontSize: 24, fontWeight: 600, color: C.ink }}>Review Your Answers</h2>
          <p style={{ fontFamily: FONT.body, color: C.inkSoft, fontSize: 13.5, marginTop: 4, marginBottom: 6, lineHeight: 1.5 }}>
            {answeredCount} of {visibleQuestions.length} questions answered. Tap Edit to change anything — your matches will recalculate automatically.
          </p>
        </div>

        <div className="px-5 pb-6 pt-2">
          {groups.map((g) => (
            <div key={g.category} className="mb-5">
              <Eyebrow color={C.trailDeep}>{g.category}</Eyebrow>
              <div className="rounded-xl overflow-hidden" style={{ background: C.card, border: `1px solid ${C.paperDeep}` }}>
                {g.items.map((q, i) => {
                  const idx = visibleQuestions.indexOf(q);
                  const answered = formatAnswer(q, answers[q.id]) !== "Not answered";
                  return (
                    <div key={q.id} className="flex items-start justify-between gap-3 p-3.5"
                      style={{ borderTop: i > 0 ? `1px solid ${C.paperDeep}` : "none" }}>
                      <div className="min-w-0 flex-1">
                        <div style={{ fontFamily: FONT.body, fontSize: 12, color: C.inkSoft, marginBottom: 3 }}>{q.question}</div>
                        <div style={{ fontFamily: FONT.body, fontSize: 13.5, color: answered ? C.ink : C.inkSoft, fontWeight: answered ? 600 : 400, fontStyle: answered ? "normal" : "italic" }}>
                          {formatAnswer(q, answers[q.id])}
                        </div>
                      </div>
                      <button onClick={() => onEdit(idx)} className="flex items-center gap-1 flex-shrink-0 rounded-full px-2.5 py-1.5"
                        style={{ background: C.paper, color: C.rust, fontFamily: FONT.body, fontSize: 11.5, fontWeight: 600, minHeight: 32 }}>
                        <Pencil size={11} /> Edit
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="px-5 pt-2 pb-8 flex gap-3 sticky bottom-0" style={{ background: C.paper, borderTop: `1px solid ${C.paperDeep}` }}>
          <button onClick={onBack} className="flex-1 flex items-center justify-center gap-1.5 rounded-xl p-3.5"
            style={{ background: C.card, border: `1px solid ${C.paperDeep}`, color: C.ink, fontFamily: FONT.body, fontSize: 14, fontWeight: 600, minHeight: 48 }}>
            <ArrowLeft size={15} /> Back to Quiz
          </button>
          <button onClick={onConfirm} className="flex-[2] flex items-center justify-center gap-1.5 rounded-xl p-3.5"
            style={{ background: C.rust, color: C.card, fontFamily: FONT.body, fontSize: 14, fontWeight: 600, minHeight: 48 }}>
            <Check size={15} /> See My Matches
          </button>
        </div>
      </div>
    </div>
  );
}

function CareerMatchCard({ rank, result, onExplore }) {
  const { C } = useTheme();
  const { field, score, laterLabel, reasons, breakdown } = result;
  const [showBreakdown, setShowBreakdown] = useState(false);
  return (
    <div className="rounded-2xl p-4 mb-3.5" style={{ background: C.card, border: `1px solid ${C.paperDeep}` }}>
      <div className="flex items-start gap-3">
        <div style={{ fontFamily: FONT.mono, fontSize: 20, color: C.paperDeep, fontWeight: 700, flexShrink: 0, lineHeight: 1 }}>
          {String(rank).padStart(2, "0")}
        </div>
        <div className="flex-1 min-w-0">
          <div style={{ fontFamily: FONT.display, fontWeight: 600, fontSize: 17, color: C.ink }}>{field.name}</div>
          <div className="flex items-center gap-2 mt-1.5 mb-2 flex-wrap">
            <span style={{ fontFamily: FONT.mono, fontSize: 13, fontWeight: 700, color: C.rust }}>{score}% Match</span>
            <span style={{ fontFamily: FONT.body, fontSize: 11, color: C.trailDeep, background: C.paper, borderRadius: 999, padding: "2px 9px" }}>{matchLabel(score)}</span>
            {laterLabel && <span style={{ fontFamily: FONT.body, fontSize: 10.5, color: C.inkSoft, fontStyle: "italic" }}>{laterLabel}</span>}
          </div>
          <p style={{ fontFamily: FONT.body, fontSize: 12.5, color: C.inkSoft, lineHeight: 1.5, marginBottom: 8 }}>{field.blurb}</p>
          {reasons.length > 0 && (
            <div className="mb-2">
              <div style={{ fontFamily: FONT.body, fontSize: 11.5, color: C.trailDeep, fontWeight: 600, marginBottom: 4 }}>Why this matches your answers:</div>
              <div>{reasons.map((r, i) => <Chip key={i}>{r}</Chip>)}</div>
            </div>
          )}

          <button onClick={() => setShowBreakdown((v) => !v)} className="flex items-center gap-1 mb-1"
            style={{ fontFamily: FONT.mono, fontSize: 10.5, color: C.inkSoft, textTransform: "uppercase", letterSpacing: "0.04em" }}>
            {showBreakdown ? "Hide" : "Show"} match breakdown <ChevronRight size={11} style={{ transform: showBreakdown ? "rotate(90deg)" : "none", transition: "transform 150ms" }} />
          </button>
          {showBreakdown && breakdown && (
            <div className="rounded-lg p-3 mb-2" style={{ background: C.paper }}>
              <BreakdownBar label="Interests" pct={breakdown.interest} color={C.trail} />
              <BreakdownBar label="Activities" pct={breakdown.activity} color={C.trail} />
              <BreakdownBar label="Strengths" pct={breakdown.strength} color={C.gold} />
              <BreakdownBar label="Values" pct={breakdown.values} color={C.gold} />
              <BreakdownBar label="Work fit" pct={breakdown.goalFit} color={C.rust} />
            </div>
          )}

          <button onClick={onExplore} className="flex items-center gap-1.5 mt-1"
            style={{ fontFamily: FONT.body, fontSize: 12.5, fontWeight: 600, color: C.rust, minHeight: 32 }}>
            Explore Career <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}

function ResultsScreen({ answers, onBack, onHome, onExploreField, onRetake, onReview }) {
  const { C } = useTheme();
  const { results: allResults, lightAnswers } = useMemo(() => computeMatches(answers), [answers]);
  const top = allResults.slice(0, 8);
  const more = allResults.slice(8, 14);
  const [exporting, setExporting] = useState(false);

  async function exportPDF() {
    setExporting(true);
    try {
      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF({ unit: "pt", format: "a4" });
      const marginX = 48;
      let y = 56;
      const pageWidth = doc.internal.pageSize.getWidth();
      const maxWidth = pageWidth - marginX * 2;
      const dateStr = new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });

      function ensureSpace(lines = 1, lineHeight = 14) {
        if (y + lines * lineHeight > doc.internal.pageSize.getHeight() - 56) { doc.addPage(); y = 56; }
      }
      function text(str, size, opts = {}) {
        doc.setFontSize(size);
        doc.setFont("helvetica", opts.bold ? "bold" : "normal");
        doc.setTextColor(opts.color || "#232C24");
        const lines = doc.splitTextToSize(str, maxWidth);
        ensureSpace(lines.length, size * 1.35);
        doc.text(lines, marginX, y);
        y += lines.length * size * 1.35 + (opts.gap ?? 6);
      }

      text("Role Map — Career Finder Results", 18, { bold: true, gap: 4 });
      text(`Generated on ${dateStr}`, 10, { color: "#5B6659", gap: 18 });
      text("These are guidance based on your quiz answers, not a guaranteed outcome. Use them as a starting point for research and conversations, not a final decision.", 9.5, { color: "#5B6659", gap: 20 });

      top.forEach((r, i) => {
        ensureSpace(3, 16);
        text(`${i + 1}. ${r.field.name} — ${r.score}% Match (${matchLabel(r.score)})`, 12.5, { bold: true, gap: 4 });
        if (r.field.blurb) text(r.field.blurb, 9.5, { color: "#5B6659", gap: 4 });
        if (r.reasons?.length) text("Why this matches: " + r.reasons.join(", "), 9.5, { color: "#334A3A", gap: 4 });
        const earningText = typeof r.field.earning === "string" ? r.field.earning : null;
        if (earningText) text("Earning potential (India): " + earningText, 9, { color: "#A9823D", gap: 4 });
        y += 8;
      });

      if (more.length) {
        ensureSpace(2, 14);
        text("Other careers worth exploring: " + more.map((r) => r.field.name).join(", "), 10, { color: "#334A3A" });
      }

      doc.save("rolemap-career-finder-results.pdf");
    } catch (err) {
      window.alert("Sorry, the PDF couldn't be generated. Please try again.");
    } finally {
      setExporting(false);
    }
  }

  return (
    <div className="min-h-screen relative" style={{ background: C.paper }}>
      <Contours />
      <div className="relative">
        <TopBar title="Career Finder" onBack={onBack} />
        <Breadcrumbs items={[{ label: "Role Map", onClick: onHome }, { label: "Career Finder", onClick: onBack }, { label: "Your Matches" }]} />

        <div className="px-5">
          <h2 style={{ fontFamily: FONT.display, fontSize: 25, fontWeight: 600, color: C.ink }}>Your Strongest Matches</h2>
          <p style={{ fontFamily: FONT.body, color: C.inkSoft, fontSize: 13.5, marginTop: 4, marginBottom: 10, lineHeight: 1.5 }}>
            These are the careers that best fit your answers — not a single predicted outcome. Explore a few before deciding.
          </p>

          {lightAnswers && (
            <div className="rounded-lg p-3 mb-4" style={{ background: C.card, border: `1px dashed ${C.paperDeep}` }}>
              <p style={{ fontFamily: FONT.body, fontSize: 12, color: C.inkSoft, lineHeight: 1.5 }}>
                You answered only a few questions, so these matches are broad. <button onClick={onReview} style={{ color: C.rust, fontWeight: 600 }}>Answer a few more</button> for sharper results.
              </p>
            </div>
          )}

          <div className="flex items-center gap-4 mb-5 flex-wrap">
            <button onClick={onReview} className="flex items-center gap-1.5"
              style={{ fontFamily: FONT.body, fontSize: 12.5, fontWeight: 600, color: C.trailDeep }}>
              <Pencil size={12} /> Review or edit your answers
            </button>
            <button onClick={exportPDF} disabled={exporting || top.length === 0} className="flex items-center gap-1.5"
              style={{ fontFamily: FONT.body, fontSize: 12.5, fontWeight: 600, color: C.rust, opacity: exporting || top.length === 0 ? 0.6 : 1 }}>
              <Download size={12} /> {exporting ? "Preparing PDF…" : "Export as PDF"}
            </button>
          </div>

          {top.length === 0 ? (
            <p style={{ fontFamily: FONT.body, fontSize: 13.5, color: C.inkSoft }}>Not enough answers to generate matches yet.</p>
          ) : (
            top.map((r, i) => (
              <CareerMatchCard key={r.profile.id} rank={i + 1} result={r} onExplore={() => onExploreField(r.field.id, r.source)} />
            ))
          )}

          {more.length > 0 && (
            <div className="mt-3 mb-6">
              <Eyebrow color={C.trailDeep}>Other careers worth exploring</Eyebrow>
              <div>{more.map((r) => <Chip key={r.profile.id}><button onClick={() => onExploreField(r.field.id, r.source)}>{r.field.name}</button></Chip>)}</div>
            </div>
          )}

          <div className="rounded-xl p-4 my-6" style={{ background: C.trailDeep }}>
            <p style={{ fontFamily: FONT.body, fontSize: 12, color: C.paper, lineHeight: 1.55 }}>
              These are guidance, not a guarantee — career choice depends on many factors beyond a quiz: your evolving interests, abilities, opportunities, finances, and personal goals. Use these results as a starting point for exploration, not a final decision.
            </p>
          </div>

          <button onClick={onRetake} className="w-full flex items-center justify-center gap-2 rounded-xl p-3.5 mb-3"
            style={{ background: C.card, border: `1px solid ${C.paperDeep}`, color: C.ink, fontFamily: FONT.body, fontSize: 13.5, fontWeight: 600, minHeight: 46 }}>
            Retake Career Finder
          </button>
          <button onClick={onHome} className="w-full flex items-center justify-center gap-2 rounded-xl p-3.5 mb-12"
            style={{ background: "transparent", color: C.inkSoft, fontFamily: FONT.body, fontSize: 13, minHeight: 46 }}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

function shortEarningText(text) {
  if (!text) return "";
  return text.split(" — ")[0].split(" (")[0];
}

function StageScreen({ stage, onBack, onHome, onOpenField, onOpenDbNode, onSearch }) {
  const { C } = useTheme();
  const [filter, setFilter] = useState("");
  const needle = filter.trim().toLowerCase();

  const isDbStage = stage.id === DB_STAGE_IDS.AFTER_10TH || stage.id === DB_STAGE_IDS.AFTER_12TH;
  const renderGroups = useMemo(() => {
    if (!isDbStage) return stage.groups;
    return dbDomainsOf(stage.id).map((domain) => ({
      id: domain.id,
      title: domain.title,
      blurb: domain.description || "",
      fields: dbChildrenOf(domain.id).map((child) => ({
        id: child.id,
        name: child.title,
        blurb: child.description || child.simpleExplanation || "",
        earning: formatDbEarning(child.earning)?.text || null,
        _childCount: dbChildrenOf(child.id).length,
      })),
    }));
  }, [isDbStage, stage]);

  return (
    <div className="min-h-screen relative" style={{ background: C.paper }}>
      <Contours />
      <div className="relative">
        <TopBar title={`Stage ${stage.code} of 05`} onBack={onBack} onSearch={onSearch} />
        <Breadcrumbs items={[{ label: "Role Map", onClick: onHome }, { label: "Roadmap", onClick: onBack }, { label: shortName(stage) }]} />

        <div className="px-5">
          <h2 style={{ fontFamily: FONT.display, fontSize: 24, fontWeight: 600, color: C.ink }}>{stage.title}</h2>
          <p style={{ fontFamily: FONT.body, color: C.inkSoft, fontSize: 14, marginTop: 4, marginBottom: 16, lineHeight: 1.5 }}>{stage.blurb}</p>

          <div className="flex items-center gap-2 rounded-full px-4 py-2.5 mb-8" style={{ background: C.card, border: `1px solid ${C.paperDeep}` }}>
            <Search size={14} color={C.inkSoft} />
            <input
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder={`Filter within ${shortName(stage)}...`}
              style={{ background: "transparent", border: "none", outline: "none", flex: 1, fontFamily: FONT.body, fontSize: 13.5, color: C.ink }}
            />
          </div>

          {renderGroups.map((group) => {
            const fields = group.fields.filter(
              (fld) => !needle || fld.name.toLowerCase().includes(needle) || fld.blurb.toLowerCase().includes(needle)
            );
            if (!fields.length) return null;
            return (
              <div key={group.id} className="mb-9">
                <div style={{ fontFamily: FONT.display, fontWeight: 600, fontSize: 17, color: C.trailDeep }}>{group.title}</div>
                <div style={{ fontFamily: FONT.body, fontSize: 12.5, color: C.inkSoft, marginTop: 2, marginBottom: 12 }}>{group.blurb}</div>
                <div className="grid grid-cols-1 gap-3">
                  {fields.map((fld) => (
                    <button key={fld.id} onClick={() => (isDbStage ? onOpenDbNode(fld.id) : onOpenField(fld.id))} className="text-left rounded-xl p-4 flex items-start justify-between gap-3"
                      style={{ background: C.card, border: `1px solid ${C.paperDeep}` }}>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <div style={{ fontFamily: FONT.display, fontWeight: 600, fontSize: 15, color: C.ink }}>{fld.name}</div>
                          {fld._childCount > 0 && (
                            <span style={{ fontFamily: FONT.mono, fontSize: 9.5, color: C.trailDeep, background: C.paper, borderRadius: 999, padding: "1.5px 7px", fontWeight: 700 }}>
                              {fld._childCount} {fld._childCount === 1 ? "option" : "options"}
                            </span>
                          )}
                        </div>
                        <div style={{ fontFamily: FONT.body, fontSize: 12.5, color: C.inkSoft, marginTop: 3, lineHeight: 1.45 }}>{fld.blurb}</div>
                        {fld.earning && (
                          <div style={{ fontFamily: FONT.mono, fontSize: 10.5, color: C.gold, marginTop: 6, fontWeight: 700 }}>
                            ₹ {shortEarningText(fld.earning)}
                          </div>
                        )}
                        <div style={{ fontFamily: FONT.mono, fontSize: 11, color: C.rust, marginTop: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          Explore →
                        </div>
                      </div>
                      <ArrowRight size={16} color={C.inkSoft} style={{ flexShrink: 0, marginTop: 3 }} />
                    </button>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="pb-12" />
        </div>
      </div>
    </div>
  );
}

function ListBlock({ items }) {
  const { C } = useTheme();
  if (!items || !items.length) return null;
  return (
    <ul className="flex flex-col gap-2">
      {items.map((it, i) => (
        <li key={i} className="flex gap-2.5" style={{ fontFamily: FONT.body, fontSize: 13.5, color: C.ink, lineHeight: 1.5 }}>
          <span style={{ color: C.rust, flexShrink: 0 }}>—</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function PathVisual({ steps }) {
  const { C } = useTheme();
  if (!steps || !steps.length) return null;
  return (
    <div className="rounded-xl p-4" style={{ background: C.trailDeep }}>
      {steps.map((step, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className="flex flex-col items-center" style={{ width: 20 }}>
            <div className="rounded-full flex-shrink-0" style={{ width: 9, height: 9, background: C.gold, marginTop: 4 }} />
            {i < steps.length - 1 && <div style={{ width: 2, flex: 1, background: "rgba(234,226,204,0.25)", minHeight: 22 }} />}
          </div>
          <div style={{ fontFamily: FONT.body, fontSize: 13.5, color: C.paper, paddingBottom: i < steps.length - 1 ? 14 : 0 }}>{step}</div>
        </div>
      ))}
    </div>
  );
}

function FieldScreen({ field, group, stage, onBack, onHome, onRoadmap, onStage, navigateField, navigateDbNode, onSearch, onBackToResults, favorites, onToggleFavorite }) {
  const { C } = useTheme();
  const opportunities = [...(field.govt || []).map((x) => ({ x, tag: "Government" })), ...(field.priv || []).map((x) => ({ x, tag: "Private" }))];
  const dbChildren = field._dbChildren || [];
  const dbInformationalNext = field._dbInformationalNext || [];
  const isFav = favorites?.has(field.id);

  const crumbs = field._dbNode
    ? [
        { label: "Role Map", onClick: onHome },
        { label: "Roadmap", onClick: onRoadmap },
        { label: shortName(stage), onClick: onStage },
        ...dbBreadcrumbChain(field.id).slice(0, -1).map((n) => ({ label: n.title, onClick: () => navigateDbNode(n.id) })),
        { label: field.name },
      ]
    : [
        { label: "Role Map", onClick: onHome },
        { label: "Roadmap", onClick: onRoadmap },
        { label: shortName(stage), onClick: onStage },
        { label: group.title },
        { label: field.name },
      ];

  return (
    <div className="min-h-screen relative" style={{ background: C.paper }}>
      <Contours />
      <div className="relative">
        <TopBar title={stage.title} onBack={onBack} onSearch={onSearch} />
        <Breadcrumbs items={crumbs} />
        {onBackToResults && (
          <div className="px-5 -mt-1 pb-1">
            <button onClick={onBackToResults} className="flex items-center gap-1.5" style={{ fontFamily: FONT.body, fontSize: 12.5, color: C.rust, fontWeight: 600 }}>
              <ArrowLeft size={13} /> Back to your Career Finder matches
            </button>
          </div>
        )}

        <div className="px-5">
          <div className="flex items-start justify-between gap-3">
            <h2 style={{ fontFamily: FONT.display, fontSize: 23, fontWeight: 600, color: C.ink, lineHeight: 1.2, flex: 1 }}>{field.name}</h2>
            {onToggleFavorite && (
              <button onClick={() => onToggleFavorite({ id: field.id, title: field.name, source: field._dbNode ? "db" : "old", stageId: stage.id })}
                aria-label={isFav ? "Remove bookmark" : "Save this career"} className="flex items-center justify-center rounded-full flex-shrink-0"
                style={{ width: 36, height: 36, background: isFav ? C.gold : C.card, border: `1px solid ${C.paperDeep}`, color: isFav ? C.card : C.inkSoft, marginTop: 2 }}>
                {isFav ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
              </button>
            )}
          </div>
          <p style={{ fontFamily: FONT.body, color: C.inkSoft, fontSize: 14, marginTop: 6, marginBottom: field.earning ? 14 : 22, lineHeight: 1.55 }}>{field.blurb}</p>

          {field.earning && (
            <div className="rounded-xl p-4 mb-5 flex items-start gap-3" style={{ background: C.card, border: `1px solid ${C.gold}` }}>
              <div className="rounded-full flex items-center justify-center flex-shrink-0" style={{ width: 30, height: 30, background: C.gold, marginTop: 1 }}>
                <span style={{ fontFamily: FONT.mono, fontSize: 14, fontWeight: 700, color: C.card }}>₹</span>
              </div>
              <div>
                <div style={{ fontFamily: FONT.mono, fontSize: 10.5, letterSpacing: "0.08em", textTransform: "uppercase", color: C.gold, fontWeight: 700, marginBottom: 3 }}>
                  {field.earningLabel || "Earning Potential (India)"}
                </div>
                <div style={{ fontFamily: FONT.body, fontSize: 13.5, color: C.ink, lineHeight: 1.5 }}>{field.earning}</div>
              </div>
            </div>
          )}

          {dbChildren.length > 0 && (
            <div className="mb-7">
              <Eyebrow color={C.rust}>
                <div className="flex items-center gap-1.5"><Layers size={12} /> {dbChildren.length} {dbChildren.length === 1 ? "option" : "options"} under this</div>
              </Eyebrow>
              <div className="flex flex-col gap-2.5">
                {dbChildren.map((child) => (
                  <button key={child.id} onClick={() => navigateDbNode(child.id)} className="w-full flex items-center justify-between gap-3 rounded-xl p-3.5 text-left"
                    style={{ background: C.card, border: `1px solid ${C.paperDeep}` }}>
                    <div className="min-w-0">
                      <div style={{ fontFamily: FONT.display, fontWeight: 600, fontSize: 14.5, color: C.ink }}>{child.title}</div>
                      {child.description && <div style={{ fontFamily: FONT.body, fontSize: 12, color: C.inkSoft, marginTop: 2, lineHeight: 1.4 }}>{child.description.slice(0, 90)}{child.description.length > 90 ? "…" : ""}</div>}
                    </div>
                    <ArrowRight size={15} color={C.rust} style={{ flexShrink: 0 }} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {field.subjects?.length > 0 && <Section label="What you'll study"><ListBlock items={field.subjects} /></Section>}
          {field.suitableFor?.length > 0 && <Section label="Who this suits" color={C.trailDeep}><ListBlock items={field.suitableFor} /></Section>}

          {(field.eligibility || field.duration) && (
            <Section label="Eligibility & Duration">
              {field.eligibility && <p style={{ fontFamily: FONT.body, fontSize: 13.5, color: C.ink, marginBottom: 6 }}>{field.eligibility}</p>}
              {field.duration && <Chip>{field.duration}</Chip>}
            </Section>
          )}

          {field.exams?.length > 0 && (
            <Section label="Entrance exams">
              <div>{field.exams.map((e, i) => <Chip key={i}>{e}</Chip>)}</div>
            </Section>
          )}

          {field.degrees?.length > 0 && <Section label="Degrees / Qualifications"><ListBlock items={field.degrees} /></Section>}
          {field.skills?.length > 0 && <Section label="Skills you'll build" color={C.trailDeep}><ListBlock items={field.skills} /></Section>}
          {field.careers?.length > 0 && <Section label="Career options"><ListBlock items={field.careers} /></Section>}

          {field.leadsTo?.length > 0 && (
            <Section label="Where it leads">
              <PathVisual steps={field.leadsTo} />
            </Section>
          )}

          {field.higherStudies?.length > 0 && <Section label="Higher studies" color={C.trailDeep}><ListBlock items={field.higherStudies} /></Section>}

          {opportunities.length > 0 && (
            <Section label="Opportunities">
              <div className="flex flex-col gap-2">
                {opportunities.map((o, i) => (
                  <div key={i} className="flex gap-2.5" style={{ fontFamily: FONT.body, fontSize: 13.5, color: C.ink }}>
                    <span style={{ fontFamily: FONT.mono, fontSize: 10, color: C.rust, textTransform: "uppercase", flexShrink: 0, paddingTop: 2 }}>{o.tag}</span>
                    <span>{o.x}</span>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {(field.advantages?.length > 0 || field.challenges?.length > 0) && (
            <Section label="Good to know">
              {field.advantages?.length > 0 && (
                <div className="mb-3">
                  <div style={{ fontFamily: FONT.body, fontSize: 12, color: C.trailDeep, fontWeight: 600, marginBottom: 4 }}>Advantages</div>
                  <ListBlock items={field.advantages} />
                </div>
              )}
              {field.challenges?.length > 0 && (
                <div>
                  <div style={{ fontFamily: FONT.body, fontSize: 12, color: C.rust, fontWeight: 600, marginBottom: 4 }}>Worth knowing</div>
                  <ListBlock items={field.challenges} />
                </div>
              )}
            </Section>
          )}

          {field.nextPaths?.length > 0 && (
            <Section label="Explore next">
              <div className="flex flex-col gap-2.5 mb-4">
                {field.nextPaths.map((np, i) => (
                  <button key={i} onClick={() => navigateField(np.fieldId)}
                    className="w-full flex items-center justify-between rounded-xl p-4"
                    style={{ background: C.card, border: `1px dashed ${C.rust}` }}>
                    <span style={{ fontFamily: FONT.body, fontSize: 13, color: C.ink }}>{np.label}</span>
                    <ArrowRight size={15} color={C.rust} />
                  </button>
                ))}
              </div>
            </Section>
          )}

          {dbInformationalNext.length > 0 && (
            <Section label="Can lead toward">
              <div>{dbInformationalNext.map((n, i) => <Chip key={i}>{n}</Chip>)}</div>
            </Section>
          )}

          <button onClick={onStage} className="w-full flex items-center justify-center gap-2 rounded-xl p-3.5 mb-12"
            style={{ background: C.trailDeep, color: C.paper, fontFamily: FONT.body, fontSize: 13.5, fontWeight: 600 }}>
            Back to {shortName(stage)} <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================== APP ============================== */
function AppShell() {
  const { C, mode } = useTheme();
  const [page, setPageState] = useState("home"); // home | roadmap | stage | field | cfLanding | quiz | review | results | favorites
  const [stageId, setStageId] = useState(null);
  const [fieldId, setFieldId] = useState(null);
  const [fieldSource, setFieldSource] = useState("old"); // "old" | "db" — which data model the open field page came from
  const [searchOpen, setSearchOpen] = useState(false);
  const [cameFromResults, setCameFromResults] = useState(false);

  // Career Finder state — persisted for the session so an accidental reload/navigation doesn't wipe progress.
  const [answers, setAnswers] = useState(() => {
    try { const saved = sessionStorage.getItem("role-map-quiz-answers"); return saved ? JSON.parse(saved) : {}; } catch { return {}; }
  });
  const [qIndex, setQIndex] = useState(() => {
    try { const saved = sessionStorage.getItem("role-map-quiz-index"); return saved ? Number(saved) : 0; } catch { return 0; }
  });

  useEffect(() => { try { sessionStorage.setItem("role-map-quiz-answers", JSON.stringify(answers)); } catch {} }, [answers]);
  useEffect(() => { try { sessionStorage.setItem("role-map-quiz-index", String(qIndex)); } catch {} }, [qIndex]);

  // Bookmarks — persisted to localStorage (unlike quiz progress) since these should survive across sessions/browser restarts.
  const [favorites, setFavorites] = useState(() => {
    try { const saved = localStorage.getItem("role-map-favorites"); return saved ? JSON.parse(saved) : []; } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem("role-map-favorites", JSON.stringify(favorites)); } catch {} }, [favorites]);
  const favoriteIds = useMemo(() => new Set(favorites.map((f) => f.id)), [favorites]);
  function toggleFavorite(item) {
    setFavorites((prev) => (prev.some((f) => f.id === item.id) ? prev.filter((f) => f.id !== item.id) : [...prev, { ...item, savedAt: Date.now() }]));
  }

  const currentStage = STAGES.find((s) => s.id === stageId) || null;
  const oldFieldMeta = fieldId && fieldSource === "old" ? findFieldMeta(fieldId) : null;
  const dbNode = fieldId && fieldSource === "db" ? dbGetNode(fieldId) : null;
  const dbFieldStage = dbNode ? STAGES.find((s) => s.id === dbNode.stage) : null;
  const fieldMeta = oldFieldMeta || (dbNode && dbFieldStage ? { field: dbNodeToFieldShape(dbNode), group: null, stage: dbFieldStage } : null);

  // Every real navigation pushes onto the browser's history so the native Back button works.
  const navigate = useCallback((next, replace) => {
    setPageState(next.page);
    setStageId(next.stageId ?? null);
    setFieldId(next.fieldId ?? null);
    setFieldSource(next.fieldSource ?? "old");
    setCameFromResults(!!next.cameFromResults);
    try {
      if (replace) window.history.replaceState(next, "");
      else window.history.pushState(next, "");
    } catch {}
  }, []);

  useEffect(() => {
    function onPop(e) {
      const s = e.state || { page: "home" };
      setPageState(s.page || "home");
      setStageId(s.stageId ?? null);
      setFieldId(s.fieldId ?? null);
      setFieldSource(s.fieldSource ?? "old");
      setCameFromResults(!!s.cameFromResults);
    }
    window.addEventListener("popstate", onPop);
    try { window.history.replaceState({ page: "home" }, ""); } catch {}
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  function goHome() { navigate({ page: "home" }); }
  function goRoadmap() { navigate({ page: "roadmap" }); }
  function openStage(id) { navigate({ page: "stage", stageId: id }); }
  function openField(id) {
    const meta = findFieldMeta(id);
    if (meta) navigate({ page: "field", stageId: meta.stage.id, fieldId: id, fieldSource: "old", cameFromResults: page === "results" || page === "review" });
  }
  function openDbNode(id) {
    const node = dbGetNode(id);
    if (node) navigate({ page: "field", stageId: node.stage, fieldId: id, fieldSource: "db", cameFromResults: page === "results" || page === "review" });
  }
  function pickFromSearch(id, source) { setSearchOpen(false); if (source === "db") openDbNode(id); else openField(id); }
  function openFavorite(item) { if (item.source === "db") openDbNode(item.id); else openField(item.id); }

  function openCareerFinderLanding() { navigate({ page: "cfLanding" }); }
  function startQuiz() { setAnswers({}); setQIndex(0); navigate({ page: "quiz" }); }
  function retakeQuiz() {
    if (Object.keys(answers).length > 0) {
      const ok = window.confirm("Retaking the Career Finder will clear your current answers and results. Continue?");
      if (!ok) return;
    }
    setAnswers({}); setQIndex(0); navigate({ page: "quiz" });
  }
  function goToReview() { navigate({ page: "review" }); }
  function finishQuiz() { navigate({ page: "results" }); }
  function editAnswer(index) { setQIndex(index); navigate({ page: "quiz" }); }
  function exploreFromResults(id, source) {
    if (source === "db") { openDbNode(id); return; }
    const meta = findFieldMeta(id);
    if (meta) navigate({ page: "field", stageId: meta.stage.id, fieldId: id, fieldSource: "old", cameFromResults: true });
  }

  return (
    <div style={{ fontFamily: FONT.body, background: C.paperDeep, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; }
        html, body { overflow-x: hidden; }
        body { background: ${C.paperDeep}; transition: background-color 0.2s ease; }
        button { font: inherit; -webkit-tap-highlight-color: transparent; }
        button, a, input[type="button"] { min-height: 36px; }
        ::selection { background: ${C.gold}; color: ${C.card}; }
      `}</style>

      <div className="mx-auto relative" style={{ maxWidth: 640, minHeight: "100vh", background: C.paper }}>
        {page === "home" && <HomeScreen onOpenRoadmap={goRoadmap} onOpenCareerFinder={openCareerFinderLanding} onOpenFavorites={() => navigate({ page: "favorites" })} favoritesCount={favorites.length} />}
        {page === "roadmap" && <RoadmapScreen onBack={goHome} onOpenStage={openStage} onSearch={() => setSearchOpen(true)} />}
        {page === "stage" && currentStage && (
          <StageScreen stage={currentStage} onBack={goRoadmap} onHome={goHome} onOpenField={openField} onOpenDbNode={openDbNode} onSearch={() => setSearchOpen(true)} />
        )}
        {page === "field" && fieldMeta && (
          <FieldScreen
            field={fieldMeta.field}
            group={fieldMeta.group}
            stage={fieldMeta.stage}
            onBack={cameFromResults ? () => navigate({ page: "results" }) : () => openStage(fieldMeta.stage.id)}
            onHome={goHome}
            onRoadmap={goRoadmap}
            onStage={() => openStage(fieldMeta.stage.id)}
            navigateField={openField}
            navigateDbNode={openDbNode}
            onSearch={() => setSearchOpen(true)}
            onBackToResults={cameFromResults ? () => navigate({ page: "results" }) : null}
            favorites={favoriteIds}
            onToggleFavorite={toggleFavorite}
          />
        )}
        {page === "favorites" && (
          <FavoritesScreen favorites={favorites} onBack={goHome} onHome={goHome} onOpen={openFavorite} onRemove={(id) => setFavorites((prev) => prev.filter((f) => f.id !== id))} />
        )}
        {page === "cfLanding" && <CareerFinderLanding onBack={goHome} onHome={goHome} onStart={startQuiz} hasProgress={Object.keys(answers).length > 0} onResume={() => navigate({ page: "quiz" })} onPickDirect={pickFromSearch} />}
        {page === "quiz" && (
          <QuizScreen answers={answers} setAnswers={setAnswers} index={qIndex} setIndex={setQIndex}
            onExit={() => navigate({ page: "cfLanding" })} onFinish={goToReview} />
        )}
        {page === "review" && (
          <ReviewScreen answers={answers} onEdit={editAnswer} onBack={() => navigate({ page: "quiz" })}
            onConfirm={finishQuiz} onHome={goHome} />
        )}
        {page === "results" && (
          <ResultsScreen answers={answers} onBack={() => navigate({ page: "review" })} onHome={goHome}
            onExploreField={exploreFromResults} onRetake={retakeQuiz} onReview={goToReview} />
        )}

        {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} onPick={pickFromSearch} />}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}
