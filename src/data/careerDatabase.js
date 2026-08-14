// =============================================================================
// RoleMate — Career & Education Database (Part 1: Foundation)
// =============================================================================
// Auto-generated structured database covering the full hierarchy:
//   Stage -> Domain -> Field/EducationPath -> Specialization/Career
//
// This file is additive: it does not replace or modify the existing
// STAGES / CAREER_PROFILES data used by the current Roadmap and Career
// Finder in App.jsx. It is the foundation for future parts of this project
// (wiring into the Roadmap, and the Adaptive Career Finder).
//
// Node shape (every entry):
// {
//   id, parentId, stage, type, title, domain, category, subCategory,
//   description, simpleExplanation, suitableStages, educationPath, eligibility,
//   entranceExams, degrees, specializations, subjects, skills, activities,
//   interests, strengths, workStyles, environments, values, relatedCareers,
//   nextPaths, higherStudies, earning, challenges, advantages, tags,
//   mathLevel, biologyLevel, technologyLevel, creativityLevel, communicationLevel,
//   leadershipLevel, researchLevel, practicalLevel, theoreticalLevel,
//   peopleInteractionLevel, educationLength, riskLevel, stabilityLevel,
//   entrepreneurshipLevel
// }
//
// "type" values: Domain | EducationPath | Subject | Specialization | Career
//   - Domain / EducationPath / Subject: NOT a career on their own (e.g. PCM,
//     Psychology-as-a-subject, MBBS). Their `earning` field is intentionally
//     null — do not display a salary for these.
//   - Specialization / Career: an actual paid role. Has a non-null `earning`.
// =============================================================================

export const STAGE_IDS = {
  AFTER_10TH: "after10",
  AFTER_12TH: "after12",
  AFTER_COLLEGE: "afterCollege",
  AFTER_MTECH: "afterMTech",
  AFTER_PHD: "afterPhD",
};

export const NODE_TYPES = {
  DOMAIN: "Domain",
  FIELD: "Field",
  EDUCATION_PATH: "EducationPath",
  SUBJECT: "Subject",
  PROFESSIONAL_QUALIFICATION: "ProfessionalQualification",
  SPECIALIZATION: "Specialization",
  CAREER: "Career",
};

export const CAREER_DB = [
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-science",
    "parentId": null,
    "stage": "after10",
    "type": "Domain",
    "title": "Science",
    "domain": "Education Stream",
    "category": "Science",
    "subCategory": ""
  },
  {
    "description": "A science stream built around Physics, Chemistry and Mathematics — the standard foundation for engineering, architecture, defence and the physical sciences.",
    "simpleExplanation": "Choose this if you enjoy numbers, logic and how machines/structures work more than biology.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "math",
      "physics",
      "chemistry"
    ],
    "skills": [],
    "activities": [
      "solve-problems"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Engineering",
      "Architecture",
      "Defence",
      "Pure Sciences",
      "Aviation"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 5,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 2,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-science-pcm",
    "parentId": "edu-a10-science",
    "stage": "after10",
    "type": "EducationPath",
    "title": "PCM (Physics, Chemistry, Mathematics)",
    "domain": "Science",
    "category": "Stream",
    "subCategory": ""
  },
  {
    "description": "A science stream centered on Physics, Chemistry and Biology — the standard route into medicine, dentistry, and life sciences.",
    "simpleExplanation": "Choose this if you're drawn to how living things work and want to keep medicine/healthcare open.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "biology",
      "chemistry",
      "physics"
    ],
    "skills": [],
    "activities": [
      "healthcare"
    ],
    "interests": [
      "biology",
      "chemistry"
    ],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Medicine",
      "Dentistry",
      "Nursing & Allied Health",
      "Pure Sciences",
      "Agriculture"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-science-pcb",
    "parentId": "edu-a10-science",
    "stage": "after10",
    "type": "EducationPath",
    "title": "PCB (Physics, Chemistry, Biology)",
    "domain": "Science",
    "category": "Stream",
    "subCategory": ""
  },
  {
    "description": "Combines Maths and Biology alongside Physics and Chemistry, keeping both engineering and medical routes open for longer.",
    "simpleExplanation": "A heavier workload, but you don't have to choose between engineering and medicine yet.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "math",
      "biology",
      "chemistry",
      "physics"
    ],
    "skills": [],
    "activities": [],
    "interests": [
      "math",
      "biology"
    ],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Engineering",
      "Medicine",
      "Pure Sciences"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [
      "Significantly heavier subject load than PCM or PCB alone"
    ],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-science-pcmb",
    "parentId": "edu-a10-science",
    "stage": "after10",
    "type": "EducationPath",
    "title": "PCMB (Physics, Chemistry, Maths, Biology)",
    "domain": "Science",
    "category": "Stream",
    "subCategory": ""
  },
  {
    "description": "PCM plus Computer Science as an additional subject — an early head-start into programming and software thinking.",
    "simpleExplanation": "Good if you already know you're drawn to coding and software.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "math",
      "physics",
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Computer Science Engineering",
      "Software Careers",
      "Data Science"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 4,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-science-cs",
    "parentId": "edu-a10-science",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Science with Computer Science",
    "domain": "Science",
    "category": "Stream",
    "subCategory": ""
  },
  {
    "description": "PCB plus Biotechnology as an additional subject, useful for students aiming at biotech, genetics or pharma research.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "biology",
      "chemistry"
    ],
    "skills": [],
    "activities": [],
    "interests": [
      "biology"
    ],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Biotechnology Engineering",
      "Pharma",
      "Research"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-science-biotech",
    "parentId": "edu-a10-science",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Science with Biotechnology",
    "domain": "Science",
    "category": "Stream",
    "subCategory": ""
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-commerce",
    "parentId": null,
    "stage": "after10",
    "type": "Domain",
    "title": "Commerce",
    "domain": "Education Stream",
    "category": "Commerce",
    "subCategory": ""
  },
  {
    "description": "Commerce subjects (Accountancy, Business Studies, Economics) plus Mathematics — keeps CA, finance, actuarial science and economics-heavy routes open.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "accounting",
      "economics",
      "business",
      "math"
    ],
    "skills": [],
    "activities": [
      "work-numbers"
    ],
    "interests": [
      "business",
      "economics"
    ],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Chartered Accountancy",
      "Finance",
      "Economics",
      "Actuarial Science",
      "B.Com"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-commerce-maths",
    "parentId": "edu-a10-commerce",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Commerce with Mathematics",
    "domain": "Commerce",
    "category": "Stream",
    "subCategory": ""
  },
  {
    "description": "Commerce subjects without Mathematics — still opens B.Com, BBA, most banking and general business careers.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "accounting",
      "economics",
      "business"
    ],
    "skills": [],
    "activities": [
      "work-business"
    ],
    "interests": [
      "business"
    ],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "B.Com",
      "BBA",
      "Banking",
      "Business Management"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 1,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-commerce-no-maths",
    "parentId": "edu-a10-commerce",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Commerce without Mathematics",
    "domain": "Commerce",
    "category": "Stream",
    "subCategory": ""
  },
  {
    "description": "Commerce study chosen with an eye toward finance-heavy careers — banking, investment, financial analysis.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Finance",
      "Chartered Accountancy",
      "Banking"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-commerce-finance",
    "parentId": "edu-a10-commerce",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Commerce — Finance Direction",
    "domain": "Commerce",
    "category": "Stream",
    "subCategory": ""
  },
  {
    "description": "Commerce study focused toward accounting, auditing and taxation careers.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Chartered Accountancy",
      "Cost & Management Accountancy",
      "Company Secretary"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-commerce-accounting",
    "parentId": "edu-a10-commerce",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Commerce — Accounting Direction",
    "domain": "Commerce",
    "category": "Stream",
    "subCategory": ""
  },
  {
    "description": "Commerce study aimed at management, entrepreneurship and general business roles rather than pure finance.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "BBA",
      "Business Management",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-commerce-business",
    "parentId": "edu-a10-commerce",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Commerce — Business Direction",
    "domain": "Commerce",
    "category": "Stream",
    "subCategory": ""
  },
  {
    "description": "Commerce study weighted toward Economics — useful for policy, research and economics-heavy degrees later.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Economics (Honours)",
      "Public Policy",
      "Civil Services"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-commerce-economics",
    "parentId": "edu-a10-commerce",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Commerce — Economics Direction",
    "domain": "Commerce",
    "category": "Stream",
    "subCategory": ""
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-arts",
    "parentId": null,
    "stage": "after10",
    "type": "Domain",
    "title": "Arts / Humanities",
    "domain": "Education Stream",
    "category": "Arts",
    "subCategory": ""
  },
  {
    "description": "A broad stream covering social sciences, languages and humanities subjects, keeping law, civil services, media, design and research all open.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Arts Degree (BA)",
      "Law",
      "Civil Services",
      "Journalism & Media",
      "Academia"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-arts-general",
    "parentId": "edu-a10-arts",
    "stage": "after10",
    "type": "Subject",
    "title": "Arts / Humanities",
    "domain": "Arts / Humanities",
    "category": "Subject",
    "subCategory": ""
  },
  {
    "description": "The study of mind and behaviour — the starting subject for later careers in clinical, counselling or organisational psychology.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Arts Degree (BA)",
      "Law",
      "Civil Services",
      "Journalism & Media",
      "Academia"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-arts-psychology",
    "parentId": "edu-a10-arts",
    "stage": "after10",
    "type": "Subject",
    "title": "Psychology",
    "domain": "Arts / Humanities",
    "category": "Subject",
    "subCategory": ""
  },
  {
    "description": "The study of the past through evidence — leads to careers in research, archives, museums, teaching, or civil services.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Arts Degree (BA)",
      "Law",
      "Civil Services",
      "Journalism & Media",
      "Academia"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-arts-history",
    "parentId": "edu-a10-arts",
    "stage": "after10",
    "type": "Subject",
    "title": "History",
    "domain": "Arts / Humanities",
    "category": "Subject",
    "subCategory": ""
  },
  {
    "description": "The study of places, people and environment — leads to urban planning, GIS, environmental and civil-service careers.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Arts Degree (BA)",
      "Law",
      "Civil Services",
      "Journalism & Media",
      "Academia"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-arts-geography",
    "parentId": "edu-a10-arts",
    "stage": "after10",
    "type": "Subject",
    "title": "Geography",
    "domain": "Arts / Humanities",
    "category": "Subject",
    "subCategory": ""
  },
  {
    "description": "The study of governments, power and policy — a strong base for civil services, law, journalism, and public policy.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Arts Degree (BA)",
      "Law",
      "Civil Services",
      "Journalism & Media",
      "Academia"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-arts-political-science",
    "parentId": "edu-a10-arts",
    "stage": "after10",
    "type": "Subject",
    "title": "Political Science",
    "domain": "Arts / Humanities",
    "category": "Subject",
    "subCategory": ""
  },
  {
    "description": "The study of society and social behaviour — leads to social work, research, and community development careers.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Arts Degree (BA)",
      "Law",
      "Civil Services",
      "Journalism & Media",
      "Academia"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-arts-sociology",
    "parentId": "edu-a10-arts",
    "stage": "after10",
    "type": "Subject",
    "title": "Sociology",
    "domain": "Arts / Humanities",
    "category": "Subject",
    "subCategory": ""
  },
  {
    "description": "The study of production, distribution and decision-making — leads to research, policy, finance, and civil-service careers.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Arts Degree (BA)",
      "Law",
      "Civil Services",
      "Journalism & Media",
      "Academia"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-arts-economics-a10",
    "parentId": "edu-a10-arts",
    "stage": "after10",
    "type": "Subject",
    "title": "Economics",
    "domain": "Arts / Humanities",
    "category": "Subject",
    "subCategory": ""
  },
  {
    "description": "The study of reasoning, ethics and existence — leads to research, law, writing, and academic careers.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Arts Degree (BA)",
      "Law",
      "Civil Services",
      "Journalism & Media",
      "Academia"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-arts-philosophy",
    "parentId": "edu-a10-arts",
    "stage": "after10",
    "type": "Subject",
    "title": "Philosophy",
    "domain": "Arts / Humanities",
    "category": "Subject",
    "subCategory": ""
  },
  {
    "description": "Study of a language's structure and use — leads to translation, teaching, content and civil-service careers.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Arts Degree (BA)",
      "Law",
      "Civil Services",
      "Journalism & Media",
      "Academia"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-arts-languages",
    "parentId": "edu-a10-arts",
    "stage": "after10",
    "type": "Subject",
    "title": "Languages",
    "domain": "Arts / Humanities",
    "category": "Subject",
    "subCategory": ""
  },
  {
    "description": "Study of written works and their craft — leads to writing, editing, publishing and academic careers.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Arts Degree (BA)",
      "Law",
      "Civil Services",
      "Journalism & Media",
      "Academia"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-arts-literature",
    "parentId": "edu-a10-arts",
    "stage": "after10",
    "type": "Subject",
    "title": "Literature",
    "domain": "Arts / Humanities",
    "category": "Subject",
    "subCategory": ""
  },
  {
    "description": "Study of visual and applied arts — leads to illustration, design, and studio-art careers.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Arts Degree (BA)",
      "Law",
      "Civil Services",
      "Journalism & Media",
      "Academia"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-arts-fine-arts",
    "parentId": "edu-a10-arts",
    "stage": "after10",
    "type": "Subject",
    "title": "Fine Arts",
    "domain": "Arts / Humanities",
    "category": "Subject",
    "subCategory": ""
  },
  {
    "description": "An umbrella group covering sociology, political science, economics and anthropology together.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Arts Degree (BA)",
      "Law",
      "Civil Services",
      "Journalism & Media",
      "Academia"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-arts-social-sciences",
    "parentId": "edu-a10-arts",
    "stage": "after10",
    "type": "Subject",
    "title": "Social Sciences",
    "domain": "Arts / Humanities",
    "category": "Subject",
    "subCategory": ""
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-diploma",
    "parentId": null,
    "stage": "after10",
    "type": "Domain",
    "title": "Diploma / Polytechnic",
    "domain": "Vocational",
    "category": "Diploma",
    "subCategory": ""
  },
  {
    "description": "A 3-year job-ready technical diploma covering programming, databases and networking fundamentals.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma (3 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Lateral entry to B.Tech (2nd year)",
      "Direct technician/junior engineer jobs"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.8 LPA – ₹6 LPA",
      "note": "As a junior technician/engineer; higher after lateral entry to B.Tech and experience."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-diploma-computer",
    "parentId": "edu-a10-diploma",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Diploma in Computer Engineering",
    "domain": "Engineering",
    "category": "Diploma",
    "subCategory": "Computer Engineering"
  },
  {
    "description": "A 3-year diploma covering IT infrastructure, software basics and systems support.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma (3 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Lateral entry to B.Tech (2nd year)",
      "Direct technician/junior engineer jobs"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.8 LPA – ₹6 LPA",
      "note": "As a junior technician/engineer; higher after lateral entry to B.Tech and experience."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-diploma-it",
    "parentId": "edu-a10-diploma",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Diploma in Information Technology",
    "domain": "Engineering",
    "category": "Diploma",
    "subCategory": "Information Technology"
  },
  {
    "description": "A 3-year diploma covering machine design, manufacturing and maintenance fundamentals.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma (3 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Lateral entry to B.Tech (2nd year)",
      "Direct technician/junior engineer jobs"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.8 LPA – ₹6 LPA",
      "note": "As a junior technician/engineer; higher after lateral entry to B.Tech and experience."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-diploma-mechanical",
    "parentId": "edu-a10-diploma",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Diploma in Mechanical Engineering",
    "domain": "Engineering",
    "category": "Diploma",
    "subCategory": "Mechanical Engineering"
  },
  {
    "description": "A 3-year diploma covering construction, surveying and structural basics.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma (3 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Lateral entry to B.Tech (2nd year)",
      "Direct technician/junior engineer jobs"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.8 LPA – ₹6 LPA",
      "note": "As a junior technician/engineer; higher after lateral entry to B.Tech and experience."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-diploma-civil",
    "parentId": "edu-a10-diploma",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Diploma in Civil Engineering",
    "domain": "Engineering",
    "category": "Diploma",
    "subCategory": "Civil Engineering"
  },
  {
    "description": "A 3-year diploma covering power systems, wiring and electrical machines.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma (3 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Lateral entry to B.Tech (2nd year)",
      "Direct technician/junior engineer jobs"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.8 LPA – ₹6 LPA",
      "note": "As a junior technician/engineer; higher after lateral entry to B.Tech and experience."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-diploma-electrical",
    "parentId": "edu-a10-diploma",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Diploma in Electrical Engineering",
    "domain": "Engineering",
    "category": "Diploma",
    "subCategory": "Electrical Engineering"
  },
  {
    "description": "A 3-year diploma covering circuits, devices and electronic systems.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma (3 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Lateral entry to B.Tech (2nd year)",
      "Direct technician/junior engineer jobs"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.8 LPA – ₹6 LPA",
      "note": "As a junior technician/engineer; higher after lateral entry to B.Tech and experience."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-diploma-electronics",
    "parentId": "edu-a10-diploma",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Diploma in Electronics Engineering",
    "domain": "Engineering",
    "category": "Diploma",
    "subCategory": "Electronics Engineering"
  },
  {
    "description": "A 3-year diploma covering communication systems, signal processing basics and electronics.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma (3 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Lateral entry to B.Tech (2nd year)",
      "Direct technician/junior engineer jobs"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.8 LPA – ₹6 LPA",
      "note": "As a junior technician/engineer; higher after lateral entry to B.Tech and experience."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-diploma-ece",
    "parentId": "edu-a10-diploma",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Diploma in Electronics & Communication",
    "domain": "Engineering",
    "category": "Diploma",
    "subCategory": "Electronics & Communication"
  },
  {
    "description": "A 3-year diploma covering vehicle systems, engines and automotive maintenance.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma (3 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Lateral entry to B.Tech (2nd year)",
      "Direct technician/junior engineer jobs"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.8 LPA – ₹6 LPA",
      "note": "As a junior technician/engineer; higher after lateral entry to B.Tech and experience."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-diploma-automobile",
    "parentId": "edu-a10-diploma",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Diploma in Automobile Engineering",
    "domain": "Engineering",
    "category": "Diploma",
    "subCategory": "Automobile Engineering"
  },
  {
    "description": "A 3-year diploma covering industrial chemical processes and plant operations.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma (3 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Lateral entry to B.Tech (2nd year)",
      "Direct technician/junior engineer jobs"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.8 LPA – ₹6 LPA",
      "note": "As a junior technician/engineer; higher after lateral entry to B.Tech and experience."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-diploma-chemical",
    "parentId": "edu-a10-diploma",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Diploma in Chemical Engineering",
    "domain": "Engineering",
    "category": "Diploma",
    "subCategory": "Chemical Engineering"
  },
  {
    "description": "A 3-year diploma covering sensors, control systems and industrial instrumentation.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma (3 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Lateral entry to B.Tech (2nd year)",
      "Direct technician/junior engineer jobs"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.8 LPA – ₹6 LPA",
      "note": "As a junior technician/engineer; higher after lateral entry to B.Tech and experience."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-diploma-instrumentation",
    "parentId": "edu-a10-diploma",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Diploma in Instrumentation Engineering",
    "domain": "Engineering",
    "category": "Diploma",
    "subCategory": "Instrumentation Engineering"
  },
  {
    "description": "A 3-year diploma blending mechanical, electronics and computer control systems.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma (3 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Lateral entry to B.Tech (2nd year)",
      "Direct technician/junior engineer jobs"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.8 LPA – ₹6 LPA",
      "note": "As a junior technician/engineer; higher after lateral entry to B.Tech and experience."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-diploma-mechatronics",
    "parentId": "edu-a10-diploma",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Diploma in Mechatronics",
    "domain": "Engineering",
    "category": "Diploma",
    "subCategory": "Mechatronics"
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-iti",
    "parentId": null,
    "stage": "after10",
    "type": "Domain",
    "title": "ITI / Vocational Trades",
    "domain": "Vocational",
    "category": "ITI",
    "subCategory": ""
  },
  {
    "description": "Installs, maintains and repairs electrical wiring, fittings and systems in homes, offices and industry.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10 (varies by trade)"
    ],
    "entranceExams": [],
    "degrees": [
      "ITI Certificate (1–2 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [
      "hands-on",
      "technical"
    ],
    "activities": [
      "build-things",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "hands-on",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.2 LPA – ₹4.5 LPA",
      "note": "Skilled-trade pay varies by city, employer and experience; self-employed tradespeople can earn more."
    },
    "challenges": [],
    "advantages": [
      "Fast entry into paid work",
      "Real, tangible, always-in-demand skill",
      "Can go self-employed"
    ],
    "tags": [
      "vocational",
      "skilled-trade"
    ],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 2,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 5,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "1–2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "trade-a10-electrician",
    "parentId": "edu-a10-iti",
    "stage": "after10",
    "type": "Career",
    "title": "Electrician",
    "domain": "Skilled Trades",
    "category": "ITI Trade",
    "subCategory": ""
  },
  {
    "description": "Assembles, fits and maintains mechanical components and machine parts using hand and machine tools.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10 (varies by trade)"
    ],
    "entranceExams": [],
    "degrees": [
      "ITI Certificate (1–2 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [
      "hands-on",
      "technical"
    ],
    "activities": [
      "build-things",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "hands-on",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.2 LPA – ₹4.5 LPA",
      "note": "Skilled-trade pay varies by city, employer and experience; self-employed tradespeople can earn more."
    },
    "challenges": [],
    "advantages": [
      "Fast entry into paid work",
      "Real, tangible, always-in-demand skill",
      "Can go self-employed"
    ],
    "tags": [
      "vocational",
      "skilled-trade"
    ],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 2,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 5,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "1–2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "trade-a10-fitter",
    "parentId": "edu-a10-iti",
    "stage": "after10",
    "type": "Career",
    "title": "Fitter",
    "domain": "Skilled Trades",
    "category": "ITI Trade",
    "subCategory": ""
  },
  {
    "description": "Joins metal parts using welding techniques for construction, fabrication and manufacturing.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10 (varies by trade)"
    ],
    "entranceExams": [],
    "degrees": [
      "ITI Certificate (1–2 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [
      "hands-on",
      "technical"
    ],
    "activities": [
      "build-things",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "hands-on",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.2 LPA – ₹4.5 LPA",
      "note": "Skilled-trade pay varies by city, employer and experience; self-employed tradespeople can earn more."
    },
    "challenges": [],
    "advantages": [
      "Fast entry into paid work",
      "Real, tangible, always-in-demand skill",
      "Can go self-employed"
    ],
    "tags": [
      "vocational",
      "skilled-trade"
    ],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 2,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 5,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "1–2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "trade-a10-welder",
    "parentId": "edu-a10-iti",
    "stage": "after10",
    "type": "Career",
    "title": "Welder",
    "domain": "Skilled Trades",
    "category": "ITI Trade",
    "subCategory": ""
  },
  {
    "description": "Installs and repairs water supply, drainage and sanitation systems.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10 (varies by trade)"
    ],
    "entranceExams": [],
    "degrees": [
      "ITI Certificate (1–2 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [
      "hands-on",
      "technical"
    ],
    "activities": [
      "build-things",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "hands-on",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.2 LPA – ₹4.5 LPA",
      "note": "Skilled-trade pay varies by city, employer and experience; self-employed tradespeople can earn more."
    },
    "challenges": [],
    "advantages": [
      "Fast entry into paid work",
      "Real, tangible, always-in-demand skill",
      "Can go self-employed"
    ],
    "tags": [
      "vocational",
      "skilled-trade"
    ],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 2,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 5,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "1–2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "trade-a10-plumber",
    "parentId": "edu-a10-iti",
    "stage": "after10",
    "type": "Career",
    "title": "Plumber",
    "domain": "Skilled Trades",
    "category": "ITI Trade",
    "subCategory": ""
  },
  {
    "description": "Builds and repairs wooden structures, furniture and fittings.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10 (varies by trade)"
    ],
    "entranceExams": [],
    "degrees": [
      "ITI Certificate (1–2 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [
      "hands-on",
      "technical"
    ],
    "activities": [
      "build-things",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "hands-on",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.2 LPA – ₹4.5 LPA",
      "note": "Skilled-trade pay varies by city, employer and experience; self-employed tradespeople can earn more."
    },
    "challenges": [],
    "advantages": [
      "Fast entry into paid work",
      "Real, tangible, always-in-demand skill",
      "Can go self-employed"
    ],
    "tags": [
      "vocational",
      "skilled-trade"
    ],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 2,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 5,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "1–2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "trade-a10-carpenter",
    "parentId": "edu-a10-iti",
    "stage": "after10",
    "type": "Career",
    "title": "Carpenter",
    "domain": "Skilled Trades",
    "category": "ITI Trade",
    "subCategory": ""
  },
  {
    "description": "Diagnoses and repairs mechanical faults in engines and machinery.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10 (varies by trade)"
    ],
    "entranceExams": [],
    "degrees": [
      "ITI Certificate (1–2 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [
      "hands-on",
      "technical"
    ],
    "activities": [
      "build-things",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "hands-on",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.2 LPA – ₹4.5 LPA",
      "note": "Skilled-trade pay varies by city, employer and experience; self-employed tradespeople can earn more."
    },
    "challenges": [],
    "advantages": [
      "Fast entry into paid work",
      "Real, tangible, always-in-demand skill",
      "Can go self-employed"
    ],
    "tags": [
      "vocational",
      "skilled-trade"
    ],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 2,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 5,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "1–2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "trade-a10-mechanic",
    "parentId": "edu-a10-iti",
    "stage": "after10",
    "type": "Career",
    "title": "Mechanic",
    "domain": "Skilled Trades",
    "category": "ITI Trade",
    "subCategory": ""
  },
  {
    "description": "Services, diagnoses and repairs cars, bikes and commercial vehicles.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10 (varies by trade)"
    ],
    "entranceExams": [],
    "degrees": [
      "ITI Certificate (1–2 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [
      "hands-on",
      "technical"
    ],
    "activities": [
      "build-things",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "hands-on",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.2 LPA – ₹4.5 LPA",
      "note": "Skilled-trade pay varies by city, employer and experience; self-employed tradespeople can earn more."
    },
    "challenges": [],
    "advantages": [
      "Fast entry into paid work",
      "Real, tangible, always-in-demand skill",
      "Can go self-employed"
    ],
    "tags": [
      "vocational",
      "skilled-trade"
    ],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 2,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 5,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "1–2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "trade-a10-auto-technician",
    "parentId": "edu-a10-iti",
    "stage": "after10",
    "type": "Career",
    "title": "Automobile Technician",
    "domain": "Skilled Trades",
    "category": "ITI Trade",
    "subCategory": ""
  },
  {
    "description": "Installs and repairs electronic devices, circuit boards and appliances.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10 (varies by trade)"
    ],
    "entranceExams": [],
    "degrees": [
      "ITI Certificate (1–2 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [
      "hands-on",
      "technical"
    ],
    "activities": [
      "build-things",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "hands-on",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.2 LPA – ₹4.5 LPA",
      "note": "Skilled-trade pay varies by city, employer and experience; self-employed tradespeople can earn more."
    },
    "challenges": [],
    "advantages": [
      "Fast entry into paid work",
      "Real, tangible, always-in-demand skill",
      "Can go self-employed"
    ],
    "tags": [
      "vocational",
      "skilled-trade"
    ],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 2,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 5,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "1–2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "trade-a10-electronics-technician",
    "parentId": "edu-a10-iti",
    "stage": "after10",
    "type": "Career",
    "title": "Electronics Technician",
    "domain": "Skilled Trades",
    "category": "ITI Trade",
    "subCategory": ""
  },
  {
    "description": "Assembles, upgrades and repairs computers and peripheral devices.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10 (varies by trade)"
    ],
    "entranceExams": [],
    "degrees": [
      "ITI Certificate (1–2 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [
      "hands-on",
      "technical"
    ],
    "activities": [
      "build-things",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "hands-on",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.2 LPA – ₹4.5 LPA",
      "note": "Skilled-trade pay varies by city, employer and experience; self-employed tradespeople can earn more."
    },
    "challenges": [],
    "advantages": [
      "Fast entry into paid work",
      "Real, tangible, always-in-demand skill",
      "Can go self-employed"
    ],
    "tags": [
      "vocational",
      "skilled-trade"
    ],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 2,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 5,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "1–2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "trade-a10-computer-hardware",
    "parentId": "edu-a10-iti",
    "stage": "after10",
    "type": "Career",
    "title": "Computer Hardware Technician",
    "domain": "Skilled Trades",
    "category": "ITI Trade",
    "subCategory": ""
  },
  {
    "description": "Installs and services refrigeration, air-conditioning and HVAC systems.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10 (varies by trade)"
    ],
    "entranceExams": [],
    "degrees": [
      "ITI Certificate (1–2 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [
      "hands-on",
      "technical"
    ],
    "activities": [
      "build-things",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "hands-on",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.2 LPA – ₹4.5 LPA",
      "note": "Skilled-trade pay varies by city, employer and experience; self-employed tradespeople can earn more."
    },
    "challenges": [],
    "advantages": [
      "Fast entry into paid work",
      "Real, tangible, always-in-demand skill",
      "Can go self-employed"
    ],
    "tags": [
      "vocational",
      "skilled-trade"
    ],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 2,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 5,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "1–2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "trade-a10-hvac",
    "parentId": "edu-a10-iti",
    "stage": "after10",
    "type": "Career",
    "title": "Refrigeration & AC (HVAC) Technician",
    "domain": "Skilled Trades",
    "category": "ITI Trade",
    "subCategory": ""
  },
  {
    "description": "Operates and programs computer-controlled machine tools for precision manufacturing.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10 (varies by trade)"
    ],
    "entranceExams": [],
    "degrees": [
      "ITI Certificate (1–2 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [
      "hands-on",
      "technical"
    ],
    "activities": [
      "build-things",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "hands-on",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.2 LPA – ₹4.5 LPA",
      "note": "Skilled-trade pay varies by city, employer and experience; self-employed tradespeople can earn more."
    },
    "challenges": [],
    "advantages": [
      "Fast entry into paid work",
      "Real, tangible, always-in-demand skill",
      "Can go self-employed"
    ],
    "tags": [
      "vocational",
      "skilled-trade"
    ],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 2,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 5,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "1–2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "trade-a10-cnc",
    "parentId": "edu-a10-iti",
    "stage": "after10",
    "type": "Career",
    "title": "CNC / Machining Operator",
    "domain": "Skilled Trades",
    "category": "ITI Trade",
    "subCategory": ""
  },
  {
    "description": "Operates lathes to shape metal components to precise dimensions.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10 (varies by trade)"
    ],
    "entranceExams": [],
    "degrees": [
      "ITI Certificate (1–2 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [
      "hands-on",
      "technical"
    ],
    "activities": [
      "build-things",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "hands-on",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.2 LPA – ₹4.5 LPA",
      "note": "Skilled-trade pay varies by city, employer and experience; self-employed tradespeople can earn more."
    },
    "challenges": [],
    "advantages": [
      "Fast entry into paid work",
      "Real, tangible, always-in-demand skill",
      "Can go self-employed"
    ],
    "tags": [
      "vocational",
      "skilled-trade"
    ],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 2,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 5,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "1–2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "trade-a10-turner",
    "parentId": "edu-a10-iti",
    "stage": "after10",
    "type": "Career",
    "title": "Turner",
    "domain": "Skilled Trades",
    "category": "ITI Trade",
    "subCategory": ""
  },
  {
    "description": "Prepares technical drawings and blueprints for engineering and construction projects.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10 (varies by trade)"
    ],
    "entranceExams": [],
    "degrees": [
      "ITI Certificate (1–2 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [
      "hands-on",
      "technical"
    ],
    "activities": [
      "build-things",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "hands-on",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.2 LPA – ₹4.5 LPA",
      "note": "Skilled-trade pay varies by city, employer and experience; self-employed tradespeople can earn more."
    },
    "challenges": [],
    "advantages": [
      "Fast entry into paid work",
      "Real, tangible, always-in-demand skill",
      "Can go self-employed"
    ],
    "tags": [
      "vocational",
      "skilled-trade"
    ],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 2,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 5,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "1–2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "trade-a10-draughtsman",
    "parentId": "edu-a10-iti",
    "stage": "after10",
    "type": "Career",
    "title": "Draughtsman",
    "domain": "Skilled Trades",
    "category": "ITI Trade",
    "subCategory": ""
  },
  {
    "description": "Installs and maintains solar panels and renewable-energy systems.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Passed Class 10 (varies by trade)"
    ],
    "entranceExams": [],
    "degrees": [
      "ITI Certificate (1–2 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [
      "hands-on",
      "technical"
    ],
    "activities": [
      "build-things",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "hands-on",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.2 LPA – ₹4.5 LPA",
      "note": "Skilled-trade pay varies by city, employer and experience; self-employed tradespeople can earn more."
    },
    "challenges": [],
    "advantages": [
      "Fast entry into paid work",
      "Real, tangible, always-in-demand skill",
      "Can go self-employed"
    ],
    "tags": [
      "vocational",
      "skilled-trade"
    ],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 2,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 5,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "1–2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "trade-a10-solar",
    "parentId": "edu-a10-iti",
    "stage": "after10",
    "type": "Career",
    "title": "Solar Technician",
    "domain": "Skilled Trades",
    "category": "ITI Trade",
    "subCategory": ""
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-other",
    "parentId": null,
    "stage": "after10",
    "type": "Domain",
    "title": "Other After-10th Paths",
    "domain": "Other",
    "category": "Other",
    "subCategory": ""
  },
  {
    "description": "A vocational/diploma direction into farming science, agri-business and allied fields.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Agriculture Sciences",
      "Agribusiness"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2–3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-other-agriculture",
    "parentId": "edu-a10-other",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Agriculture (After 10th)",
    "domain": "Vocational",
    "category": "Other",
    "subCategory": ""
  },
  {
    "description": "Focused on the science of growing fruits, vegetables, flowers and ornamental plants.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Horticulture",
      "Landscape Design"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2–3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-other-horticulture",
    "parentId": "edu-a10-other",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Horticulture (After 10th)",
    "domain": "Vocational",
    "category": "Other",
    "subCategory": ""
  },
  {
    "description": "A path for athletes to combine schooling with structured sports training.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Sports Science",
      "Professional Sport",
      "Coaching"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2–3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-other-sports10",
    "parentId": "edu-a10-other",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Sports (After 10th)",
    "domain": "Vocational",
    "category": "Other",
    "subCategory": ""
  },
  {
    "description": "An early foundation stream for design-oriented students.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Design Degree",
      "Fine Arts",
      "Animation"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2–3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-other-design10",
    "parentId": "edu-a10-other",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Design & Creative Arts (After 10th)",
    "domain": "Vocational",
    "category": "Other",
    "subCategory": ""
  },
  {
    "description": "An early foundation direction for students interested in clothing, textiles and fashion.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Fashion Design",
      "Fashion Merchandising"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2–3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-other-fashion10",
    "parentId": "edu-a10-other",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Fashion (After 10th)",
    "domain": "Vocational",
    "category": "Other",
    "subCategory": ""
  },
  {
    "description": "A vocational direction into 2D/3D animation and multimedia production.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Animation Degree/Diploma",
      "VFX",
      "Game Art"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2–3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-other-animation10",
    "parentId": "edu-a10-other",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Animation & Multimedia (After 10th)",
    "domain": "Vocational",
    "category": "Other",
    "subCategory": ""
  },
  {
    "description": "A vocational direction into hotel, food & beverage and guest-service careers.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Hotel Management",
      "Culinary Arts"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2–3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-other-hospitality10",
    "parentId": "edu-a10-other",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Hospitality (After 10th)",
    "domain": "Vocational",
    "category": "Other",
    "subCategory": ""
  },
  {
    "description": "A vocational direction into travel, tour operations and destination management.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Tourism Management",
      "Travel & Tour Operations"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2–3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-other-tourism10",
    "parentId": "edu-a10-other",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Tourism (After 10th)",
    "domain": "Vocational",
    "category": "Other",
    "subCategory": ""
  },
  {
    "description": "A vocational direction into cosmetology, hairstyling and spa/wellness services.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Cosmetology Certification",
      "Salon/Spa Management"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2–3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-other-beauty10",
    "parentId": "edu-a10-other",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Beauty & Wellness (After 10th)",
    "domain": "Vocational",
    "category": "Other",
    "subCategory": ""
  },
  {
    "description": "A vocational direction into professional cooking and baking.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Culinary Diploma",
      "Hotel Management"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2–3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-other-culinary10",
    "parentId": "edu-a10-other",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Culinary Arts (After 10th)",
    "domain": "Vocational",
    "category": "Other",
    "subCategory": ""
  },
  {
    "description": "Schooling combined with physical/academic preparation for future defence entrance exams (NDA etc.).",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "NDA",
      "Defence Careers"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2–3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-other-defence10",
    "parentId": "edu-a10-other",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Defence Preparation (After 10th)",
    "domain": "Vocational",
    "category": "Other",
    "subCategory": ""
  },
  {
    "description": "A vocational direction into music, dance, theatre and performance.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Performing Arts Degree",
      "Professional Performance"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "2–3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a10-other-performing-arts10",
    "parentId": "edu-a10-other",
    "stage": "after10",
    "type": "EducationPath",
    "title": "Performing Arts (After 10th)",
    "domain": "Vocational",
    "category": "Other",
    "subCategory": ""
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a12-healthcare",
    "parentId": null,
    "stage": "after12",
    "type": "Domain",
    "title": "Healthcare",
    "domain": "Healthcare",
    "category": "Healthcare",
    "subCategory": ""
  },
  {
    "description": "The core undergraduate medical degree required before practising as a doctor or pursuing any medical specialization in India.",
    "simpleExplanation": "This is the degree every doctor needs first — specializations like Cardiology or Surgery come after this, not instead of it.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB",
      "NEET-UG qualifying score"
    ],
    "entranceExams": [
      "NEET-UG"
    ],
    "degrees": [
      "MBBS (5.5 years incl. internship)"
    ],
    "specializations": [],
    "subjects": [
      "biology",
      "chemistry"
    ],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Postgraduate Medical Specialization (MD/MS)",
      "General Practice"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹80 LPA+",
      "note": "Government scales start lower; specialists (MD/MS) and private practice earn considerably more over time."
    },
    "challenges": [
      "Very long education path",
      "NEET is highly competitive",
      "Demanding work hours, especially early career"
    ],
    "advantages": [
      "Respected, stable profession",
      "Directly helps people",
      "Many specialization paths later"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 years + 3 years PG",
    "riskLevel": "low",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-mbbs",
    "parentId": "edu-a12-healthcare",
    "stage": "after12",
    "type": "EducationPath",
    "title": "MBBS (Medicine)",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": ""
  },
  {
    "description": "Diagnoses and treats a broad range of adult illnesses; often the entry point to sub-specializing further.",
    "simpleExplanation": "A doctor becomes a General / Internal Medicine specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-general-medicine",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "General / Internal Medicine",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Diagnoses and treats diseases of the heart and blood vessels.",
    "simpleExplanation": "A doctor becomes a Cardiology specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-cardiology",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Cardiology",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Diagnoses and treats disorders of the brain, spinal cord and nervous system (non-surgical).",
    "simpleExplanation": "A doctor becomes a Neurology specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-neurology",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Neurology",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Performs surgery on the brain, spine and nervous system.",
    "simpleExplanation": "A doctor becomes a Neurosurgery specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "hands-on",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-neurosurgery",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Neurosurgery",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Treats bone, joint, ligament and musculoskeletal injuries and conditions, often surgically.",
    "simpleExplanation": "A doctor becomes a Orthopedic Surgery specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "hands-on",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-orthopedics",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Orthopedic Surgery",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Diagnoses and treats illnesses in infants, children and adolescents.",
    "simpleExplanation": "A doctor becomes a Pediatrics specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-pediatrics",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Pediatrics",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "A pediatric sub-specialty focused on the care of newborn infants, especially premature or critically ill ones.",
    "simpleExplanation": "A doctor becomes a Neonatology specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-neonatology",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Neonatology",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Diagnoses and treats skin, hair and nail conditions.",
    "simpleExplanation": "A doctor becomes a Dermatology specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-dermatology",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Dermatology",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Diagnoses and treats mental health conditions, often combining medication with therapy.",
    "simpleExplanation": "A doctor becomes a Psychiatry specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology",
      "psychology"
    ],
    "strengths": [
      "communication",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-psychiatry",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Psychiatry",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Diagnoses and treats eye diseases and performs eye surgery.",
    "simpleExplanation": "A doctor becomes a Ophthalmology specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-ophthalmology",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Ophthalmology",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Treats conditions of the ear, nose and throat.",
    "simpleExplanation": "A doctor becomes a ENT (Otolaryngology) specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-ent",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "ENT (Otolaryngology)",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Diagnoses and treats lung and respiratory diseases.",
    "simpleExplanation": "A doctor becomes a Pulmonology specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-pulmonology",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Pulmonology",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Diagnoses and treats digestive-system disorders.",
    "simpleExplanation": "A doctor becomes a Gastroenterology specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-gastroenterology",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Gastroenterology",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Diagnoses and treats kidney diseases.",
    "simpleExplanation": "A doctor becomes a Nephrology specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-nephrology",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Nephrology",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Treats conditions of the urinary tract and male reproductive system, often surgically.",
    "simpleExplanation": "A doctor becomes a Urology specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "hands-on",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-urology",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Urology",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Diagnoses and treats hormone and metabolic disorders such as diabetes and thyroid disease.",
    "simpleExplanation": "A doctor becomes a Endocrinology specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people",
      "intellectual-challenge"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-endocrinology",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Endocrinology",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Diagnoses and treats cancer.",
    "simpleExplanation": "A doctor becomes a Oncology specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people",
      "intellectual-challenge"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-oncology",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Oncology",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Diagnoses and treats blood disorders.",
    "simpleExplanation": "A doctor becomes a Hematology specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "analyze-info",
      "healthcare",
      "research"
    ],
    "interests": [
      "biology",
      "technology"
    ],
    "strengths": [
      "attention-detail",
      "patience",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "hospital",
      "lab-research"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-hematology",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Hematology",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Diagnoses and treats autoimmune and joint disorders such as arthritis.",
    "simpleExplanation": "A doctor becomes a Rheumatology specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people",
      "intellectual-challenge"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-rheumatology",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Rheumatology",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Diagnoses and treats infections, including complex and emerging diseases.",
    "simpleExplanation": "A doctor becomes a Infectious Diseases specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people",
      "intellectual-challenge"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-infectious-diseases",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Infectious Diseases",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Treats conditions of the female reproductive system.",
    "simpleExplanation": "A doctor becomes a Gynecology specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "hands-on",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-gynecology",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Gynecology",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Manages pregnancy, labour and childbirth.",
    "simpleExplanation": "A doctor becomes a Obstetrics specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "hands-on",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-obstetrics",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Obstetrics",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Treats fertility issues, often including IVF and assisted reproduction.",
    "simpleExplanation": "A doctor becomes a Reproductive Medicine specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-reproductive-medicine",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Reproductive Medicine",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Manages pain relief and patient safety during surgery and critical care.",
    "simpleExplanation": "A doctor becomes a Anesthesiology specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-anesthesiology",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Anesthesiology",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Uses imaging (X-ray, CT, MRI, ultrasound) to diagnose disease.",
    "simpleExplanation": "A doctor becomes a Radiology specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "analyze-info",
      "healthcare",
      "research"
    ],
    "interests": [
      "biology",
      "technology"
    ],
    "strengths": [
      "attention-detail",
      "patience",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "hospital",
      "lab-research"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-radiology",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Radiology",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Diagnoses disease by examining tissue, blood and lab samples.",
    "simpleExplanation": "A doctor becomes a Pathology specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "analyze-info",
      "healthcare",
      "research"
    ],
    "interests": [
      "biology",
      "technology"
    ],
    "strengths": [
      "attention-detail",
      "patience",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "hospital",
      "lab-research"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-pathology",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Pathology",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Provides immediate care for acute illness and injury in emergency settings.",
    "simpleExplanation": "A doctor becomes a Emergency Medicine specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "quick-learning"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-emergency-medicine",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Emergency Medicine",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Manages severely ill patients, typically in intensive care units.",
    "simpleExplanation": "A doctor becomes a Critical Care Medicine specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "quick-learning"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-critical-care",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Critical Care Medicine",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Focuses on the health and care of elderly patients.",
    "simpleExplanation": "A doctor becomes a Geriatric Medicine specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-geriatrics",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Geriatric Medicine",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Treats injuries and conditions related to physical activity and athletic performance.",
    "simpleExplanation": "A doctor becomes a Sports Medicine specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-sports-medicine",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Sports Medicine",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Specializes in diagnosing and managing chronic pain conditions.",
    "simpleExplanation": "A doctor becomes a Pain Medicine specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-pain-medicine",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Pain Medicine",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Provides ongoing, general care for patients of all ages, often the first point of contact.",
    "simpleExplanation": "A doctor becomes a Family Medicine specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-family-medicine",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Family Medicine",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Focuses on disease prevention and public health at a population level.",
    "simpleExplanation": "A doctor becomes a Preventive / Community Medicine specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "business-corp",
      "hospital"
    ],
    "values": [
      "helping-people",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-preventive-medicine",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Preventive / Community Medicine",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Focuses on health and safety related to work environments.",
    "simpleExplanation": "A doctor becomes a Occupational Medicine specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "business-corp",
      "hospital"
    ],
    "values": [
      "helping-people",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-occupational-medicine",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Occupational Medicine",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Applies medical knowledge to legal investigations, including autopsies.",
    "simpleExplanation": "A doctor becomes a Forensic Medicine specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "business-corp",
      "hospital"
    ],
    "values": [
      "helping-people",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-forensic-medicine",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Forensic Medicine",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "Diagnoses and manages genetic and hereditary disorders.",
    "simpleExplanation": "A doctor becomes a Medical Genetics specialist only after MBBS + postgraduate specialization — not directly after 12th.",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "MBBS (5.5 years)",
      "NEET-PG",
      "Postgraduate specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "MBBS",
      "NEET-PG qualifying score"
    ],
    "entranceExams": [
      "NEET-PG"
    ],
    "degrees": [
      "MD/MS/DM/MCh (2–6 years after MBBS, varies by specialization)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people",
      "intellectual-challenge"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Private practice",
      "Hospital consultant",
      "Academic medicine",
      "Further super-specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Highly variable by specialization, city and public vs private practice; surgical/super-specialties trend higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 5,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 2,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "5.5 + 3–6 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-medicine-medical-genetics",
    "parentId": "health-medicine-mbbs",
    "stage": "after12",
    "type": "Specialization",
    "title": "Medical Genetics",
    "domain": "Healthcare",
    "category": "Medicine",
    "subCategory": "Specialization"
  },
  {
    "description": "The core undergraduate dental degree required before practising as a dentist or pursuing dental specialization.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB",
      "NEET-UG qualifying score"
    ],
    "entranceExams": [
      "NEET-UG"
    ],
    "degrees": [
      "BDS (5 years incl. internship)"
    ],
    "specializations": [],
    "subjects": [
      "biology",
      "chemistry"
    ],
    "skills": [],
    "activities": [
      "healthcare"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "hands-on"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "General Dental Practice",
      "Postgraduate Dental Specialization (MDS)"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3.5 LPA – ₹25 LPA",
      "note": "Own dental practice can exceed this considerably with experience and reputation."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "5 years + 3 years PG (optional)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "health-dentistry-bds",
    "parentId": "edu-a12-healthcare",
    "stage": "after12",
    "type": "EducationPath",
    "title": "BDS (Dentistry)",
    "domain": "Healthcare",
    "category": "Dentistry",
    "subCategory": ""
  },
  {
    "description": "Straightens teeth and corrects bite issues using braces and aligners.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "BDS (5 years)",
      "NEET-MDS",
      "MDS specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "BDS",
      "NEET-MDS qualifying score (for most specializations)"
    ],
    "entranceExams": [
      "NEET-MDS"
    ],
    "degrees": [
      "MDS (3 years after BDS)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹40 LPA",
      "note": "Specialist dentists in private practice or clinics can exceed this considerably."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "5 + 3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "health-dentistry-orthodontist",
    "parentId": "health-dentistry-bds",
    "stage": "after12",
    "type": "Specialization",
    "title": "Orthodontist",
    "domain": "Healthcare",
    "category": "Dentistry",
    "subCategory": "Specialization"
  },
  {
    "description": "Performs surgery on the mouth, jaw and face.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "BDS (5 years)",
      "NEET-MDS",
      "MDS specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "BDS",
      "NEET-MDS qualifying score (for most specializations)"
    ],
    "entranceExams": [
      "NEET-MDS"
    ],
    "degrees": [
      "MDS (3 years after BDS)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "hands-on",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹40 LPA",
      "note": "Specialist dentists in private practice or clinics can exceed this considerably."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "5 + 3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "health-dentistry-oral-maxillofacial-surgeon",
    "parentId": "health-dentistry-bds",
    "stage": "after12",
    "type": "Specialization",
    "title": "Oral & Maxillofacial Surgeon",
    "domain": "Healthcare",
    "category": "Dentistry",
    "subCategory": "Specialization"
  },
  {
    "description": "Designs and fits dentures, crowns, bridges and dental implants.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "BDS (5 years)",
      "NEET-MDS",
      "MDS specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "BDS",
      "NEET-MDS qualifying score (for most specializations)"
    ],
    "entranceExams": [
      "NEET-MDS"
    ],
    "degrees": [
      "MDS (3 years after BDS)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹40 LPA",
      "note": "Specialist dentists in private practice or clinics can exceed this considerably."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "5 + 3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "health-dentistry-prosthodontist",
    "parentId": "health-dentistry-bds",
    "stage": "after12",
    "type": "Specialization",
    "title": "Prosthodontist",
    "domain": "Healthcare",
    "category": "Dentistry",
    "subCategory": "Specialization"
  },
  {
    "description": "Treats gum disease and structures that support the teeth.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "BDS (5 years)",
      "NEET-MDS",
      "MDS specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "BDS",
      "NEET-MDS qualifying score (for most specializations)"
    ],
    "entranceExams": [
      "NEET-MDS"
    ],
    "degrees": [
      "MDS (3 years after BDS)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹40 LPA",
      "note": "Specialist dentists in private practice or clinics can exceed this considerably."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "5 + 3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "health-dentistry-periodontist",
    "parentId": "health-dentistry-bds",
    "stage": "after12",
    "type": "Specialization",
    "title": "Periodontist",
    "domain": "Healthcare",
    "category": "Dentistry",
    "subCategory": "Specialization"
  },
  {
    "description": "Treats issues inside the tooth, most commonly through root canal therapy.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "BDS (5 years)",
      "NEET-MDS",
      "MDS specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "BDS",
      "NEET-MDS qualifying score (for most specializations)"
    ],
    "entranceExams": [
      "NEET-MDS"
    ],
    "degrees": [
      "MDS (3 years after BDS)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹40 LPA",
      "note": "Specialist dentists in private practice or clinics can exceed this considerably."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "5 + 3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "health-dentistry-endodontist",
    "parentId": "health-dentistry-bds",
    "stage": "after12",
    "type": "Specialization",
    "title": "Endodontist",
    "domain": "Healthcare",
    "category": "Dentistry",
    "subCategory": "Specialization"
  },
  {
    "description": "Provides dental care specifically for infants, children and adolescents.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "BDS (5 years)",
      "NEET-MDS",
      "MDS specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "BDS",
      "NEET-MDS qualifying score (for most specializations)"
    ],
    "entranceExams": [
      "NEET-MDS"
    ],
    "degrees": [
      "MDS (3 years after BDS)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹40 LPA",
      "note": "Specialist dentists in private practice or clinics can exceed this considerably."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "5 + 3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "health-dentistry-pediatric-dentist",
    "parentId": "health-dentistry-bds",
    "stage": "after12",
    "type": "Specialization",
    "title": "Pediatric Dentist",
    "domain": "Healthcare",
    "category": "Dentistry",
    "subCategory": "Specialization"
  },
  {
    "description": "Diagnoses diseases affecting the mouth and jaw through lab analysis.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "BDS (5 years)",
      "NEET-MDS",
      "MDS specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "BDS",
      "NEET-MDS qualifying score (for most specializations)"
    ],
    "entranceExams": [
      "NEET-MDS"
    ],
    "degrees": [
      "MDS (3 years after BDS)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "analyze-info",
      "healthcare",
      "research"
    ],
    "interests": [
      "biology",
      "technology"
    ],
    "strengths": [
      "attention-detail",
      "patience",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "hospital",
      "lab-research"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹40 LPA",
      "note": "Specialist dentists in private practice or clinics can exceed this considerably."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "5 + 3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "health-dentistry-oral-pathologist",
    "parentId": "health-dentistry-bds",
    "stage": "after12",
    "type": "Specialization",
    "title": "Oral & Maxillofacial Pathologist",
    "domain": "Healthcare",
    "category": "Dentistry",
    "subCategory": "Specialization"
  },
  {
    "description": "Diagnoses oral disease using imaging and clinical examination.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "BDS (5 years)",
      "NEET-MDS",
      "MDS specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "BDS",
      "NEET-MDS qualifying score (for most specializations)"
    ],
    "entranceExams": [
      "NEET-MDS"
    ],
    "degrees": [
      "MDS (3 years after BDS)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "analyze-info",
      "healthcare",
      "research"
    ],
    "interests": [
      "biology",
      "technology"
    ],
    "strengths": [
      "attention-detail",
      "patience",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "hospital",
      "lab-research"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹40 LPA",
      "note": "Specialist dentists in private practice or clinics can exceed this considerably."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "5 + 3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "health-dentistry-oral-medicine-radiology",
    "parentId": "health-dentistry-bds",
    "stage": "after12",
    "type": "Specialization",
    "title": "Oral Medicine & Radiology",
    "domain": "Healthcare",
    "category": "Dentistry",
    "subCategory": "Specialization"
  },
  {
    "description": "Focuses on community-level dental health, prevention and policy.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "BDS (5 years)",
      "NEET-MDS",
      "MDS specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "BDS",
      "NEET-MDS qualifying score (for most specializations)"
    ],
    "entranceExams": [
      "NEET-MDS"
    ],
    "degrees": [
      "MDS (3 years after BDS)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "business-corp",
      "hospital"
    ],
    "values": [
      "helping-people",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹40 LPA",
      "note": "Specialist dentists in private practice or clinics can exceed this considerably."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "5 + 3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "health-dentistry-public-health-dentistry",
    "parentId": "health-dentistry-bds",
    "stage": "after12",
    "type": "Specialization",
    "title": "Public Health Dentistry",
    "domain": "Healthcare",
    "category": "Dentistry",
    "subCategory": "Specialization"
  },
  {
    "description": "Specializes in placing and restoring dental implants.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "BDS (5 years)",
      "NEET-MDS",
      "MDS specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "BDS",
      "NEET-MDS qualifying score (for most specializations)"
    ],
    "entranceExams": [
      "NEET-MDS"
    ],
    "degrees": [
      "MDS (3 years after BDS)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹40 LPA",
      "note": "Specialist dentists in private practice or clinics can exceed this considerably."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "5 + 3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "health-dentistry-implant-dentistry",
    "parentId": "health-dentistry-bds",
    "stage": "after12",
    "type": "Specialization",
    "title": "Implant Dentistry",
    "domain": "Healthcare",
    "category": "Dentistry",
    "subCategory": "Specialization"
  },
  {
    "description": "Focuses on improving the appearance of teeth and smile.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [
      "12th Science (PCB)",
      "NEET-UG",
      "BDS (5 years)",
      "NEET-MDS",
      "MDS specialization",
      "Specialist practice"
    ],
    "eligibility": [
      "BDS",
      "NEET-MDS qualifying score (for most specializations)"
    ],
    "entranceExams": [
      "NEET-MDS"
    ],
    "degrees": [
      "MDS (3 years after BDS)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "attention-detail",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹40 LPA",
      "note": "Specialist dentists in private practice or clinics can exceed this considerably."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "5 + 3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "health-dentistry-cosmetic-dentistry",
    "parentId": "health-dentistry-bds",
    "stage": "after12",
    "type": "Specialization",
    "title": "Cosmetic Dentistry",
    "domain": "Healthcare",
    "category": "Dentistry",
    "subCategory": "Specialization"
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a12-allied-health",
    "parentId": "edu-a12-healthcare",
    "stage": "after12",
    "type": "Field",
    "title": "Nursing & Allied Healthcare",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "Provides direct patient care, medication administration and health monitoring in hospitals and clinics.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹12 LPA",
      "note": "Notably higher for nurses working abroad (Gulf, UK, US, etc.)."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-nursing-general",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "General Nursing (GNM/B.Sc Nursing)",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "A nursing specialization focused on adult patients recovering from illness or surgery.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹14 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-nursing-medical",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "Medical-Surgical Nursing",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "A nursing specialization for ICU and life-support patient care.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3.5 LPA – ₹16 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-nursing-critical",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "Critical Care Nursing",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "A nursing specialization focused on the care of infants and children.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹14 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-nursing-pediatric",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "Pediatric Nursing",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "A nursing specialization focused on public health and community-level care.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹10 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-nursing-community",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "Community Health Nursing",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "Dispenses medication, advises on drug use, and may work in retail, hospital or pharma industry roles.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹15 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-pharmacy",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "Pharmacist",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "Helps patients recover movement and manage pain through physical rehabilitation techniques.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹18 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-physiotherapy",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "Physiotherapist",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "Helps patients regain the skills needed for daily life and work after injury or illness.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹15 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-occupational-therapy",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "Occupational Therapist",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "Examines eyes, tests vision and prescribes corrective lenses.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹12 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-optometry",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "Optometrist",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "Diagnoses and treats hearing and balance disorders.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹14 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-audiology",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "Audiologist",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "Diagnoses and treats speech, language and swallowing disorders.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹15 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-speech-language-pathology",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "Speech-Language Pathologist",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "Performs diagnostic tests on blood and other samples in labs.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.2 LPA – ₹10 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-medical-lab-technology",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "Medical Laboratory Technologist",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "Operates imaging equipment such as X-ray, CT and MRI machines.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹12 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-radiology-technology",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "Radiology Technologist",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "Helps patients with breathing disorders using specialized equipment and techniques.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹12 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-respiratory-therapy",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "Respiratory Therapist",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "Operates dialysis equipment for patients with kidney failure.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹10 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-dialysis-technology",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "Dialysis Technologist",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "Assists surgeons by preparing and managing the operating theatre and equipment.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹11 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-ot-technology",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "Operation Theatre Technologist",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "Provides urgent pre-hospital medical care, often in ambulances.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.2 LPA – ₹9 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-ems",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "Emergency Medical Services (Paramedic)",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "Assists in diagnosing and monitoring heart conditions using specialized equipment.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.8 LPA – ₹12 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-cardiac-care-technology",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "Cardiac Care Technologist",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "Operates heart-lung machines during cardiac surgery.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹18 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-perfusion-technology",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "Perfusion Technologist",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "Designs and fits artificial limbs and supportive devices.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹14 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-prosthetics-orthotics",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "Prosthetics & Orthotics Specialist",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "Advises on diet and nutrition for health, illness management or performance.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹15 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-nutrition-dietetics",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "Nutritionist / Dietitian",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "Works on population-level health programs, policy and disease prevention.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹25 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-public-health",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "Public Health Professional",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "Manages the operations, staffing and finances of hospitals or clinics.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹30 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-healthcare-administration",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "Healthcare Administrator",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "Supports clinical trials, lab research and medical studies.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCB (most roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Diploma/Bachelor's (3–4 years, varies by role)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "healthcare",
      "help-people"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "hospital"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹25 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 3,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "health-allied-medical-research-allied",
    "parentId": "edu-a12-allied-health",
    "stage": "after12",
    "type": "Career",
    "title": "Medical Research Professional",
    "domain": "Healthcare",
    "category": "Allied Health",
    "subCategory": ""
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a12-engineering",
    "parentId": null,
    "stage": "after12",
    "type": "Domain",
    "title": "Engineering",
    "domain": "Engineering",
    "category": "Engineering",
    "subCategory": ""
  },
  {
    "description": "Covers programming, algorithms, systems and software design — the broadest computing branch.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "JEE Advanced",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Software Careers",
      "M.Tech",
      "MBA",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.2 Cr+",
      "note": "Fresher pay ₹4–12 LPA typically; senior/product-company engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-computing-cse",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Computer Science Engineering",
    "domain": "Engineering",
    "category": "Computing / Technology",
    "subCategory": ""
  },
  {
    "description": "Similar to CSE with more focus on IT systems, networks and enterprise software.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "JEE Advanced",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Software Careers",
      "M.Tech",
      "MBA",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.2 Cr+",
      "note": "Fresher pay ₹4–12 LPA typically; senior/product-company engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-computing-it-branch",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Information Technology",
    "domain": "Engineering",
    "category": "Computing / Technology",
    "subCategory": ""
  },
  {
    "description": "Focused specifically on AI, machine learning and intelligent systems.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "JEE Advanced",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Software Careers",
      "M.Tech",
      "MBA",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.2 Cr+",
      "note": "Fresher pay ₹4–12 LPA typically; senior/product-company engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-computing-ai-branch",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Artificial Intelligence Engineering",
    "domain": "Engineering",
    "category": "Computing / Technology",
    "subCategory": ""
  },
  {
    "description": "Focused on building and deploying machine learning models and pipelines.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "JEE Advanced",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Software Careers",
      "M.Tech",
      "MBA",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.2 Cr+",
      "note": "Fresher pay ₹4–12 LPA typically; senior/product-company engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-computing-ml-branch",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Machine Learning Engineering",
    "domain": "Engineering",
    "category": "Computing / Technology",
    "subCategory": ""
  },
  {
    "description": "Focused on building the pipelines and infrastructure that move and store data at scale.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "JEE Advanced",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Software Careers",
      "M.Tech",
      "MBA",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.2 Cr+",
      "note": "Fresher pay ₹4–12 LPA typically; senior/product-company engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-computing-data-eng-branch",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Data Engineering",
    "domain": "Engineering",
    "category": "Computing / Technology",
    "subCategory": ""
  },
  {
    "description": "Focused on securing systems, networks and data against attacks.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "JEE Advanced",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Software Careers",
      "M.Tech",
      "MBA",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.2 Cr+",
      "note": "Fresher pay ₹4–12 LPA typically; senior/product-company engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-computing-cyber-branch",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Cybersecurity Engineering",
    "domain": "Engineering",
    "category": "Computing / Technology",
    "subCategory": ""
  },
  {
    "description": "Focused on distributed, cloud-native systems and infrastructure.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "JEE Advanced",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Software Careers",
      "M.Tech",
      "MBA",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.2 Cr+",
      "note": "Fresher pay ₹4–12 LPA typically; senior/product-company engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-computing-cloud-branch",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Cloud Computing Engineering",
    "domain": "Engineering",
    "category": "Computing / Technology",
    "subCategory": ""
  },
  {
    "description": "Focused on the practices and tools connecting software development and IT operations.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "JEE Advanced",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Software Careers",
      "M.Tech",
      "MBA",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.2 Cr+",
      "note": "Fresher pay ₹4–12 LPA typically; senior/product-company engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-computing-devops-branch",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "DevOps Engineering",
    "domain": "Engineering",
    "category": "Computing / Technology",
    "subCategory": ""
  },
  {
    "description": "Focused on software that runs on hardware devices — from appliances to industrial controllers.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "JEE Advanced",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Software Careers",
      "M.Tech",
      "MBA",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.2 Cr+",
      "note": "Fresher pay ₹4–12 LPA typically; senior/product-company engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-computing-embedded-branch",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Embedded Systems Engineering",
    "domain": "Engineering",
    "category": "Computing / Technology",
    "subCategory": ""
  },
  {
    "description": "Focused on the design and management of data networks.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "JEE Advanced",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Software Careers",
      "M.Tech",
      "MBA",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.2 Cr+",
      "note": "Fresher pay ₹4–12 LPA typically; senior/product-company engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-computing-networks-branch",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Computer Networks Engineering",
    "domain": "Engineering",
    "category": "Computing / Technology",
    "subCategory": ""
  },
  {
    "description": "Focused on distributed ledger systems and decentralized applications.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "JEE Advanced",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Software Careers",
      "M.Tech",
      "MBA",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.2 Cr+",
      "note": "Fresher pay ₹4–12 LPA typically; senior/product-company engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-computing-blockchain-branch",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Blockchain Engineering",
    "domain": "Engineering",
    "category": "Computing / Technology",
    "subCategory": ""
  },
  {
    "description": "Combines mechanical, electronics and software engineering to build robots.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "JEE Advanced",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Software Careers",
      "M.Tech",
      "MBA",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.2 Cr+",
      "note": "Fresher pay ₹4–12 LPA typically; senior/product-company engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-computing-robotics-branch",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Robotics Engineering",
    "domain": "Engineering",
    "category": "Computing / Technology",
    "subCategory": ""
  },
  {
    "description": "Covers machine design, thermodynamics, manufacturing and mechanical systems.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-mechanical",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Mechanical Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Covers structural design, construction, and infrastructure such as roads, bridges and buildings.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-civil",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Civil Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Covers power generation, transmission, electrical machines and control systems.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-electrical",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Electrical Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Covers circuit design, semiconductors and electronic devices.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-electronics",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Electronics Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Covers electronics plus communication systems and signal processing.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-ece",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Electronics & Communication Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Covers industrial chemical processes, plant design and materials.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-chemical",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Chemical Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Covers aircraft and spacecraft design, aerodynamics and propulsion.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-aerospace",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Aerospace Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Covers vehicle design, engines and automotive systems.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-automobile",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Automobile Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Applies engineering principles to medical devices and healthcare technology.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-biomedical",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Biomedical Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Applies engineering to biological systems — pharma, genetics, and bioprocessing.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-biotechnology",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Biotechnology Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Focuses on pollution control, waste management and sustainable systems.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-environmental",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Environmental Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Focuses on optimizing complex processes, systems and organizations.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-industrial",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Industrial Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Focuses on production systems, automation and manufacturing processes.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-manufacturing",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Manufacturing Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Combines mechanical, electronics and computer engineering.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-mechatronics",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Mechatronics Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Covers the design, construction and maintenance of ships and marine systems.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-marine",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Marine Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Covers oil and gas exploration, drilling and extraction.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-petroleum",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Petroleum Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Covers the safe and efficient extraction of minerals from the earth.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-mining",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Mining Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Covers the extraction, processing and properties of metals.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-metallurgical",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Metallurgical Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Covers fibre, fabric and textile manufacturing processes.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-textile",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Textile Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Covers food processing, preservation and safety engineering.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-food-tech",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Food Technology Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Applies engineering to farming equipment, irrigation and agri-processes.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-agri-eng",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Agricultural Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Covers nuclear reactor design, safety and energy systems.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-nuclear",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Nuclear Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Covers sensors, measurement and automated control systems.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-instrumentation",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Instrumentation & Control Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Covers solar, wind and other clean-energy systems.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-renewable",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Renewable Energy Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Covers the design and properties of new materials for industry.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-materials",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Materials Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Covers the design of integrated circuits and semiconductor chips.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th with PCM"
    ],
    "entranceExams": [
      "JEE Main",
      "State CETs"
    ],
    "degrees": [
      "B.Tech / B.E. (4 years)"
    ],
    "specializations": [],
    "subjects": [
      "math",
      "physics"
    ],
    "skills": [],
    "activities": [
      "solve-problems",
      "build-things"
    ],
    "interests": [
      "math",
      "physics"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Industry Roles",
      "M.Tech",
      "Government/PSU Jobs",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹45 LPA",
      "note": "Fresher pay ₹3–7 LPA typically; senior/specialist engineers considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "eng-core-vlsi",
    "parentId": "edu-a12-engineering",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Semiconductor / VLSI Engineering",
    "domain": "Engineering",
    "category": "Core Engineering",
    "subCategory": ""
  },
  {
    "description": "Designs, builds and maintains software applications and systems.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-software-engineer",
    "parentId": "eng-computing-cse",
    "stage": "after12",
    "type": "Career",
    "title": "Software Engineer",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Builds the user-facing part of websites and applications.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-frontend-developer",
    "parentId": "eng-computing-cse",
    "stage": "after12",
    "type": "Career",
    "title": "Frontend Developer",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Builds the server-side logic, databases and APIs behind applications.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-backend-developer",
    "parentId": "eng-computing-cse",
    "stage": "after12",
    "type": "Career",
    "title": "Backend Developer",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Builds both the frontend and backend of applications.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-fullstack-developer",
    "parentId": "eng-computing-cse",
    "stage": "after12",
    "type": "Career",
    "title": "Full Stack Developer",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Builds mobile applications for phones and tablets.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-mobile-developer",
    "parentId": "eng-computing-cse",
    "stage": "after12",
    "type": "Career",
    "title": "Mobile Developer",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Builds applications specifically for the Android platform.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-android-developer",
    "parentId": "eng-computing-cse",
    "stage": "after12",
    "type": "Career",
    "title": "Android Developer",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Builds applications specifically for Apple's iOS platform.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-ios-developer",
    "parentId": "eng-computing-cse",
    "stage": "after12",
    "type": "Career",
    "title": "iOS Developer",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Designs and programs video games.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-game-developer",
    "parentId": "eng-computing-cse",
    "stage": "after12",
    "type": "Career",
    "title": "Game Developer",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Builds and deploys AI-powered systems and applications.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-ai-engineer",
    "parentId": "eng-computing-ai-branch",
    "stage": "after12",
    "type": "Career",
    "title": "AI Engineer",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Builds and productionizes machine learning models and pipelines.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-ml-engineer",
    "parentId": "eng-computing-ml-branch",
    "stage": "after12",
    "type": "Career",
    "title": "Machine Learning Engineer",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Analyzes data to find patterns and build predictive models.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-data-scientist",
    "parentId": "eng-computing-data-eng-branch",
    "stage": "after12",
    "type": "Career",
    "title": "Data Scientist",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Analyzes data to answer business questions and inform decisions.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-data-analyst",
    "parentId": "eng-computing-data-eng-branch",
    "stage": "after12",
    "type": "Career",
    "title": "Data Analyst",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Builds and maintains the pipelines and infrastructure that move data.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-data-engineer",
    "parentId": "eng-computing-data-eng-branch",
    "stage": "after12",
    "type": "Career",
    "title": "Data Engineer",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Conducts research to advance machine learning methods and theory.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-ml-researcher",
    "parentId": "eng-computing-ml-branch",
    "stage": "after12",
    "type": "Career",
    "title": "ML Researcher",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Conducts research to advance artificial intelligence methods and theory.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-ai-researcher",
    "parentId": "eng-computing-ai-branch",
    "stage": "after12",
    "type": "Career",
    "title": "AI Researcher",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Monitors systems for security threats and responds to incidents.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-cybersecurity-analyst",
    "parentId": "eng-computing-cyber-branch",
    "stage": "after12",
    "type": "Career",
    "title": "Cybersecurity Analyst",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Designs and builds systems and tools to keep software and infrastructure secure.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-security-engineer",
    "parentId": "eng-computing-cyber-branch",
    "stage": "after12",
    "type": "Career",
    "title": "Security Engineer",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Tests systems for vulnerabilities by simulating real attacks, with permission.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-ethical-hacker",
    "parentId": "eng-computing-cyber-branch",
    "stage": "after12",
    "type": "Career",
    "title": "Ethical Hacker / Penetration Tester",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Designs and manages cloud infrastructure and services.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-cloud-engineer",
    "parentId": "eng-computing-cloud-branch",
    "stage": "after12",
    "type": "Career",
    "title": "Cloud Engineer",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Automates and streamlines software development, testing and deployment.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-devops-engineer",
    "parentId": "eng-computing-devops-branch",
    "stage": "after12",
    "type": "Career",
    "title": "DevOps Engineer",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Ensures large-scale systems stay reliable, fast and available.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-sre",
    "parentId": "eng-computing-devops-branch",
    "stage": "after12",
    "type": "Career",
    "title": "Site Reliability Engineer",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Designs and maintains the underlying computer systems an organization relies on.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-systems-engineer",
    "parentId": "eng-computing-cse",
    "stage": "after12",
    "type": "Career",
    "title": "Systems Engineer",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Designs, builds and maintains computer networks.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-network-engineer",
    "parentId": "eng-computing-networks-branch",
    "stage": "after12",
    "type": "Career",
    "title": "Network Engineer",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Manages, secures and optimizes an organization's databases.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-dba",
    "parentId": "eng-computing-cse",
    "stage": "after12",
    "type": "Career",
    "title": "Database Administrator",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Designs the overall technical structure of complex software systems.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-solutions-architect",
    "parentId": "eng-computing-cse",
    "stage": "after12",
    "type": "Career",
    "title": "Solutions Architect",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Tests software to find bugs and ensure quality before release.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-qa-engineer",
    "parentId": "eng-computing-cse",
    "stage": "after12",
    "type": "Career",
    "title": "QA Engineer",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Writes automated scripts to test software efficiently and repeatedly.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-automation-test-engineer",
    "parentId": "eng-computing-cse",
    "stage": "after12",
    "type": "Career",
    "title": "Automation Test Engineer",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Writes software that runs directly on hardware devices.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-embedded-engineer",
    "parentId": "eng-computing-embedded-branch",
    "stage": "after12",
    "type": "Career",
    "title": "Embedded Systems Engineer",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Designs and programs robots and automated mechanical systems.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-robotics-engineer",
    "parentId": "eng-computing-robotics-branch",
    "stage": "after12",
    "type": "Career",
    "title": "Robotics Engineer",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Builds decentralized applications and smart contracts.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-blockchain-developer",
    "parentId": "eng-computing-blockchain-branch",
    "stage": "after12",
    "type": "Career",
    "title": "Blockchain Developer",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Guides the development of technical products, bridging engineering and business.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-technical-product-manager",
    "parentId": "eng-computing-cse",
    "stage": "after12",
    "type": "Career",
    "title": "Technical Product Manager",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Advises organizations on technology strategy and implementation.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-technical-consultant",
    "parentId": "eng-computing-cse",
    "stage": "after12",
    "type": "Career",
    "title": "Technical Consultant",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Helps users and organizations resolve technical issues.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-it-support",
    "parentId": "eng-computing-it-branch",
    "stage": "after12",
    "type": "Career",
    "title": "IT Support Specialist",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "Manages an organization's servers, systems and IT infrastructure.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "B.Tech/BCA/B.Sc CS or equivalent (or strong self-taught portfolio)"
    ],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "computer-science"
    ],
    "skills": [],
    "activities": [
      "programming",
      "solve-problems"
    ],
    "interests": [
      "computer-science",
      "technology"
    ],
    "strengths": [
      "logical",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "office-tech",
      "flexible-remote"
    ],
    "values": [
      "innovation",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead roles",
      "Engineering Management",
      "Architecture roles",
      "Startup / Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹1.3 Cr+",
      "note": "Fresher pay varies by company tier; senior/specialist roles at top product companies command a large premium."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 5,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (or self-taught + portfolio)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "tech-career-systems-administrator",
    "parentId": "eng-computing-it-branch",
    "stage": "after12",
    "type": "Career",
    "title": "Systems Administrator",
    "domain": "Technology",
    "category": "Software & IT",
    "subCategory": ""
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a12-commerce",
    "parentId": null,
    "stage": "after12",
    "type": "Domain",
    "title": "Commerce",
    "domain": "Business",
    "category": "Commerce",
    "subCategory": ""
  },
  {
    "description": "A broad undergraduate commerce degree covering accounting, business law, economics and finance fundamentals.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th (any stream, Commerce preferred)"
    ],
    "entranceExams": [],
    "degrees": [
      "B.Com (3 years)"
    ],
    "specializations": [],
    "subjects": [
      "accounting",
      "economics",
      "business"
    ],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "CA/CS/CMA",
      "MBA",
      "M.Com",
      "Direct Commerce Jobs"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹40 LPA",
      "note": "Qualified CAs and finance specialists sit well above this base range."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 2,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-bcom",
    "parentId": "edu-a12-commerce",
    "stage": "after12",
    "type": "EducationPath",
    "title": "B.Com (Bachelor of Commerce)",
    "domain": "Business",
    "category": "Commerce",
    "subCategory": ""
  },
  {
    "description": "Records, manages and reports on an organization's financial transactions.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "accounting"
    ],
    "skills": [],
    "activities": [
      "work-numbers"
    ],
    "interests": [
      "accounting",
      "business"
    ],
    "strengths": [
      "mathematics",
      "attention-detail",
      "organization"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Finance Roles",
      "Own Practice/Firm"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹12 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-accounting-accountant",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Accountant",
    "domain": "Business",
    "category": "Accounting",
    "subCategory": ""
  },
  {
    "description": "A rigorously certified expert in accounting, auditing, tax and financial law.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "accounting"
    ],
    "skills": [],
    "activities": [
      "work-numbers"
    ],
    "interests": [
      "accounting",
      "business"
    ],
    "strengths": [
      "mathematics",
      "attention-detail",
      "organization"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Finance Roles",
      "Own Practice/Firm"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹7 LPA – ₹60 LPA+",
      "note": "Partner-level and Big 4 roles considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-accounting-ca",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Chartered Accountant (CA)",
    "domain": "Business",
    "category": "Accounting",
    "subCategory": ""
  },
  {
    "description": "Specializes in cost analysis and management accounting for businesses.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "accounting"
    ],
    "skills": [],
    "activities": [
      "work-numbers"
    ],
    "interests": [
      "accounting",
      "business"
    ],
    "strengths": [
      "mathematics",
      "attention-detail",
      "organization"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Finance Roles",
      "Own Practice/Firm"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹35 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-accounting-cma",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Cost & Management Accountant (CMA)",
    "domain": "Business",
    "category": "Accounting",
    "subCategory": ""
  },
  {
    "description": "Ensures a company complies with legal and regulatory requirements in governance.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "accounting"
    ],
    "skills": [],
    "activities": [
      "work-numbers"
    ],
    "interests": [
      "accounting",
      "business"
    ],
    "strengths": [
      "mathematics",
      "attention-detail",
      "organization"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Finance Roles",
      "Own Practice/Firm"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹30 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-accounting-cs",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Company Secretary (CS)",
    "domain": "Business",
    "category": "Accounting",
    "subCategory": ""
  },
  {
    "description": "Examines financial records to verify accuracy and compliance.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "accounting"
    ],
    "skills": [],
    "activities": [
      "work-numbers"
    ],
    "interests": [
      "accounting",
      "business"
    ],
    "strengths": [
      "mathematics",
      "attention-detail",
      "organization"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Finance Roles",
      "Own Practice/Firm"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3.5 LPA – ₹25 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-accounting-auditor",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Auditor",
    "domain": "Business",
    "category": "Accounting",
    "subCategory": ""
  },
  {
    "description": "Advises individuals and businesses on tax planning and compliance.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "accounting"
    ],
    "skills": [],
    "activities": [
      "work-numbers"
    ],
    "interests": [
      "accounting",
      "business"
    ],
    "strengths": [
      "mathematics",
      "attention-detail",
      "organization"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Finance Roles",
      "Own Practice/Firm"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹25 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-accounting-tax-consultant",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Tax Consultant",
    "domain": "Business",
    "category": "Accounting",
    "subCategory": ""
  },
  {
    "description": "Specializes in Goods & Services Tax compliance and advisory.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "accounting"
    ],
    "skills": [],
    "activities": [
      "work-numbers"
    ],
    "interests": [
      "accounting",
      "business"
    ],
    "strengths": [
      "mathematics",
      "attention-detail",
      "organization"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Finance Roles",
      "Own Practice/Firm"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹18 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-accounting-gst-consultant",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "GST Consultant",
    "domain": "Business",
    "category": "Accounting",
    "subCategory": ""
  },
  {
    "description": "Maintains day-to-day financial records for a business.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "accounting"
    ],
    "skills": [],
    "activities": [
      "work-numbers"
    ],
    "interests": [
      "accounting",
      "business"
    ],
    "strengths": [
      "mathematics",
      "attention-detail",
      "organization"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Finance Roles",
      "Own Practice/Firm"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2 LPA – ₹8 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-accounting-bookkeeper",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Bookkeeper",
    "domain": "Business",
    "category": "Accounting",
    "subCategory": ""
  },
  {
    "description": "Oversees an organization's accounting operations and financial reporting.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "accounting"
    ],
    "skills": [],
    "activities": [
      "work-numbers"
    ],
    "interests": [
      "accounting",
      "business"
    ],
    "strengths": [
      "mathematics",
      "attention-detail",
      "organization"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Finance Roles",
      "Own Practice/Firm"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹45 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 3,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-accounting-financial-controller",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Financial Controller",
    "domain": "Business",
    "category": "Accounting",
    "subCategory": ""
  },
  {
    "description": "Analyzes financial data to guide investment and business decisions.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "economics",
      "accounting",
      "statistics"
    ],
    "skills": [],
    "activities": [
      "analyze-info",
      "work-numbers"
    ],
    "interests": [
      "economics",
      "business"
    ],
    "strengths": [
      "mathematics",
      "logical",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Finance Leadership",
      "MBA Finance"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹35 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-finance-financial-analyst",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Financial Analyst",
    "domain": "Business",
    "category": "Finance",
    "subCategory": ""
  },
  {
    "description": "Advises companies on raising capital, mergers and acquisitions.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "economics",
      "accounting",
      "statistics"
    ],
    "skills": [],
    "activities": [
      "analyze-info",
      "work-numbers"
    ],
    "interests": [
      "economics",
      "business"
    ],
    "strengths": [
      "mathematics",
      "logical",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Finance Leadership",
      "MBA Finance"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1 Cr+",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-finance-investment-banker",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Investment Banker",
    "domain": "Business",
    "category": "Finance",
    "subCategory": ""
  },
  {
    "description": "Researches and analyzes public companies to guide investment decisions.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "economics",
      "accounting",
      "statistics"
    ],
    "skills": [],
    "activities": [
      "analyze-info",
      "work-numbers"
    ],
    "interests": [
      "economics",
      "business"
    ],
    "strengths": [
      "mathematics",
      "logical",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Finance Leadership",
      "MBA Finance"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹40 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-finance-equity-research-analyst",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Equity Research Analyst",
    "domain": "Business",
    "category": "Finance",
    "subCategory": ""
  },
  {
    "description": "Manages investment portfolios to meet clients' financial goals.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "economics",
      "accounting",
      "statistics"
    ],
    "skills": [],
    "activities": [
      "analyze-info",
      "work-numbers"
    ],
    "interests": [
      "economics",
      "business"
    ],
    "strengths": [
      "mathematics",
      "logical",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Finance Leadership",
      "MBA Finance"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹80 LPA+",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-finance-portfolio-manager",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Portfolio Manager",
    "domain": "Business",
    "category": "Finance",
    "subCategory": ""
  },
  {
    "description": "Advises high-net-worth clients on managing and growing their wealth.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "economics",
      "accounting",
      "statistics"
    ],
    "skills": [],
    "activities": [
      "analyze-info",
      "work-numbers"
    ],
    "interests": [
      "economics",
      "business"
    ],
    "strengths": [
      "mathematics",
      "logical",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Finance Leadership",
      "MBA Finance"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹40 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-finance-wealth-manager",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Wealth Manager",
    "domain": "Business",
    "category": "Finance",
    "subCategory": ""
  },
  {
    "description": "Helps individuals plan savings, investments and retirement.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "economics",
      "accounting",
      "statistics"
    ],
    "skills": [],
    "activities": [
      "analyze-info",
      "work-numbers"
    ],
    "interests": [
      "economics",
      "business"
    ],
    "strengths": [
      "mathematics",
      "logical",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Finance Leadership",
      "MBA Finance"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3.5 LPA – ₹20 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-finance-financial-planner",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Financial Planner",
    "domain": "Business",
    "category": "Finance",
    "subCategory": ""
  },
  {
    "description": "Identifies and evaluates financial and operational risks for organizations.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "economics",
      "accounting",
      "statistics"
    ],
    "skills": [],
    "activities": [
      "analyze-info",
      "work-numbers"
    ],
    "interests": [
      "economics",
      "business"
    ],
    "strengths": [
      "mathematics",
      "logical",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Finance Leadership",
      "MBA Finance"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹28 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-finance-risk-analyst",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Risk Analyst",
    "domain": "Business",
    "category": "Finance",
    "subCategory": ""
  },
  {
    "description": "Assesses the creditworthiness of individuals or businesses before lending.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "economics",
      "accounting",
      "statistics"
    ],
    "skills": [],
    "activities": [
      "analyze-info",
      "work-numbers"
    ],
    "interests": [
      "economics",
      "business"
    ],
    "strengths": [
      "mathematics",
      "logical",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Finance Leadership",
      "MBA Finance"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3.5 LPA – ₹22 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-finance-credit-analyst",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Credit Analyst",
    "domain": "Business",
    "category": "Finance",
    "subCategory": ""
  },
  {
    "description": "Manages an organization's cash flow, funding and financial risk.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "economics",
      "accounting",
      "statistics"
    ],
    "skills": [],
    "activities": [
      "analyze-info",
      "work-numbers"
    ],
    "interests": [
      "economics",
      "business"
    ],
    "strengths": [
      "mathematics",
      "logical",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Finance Leadership",
      "MBA Finance"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹35 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-finance-treasury-professional",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Treasury Professional",
    "domain": "Business",
    "category": "Finance",
    "subCategory": ""
  },
  {
    "description": "Uses statistics and mathematics to assess financial risk, mainly in insurance.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "economics",
      "accounting",
      "statistics"
    ],
    "skills": [],
    "activities": [
      "analyze-info",
      "work-numbers"
    ],
    "interests": [
      "economics",
      "business"
    ],
    "strengths": [
      "mathematics",
      "logical",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Finance Leadership",
      "MBA Finance"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹70 LPA+",
      "note": "Pay rises sharply with each actuarial exam cleared."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-finance-actuary",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Actuary",
    "domain": "Business",
    "category": "Finance",
    "subCategory": ""
  },
  {
    "description": "Works in retail, corporate or investment banking roles.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "economics",
      "accounting",
      "statistics"
    ],
    "skills": [],
    "activities": [
      "analyze-info",
      "work-numbers"
    ],
    "interests": [
      "economics",
      "business"
    ],
    "strengths": [
      "mathematics",
      "logical",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Finance Leadership",
      "MBA Finance"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3.5 LPA – ₹30 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-finance-banking-professional",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Banking Professional",
    "domain": "Business",
    "category": "Finance",
    "subCategory": ""
  },
  {
    "description": "Works at the intersection of finance and technology, building financial products.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "economics",
      "accounting",
      "statistics"
    ],
    "skills": [],
    "activities": [
      "analyze-info",
      "work-numbers"
    ],
    "interests": [
      "economics",
      "business"
    ],
    "strengths": [
      "mathematics",
      "logical",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Finance Leadership",
      "MBA Finance"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹45 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 4,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–4 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-finance-fintech-professional",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "FinTech Professional",
    "domain": "Business",
    "category": "Finance",
    "subCategory": ""
  },
  {
    "description": "Analyzes business processes and data to recommend improvements.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "manage-projects",
      "work-business"
    ],
    "interests": [
      "business"
    ],
    "strengths": [
      "leadership",
      "organization",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Management",
      "MBA",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹28 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 3,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–4 years (MBA often preferred later)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-business-business-analyst",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Business Analyst",
    "domain": "Business",
    "category": "Management",
    "subCategory": ""
  },
  {
    "description": "Advises organizations on strategy, operations and performance.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "manage-projects",
      "work-business"
    ],
    "interests": [
      "business"
    ],
    "strengths": [
      "leadership",
      "organization",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Management",
      "MBA",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹90 LPA+",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 3,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–4 years (MBA often preferred later)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-business-management-consultant",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Management Consultant",
    "domain": "Business",
    "category": "Management",
    "subCategory": ""
  },
  {
    "description": "Oversees the day-to-day operations of a business or department.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "manage-projects",
      "work-business"
    ],
    "interests": [
      "business"
    ],
    "strengths": [
      "leadership",
      "organization",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Management",
      "MBA",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹35 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 3,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–4 years (MBA often preferred later)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-business-operations-manager",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Operations Manager",
    "domain": "Business",
    "category": "Management",
    "subCategory": ""
  },
  {
    "description": "Plans and leads a company's marketing strategy and campaigns.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "manage-projects",
      "work-business"
    ],
    "interests": [
      "business"
    ],
    "strengths": [
      "leadership",
      "organization",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Management",
      "MBA",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹40 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 3,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–4 years (MBA often preferred later)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-business-marketing-manager",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Marketing Manager",
    "domain": "Business",
    "category": "Management",
    "subCategory": ""
  },
  {
    "description": "Leads a sales team and drives revenue growth.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "manage-projects",
      "work-business"
    ],
    "interests": [
      "business"
    ],
    "strengths": [
      "leadership",
      "organization",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Management",
      "MBA",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹35 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 3,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–4 years (MBA often preferred later)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-business-sales-manager",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Sales Manager",
    "domain": "Business",
    "category": "Management",
    "subCategory": ""
  },
  {
    "description": "Manages recruitment, culture, and employee relations for an organization.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "manage-projects",
      "work-business"
    ],
    "interests": [
      "business"
    ],
    "strengths": [
      "leadership",
      "organization",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Management",
      "MBA",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹30 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 3,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–4 years (MBA often preferred later)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-business-hr-manager",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "HR Manager",
    "domain": "Business",
    "category": "Management",
    "subCategory": ""
  },
  {
    "description": "Guides the vision, strategy and roadmap of a product.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "manage-projects",
      "work-business"
    ],
    "interests": [
      "business"
    ],
    "strengths": [
      "leadership",
      "organization",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Management",
      "MBA",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹8 LPA – ₹1.2 Cr+",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 3,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–4 years (MBA often preferred later)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-business-product-manager",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Product Manager",
    "domain": "Business",
    "category": "Management",
    "subCategory": ""
  },
  {
    "description": "Plans and coordinates projects to deliver them on time and budget.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "manage-projects",
      "work-business"
    ],
    "interests": [
      "business"
    ],
    "strengths": [
      "leadership",
      "organization",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Management",
      "MBA",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹35 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 3,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–4 years (MBA often preferred later)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-business-project-manager",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Project Manager",
    "domain": "Business",
    "category": "Management",
    "subCategory": ""
  },
  {
    "description": "Identifies and builds new business opportunities and partnerships.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "manage-projects",
      "work-business"
    ],
    "interests": [
      "business"
    ],
    "strengths": [
      "leadership",
      "organization",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Management",
      "MBA",
      "Entrepreneurship"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹30 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 3,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–4 years (MBA often preferred later)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-business-business-development",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Business Development Professional",
    "domain": "Business",
    "category": "Management",
    "subCategory": ""
  },
  {
    "description": "Studies and forecasts economic trends to inform policy or business decisions.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "economics"
    ],
    "skills": [],
    "activities": [
      "research",
      "analyze-info"
    ],
    "interests": [
      "economics"
    ],
    "strengths": [
      "logical",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "business-corp",
      "office-tech"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's in Economics",
      "Policy Careers",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹40 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years + Master's often preferred",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-econ-economist",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Economist",
    "domain": "Business",
    "category": "Economics",
    "subCategory": ""
  },
  {
    "description": "Analyzes economic data to support business or government decision-making.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "economics"
    ],
    "skills": [],
    "activities": [
      "research",
      "analyze-info"
    ],
    "interests": [
      "economics"
    ],
    "strengths": [
      "logical",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "business-corp",
      "office-tech"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's in Economics",
      "Policy Careers",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹28 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years + Master's often preferred",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-econ-economic-analyst",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Economic Analyst",
    "domain": "Business",
    "category": "Economics",
    "subCategory": ""
  },
  {
    "description": "Researches and evaluates public policy options and their impact.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "economics"
    ],
    "skills": [],
    "activities": [
      "research",
      "analyze-info"
    ],
    "interests": [
      "economics"
    ],
    "strengths": [
      "logical",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "business-corp",
      "office-tech"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's in Economics",
      "Policy Careers",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹25 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years + Master's often preferred",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-econ-policy-analyst",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Policy Analyst",
    "domain": "Business",
    "category": "Economics",
    "subCategory": ""
  },
  {
    "description": "Conducts in-depth research on economic questions, often for think tanks or academia.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "economics"
    ],
    "skills": [],
    "activities": [
      "research",
      "analyze-info"
    ],
    "interests": [
      "economics"
    ],
    "strengths": [
      "logical",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "business-corp",
      "office-tech"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's in Economics",
      "Policy Careers",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹25 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years + Master's often preferred",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-econ-economic-researcher",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Economic Researcher",
    "domain": "Business",
    "category": "Economics",
    "subCategory": ""
  },
  {
    "description": "Advises businesses or governments using economic analysis.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "economics"
    ],
    "skills": [],
    "activities": [
      "research",
      "analyze-info"
    ],
    "interests": [
      "economics"
    ],
    "strengths": [
      "logical",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "business-corp",
      "office-tech"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's in Economics",
      "Policy Careers",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹40 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years + Master's often preferred",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "commerce-econ-economic-consultant",
    "parentId": "commerce-bcom",
    "stage": "after12",
    "type": "Career",
    "title": "Economic Consultant",
    "domain": "Business",
    "category": "Economics",
    "subCategory": ""
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a12-entrepreneurship",
    "parentId": null,
    "stage": "after12",
    "type": "Domain",
    "title": "Business & Entrepreneurship",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "Builds a new, usually tech-driven company from the ground up.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "start-own",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "creativity"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "business-corp"
    ],
    "values": [
      "entrepreneurship",
      "freedom",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "business",
      "range": "Variable",
      "note": "Business/freelance income varies significantly by scale, clients and market — may include losses, especially early on."
    },
    "challenges": [
      "No guaranteed income, especially early on",
      "High risk of failure",
      "Requires wearing many hats"
    ],
    "advantages": [
      "Unlimited upside",
      "Full independence and control"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies — no fixed path",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "high",
    "id": "biz-entrepreneur-startup-founder",
    "parentId": "edu-a12-entrepreneurship",
    "stage": "after12",
    "type": "Career",
    "title": "Startup Founder",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "Starts and runs a business in any sector, taking on financial risk for potential reward.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "start-own",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "creativity"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "business-corp"
    ],
    "values": [
      "entrepreneurship",
      "freedom",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "business",
      "range": "Variable",
      "note": "Business/freelance income varies significantly by scale, clients and market — may include losses, especially early on."
    },
    "challenges": [
      "No guaranteed income, especially early on",
      "High risk of failure",
      "Requires wearing many hats"
    ],
    "advantages": [
      "Unlimited upside",
      "Full independence and control"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies — no fixed path",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "high",
    "id": "biz-entrepreneur-entrepreneur-general",
    "parentId": "edu-a12-entrepreneurship",
    "stage": "after12",
    "type": "Career",
    "title": "Entrepreneur",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "Sells products online through owned or third-party platforms.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "start-own",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "creativity"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "business-corp"
    ],
    "values": [
      "entrepreneurship",
      "freedom",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "business",
      "range": "Variable",
      "note": "Business/freelance income varies significantly by scale, clients and market — may include losses, especially early on."
    },
    "challenges": [
      "No guaranteed income, especially early on",
      "High risk of failure",
      "Requires wearing many hats"
    ],
    "advantages": [
      "Unlimited upside",
      "Full independence and control"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies — no fixed path",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "high",
    "id": "biz-entrepreneur-ecommerce-business",
    "parentId": "edu-a12-entrepreneurship",
    "stage": "after12",
    "type": "Career",
    "title": "E-commerce Business Owner",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "Builds a direct-to-consumer product brand, often sold online.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "start-own",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "creativity"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "business-corp"
    ],
    "values": [
      "entrepreneurship",
      "freedom",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "business",
      "range": "Variable",
      "note": "Business/freelance income varies significantly by scale, clients and market — may include losses, especially early on."
    },
    "challenges": [
      "No guaranteed income, especially early on",
      "High risk of failure",
      "Requires wearing many hats"
    ],
    "advantages": [
      "Unlimited upside",
      "Full independence and control"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies — no fixed path",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "high",
    "id": "biz-entrepreneur-d2c-brand",
    "parentId": "edu-a12-entrepreneurship",
    "stage": "after12",
    "type": "Career",
    "title": "D2C Brand Founder",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "Builds and sells subscription-based software products.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "start-own",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "creativity"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "business-corp"
    ],
    "values": [
      "entrepreneurship",
      "freedom",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "business",
      "range": "Variable",
      "note": "Business/freelance income varies significantly by scale, clients and market — may include losses, especially early on."
    },
    "challenges": [
      "No guaranteed income, especially early on",
      "High risk of failure",
      "Requires wearing many hats"
    ],
    "advantages": [
      "Unlimited upside",
      "Full independence and control"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies — no fixed path",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "high",
    "id": "biz-entrepreneur-saas-business",
    "parentId": "edu-a12-entrepreneurship",
    "stage": "after12",
    "type": "Career",
    "title": "SaaS Business Founder",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "Runs an agency offering digital services like marketing, design or development.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "start-own",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "creativity"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "business-corp"
    ],
    "values": [
      "entrepreneurship",
      "freedom",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "business",
      "range": "Variable",
      "note": "Business/freelance income varies significantly by scale, clients and market — may include losses, especially early on."
    },
    "challenges": [
      "No guaranteed income, especially early on",
      "High risk of failure",
      "Requires wearing many hats"
    ],
    "advantages": [
      "Unlimited upside",
      "Full independence and control"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies — no fixed path",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "high",
    "id": "biz-entrepreneur-digital-agency",
    "parentId": "edu-a12-entrepreneurship",
    "stage": "after12",
    "type": "Career",
    "title": "Digital Agency Owner",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "Runs an agency specializing in marketing campaigns and strategy for clients.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "start-own",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "creativity"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "business-corp"
    ],
    "values": [
      "entrepreneurship",
      "freedom",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "business",
      "range": "Variable",
      "note": "Business/freelance income varies significantly by scale, clients and market — may include losses, especially early on."
    },
    "challenges": [
      "No guaranteed income, especially early on",
      "High risk of failure",
      "Requires wearing many hats"
    ],
    "advantages": [
      "Unlimited upside",
      "Full independence and control"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies — no fixed path",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "high",
    "id": "biz-entrepreneur-marketing-agency",
    "parentId": "edu-a12-entrepreneurship",
    "stage": "after12",
    "type": "Career",
    "title": "Marketing Agency Owner",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "Runs a company building custom software for clients.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "start-own",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "creativity"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "business-corp"
    ],
    "values": [
      "entrepreneurship",
      "freedom",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "business",
      "range": "Variable",
      "note": "Business/freelance income varies significantly by scale, clients and market — may include losses, especially early on."
    },
    "challenges": [
      "No guaranteed income, especially early on",
      "High risk of failure",
      "Requires wearing many hats"
    ],
    "advantages": [
      "Unlimited upside",
      "Full independence and control"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies — no fixed path",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "high",
    "id": "biz-entrepreneur-software-agency",
    "parentId": "edu-a12-entrepreneurship",
    "stage": "after12",
    "type": "Career",
    "title": "Software Development Agency Owner",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "Runs a studio offering design services to clients.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "start-own",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "creativity"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "business-corp"
    ],
    "values": [
      "entrepreneurship",
      "freedom",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "business",
      "range": "Variable",
      "note": "Business/freelance income varies significantly by scale, clients and market — may include losses, especially early on."
    },
    "challenges": [
      "No guaranteed income, especially early on",
      "High risk of failure",
      "Requires wearing many hats"
    ],
    "advantages": [
      "Unlimited upside",
      "Full independence and control"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies — no fixed path",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "high",
    "id": "biz-entrepreneur-design-agency",
    "parentId": "edu-a12-entrepreneurship",
    "stage": "after12",
    "type": "Career",
    "title": "Design Agency Owner",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "Offers expert advisory services to organizations.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "start-own",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "creativity"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "business-corp"
    ],
    "values": [
      "entrepreneurship",
      "freedom",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "business",
      "range": "Variable",
      "note": "Business/freelance income varies significantly by scale, clients and market — may include losses, especially early on."
    },
    "challenges": [
      "No guaranteed income, especially early on",
      "High risk of failure",
      "Requires wearing many hats"
    ],
    "advantages": [
      "Unlimited upside",
      "Full independence and control"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies — no fixed path",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "high",
    "id": "biz-entrepreneur-consulting-business",
    "parentId": "edu-a12-entrepreneurship",
    "stage": "after12",
    "type": "Career",
    "title": "Consulting Business Owner",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "Builds a business around teaching or educational products.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "start-own",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "creativity"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "business-corp"
    ],
    "values": [
      "entrepreneurship",
      "freedom",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "business",
      "range": "Variable",
      "note": "Business/freelance income varies significantly by scale, clients and market — may include losses, especially early on."
    },
    "challenges": [
      "No guaranteed income, especially early on",
      "High risk of failure",
      "Requires wearing many hats"
    ],
    "advantages": [
      "Unlimited upside",
      "Full independence and control"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies — no fixed path",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "high",
    "id": "biz-entrepreneur-education-business",
    "parentId": "edu-a12-entrepreneurship",
    "stage": "after12",
    "type": "Career",
    "title": "Education Business Founder",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "Offers personal, business or career coaching services.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "start-own",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "creativity"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "business-corp"
    ],
    "values": [
      "entrepreneurship",
      "freedom",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "business",
      "range": "Variable",
      "note": "Business/freelance income varies significantly by scale, clients and market — may include losses, especially early on."
    },
    "challenges": [
      "No guaranteed income, especially early on",
      "High risk of failure",
      "Requires wearing many hats"
    ],
    "advantages": [
      "Unlimited upside",
      "Full independence and control"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies — no fixed path",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "high",
    "id": "biz-entrepreneur-coaching-business",
    "parentId": "edu-a12-entrepreneurship",
    "stage": "after12",
    "type": "Career",
    "title": "Coaching Business Owner",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "Runs a store selling goods directly to consumers.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "start-own",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "creativity"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "business-corp"
    ],
    "values": [
      "entrepreneurship",
      "freedom",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "business",
      "range": "Variable",
      "note": "Business/freelance income varies significantly by scale, clients and market — may include losses, especially early on."
    },
    "challenges": [
      "No guaranteed income, especially early on",
      "High risk of failure",
      "Requires wearing many hats"
    ],
    "advantages": [
      "Unlimited upside",
      "Full independence and control"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies — no fixed path",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "high",
    "id": "biz-entrepreneur-retail-business",
    "parentId": "edu-a12-entrepreneurship",
    "stage": "after12",
    "type": "Career",
    "title": "Retail Business Owner",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "Sells goods in bulk to retailers or other businesses.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "start-own",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "creativity"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "business-corp"
    ],
    "values": [
      "entrepreneurship",
      "freedom",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "business",
      "range": "Variable",
      "note": "Business/freelance income varies significantly by scale, clients and market — may include losses, especially early on."
    },
    "challenges": [
      "No guaranteed income, especially early on",
      "High risk of failure",
      "Requires wearing many hats"
    ],
    "advantages": [
      "Unlimited upside",
      "Full independence and control"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies — no fixed path",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "high",
    "id": "biz-entrepreneur-wholesale-business",
    "parentId": "edu-a12-entrepreneurship",
    "stage": "after12",
    "type": "Career",
    "title": "Wholesale Business Owner",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "Runs a business that produces physical goods.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "start-own",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "creativity"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "business-corp"
    ],
    "values": [
      "entrepreneurship",
      "freedom",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "business",
      "range": "Variable",
      "note": "Business/freelance income varies significantly by scale, clients and market — may include losses, especially early on."
    },
    "challenges": [
      "No guaranteed income, especially early on",
      "High risk of failure",
      "Requires wearing many hats"
    ],
    "advantages": [
      "Unlimited upside",
      "Full independence and control"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies — no fixed path",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "high",
    "id": "biz-entrepreneur-manufacturing-business",
    "parentId": "edu-a12-entrepreneurship",
    "stage": "after12",
    "type": "Career",
    "title": "Manufacturing Business Owner",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "Runs a business trading goods across international borders.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "start-own",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "creativity"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "business-corp"
    ],
    "values": [
      "entrepreneurship",
      "freedom",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "business",
      "range": "Variable",
      "note": "Business/freelance income varies significantly by scale, clients and market — may include losses, especially early on."
    },
    "challenges": [
      "No guaranteed income, especially early on",
      "High risk of failure",
      "Requires wearing many hats"
    ],
    "advantages": [
      "Unlimited upside",
      "Full independence and control"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies — no fixed path",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "high",
    "id": "biz-entrepreneur-import-export",
    "parentId": "edu-a12-entrepreneurship",
    "stage": "after12",
    "type": "Career",
    "title": "Import/Export Business Owner",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "Runs a business under an established brand's franchise model.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "start-own",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "creativity"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "business-corp"
    ],
    "values": [
      "entrepreneurship",
      "freedom",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "business",
      "range": "Variable",
      "note": "Business/freelance income varies significantly by scale, clients and market — may include losses, especially early on."
    },
    "challenges": [
      "No guaranteed income, especially early on",
      "High risk of failure",
      "Requires wearing many hats"
    ],
    "advantages": [
      "Unlimited upside",
      "Full independence and control"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies — no fixed path",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "high",
    "id": "biz-entrepreneur-franchise-business",
    "parentId": "edu-a12-entrepreneurship",
    "stage": "after12",
    "type": "Career",
    "title": "Franchise Business Owner",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "Runs a restaurant or food-service establishment.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "start-own",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "creativity"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "business-corp"
    ],
    "values": [
      "entrepreneurship",
      "freedom",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "business",
      "range": "Variable",
      "note": "Business/freelance income varies significantly by scale, clients and market — may include losses, especially early on."
    },
    "challenges": [
      "No guaranteed income, especially early on",
      "High risk of failure",
      "Requires wearing many hats"
    ],
    "advantages": [
      "Unlimited upside",
      "Full independence and control"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies — no fixed path",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "high",
    "id": "biz-entrepreneur-restaurant-business",
    "parentId": "edu-a12-entrepreneurship",
    "stage": "after12",
    "type": "Career",
    "title": "Restaurant Business Owner",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "Runs a delivery-only food business without a dine-in space.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "start-own",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "creativity"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "business-corp"
    ],
    "values": [
      "entrepreneurship",
      "freedom",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "business",
      "range": "Variable",
      "note": "Business/freelance income varies significantly by scale, clients and market — may include losses, especially early on."
    },
    "challenges": [
      "No guaranteed income, especially early on",
      "High risk of failure",
      "Requires wearing many hats"
    ],
    "advantages": [
      "Unlimited upside",
      "Full independence and control"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies — no fixed path",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "high",
    "id": "biz-entrepreneur-cloud-kitchen",
    "parentId": "edu-a12-entrepreneurship",
    "stage": "after12",
    "type": "Career",
    "title": "Cloud Kitchen Owner",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "Runs a business producing or selling food products.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "start-own",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "creativity"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "business-corp"
    ],
    "values": [
      "entrepreneurship",
      "freedom",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "business",
      "range": "Variable",
      "note": "Business/freelance income varies significantly by scale, clients and market — may include losses, especially early on."
    },
    "challenges": [
      "No guaranteed income, especially early on",
      "High risk of failure",
      "Requires wearing many hats"
    ],
    "advantages": [
      "Unlimited upside",
      "Full independence and control"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies — no fixed path",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "high",
    "id": "biz-entrepreneur-food-business",
    "parentId": "edu-a12-entrepreneurship",
    "stage": "after12",
    "type": "Career",
    "title": "Food Business Owner",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "Buys, sells, develops or manages property as a business.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "start-own",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "creativity"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "business-corp"
    ],
    "values": [
      "entrepreneurship",
      "freedom",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "business",
      "range": "Variable",
      "note": "Business/freelance income varies significantly by scale, clients and market — may include losses, especially early on."
    },
    "challenges": [
      "No guaranteed income, especially early on",
      "High risk of failure",
      "Requires wearing many hats"
    ],
    "advantages": [
      "Unlimited upside",
      "Full independence and control"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies — no fixed path",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "high",
    "id": "biz-entrepreneur-real-estate-business",
    "parentId": "edu-a12-entrepreneurship",
    "stage": "after12",
    "type": "Career",
    "title": "Real Estate Business Owner",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "Runs or grows a business owned and operated by family members.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "start-own",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "creativity"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "business-corp"
    ],
    "values": [
      "entrepreneurship",
      "freedom",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "business",
      "range": "Variable",
      "note": "Business/freelance income varies significantly by scale, clients and market — may include losses, especially early on."
    },
    "challenges": [
      "No guaranteed income, especially early on",
      "High risk of failure",
      "Requires wearing many hats"
    ],
    "advantages": [
      "Unlimited upside",
      "Full independence and control"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies — no fixed path",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "high",
    "id": "biz-entrepreneur-family-business",
    "parentId": "edu-a12-entrepreneurship",
    "stage": "after12",
    "type": "Career",
    "title": "Family Business Operator",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "Builds a business around personal brand, content, and audience monetization.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "start-own",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "creativity"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "business-corp"
    ],
    "values": [
      "entrepreneurship",
      "freedom",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "business",
      "range": "Variable",
      "note": "Business/freelance income varies significantly by scale, clients and market — may include losses, especially early on."
    },
    "challenges": [
      "No guaranteed income, especially early on",
      "High risk of failure",
      "Requires wearing many hats"
    ],
    "advantages": [
      "Unlimited upside",
      "Full independence and control"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies — no fixed path",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "high",
    "id": "biz-entrepreneur-creator-business",
    "parentId": "edu-a12-entrepreneurship",
    "stage": "after12",
    "type": "Career",
    "title": "Creator Business Owner",
    "domain": "Business",
    "category": "Entrepreneurship",
    "subCategory": ""
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a12-arts",
    "parentId": null,
    "stage": "after12",
    "type": "Domain",
    "title": "Arts & Humanities",
    "domain": "Arts / Humanities",
    "category": "Arts",
    "subCategory": ""
  },
  {
    "description": "A broad undergraduate humanities degree covering literature, social sciences, history or the student's chosen major subject.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th (any stream)"
    ],
    "entranceExams": [],
    "degrees": [
      "BA (3 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "MA",
      "Law",
      "Civil Services",
      "Journalism",
      "Academia"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-ba-general",
    "parentId": "edu-a12-arts",
    "stage": "after12",
    "type": "EducationPath",
    "title": "BA (Bachelor of Arts)",
    "domain": "Arts / Humanities",
    "category": "General",
    "subCategory": ""
  },
  {
    "description": "Diagnoses and treats mental health disorders, typically requiring a master's/M.Phil and licensure.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-psychology-clinical-psychology",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Clinical Psychologist",
    "domain": "Arts / Humanities",
    "category": "Psychology",
    "subCategory": ""
  },
  {
    "description": "Helps individuals manage everyday life challenges, relationships and emotional wellbeing.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-psychology-counseling-psychology",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Counseling Psychologist",
    "domain": "Arts / Humanities",
    "category": "Psychology",
    "subCategory": ""
  },
  {
    "description": "Applies psychology to workplace behaviour, hiring and organizational effectiveness.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-psychology-io-psychology",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Industrial/Organizational Psychologist",
    "domain": "Arts / Humanities",
    "category": "Psychology",
    "subCategory": ""
  },
  {
    "description": "Specializes in the mental and emotional development of children.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-psychology-child-psychology",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Child Psychologist",
    "domain": "Arts / Humanities",
    "category": "Psychology",
    "subCategory": ""
  },
  {
    "description": "Supports students' learning, behaviour and mental health within schools.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-psychology-school-psychology",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "School Psychologist",
    "domain": "Arts / Humanities",
    "category": "Psychology",
    "subCategory": ""
  },
  {
    "description": "Studies the relationship between brain function and behaviour.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-psychology-neuropsychology",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Neuropsychologist",
    "domain": "Arts / Humanities",
    "category": "Psychology",
    "subCategory": ""
  },
  {
    "description": "Helps individuals adapt to disability, illness or injury.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-psychology-rehab-psychology",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Rehabilitation Psychologist",
    "domain": "Arts / Humanities",
    "category": "Psychology",
    "subCategory": ""
  },
  {
    "description": "Conducts academic or applied research into human behaviour and cognition.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-psychology-research-psychology",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Research Psychologist",
    "domain": "Arts / Humanities",
    "category": "Psychology",
    "subCategory": ""
  },
  {
    "description": "Researches and interprets historical events, sources and periods.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-history-historian",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Historian",
    "domain": "Arts / Humanities",
    "category": "History",
    "subCategory": ""
  },
  {
    "description": "Studies human history through excavation and analysis of physical remains.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-history-archaeologist",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Archaeologist",
    "domain": "Arts / Humanities",
    "category": "History",
    "subCategory": ""
  },
  {
    "description": "Preserves and organizes historical records and documents.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-history-archivist",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Archivist",
    "domain": "Arts / Humanities",
    "category": "History",
    "subCategory": ""
  },
  {
    "description": "Curates, preserves and presents collections and exhibitions.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-history-museum-professional",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Museum Professional",
    "domain": "Arts / Humanities",
    "category": "History",
    "subCategory": ""
  },
  {
    "description": "Works to conserve and promote cultural and historical heritage sites.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-history-heritage-professional",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Heritage Professional",
    "domain": "Arts / Humanities",
    "category": "History",
    "subCategory": ""
  },
  {
    "description": "Conducts in-depth historical research, often for academic or institutional projects.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-history-history-researcher",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "History Researcher",
    "domain": "Arts / Humanities",
    "category": "History",
    "subCategory": ""
  },
  {
    "description": "Teaches and researches history at the college/university level.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-history-history-professor",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "History Professor",
    "domain": "Arts / Humanities",
    "category": "History",
    "subCategory": ""
  },
  {
    "description": "Studies places, landscapes and spatial patterns.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-geography-geographer",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Geographer",
    "domain": "Arts / Humanities",
    "category": "Geography",
    "subCategory": ""
  },
  {
    "description": "Analyzes and maps geographic data using specialized software.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-geography-gis-analyst",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "GIS Analyst",
    "domain": "Arts / Humanities",
    "category": "Geography",
    "subCategory": ""
  },
  {
    "description": "Plans land use and infrastructure development for cities and regions.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-geography-urban-planner",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Urban Planner",
    "domain": "Arts / Humanities",
    "category": "Geography",
    "subCategory": ""
  },
  {
    "description": "Plans land use with a focus on environmental protection and sustainability.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-geography-environmental-planner",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Environmental Planner",
    "domain": "Arts / Humanities",
    "category": "Geography",
    "subCategory": ""
  },
  {
    "description": "Conducts research on geographic, environmental or spatial questions.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-geography-geography-researcher",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Geography Researcher",
    "domain": "Arts / Humanities",
    "category": "Geography",
    "subCategory": ""
  },
  {
    "description": "Teaches and researches geography at the college/university level.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-geography-geography-professor",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Geography Professor",
    "domain": "Arts / Humanities",
    "category": "Geography",
    "subCategory": ""
  },
  {
    "description": "Analyzes political trends, elections and policy for media, government or research bodies.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-polisci-political-analyst",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Political Analyst",
    "domain": "Arts / Humanities",
    "category": "Polisci",
    "subCategory": ""
  },
  {
    "description": "Researches and evaluates the impact of public policy.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-polisci-policy-analyst-ps",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Policy Analyst",
    "domain": "Arts / Humanities",
    "category": "Polisci",
    "subCategory": ""
  },
  {
    "description": "Conducts academic or applied research on political systems and behaviour.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-polisci-political-researcher",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Political Researcher",
    "domain": "Arts / Humanities",
    "category": "Polisci",
    "subCategory": ""
  },
  {
    "description": "Manages the implementation of government policies and programs.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-polisci-public-administration",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Public Administration Professional",
    "domain": "Arts / Humanities",
    "category": "Polisci",
    "subCategory": ""
  },
  {
    "description": "Advises campaigns or organizations on political strategy.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-polisci-political-consultant",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Political Consultant",
    "domain": "Arts / Humanities",
    "category": "Polisci",
    "subCategory": ""
  },
  {
    "description": "Teaches and researches political science at the college/university level.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-polisci-polisci-professor",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Political Science Professor",
    "domain": "Arts / Humanities",
    "category": "Polisci",
    "subCategory": ""
  },
  {
    "description": "Studies society, social behaviour and institutions.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-sociology-sociologist",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Sociologist",
    "domain": "Arts / Humanities",
    "category": "Sociology",
    "subCategory": ""
  },
  {
    "description": "Conducts research into social issues and trends.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-sociology-social-researcher",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Social Researcher",
    "domain": "Arts / Humanities",
    "category": "Sociology",
    "subCategory": ""
  },
  {
    "description": "Supports individuals, families and communities facing difficulties.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-sociology-social-worker",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Social Worker",
    "domain": "Arts / Humanities",
    "category": "Sociology",
    "subCategory": ""
  },
  {
    "description": "Works on programs to improve community wellbeing and infrastructure.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-sociology-community-development",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Community Development Professional",
    "domain": "Arts / Humanities",
    "category": "Sociology",
    "subCategory": ""
  },
  {
    "description": "Teaches and researches sociology at the college/university level.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-sociology-sociology-professor",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Sociology Professor",
    "domain": "Arts / Humanities",
    "category": "Sociology",
    "subCategory": ""
  },
  {
    "description": "Writes and reasons about fundamental questions of existence, knowledge and ethics.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-philosophy-philosopher",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Philosopher / Philosophy Writer",
    "domain": "Arts / Humanities",
    "category": "Philosophy",
    "subCategory": ""
  },
  {
    "description": "Studies ethical questions, often applied to technology, medicine or business.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-philosophy-ethics-researcher",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Ethics Researcher",
    "domain": "Arts / Humanities",
    "category": "Philosophy",
    "subCategory": ""
  },
  {
    "description": "Advises organizations on ethical practices and decision-making.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-philosophy-ethics-consultant",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Ethics Consultant",
    "domain": "Arts / Humanities",
    "category": "Philosophy",
    "subCategory": ""
  },
  {
    "description": "Conducts academic research in philosophy.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-philosophy-philosophy-researcher",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Philosophy Researcher",
    "domain": "Arts / Humanities",
    "category": "Philosophy",
    "subCategory": ""
  },
  {
    "description": "Teaches and researches philosophy at the college/university level.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-philosophy-philosophy-professor",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Philosophy Professor",
    "domain": "Arts / Humanities",
    "category": "Philosophy",
    "subCategory": ""
  },
  {
    "description": "Writes books, articles or other long-form content.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-languages-writer",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Writer / Author",
    "domain": "Arts / Humanities",
    "category": "Languages",
    "subCategory": ""
  },
  {
    "description": "Reviews and refines written content for publication.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-languages-editor",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Editor",
    "domain": "Arts / Humanities",
    "category": "Languages",
    "subCategory": ""
  },
  {
    "description": "Converts written content from one language to another.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-languages-translator",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Translator",
    "domain": "Arts / Humanities",
    "category": "Languages",
    "subCategory": ""
  },
  {
    "description": "Writes persuasive marketing and advertising copy.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-languages-copywriter",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Copywriter",
    "domain": "Arts / Humanities",
    "category": "Languages",
    "subCategory": ""
  },
  {
    "description": "Writes clear documentation for technical products and processes.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-languages-technical-writer",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Technical Writer",
    "domain": "Arts / Humanities",
    "category": "Languages",
    "subCategory": ""
  },
  {
    "description": "Researches and reports news and current affairs.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-languages-journalist",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Journalist",
    "domain": "Arts / Humanities",
    "category": "Languages",
    "subCategory": ""
  },
  {
    "description": "Teaches a language to students of various levels.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-languages-language-teacher",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Language Teacher",
    "domain": "Arts / Humanities",
    "category": "Languages",
    "subCategory": ""
  },
  {
    "description": "Teaches and researches literature at the college/university level.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Master's/PhD",
      "Civil Services",
      "Media & Publishing",
      "Academia"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Academic/research roles trend lower at entry; media, corporate and specialist practice roles can be considerably higher."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + Master's/PhD for research & academia roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-languages-literature-professor",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Literature Professor",
    "domain": "Arts / Humanities",
    "category": "Languages",
    "subCategory": ""
  },
  {
    "description": "Works on social-impact programs for non-profits or development organizations.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "help-people"
    ],
    "interests": [],
    "strengths": [
      "research",
      "communication"
    ],
    "workStyles": [],
    "environments": [],
    "values": [
      "social-impact",
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Master's in Social Work/Policy",
      "Development Sector Careers"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹22 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + relevant Master's often preferred",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-socsci-ngo-professional",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "NGO / Development Professional",
    "domain": "Arts / Humanities",
    "category": "Social Sciences",
    "subCategory": ""
  },
  {
    "description": "Manages corporate social responsibility programs for companies.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "help-people"
    ],
    "interests": [],
    "strengths": [
      "research",
      "communication"
    ],
    "workStyles": [],
    "environments": [],
    "values": [
      "social-impact",
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Master's in Social Work/Policy",
      "Development Sector Careers"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹22 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + relevant Master's often preferred",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-socsci-csr-professional",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "CSR Professional",
    "domain": "Arts / Humanities",
    "category": "Social Sciences",
    "subCategory": ""
  },
  {
    "description": "Researches policy solutions to social problems.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "help-people"
    ],
    "interests": [],
    "strengths": [
      "research",
      "communication"
    ],
    "workStyles": [],
    "environments": [],
    "values": [
      "social-impact",
      "helping-people"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Master's in Social Work/Policy",
      "Development Sector Careers"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹22 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3 years BA + relevant Master's often preferred",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "arts-socsci-social-policy-researcher",
    "parentId": "arts-ba-general",
    "stage": "after12",
    "type": "Career",
    "title": "Social Policy Researcher",
    "domain": "Arts / Humanities",
    "category": "Social Sciences",
    "subCategory": ""
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a12-law",
    "parentId": null,
    "stage": "after12",
    "type": "Domain",
    "title": "Law",
    "domain": "Law",
    "category": "Law",
    "subCategory": ""
  },
  {
    "description": "A 5-year integrated undergraduate law degree combining a bachelor's degree with a law degree.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "12th (any stream)"
    ],
    "entranceExams": [
      "CLAT",
      "AILET",
      "State Law Entrances"
    ],
    "degrees": [
      "BA/BBA LLB (5 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Litigation",
      "Corporate Law",
      "Judiciary",
      "LLM"
    ],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "law-llb-integrated",
    "parentId": "edu-a12-law",
    "stage": "after12",
    "type": "EducationPath",
    "title": "Integrated Law Degree (BA/BBA LLB)",
    "domain": "Law",
    "category": "Law",
    "subCategory": ""
  },
  {
    "description": "Advises businesses on legal matters like contracts, mergers and compliance.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [
      "political-science"
    ],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Counsel / Partner",
      "Judiciary (via exams)",
      "LLM Specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹1 Cr+",
      "note": "Top corporate law firm associates/partners earn considerably more."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "law-career-corporate-lawyer",
    "parentId": "law-llb-integrated",
    "stage": "after12",
    "type": "Career",
    "title": "Corporate Lawyer",
    "domain": "Law",
    "category": "Legal Practice",
    "subCategory": ""
  },
  {
    "description": "Represents clients in court proceedings and disputes.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [
      "political-science"
    ],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Counsel / Partner",
      "Judiciary (via exams)",
      "LLM Specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹60 LPA+",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "law-career-litigation-lawyer",
    "parentId": "law-llb-integrated",
    "stage": "after12",
    "type": "Career",
    "title": "Litigation Lawyer",
    "domain": "Law",
    "category": "Legal Practice",
    "subCategory": ""
  },
  {
    "description": "Defends or prosecutes individuals accused of crimes.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [
      "political-science"
    ],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Counsel / Partner",
      "Judiciary (via exams)",
      "LLM Specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3.5 LPA – ₹50 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "law-career-criminal-lawyer",
    "parentId": "law-llb-integrated",
    "stage": "after12",
    "type": "Career",
    "title": "Criminal Lawyer",
    "domain": "Law",
    "category": "Legal Practice",
    "subCategory": ""
  },
  {
    "description": "Handles non-criminal legal disputes such as property or contracts.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [
      "political-science"
    ],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Counsel / Partner",
      "Judiciary (via exams)",
      "LLM Specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3.5 LPA – ₹45 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "law-career-civil-lawyer",
    "parentId": "law-llb-integrated",
    "stage": "after12",
    "type": "Career",
    "title": "Civil Lawyer",
    "domain": "Law",
    "category": "Legal Practice",
    "subCategory": ""
  },
  {
    "description": "Specializes in cases involving constitutional rights and government power.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [
      "political-science"
    ],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Counsel / Partner",
      "Judiciary (via exams)",
      "LLM Specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹60 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "law-career-constitutional-lawyer",
    "parentId": "law-llb-integrated",
    "stage": "after12",
    "type": "Career",
    "title": "Constitutional Lawyer",
    "domain": "Law",
    "category": "Legal Practice",
    "subCategory": ""
  },
  {
    "description": "Advises on and litigates tax law matters.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [
      "political-science"
    ],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Counsel / Partner",
      "Judiciary (via exams)",
      "LLM Specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹55 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "law-career-tax-lawyer",
    "parentId": "law-llb-integrated",
    "stage": "after12",
    "type": "Career",
    "title": "Tax Lawyer",
    "domain": "Law",
    "category": "Legal Practice",
    "subCategory": ""
  },
  {
    "description": "Handles patents, trademarks, copyrights and related disputes.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [
      "political-science"
    ],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Counsel / Partner",
      "Judiciary (via exams)",
      "LLM Specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹55 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "law-career-ip-lawyer",
    "parentId": "law-llb-integrated",
    "stage": "after12",
    "type": "Career",
    "title": "Intellectual Property Lawyer",
    "domain": "Law",
    "category": "Legal Practice",
    "subCategory": ""
  },
  {
    "description": "Specializes in law related to technology, data and the internet.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [
      "political-science"
    ],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Counsel / Partner",
      "Judiciary (via exams)",
      "LLM Specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹40 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "law-career-cyber-lawyer",
    "parentId": "law-llb-integrated",
    "stage": "after12",
    "type": "Career",
    "title": "Cyber Lawyer",
    "domain": "Law",
    "category": "Legal Practice",
    "subCategory": ""
  },
  {
    "description": "Handles legal matters like marriage, divorce and custody.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [
      "political-science"
    ],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Counsel / Partner",
      "Judiciary (via exams)",
      "LLM Specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹30 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "law-career-family-lawyer",
    "parentId": "law-llb-integrated",
    "stage": "after12",
    "type": "Career",
    "title": "Family Lawyer",
    "domain": "Law",
    "category": "Legal Practice",
    "subCategory": ""
  },
  {
    "description": "Handles disputes and compliance related to employment law.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [
      "political-science"
    ],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Counsel / Partner",
      "Judiciary (via exams)",
      "LLM Specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3.5 LPA – ₹35 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "law-career-labour-lawyer",
    "parentId": "law-llb-integrated",
    "stage": "after12",
    "type": "Career",
    "title": "Labour Lawyer",
    "domain": "Law",
    "category": "Legal Practice",
    "subCategory": ""
  },
  {
    "description": "Handles legal matters related to environmental regulation and disputes.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [
      "political-science"
    ],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Counsel / Partner",
      "Judiciary (via exams)",
      "LLM Specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3.5 LPA – ₹35 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "law-career-environmental-lawyer",
    "parentId": "law-llb-integrated",
    "stage": "after12",
    "type": "Career",
    "title": "Environmental Lawyer",
    "domain": "Law",
    "category": "Legal Practice",
    "subCategory": ""
  },
  {
    "description": "Works on legal matters spanning multiple countries or international bodies.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [
      "political-science"
    ],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Counsel / Partner",
      "Judiciary (via exams)",
      "LLM Specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹60 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "law-career-international-lawyer",
    "parentId": "law-llb-integrated",
    "stage": "after12",
    "type": "Career",
    "title": "International Law Professional",
    "domain": "Law",
    "category": "Legal Practice",
    "subCategory": ""
  },
  {
    "description": "Advises organizations on legal matters without formal litigation work.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [
      "political-science"
    ],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Counsel / Partner",
      "Judiciary (via exams)",
      "LLM Specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹40 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "law-career-legal-consultant",
    "parentId": "law-llb-integrated",
    "stage": "after12",
    "type": "Career",
    "title": "Legal Consultant",
    "domain": "Law",
    "category": "Legal Practice",
    "subCategory": ""
  },
  {
    "description": "Researches case law, statutes and precedent to support legal work.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [
      "political-science"
    ],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Counsel / Partner",
      "Judiciary (via exams)",
      "LLM Specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹20 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "law-career-legal-researcher",
    "parentId": "law-llb-integrated",
    "stage": "after12",
    "type": "Career",
    "title": "Legal Researcher",
    "domain": "Law",
    "category": "Legal Practice",
    "subCategory": ""
  },
  {
    "description": "Ensures an organization follows relevant laws and regulations.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [
      "political-science"
    ],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Counsel / Partner",
      "Judiciary (via exams)",
      "LLM Specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹35 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "law-career-compliance-professional",
    "parentId": "law-llb-integrated",
    "stage": "after12",
    "type": "Career",
    "title": "Compliance Professional",
    "domain": "Law",
    "category": "Legal Practice",
    "subCategory": ""
  },
  {
    "description": "Manages the business and process side of a legal department.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "writing"
    ],
    "interests": [
      "political-science"
    ],
    "strengths": [
      "research",
      "writing",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Counsel / Partner",
      "Judiciary (via exams)",
      "LLM Specialization"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹35 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 3,
    "peopleInteractionLevel": 0,
    "educationLength": "5 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "law-career-legal-operations",
    "parentId": "law-llb-integrated",
    "stage": "after12",
    "type": "Career",
    "title": "Legal Operations Professional",
    "domain": "Law",
    "category": "Legal Practice",
    "subCategory": ""
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a12-design",
    "parentId": null,
    "stage": "after12",
    "type": "Domain",
    "title": "Design & Creative",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "Designs how digital products look and how users interact with them.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "NID DAT",
      "UCEED"
    ],
    "degrees": [
      "Design Degree/Diploma (3–4 years) or strong self-taught portfolio"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "design-things",
      "create-content"
    ],
    "interests": [
      "design",
      "art"
    ],
    "strengths": [
      "creativity",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Designer",
      "Studio/Agency Ownership",
      "Freelance Design"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹60 LPA",
      "note": "Senior/lead designers and architects at established studios sit well above entry pay; freelance upside varies widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years (or portfolio-based self-teaching)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "design-career-ui-ux-designer",
    "parentId": "edu-a12-design",
    "stage": "after12",
    "type": "Career",
    "title": "UI/UX Designer",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "Designs the end-to-end user experience of digital or physical products.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "NID DAT",
      "UCEED"
    ],
    "degrees": [
      "Design Degree/Diploma (3–4 years) or strong self-taught portfolio"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "design-things",
      "create-content"
    ],
    "interests": [
      "design",
      "art"
    ],
    "strengths": [
      "creativity",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Designer",
      "Studio/Agency Ownership",
      "Freelance Design"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹60 LPA",
      "note": "Senior/lead designers and architects at established studios sit well above entry pay; freelance upside varies widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years (or portfolio-based self-teaching)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "design-career-product-designer",
    "parentId": "edu-a12-design",
    "stage": "after12",
    "type": "Career",
    "title": "Product Designer",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "Creates visual content for print and digital media.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Design Degree/Diploma (3–4 years) or strong self-taught portfolio"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "design-things",
      "create-content"
    ],
    "interests": [
      "design",
      "art"
    ],
    "strengths": [
      "creativity",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Designer",
      "Studio/Agency Ownership",
      "Freelance Design"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹60 LPA",
      "note": "Senior/lead designers and architects at established studios sit well above entry pay; freelance upside varies widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years (or portfolio-based self-teaching)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "design-career-graphic-designer",
    "parentId": "edu-a12-design",
    "stage": "after12",
    "type": "Career",
    "title": "Graphic Designer",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "Designs the visual layout and structure of websites.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Design Degree/Diploma (3–4 years) or strong self-taught portfolio"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "design-things",
      "create-content"
    ],
    "interests": [
      "design",
      "art"
    ],
    "strengths": [
      "creativity",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Designer",
      "Studio/Agency Ownership",
      "Freelance Design"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹60 LPA",
      "note": "Senior/lead designers and architects at established studios sit well above entry pay; freelance upside varies widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years (or portfolio-based self-teaching)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "design-career-web-designer",
    "parentId": "edu-a12-design",
    "stage": "after12",
    "type": "Career",
    "title": "Web Designer",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "Creates and maintains the visual identity of a brand.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Design Degree/Diploma (3–4 years) or strong self-taught portfolio"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "design-things",
      "create-content"
    ],
    "interests": [
      "design",
      "art"
    ],
    "strengths": [
      "creativity",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Designer",
      "Studio/Agency Ownership",
      "Freelance Design"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹60 LPA",
      "note": "Senior/lead designers and architects at established studios sit well above entry pay; freelance upside varies widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years (or portfolio-based self-teaching)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "design-career-brand-designer",
    "parentId": "edu-a12-design",
    "stage": "after12",
    "type": "Career",
    "title": "Brand Designer",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "Designs clothing and accessories, from concept to production.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Design Degree/Diploma (3–4 years) or strong self-taught portfolio"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "design-things",
      "create-content"
    ],
    "interests": [
      "design",
      "art"
    ],
    "strengths": [
      "creativity",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Designer",
      "Studio/Agency Ownership",
      "Freelance Design"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹60 LPA",
      "note": "Senior/lead designers and architects at established studios sit well above entry pay; freelance upside varies widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years (or portfolio-based self-teaching)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "design-career-fashion-designer",
    "parentId": "edu-a12-design",
    "stage": "after12",
    "type": "Career",
    "title": "Fashion Designer",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "Designs functional and aesthetic interior spaces.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Design Degree/Diploma (3–4 years) or strong self-taught portfolio"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "design-things",
      "create-content"
    ],
    "interests": [
      "design",
      "art"
    ],
    "strengths": [
      "creativity",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Designer",
      "Studio/Agency Ownership",
      "Freelance Design"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹60 LPA",
      "note": "Senior/lead designers and architects at established studios sit well above entry pay; freelance upside varies widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years (or portfolio-based self-teaching)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "design-career-interior-designer",
    "parentId": "edu-a12-design",
    "stage": "after12",
    "type": "Career",
    "title": "Interior Designer",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "Designs physical products for manufacturing, balancing form and function.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "NID DAT",
      "UCEED"
    ],
    "degrees": [
      "Design Degree/Diploma (3–4 years) or strong self-taught portfolio"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "design-things",
      "create-content"
    ],
    "interests": [
      "design",
      "art"
    ],
    "strengths": [
      "creativity",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Designer",
      "Studio/Agency Ownership",
      "Freelance Design"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹60 LPA",
      "note": "Senior/lead designers and architects at established studios sit well above entry pay; freelance upside varies widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years (or portfolio-based self-teaching)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "design-career-industrial-designer",
    "parentId": "edu-a12-design",
    "stage": "after12",
    "type": "Career",
    "title": "Industrial Designer",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "Designs buildings and oversees their construction, balancing form, function and safety.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "NATA",
      "JEE (Paper 2)"
    ],
    "degrees": [
      "B.Arch (5 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "design-things",
      "create-content"
    ],
    "interests": [
      "design",
      "art"
    ],
    "strengths": [
      "creativity",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Designer",
      "Studio/Agency Ownership",
      "Freelance Design"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹60 LPA",
      "note": "Senior/lead designers and architects at established studios sit well above entry pay; freelance upside varies widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years (or portfolio-based self-teaching)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "design-career-architect",
    "parentId": "edu-a12-design",
    "stage": "after12",
    "type": "Career",
    "title": "Architect",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "Creates original drawn or digital artwork for books, media and products.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Design Degree/Diploma (3–4 years) or strong self-taught portfolio"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "design-things",
      "create-content"
    ],
    "interests": [
      "design",
      "art"
    ],
    "strengths": [
      "creativity",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Designer",
      "Studio/Agency Ownership",
      "Freelance Design"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹60 LPA",
      "note": "Senior/lead designers and architects at established studios sit well above entry pay; freelance upside varies widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years (or portfolio-based self-teaching)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "design-career-illustrator",
    "parentId": "edu-a12-design",
    "stage": "after12",
    "type": "Career",
    "title": "Illustrator",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "Creates moving images and characters for film, games or media.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Design Degree/Diploma (3–4 years) or strong self-taught portfolio"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "design-things",
      "create-content"
    ],
    "interests": [
      "design",
      "art"
    ],
    "strengths": [
      "creativity",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Designer",
      "Studio/Agency Ownership",
      "Freelance Design"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹60 LPA",
      "note": "Senior/lead designers and architects at established studios sit well above entry pay; freelance upside varies widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years (or portfolio-based self-teaching)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "design-career-animator",
    "parentId": "edu-a12-design",
    "stage": "after12",
    "type": "Career",
    "title": "Animator",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "Specializes in traditional/2D animation techniques.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Design Degree/Diploma (3–4 years) or strong self-taught portfolio"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "design-things",
      "create-content"
    ],
    "interests": [
      "design",
      "art"
    ],
    "strengths": [
      "creativity",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Designer",
      "Studio/Agency Ownership",
      "Freelance Design"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹60 LPA",
      "note": "Senior/lead designers and architects at established studios sit well above entry pay; freelance upside varies widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years (or portfolio-based self-teaching)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "design-career-animator-2d",
    "parentId": "edu-a12-design",
    "stage": "after12",
    "type": "Career",
    "title": "2D Animator",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "Specializes in 3D modelling and animation techniques.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Design Degree/Diploma (3–4 years) or strong self-taught portfolio"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "design-things",
      "create-content"
    ],
    "interests": [
      "design",
      "art"
    ],
    "strengths": [
      "creativity",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Designer",
      "Studio/Agency Ownership",
      "Freelance Design"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹60 LPA",
      "note": "Senior/lead designers and architects at established studios sit well above entry pay; freelance upside varies widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years (or portfolio-based self-teaching)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "design-career-animator-3d",
    "parentId": "edu-a12-design",
    "stage": "after12",
    "type": "Career",
    "title": "3D Animator",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "Creates visual effects for film, TV and games.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Design Degree/Diploma (3–4 years) or strong self-taught portfolio"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "design-things",
      "create-content"
    ],
    "interests": [
      "design",
      "art"
    ],
    "strengths": [
      "creativity",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Designer",
      "Studio/Agency Ownership",
      "Freelance Design"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹60 LPA",
      "note": "Senior/lead designers and architects at established studios sit well above entry pay; freelance upside varies widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years (or portfolio-based self-teaching)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "design-career-vfx-artist",
    "parentId": "edu-a12-design",
    "stage": "after12",
    "type": "Career",
    "title": "VFX Artist",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "Combines graphic design and animation for video and digital media.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Design Degree/Diploma (3–4 years) or strong self-taught portfolio"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "design-things",
      "create-content"
    ],
    "interests": [
      "design",
      "art"
    ],
    "strengths": [
      "creativity",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Designer",
      "Studio/Agency Ownership",
      "Freelance Design"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹60 LPA",
      "note": "Senior/lead designers and architects at established studios sit well above entry pay; freelance upside varies widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years (or portfolio-based self-teaching)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "design-career-motion-designer",
    "parentId": "edu-a12-design",
    "stage": "after12",
    "type": "Career",
    "title": "Motion Designer",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "Designs game mechanics, levels and player experience.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Design Degree/Diploma (3–4 years) or strong self-taught portfolio"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "design-things",
      "create-content"
    ],
    "interests": [
      "design",
      "art"
    ],
    "strengths": [
      "creativity",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Designer",
      "Studio/Agency Ownership",
      "Freelance Design"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹60 LPA",
      "note": "Senior/lead designers and architects at established studios sit well above entry pay; freelance upside varies widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years (or portfolio-based self-teaching)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "design-career-game-designer",
    "parentId": "edu-a12-design",
    "stage": "after12",
    "type": "Career",
    "title": "Game Designer",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "Creates the visual art and assets for video games.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Design Degree/Diploma (3–4 years) or strong self-taught portfolio"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "design-things",
      "create-content"
    ],
    "interests": [
      "design",
      "art"
    ],
    "strengths": [
      "creativity",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Designer",
      "Studio/Agency Ownership",
      "Freelance Design"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹60 LPA",
      "note": "Senior/lead designers and architects at established studios sit well above entry pay; freelance upside varies widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years (or portfolio-based self-teaching)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "design-career-game-artist",
    "parentId": "edu-a12-design",
    "stage": "after12",
    "type": "Career",
    "title": "Game Artist",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "Captures images for creative, commercial or journalistic purposes.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Design Degree/Diploma (3–4 years) or strong self-taught portfolio"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "design-things",
      "create-content"
    ],
    "interests": [
      "design",
      "art"
    ],
    "strengths": [
      "creativity",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Designer",
      "Studio/Agency Ownership",
      "Freelance Design"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹60 LPA",
      "note": "Senior/lead designers and architects at established studios sit well above entry pay; freelance upside varies widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years (or portfolio-based self-teaching)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "design-career-photographer",
    "parentId": "edu-a12-design",
    "stage": "after12",
    "type": "Career",
    "title": "Photographer",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "Films and captures video content for various purposes.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Design Degree/Diploma (3–4 years) or strong self-taught portfolio"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "design-things",
      "create-content"
    ],
    "interests": [
      "design",
      "art"
    ],
    "strengths": [
      "creativity",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Designer",
      "Studio/Agency Ownership",
      "Freelance Design"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹60 LPA",
      "note": "Senior/lead designers and architects at established studios sit well above entry pay; freelance upside varies widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years (or portfolio-based self-teaching)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "design-career-videographer",
    "parentId": "edu-a12-design",
    "stage": "after12",
    "type": "Career",
    "title": "Videographer",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "Edits raw video footage into a polished final product.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Design Degree/Diploma (3–4 years) or strong self-taught portfolio"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "design-things",
      "create-content"
    ],
    "interests": [
      "design",
      "art"
    ],
    "strengths": [
      "creativity",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Designer",
      "Studio/Agency Ownership",
      "Freelance Design"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹60 LPA",
      "note": "Senior/lead designers and architects at established studios sit well above entry pay; freelance upside varies widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years (or portfolio-based self-teaching)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "design-career-video-editor",
    "parentId": "edu-a12-design",
    "stage": "after12",
    "type": "Career",
    "title": "Video Editor",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "Oversees the creation and production of music recordings.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Design Degree/Diploma (3–4 years) or strong self-taught portfolio"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "design-things",
      "create-content"
    ],
    "interests": [
      "design",
      "art"
    ],
    "strengths": [
      "creativity",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Designer",
      "Studio/Agency Ownership",
      "Freelance Design"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹60 LPA",
      "note": "Senior/lead designers and architects at established studios sit well above entry pay; freelance upside varies widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years (or portfolio-based self-teaching)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "design-career-music-producer",
    "parentId": "edu-a12-design",
    "stage": "after12",
    "type": "Career",
    "title": "Music Producer",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "Creates and edits audio/sound effects for film, games and media.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Design Degree/Diploma (3–4 years) or strong self-taught portfolio"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "design-things",
      "create-content"
    ],
    "interests": [
      "design",
      "art"
    ],
    "strengths": [
      "creativity",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Designer",
      "Studio/Agency Ownership",
      "Freelance Design"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹60 LPA",
      "note": "Senior/lead designers and architects at established studios sit well above entry pay; freelance upside varies widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years (or portfolio-based self-teaching)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "design-career-sound-designer",
    "parentId": "edu-a12-design",
    "stage": "after12",
    "type": "Career",
    "title": "Sound Designer",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "Leads the creative vision for a brand, agency or project.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Design Degree/Diploma (3–4 years) or strong self-taught portfolio"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "design-things",
      "create-content"
    ],
    "interests": [
      "design",
      "art"
    ],
    "strengths": [
      "creativity",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Designer",
      "Studio/Agency Ownership",
      "Freelance Design"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹60 LPA",
      "note": "Senior/lead designers and architects at established studios sit well above entry pay; freelance upside varies widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "3–5 years (or portfolio-based self-teaching)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "design-career-creative-director",
    "parentId": "edu-a12-design",
    "stage": "after12",
    "type": "Career",
    "title": "Creative Director",
    "domain": "Creative",
    "category": "Design",
    "subCategory": ""
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a12-freelance",
    "parentId": null,
    "stage": "after12",
    "type": "Domain",
    "title": "Digital & Freelancing",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Freelance video editing for creators, brands and businesses.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "₹15,000 – ₹2 LPA/month equivalent",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-video-editing-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "Video Editing (Freelance)",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Freelance visual design work for varied clients.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "₹10,000 – ₹1.5 LPA/month equivalent",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-graphic-design-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "Graphic Design (Freelance)",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Freelance product/interface design work for startups and businesses.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "₹20,000 – ₹2.5 LPA/month equivalent",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-uiux-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "UI/UX Freelancing",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Builds websites for clients on a project basis.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "₹15,000 – ₹3 LPA/month equivalent",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-webdev-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "Web Development Freelancing",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Builds mobile apps for clients on a project basis.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "₹20,000 – ₹3.5 LPA/month equivalent",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-appdev-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "App Development Freelancing",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Writes articles, web copy and content for clients.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "₹8,000 – ₹1 LPA/month equivalent",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-content-writing-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "Content Writing (Freelance)",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Writes persuasive marketing copy for clients on a project basis.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "₹10,000 – ₹1.5 LPA/month equivalent",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-copywriting-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "Copywriting (Freelance)",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Writes technical documentation for software and products.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "₹15,000 – ₹1.8 LPA/month equivalent",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-technical-writing-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "Technical Writing (Freelance)",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Improves a website's visibility in search engine results.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "₹10,000 – ₹1.5 LPA/month equivalent",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-seo-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "SEO Specialist (Freelance)",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Plans and runs online marketing campaigns for clients.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "₹12,000 – ₹2 LPA/month equivalent",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-digital-marketing-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "Digital Marketing (Freelance)",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Manages social media presence and content for clients/brands.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "₹8,000 – ₹1.2 LPA/month equivalent",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-social-media-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "Social Media Management (Freelance)",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Runs paid ad campaigns optimized for measurable results.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "₹15,000 – ₹2.5 LPA/month equivalent",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-performance-marketing-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "Performance Marketing (Freelance)",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Builds and runs email marketing campaigns for clients.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "₹10,000 – ₹1.5 LPA/month equivalent",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-email-marketing-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "Email Marketing (Freelance)",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Earns commission by promoting other companies' products online.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "Highly variable — often ₹0 at first",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-affiliate-marketing-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "Affiliate Marketing",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Teaches students remotely in a subject of expertise.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "₹8,000 – ₹1.5 LPA/month equivalent",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-online-tutoring-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "Online Tutoring",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Builds and sells educational courses online.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "Highly variable — depends on audience and marketing",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-course-creation-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "Course Creation",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Provides remote administrative or business support to clients.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "₹8,000 – ₹1 LPA/month equivalent",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-virtual-assistance-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "Virtual Assistance",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Translates written content between languages for clients.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "₹8,000 – ₹1.2 LPA/month equivalent",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-translation-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "Translation (Freelance)",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Converts audio/video content into written text for clients.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "₹6,000 – ₹80,000/month equivalent",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-transcription-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "Transcription (Freelance)",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Provides voice recordings for ads, videos, and media.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "₹8,000 – ₹1.5 LPA/month equivalent",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-voiceover-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "Voice-over Artist (Freelance)",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Offers photography services for events, brands or stock content.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "₹10,000 – ₹2 LPA/month equivalent",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-photography-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "Photography (Freelance)",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Offers animation services on a project basis.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "₹15,000 – ₹2.5 LPA/month equivalent",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-animation-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "Animation (Freelance)",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Creates 3D models for games, products or visualization.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "₹15,000 – ₹2.5 LPA/month equivalent",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-3d-modeling-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "3D Modeling (Freelance)",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "Offers expert advisory services independently, project by project.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-business",
      "design-things",
      "writing"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote"
    ],
    "values": [
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "Highly variable — depends on expertise and network",
      "note": "Freelance income is irregular and client/project-dependent; figures are indicative, not guaranteed."
    },
    "challenges": [
      "Inconsistent income, especially early on",
      "Requires self-discipline and client-finding skills"
    ],
    "advantages": [
      "Flexible schedule and location",
      "Direct control over clients and pricing"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "medium",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "freelance-consulting-fl",
    "parentId": "edu-a12-freelance",
    "stage": "after12",
    "type": "Career",
    "title": "Freelance Consulting",
    "domain": "Digital",
    "category": "Freelancing",
    "subCategory": ""
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a12-creator",
    "parentId": null,
    "stage": "after12",
    "type": "Domain",
    "title": "Creator Economy",
    "domain": "Digital",
    "category": "Creator",
    "subCategory": ""
  },
  {
    "description": "Builds an audience and income through long-form YouTube videos.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [],
    "strengths": [
      "creativity",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "creative-studio"
    ],
    "values": [
      "creativity",
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "creator",
      "range": "₹0 – Unlimited (∞)",
      "note": "Creator income depends on audience size, niche, and monetization (ads, sponsorships, products) — most creators earn little at first."
    },
    "challenges": [
      "Most creators earn very little initially",
      "Income depends heavily on algorithms and platform trends",
      "No guaranteed stability"
    ],
    "advantages": [
      "Full creative and schedule freedom",
      "Direct relationship with an audience"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 4,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "creator-youtube-creator",
    "parentId": "edu-a12-creator",
    "stage": "after12",
    "type": "Career",
    "title": "YouTube Creator",
    "domain": "Digital",
    "category": "Creator Economy",
    "subCategory": ""
  },
  {
    "description": "Builds an audience through short-form YouTube video content.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [],
    "strengths": [
      "creativity",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "creative-studio"
    ],
    "values": [
      "creativity",
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "creator",
      "range": "₹0 – Unlimited (∞)",
      "note": "Creator income depends on audience size, niche, and monetization (ads, sponsorships, products) — most creators earn little at first."
    },
    "challenges": [
      "Most creators earn very little initially",
      "Income depends heavily on algorithms and platform trends",
      "No guaranteed stability"
    ],
    "advantages": [
      "Full creative and schedule freedom",
      "Direct relationship with an audience"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 4,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "creator-youtube-shorts-creator",
    "parentId": "edu-a12-creator",
    "stage": "after12",
    "type": "Career",
    "title": "YouTube Shorts Creator",
    "domain": "Digital",
    "category": "Creator Economy",
    "subCategory": ""
  },
  {
    "description": "Builds an audience and income through Instagram content.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [],
    "strengths": [
      "creativity",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "creative-studio"
    ],
    "values": [
      "creativity",
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "creator",
      "range": "₹0 – Unlimited (∞)",
      "note": "Creator income depends on audience size, niche, and monetization (ads, sponsorships, products) — most creators earn little at first."
    },
    "challenges": [
      "Most creators earn very little initially",
      "Income depends heavily on algorithms and platform trends",
      "No guaranteed stability"
    ],
    "advantages": [
      "Full creative and schedule freedom",
      "Direct relationship with an audience"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 4,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "creator-instagram-creator",
    "parentId": "edu-a12-creator",
    "stage": "after12",
    "type": "Career",
    "title": "Instagram Creator",
    "domain": "Digital",
    "category": "Creator Economy",
    "subCategory": ""
  },
  {
    "description": "Creates content across platforms around a chosen niche.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [],
    "strengths": [
      "creativity",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "creative-studio"
    ],
    "values": [
      "creativity",
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "creator",
      "range": "₹0 – Unlimited (∞)",
      "note": "Creator income depends on audience size, niche, and monetization (ads, sponsorships, products) — most creators earn little at first."
    },
    "challenges": [
      "Most creators earn very little initially",
      "Income depends heavily on algorithms and platform trends",
      "No guaranteed stability"
    ],
    "advantages": [
      "Full creative and schedule freedom",
      "Direct relationship with an audience"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 4,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "creator-content-creator-general",
    "parentId": "edu-a12-creator",
    "stage": "after12",
    "type": "Career",
    "title": "Content Creator",
    "domain": "Digital",
    "category": "Creator Economy",
    "subCategory": ""
  },
  {
    "description": "Builds a personal brand and audience that brands pay to reach.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [],
    "strengths": [
      "creativity",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "creative-studio"
    ],
    "values": [
      "creativity",
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "creator",
      "range": "₹0 – Unlimited (∞)",
      "note": "Creator income depends on audience size, niche, and monetization (ads, sponsorships, products) — most creators earn little at first."
    },
    "challenges": [
      "Most creators earn very little initially",
      "Income depends heavily on algorithms and platform trends",
      "No guaranteed stability"
    ],
    "advantages": [
      "Full creative and schedule freedom",
      "Direct relationship with an audience"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 4,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "creator-influencer",
    "parentId": "edu-a12-creator",
    "stage": "after12",
    "type": "Career",
    "title": "Influencer",
    "domain": "Digital",
    "category": "Creator Economy",
    "subCategory": ""
  },
  {
    "description": "Creates authentic-style content for brands to use in their own marketing.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [],
    "strengths": [
      "creativity",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "creative-studio"
    ],
    "values": [
      "creativity",
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "creator",
      "range": "₹0 – Unlimited (∞)",
      "note": "Creator income depends on audience size, niche, and monetization (ads, sponsorships, products) — most creators earn little at first."
    },
    "challenges": [
      "Most creators earn very little initially",
      "Income depends heavily on algorithms and platform trends",
      "No guaranteed stability"
    ],
    "advantages": [
      "Full creative and schedule freedom",
      "Direct relationship with an audience"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 4,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "creator-ugc-creator",
    "parentId": "edu-a12-creator",
    "stage": "after12",
    "type": "Career",
    "title": "UGC Creator",
    "domain": "Digital",
    "category": "Creator Economy",
    "subCategory": ""
  },
  {
    "description": "Writes and publishes content on a blog, often monetized through ads or products.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [],
    "strengths": [
      "creativity",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "creative-studio"
    ],
    "values": [
      "creativity",
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "creator",
      "range": "₹0 – Unlimited (∞)",
      "note": "Creator income depends on audience size, niche, and monetization (ads, sponsorships, products) — most creators earn little at first."
    },
    "challenges": [
      "Most creators earn very little initially",
      "Income depends heavily on algorithms and platform trends",
      "No guaranteed stability"
    ],
    "advantages": [
      "Full creative and schedule freedom",
      "Direct relationship with an audience"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 4,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "creator-blogger",
    "parentId": "edu-a12-creator",
    "stage": "after12",
    "type": "Career",
    "title": "Blogger",
    "domain": "Digital",
    "category": "Creator Economy",
    "subCategory": ""
  },
  {
    "description": "Builds an audience through a regularly published email newsletter.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [],
    "strengths": [
      "creativity",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "creative-studio"
    ],
    "values": [
      "creativity",
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "creator",
      "range": "₹0 – Unlimited (∞)",
      "note": "Creator income depends on audience size, niche, and monetization (ads, sponsorships, products) — most creators earn little at first."
    },
    "challenges": [
      "Most creators earn very little initially",
      "Income depends heavily on algorithms and platform trends",
      "No guaranteed stability"
    ],
    "advantages": [
      "Full creative and schedule freedom",
      "Direct relationship with an audience"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 4,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "creator-newsletter-creator",
    "parentId": "edu-a12-creator",
    "stage": "after12",
    "type": "Career",
    "title": "Newsletter Creator",
    "domain": "Digital",
    "category": "Creator Economy",
    "subCategory": ""
  },
  {
    "description": "Creates and publishes audio content on a regular basis.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [],
    "strengths": [
      "creativity",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "creative-studio"
    ],
    "values": [
      "creativity",
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "creator",
      "range": "₹0 – Unlimited (∞)",
      "note": "Creator income depends on audience size, niche, and monetization (ads, sponsorships, products) — most creators earn little at first."
    },
    "challenges": [
      "Most creators earn very little initially",
      "Income depends heavily on algorithms and platform trends",
      "No guaranteed stability"
    ],
    "advantages": [
      "Full creative and schedule freedom",
      "Direct relationship with an audience"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 4,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "creator-podcaster",
    "parentId": "edu-a12-creator",
    "stage": "after12",
    "type": "Career",
    "title": "Podcaster",
    "domain": "Digital",
    "category": "Creator Economy",
    "subCategory": ""
  },
  {
    "description": "Broadcasts live content, often gaming or talk-based, to an audience.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [],
    "strengths": [
      "creativity",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "creative-studio"
    ],
    "values": [
      "creativity",
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "creator",
      "range": "₹0 – Unlimited (∞)",
      "note": "Creator income depends on audience size, niche, and monetization (ads, sponsorships, products) — most creators earn little at first."
    },
    "challenges": [
      "Most creators earn very little initially",
      "Income depends heavily on algorithms and platform trends",
      "No guaranteed stability"
    ],
    "advantages": [
      "Full creative and schedule freedom",
      "Direct relationship with an audience"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 4,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "creator-livestreamer",
    "parentId": "edu-a12-creator",
    "stage": "after12",
    "type": "Career",
    "title": "Livestreamer",
    "domain": "Digital",
    "category": "Creator Economy",
    "subCategory": ""
  },
  {
    "description": "Creates gaming-focused content — playthroughs, reviews, esports commentary.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [],
    "strengths": [
      "creativity",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "creative-studio"
    ],
    "values": [
      "creativity",
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "creator",
      "range": "₹0 – Unlimited (∞)",
      "note": "Creator income depends on audience size, niche, and monetization (ads, sponsorships, products) — most creators earn little at first."
    },
    "challenges": [
      "Most creators earn very little initially",
      "Income depends heavily on algorithms and platform trends",
      "No guaranteed stability"
    ],
    "advantages": [
      "Full creative and schedule freedom",
      "Direct relationship with an audience"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 4,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "creator-gaming-creator",
    "parentId": "edu-a12-creator",
    "stage": "after12",
    "type": "Career",
    "title": "Gaming Creator",
    "domain": "Digital",
    "category": "Creator Economy",
    "subCategory": ""
  },
  {
    "description": "Creates content that teaches a skill or subject to an online audience.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [],
    "strengths": [
      "creativity",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "creative-studio"
    ],
    "values": [
      "creativity",
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "creator",
      "range": "₹0 – Unlimited (∞)",
      "note": "Creator income depends on audience size, niche, and monetization (ads, sponsorships, products) — most creators earn little at first."
    },
    "challenges": [
      "Most creators earn very little initially",
      "Income depends heavily on algorithms and platform trends",
      "No guaranteed stability"
    ],
    "advantages": [
      "Full creative and schedule freedom",
      "Direct relationship with an audience"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 4,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "creator-educational-creator",
    "parentId": "edu-a12-creator",
    "stage": "after12",
    "type": "Career",
    "title": "Educational Creator",
    "domain": "Digital",
    "category": "Creator Economy",
    "subCategory": ""
  },
  {
    "description": "Creates content about personal finance, investing or business.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [],
    "strengths": [
      "creativity",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "creative-studio"
    ],
    "values": [
      "creativity",
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "creator",
      "range": "₹0 – Unlimited (∞)",
      "note": "Creator income depends on audience size, niche, and monetization (ads, sponsorships, products) — most creators earn little at first."
    },
    "challenges": [
      "Most creators earn very little initially",
      "Income depends heavily on algorithms and platform trends",
      "No guaranteed stability"
    ],
    "advantages": [
      "Full creative and schedule freedom",
      "Direct relationship with an audience"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 4,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "creator-finance-creator",
    "parentId": "edu-a12-creator",
    "stage": "after12",
    "type": "Career",
    "title": "Finance Creator",
    "domain": "Digital",
    "category": "Creator Economy",
    "subCategory": ""
  },
  {
    "description": "Creates content reviewing or explaining technology and gadgets.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [],
    "strengths": [
      "creativity",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "creative-studio"
    ],
    "values": [
      "creativity",
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "creator",
      "range": "₹0 – Unlimited (∞)",
      "note": "Creator income depends on audience size, niche, and monetization (ads, sponsorships, products) — most creators earn little at first."
    },
    "challenges": [
      "Most creators earn very little initially",
      "Income depends heavily on algorithms and platform trends",
      "No guaranteed stability"
    ],
    "advantages": [
      "Full creative and schedule freedom",
      "Direct relationship with an audience"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 4,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "creator-technology-creator",
    "parentId": "edu-a12-creator",
    "stage": "after12",
    "type": "Career",
    "title": "Technology Creator",
    "domain": "Digital",
    "category": "Creator Economy",
    "subCategory": ""
  },
  {
    "description": "Creates content about workouts, health and fitness.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [],
    "strengths": [
      "creativity",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "creative-studio"
    ],
    "values": [
      "creativity",
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "creator",
      "range": "₹0 – Unlimited (∞)",
      "note": "Creator income depends on audience size, niche, and monetization (ads, sponsorships, products) — most creators earn little at first."
    },
    "challenges": [
      "Most creators earn very little initially",
      "Income depends heavily on algorithms and platform trends",
      "No guaranteed stability"
    ],
    "advantages": [
      "Full creative and schedule freedom",
      "Direct relationship with an audience"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 4,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "creator-fitness-creator",
    "parentId": "edu-a12-creator",
    "stage": "after12",
    "type": "Career",
    "title": "Fitness Creator",
    "domain": "Digital",
    "category": "Creator Economy",
    "subCategory": ""
  },
  {
    "description": "Creates content documenting travel experiences and destinations.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [],
    "strengths": [
      "creativity",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "creative-studio"
    ],
    "values": [
      "creativity",
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "creator",
      "range": "₹0 – Unlimited (∞)",
      "note": "Creator income depends on audience size, niche, and monetization (ads, sponsorships, products) — most creators earn little at first."
    },
    "challenges": [
      "Most creators earn very little initially",
      "Income depends heavily on algorithms and platform trends",
      "No guaranteed stability"
    ],
    "advantages": [
      "Full creative and schedule freedom",
      "Direct relationship with an audience"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 4,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "creator-travel-creator",
    "parentId": "edu-a12-creator",
    "stage": "after12",
    "type": "Career",
    "title": "Travel Creator",
    "domain": "Digital",
    "category": "Creator Economy",
    "subCategory": ""
  },
  {
    "description": "Creates content about cooking, recipes or food culture.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [],
    "strengths": [
      "creativity",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "creative-studio"
    ],
    "values": [
      "creativity",
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "creator",
      "range": "₹0 – Unlimited (∞)",
      "note": "Creator income depends on audience size, niche, and monetization (ads, sponsorships, products) — most creators earn little at first."
    },
    "challenges": [
      "Most creators earn very little initially",
      "Income depends heavily on algorithms and platform trends",
      "No guaranteed stability"
    ],
    "advantages": [
      "Full creative and schedule freedom",
      "Direct relationship with an audience"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 4,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "creator-food-creator",
    "parentId": "edu-a12-creator",
    "stage": "after12",
    "type": "Career",
    "title": "Food Creator",
    "domain": "Digital",
    "category": "Creator Economy",
    "subCategory": ""
  },
  {
    "description": "Creates and shares original music content online.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [],
    "strengths": [
      "creativity",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "flexible-remote",
      "creative-studio"
    ],
    "values": [
      "creativity",
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "creator",
      "range": "₹0 – Unlimited (∞)",
      "note": "Creator income depends on audience size, niche, and monetization (ads, sponsorships, products) — most creators earn little at first."
    },
    "challenges": [
      "Most creators earn very little initially",
      "Income depends heavily on algorithms and platform trends",
      "No guaranteed stability"
    ],
    "advantages": [
      "Full creative and schedule freedom",
      "Direct relationship with an audience"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 4,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill-based — no fixed formal path required",
    "riskLevel": "high",
    "stabilityLevel": "low",
    "entrepreneurshipLevel": "medium",
    "id": "creator-music-creator",
    "parentId": "edu-a12-creator",
    "stage": "after12",
    "type": "Career",
    "title": "Music Creator",
    "domain": "Digital",
    "category": "Creator Economy",
    "subCategory": ""
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a12-academia",
    "parentId": null,
    "stage": "after12",
    "type": "Domain",
    "title": "Education & Academia",
    "domain": "Education",
    "category": "Education",
    "subCategory": ""
  },
  {
    "description": "Teaches foundational subjects to young children (typically Classes 1–5).",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Bachelor's degree",
      "B.Ed",
      "TET/CTET (for govt schools)"
    ],
    "entranceExams": [],
    "degrees": [
      "Bachelor's + B.Ed"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "help-people"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "communication",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "classroom"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Teacher",
      "School Administration",
      "Higher Education Teaching"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹18 LPA",
      "note": "Government school pay scales are structured; private schools vary widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 5,
    "educationLength": "3–4 years + B.Ed (2 years)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-school-primary-teacher",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Primary Teacher",
    "domain": "Education",
    "category": "School Teaching",
    "subCategory": ""
  },
  {
    "description": "Teaches subject-specific content to middle/high school students.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Bachelor's degree",
      "B.Ed",
      "TET/CTET (for govt schools)"
    ],
    "entranceExams": [],
    "degrees": [
      "Bachelor's + B.Ed"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "help-people"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "communication",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "classroom"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Teacher",
      "School Administration",
      "Higher Education Teaching"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹18 LPA",
      "note": "Government school pay scales are structured; private schools vary widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 5,
    "educationLength": "3–4 years + B.Ed (2 years)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-school-secondary-teacher",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Secondary Teacher",
    "domain": "Education",
    "category": "School Teaching",
    "subCategory": ""
  },
  {
    "description": "Teaches specialized subjects to students in Classes 11–12.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Bachelor's degree",
      "B.Ed",
      "TET/CTET (for govt schools)"
    ],
    "entranceExams": [],
    "degrees": [
      "Bachelor's + B.Ed"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "help-people"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "communication",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "classroom"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Teacher",
      "School Administration",
      "Higher Education Teaching"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹18 LPA",
      "note": "Government school pay scales are structured; private schools vary widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 5,
    "educationLength": "3–4 years + B.Ed (2 years)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-school-higher-secondary-teacher",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Higher Secondary Teacher",
    "domain": "Education",
    "category": "School Teaching",
    "subCategory": ""
  },
  {
    "description": "Teaches students with learning, physical or developmental disabilities.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Bachelor's degree",
      "B.Ed",
      "TET/CTET (for govt schools)"
    ],
    "entranceExams": [],
    "degrees": [
      "Bachelor's + B.Ed"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "help-people"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "communication",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "classroom"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Teacher",
      "School Administration",
      "Higher Education Teaching"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹18 LPA",
      "note": "Government school pay scales are structured; private schools vary widely."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 5,
    "educationLength": "3–4 years + B.Ed (2 years)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-school-special-education-teacher",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Special Education Teacher",
    "domain": "Education",
    "category": "School Teaching",
    "subCategory": ""
  },
  {
    "description": "Teaches undergraduate students at a college, typically requiring a Master's degree.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Master's degree (minimum)",
      "NET/SET or PhD (for university-level roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Master's",
      "NET/PhD (for Assistant Professor and above)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "research"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "research",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Faculty Positions",
      "Academic Leadership (Dean/Director)"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹35 LPA",
      "note": "Government pay-scale based; increases with seniority (Assistant → Associate → Professor)."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Master's (2 yrs) + NET/PhD (3–6 yrs) for university roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-highered-college-teacher",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "College Teacher",
    "domain": "Education",
    "category": "Higher Education",
    "subCategory": ""
  },
  {
    "description": "An entry-level faculty position at a college/university, usually requiring NET/PhD.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Master's degree (minimum)",
      "NET/SET or PhD (for university-level roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Master's",
      "NET/PhD (for Assistant Professor and above)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "research"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "research",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Faculty Positions",
      "Academic Leadership (Dean/Director)"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹35 LPA",
      "note": "Government pay-scale based; increases with seniority (Assistant → Associate → Professor)."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Master's (2 yrs) + NET/PhD (3–6 yrs) for university roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-highered-assistant-professor",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Assistant Professor",
    "domain": "Education",
    "category": "Higher Education",
    "subCategory": ""
  },
  {
    "description": "A mid-level faculty position requiring a PhD and research/teaching experience.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Master's degree (minimum)",
      "NET/SET or PhD (for university-level roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Master's",
      "NET/PhD (for Assistant Professor and above)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "research"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "research",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Faculty Positions",
      "Academic Leadership (Dean/Director)"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹35 LPA",
      "note": "Government pay-scale based; increases with seniority (Assistant → Associate → Professor)."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Master's (2 yrs) + NET/PhD (3–6 yrs) for university roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-highered-associate-professor",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Associate Professor",
    "domain": "Education",
    "category": "Higher Education",
    "subCategory": ""
  },
  {
    "description": "A senior faculty position combining advanced teaching, research and academic leadership.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Master's degree (minimum)",
      "NET/SET or PhD (for university-level roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Master's",
      "NET/PhD (for Assistant Professor and above)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "research"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "research",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Faculty Positions",
      "Academic Leadership (Dean/Director)"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹35 LPA",
      "note": "Government pay-scale based; increases with seniority (Assistant → Associate → Professor)."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Master's (2 yrs) + NET/PhD (3–6 yrs) for university roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-highered-professor",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Professor",
    "domain": "Education",
    "category": "Higher Education",
    "subCategory": ""
  },
  {
    "description": "Manages the academic operations of a college or university department.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [
      "Master's degree (minimum)",
      "NET/SET or PhD (for university-level roles)"
    ],
    "entranceExams": [],
    "degrees": [
      "Master's",
      "NET/PhD (for Assistant Professor and above)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "research"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "research",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Faculty Positions",
      "Academic Leadership (Dean/Director)"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹5 LPA – ₹35 LPA",
      "note": "Government pay-scale based; increases with seniority (Assistant → Associate → Professor)."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 3,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Master's (2 yrs) + NET/PhD (3–6 yrs) for university roles",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-highered-academic-administrator",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Academic Administrator",
    "domain": "Education",
    "category": "Higher Education",
    "subCategory": ""
  },
  {
    "description": "Supports a research project or lab with data collection and basic analysis.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Bachelor's/Master's (junior roles)",
      "PhD (senior roles)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "analyze-info"
    ],
    "interests": [],
    "strengths": [
      "research",
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Faculty Position",
      "Industry R&D",
      "Government Research Labs"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹40 LPA",
      "note": "Postdoc stipends are modest; Principal Investigator roles with grants command more."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 5,
    "practicalLevel": 0,
    "theoreticalLevel": 4,
    "peopleInteractionLevel": 0,
    "educationLength": "Bachelor's to PhD depending on seniority (up to 8–10+ years total)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-research-research-assistant",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Research Assistant",
    "domain": "Education",
    "category": "Research",
    "subCategory": ""
  },
  {
    "description": "A more senior research support role, often requiring a Master's degree.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Bachelor's/Master's (junior roles)",
      "PhD (senior roles)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "analyze-info"
    ],
    "interests": [],
    "strengths": [
      "research",
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Faculty Position",
      "Industry R&D",
      "Government Research Labs"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹40 LPA",
      "note": "Postdoc stipends are modest; Principal Investigator roles with grants command more."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 5,
    "practicalLevel": 0,
    "theoreticalLevel": 4,
    "peopleInteractionLevel": 0,
    "educationLength": "Bachelor's to PhD depending on seniority (up to 8–10+ years total)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-research-research-associate",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Research Associate",
    "domain": "Education",
    "category": "Research",
    "subCategory": ""
  },
  {
    "description": "Independently designs and conducts research, typically requiring a PhD.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Bachelor's/Master's (junior roles)",
      "PhD (senior roles)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "analyze-info"
    ],
    "interests": [],
    "strengths": [
      "research",
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Faculty Position",
      "Industry R&D",
      "Government Research Labs"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹40 LPA",
      "note": "Postdoc stipends are modest; Principal Investigator roles with grants command more."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 5,
    "practicalLevel": 0,
    "theoreticalLevel": 4,
    "peopleInteractionLevel": 0,
    "educationLength": "Bachelor's to PhD depending on seniority (up to 8–10+ years total)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-research-research-scientist",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Research Scientist",
    "domain": "Education",
    "category": "Research",
    "subCategory": ""
  },
  {
    "description": "A researcher with a PhD conducting further specialized research, often before a permanent academic role.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Bachelor's/Master's (junior roles)",
      "PhD (senior roles)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "analyze-info"
    ],
    "interests": [],
    "strengths": [
      "research",
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Faculty Position",
      "Industry R&D",
      "Government Research Labs"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹40 LPA",
      "note": "Postdoc stipends are modest; Principal Investigator roles with grants command more."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 5,
    "practicalLevel": 0,
    "theoreticalLevel": 4,
    "peopleInteractionLevel": 0,
    "educationLength": "Bachelor's to PhD depending on seniority (up to 8–10+ years total)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-research-postdoctoral-researcher",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Postdoctoral Researcher",
    "domain": "Education",
    "category": "Research",
    "subCategory": ""
  },
  {
    "description": "Leads a research group or lab and its funding, typically a senior PhD-holder.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Bachelor's/Master's (junior roles)",
      "PhD (senior roles)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "research",
      "analyze-info"
    ],
    "interests": [],
    "strengths": [
      "research",
      "patience",
      "attention-detail"
    ],
    "workStyles": [],
    "environments": [
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Faculty Position",
      "Industry R&D",
      "Government Research Labs"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹40 LPA",
      "note": "Postdoc stipends are modest; Principal Investigator roles with grants command more."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 5,
    "practicalLevel": 0,
    "theoreticalLevel": 4,
    "peopleInteractionLevel": 0,
    "educationLength": "Bachelor's to PhD depending on seniority (up to 8–10+ years total)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-research-principal-investigator",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Principal Investigator",
    "domain": "Education",
    "category": "Research",
    "subCategory": ""
  },
  {
    "description": "Teaches and conducts research in Computer Science at the college/university level, guiding students through advanced coursework and theses.",
    "simpleExplanation": "Eligibility differs by subject — some (like Law or Design) allow professional-practice routes in, while pure sciences and humanities generally require NET/PhD.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Master's in Computer Science",
      "NET/PhD (usually required for university-level appointment)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "research"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Faculty",
      "Department Head",
      "Academic Research Leadership"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA",
      "note": "Government UGC pay scales apply at most institutions; varies by seniority and institution type."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 4,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Master's + NET/PhD (5–8+ years after Bachelor's)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-professor-computer-science",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Computer Science Professor",
    "domain": "Education",
    "category": "Subject-Specific Academia",
    "subCategory": ""
  },
  {
    "description": "Teaches and conducts research in Engineering at the college/university level, guiding students through advanced coursework and theses.",
    "simpleExplanation": "Eligibility differs by subject — some (like Law or Design) allow professional-practice routes in, while pure sciences and humanities generally require NET/PhD.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Master's in Engineering",
      "NET/PhD (usually required for university-level appointment)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "research"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Faculty",
      "Department Head",
      "Academic Research Leadership"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA",
      "note": "Government UGC pay scales apply at most institutions; varies by seniority and institution type."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 4,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Master's + NET/PhD (5–8+ years after Bachelor's)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-professor-engineering",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Engineering Professor",
    "domain": "Education",
    "category": "Subject-Specific Academia",
    "subCategory": ""
  },
  {
    "description": "Teaches and conducts research in Mathematics at the college/university level, guiding students through advanced coursework and theses.",
    "simpleExplanation": "Eligibility differs by subject — some (like Law or Design) allow professional-practice routes in, while pure sciences and humanities generally require NET/PhD.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Master's in Mathematics",
      "NET/PhD (usually required for university-level appointment)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "research"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Faculty",
      "Department Head",
      "Academic Research Leadership"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA",
      "note": "Government UGC pay scales apply at most institutions; varies by seniority and institution type."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 4,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Master's + NET/PhD (5–8+ years after Bachelor's)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-professor-mathematics",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Mathematics Professor",
    "domain": "Education",
    "category": "Subject-Specific Academia",
    "subCategory": ""
  },
  {
    "description": "Teaches and conducts research in Physics at the college/university level, guiding students through advanced coursework and theses.",
    "simpleExplanation": "Eligibility differs by subject — some (like Law or Design) allow professional-practice routes in, while pure sciences and humanities generally require NET/PhD.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Master's in Physics",
      "NET/PhD (usually required for university-level appointment)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "research"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Faculty",
      "Department Head",
      "Academic Research Leadership"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA",
      "note": "Government UGC pay scales apply at most institutions; varies by seniority and institution type."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 4,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Master's + NET/PhD (5–8+ years after Bachelor's)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-professor-physics",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Physics Professor",
    "domain": "Education",
    "category": "Subject-Specific Academia",
    "subCategory": ""
  },
  {
    "description": "Teaches and conducts research in Chemistry at the college/university level, guiding students through advanced coursework and theses.",
    "simpleExplanation": "Eligibility differs by subject — some (like Law or Design) allow professional-practice routes in, while pure sciences and humanities generally require NET/PhD.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Master's in Chemistry",
      "NET/PhD (usually required for university-level appointment)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "research"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Faculty",
      "Department Head",
      "Academic Research Leadership"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA",
      "note": "Government UGC pay scales apply at most institutions; varies by seniority and institution type."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 4,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Master's + NET/PhD (5–8+ years after Bachelor's)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-professor-chemistry",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Chemistry Professor",
    "domain": "Education",
    "category": "Subject-Specific Academia",
    "subCategory": ""
  },
  {
    "description": "Teaches and conducts research in Biology at the college/university level, guiding students through advanced coursework and theses.",
    "simpleExplanation": "Eligibility differs by subject — some (like Law or Design) allow professional-practice routes in, while pure sciences and humanities generally require NET/PhD.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Master's in Biology",
      "NET/PhD (usually required for university-level appointment)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "research"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Faculty",
      "Department Head",
      "Academic Research Leadership"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA",
      "note": "Government UGC pay scales apply at most institutions; varies by seniority and institution type."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 4,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Master's + NET/PhD (5–8+ years after Bachelor's)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-professor-biology",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Biology Professor",
    "domain": "Education",
    "category": "Subject-Specific Academia",
    "subCategory": ""
  },
  {
    "description": "Teaches and conducts research in Economics at the college/university level, guiding students through advanced coursework and theses.",
    "simpleExplanation": "Eligibility differs by subject — some (like Law or Design) allow professional-practice routes in, while pure sciences and humanities generally require NET/PhD.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Master's in Economics",
      "NET/PhD (usually required for university-level appointment)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "research"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Faculty",
      "Department Head",
      "Academic Research Leadership"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA",
      "note": "Government UGC pay scales apply at most institutions; varies by seniority and institution type."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 4,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Master's + NET/PhD (5–8+ years after Bachelor's)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-professor-economics",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Economics Professor",
    "domain": "Education",
    "category": "Subject-Specific Academia",
    "subCategory": ""
  },
  {
    "description": "Teaches and conducts research in Commerce at the college/university level, guiding students through advanced coursework and theses.",
    "simpleExplanation": "Eligibility differs by subject — some (like Law or Design) allow professional-practice routes in, while pure sciences and humanities generally require NET/PhD.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Master's in Commerce",
      "NET/PhD (usually required for university-level appointment)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "research"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Faculty",
      "Department Head",
      "Academic Research Leadership"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA",
      "note": "Government UGC pay scales apply at most institutions; varies by seniority and institution type."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 4,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Master's + NET/PhD (5–8+ years after Bachelor's)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-professor-commerce",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Commerce Professor",
    "domain": "Education",
    "category": "Subject-Specific Academia",
    "subCategory": ""
  },
  {
    "description": "Teaches and conducts research in Finance at the college/university level, guiding students through advanced coursework and theses.",
    "simpleExplanation": "Eligibility differs by subject — some (like Law or Design) allow professional-practice routes in, while pure sciences and humanities generally require NET/PhD.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Master's in Finance",
      "NET/PhD (usually required for university-level appointment)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "research"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Faculty",
      "Department Head",
      "Academic Research Leadership"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA",
      "note": "Government UGC pay scales apply at most institutions; varies by seniority and institution type."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 4,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Master's + NET/PhD (5–8+ years after Bachelor's)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-professor-finance",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Finance Professor",
    "domain": "Education",
    "category": "Subject-Specific Academia",
    "subCategory": ""
  },
  {
    "description": "Teaches and conducts research in Management at the college/university level, guiding students through advanced coursework and theses.",
    "simpleExplanation": "Eligibility differs by subject — some (like Law or Design) allow professional-practice routes in, while pure sciences and humanities generally require NET/PhD.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Master's in Management",
      "NET/PhD (usually required for university-level appointment)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "research"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Faculty",
      "Department Head",
      "Academic Research Leadership"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA",
      "note": "Government UGC pay scales apply at most institutions; varies by seniority and institution type."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 4,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Master's + NET/PhD (5–8+ years after Bachelor's)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-professor-management",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Management Professor",
    "domain": "Education",
    "category": "Subject-Specific Academia",
    "subCategory": ""
  },
  {
    "description": "Teaches and conducts research in Law at the college/university level, guiding students through advanced coursework and theses.",
    "simpleExplanation": "Eligibility differs by subject — some (like Law or Design) allow professional-practice routes in, while pure sciences and humanities generally require NET/PhD.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Master's in Law",
      "NET/PhD (usually required for university-level appointment)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "research"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Faculty",
      "Department Head",
      "Academic Research Leadership"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA",
      "note": "Government UGC pay scales apply at most institutions; varies by seniority and institution type."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 4,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Master's + NET/PhD (5–8+ years after Bachelor's)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-professor-law",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Law Professor",
    "domain": "Education",
    "category": "Subject-Specific Academia",
    "subCategory": ""
  },
  {
    "description": "Teaches and conducts research in Psychology at the college/university level, guiding students through advanced coursework and theses.",
    "simpleExplanation": "Eligibility differs by subject — some (like Law or Design) allow professional-practice routes in, while pure sciences and humanities generally require NET/PhD.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Master's in Psychology",
      "NET/PhD (usually required for university-level appointment)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "research"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Faculty",
      "Department Head",
      "Academic Research Leadership"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA",
      "note": "Government UGC pay scales apply at most institutions; varies by seniority and institution type."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 4,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Master's + NET/PhD (5–8+ years after Bachelor's)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-professor-psychology",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Psychology Professor",
    "domain": "Education",
    "category": "Subject-Specific Academia",
    "subCategory": ""
  },
  {
    "description": "Teaches and conducts research in History at the college/university level, guiding students through advanced coursework and theses.",
    "simpleExplanation": "Eligibility differs by subject — some (like Law or Design) allow professional-practice routes in, while pure sciences and humanities generally require NET/PhD.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Master's in History",
      "NET/PhD (usually required for university-level appointment)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "research"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Faculty",
      "Department Head",
      "Academic Research Leadership"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA",
      "note": "Government UGC pay scales apply at most institutions; varies by seniority and institution type."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 4,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Master's + NET/PhD (5–8+ years after Bachelor's)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-professor-history",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "History Professor",
    "domain": "Education",
    "category": "Subject-Specific Academia",
    "subCategory": ""
  },
  {
    "description": "Teaches and conducts research in Political Science at the college/university level, guiding students through advanced coursework and theses.",
    "simpleExplanation": "Eligibility differs by subject — some (like Law or Design) allow professional-practice routes in, while pure sciences and humanities generally require NET/PhD.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Master's in Political Science",
      "NET/PhD (usually required for university-level appointment)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "research"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Faculty",
      "Department Head",
      "Academic Research Leadership"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA",
      "note": "Government UGC pay scales apply at most institutions; varies by seniority and institution type."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 4,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Master's + NET/PhD (5–8+ years after Bachelor's)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-professor-political-science",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Political Science Professor",
    "domain": "Education",
    "category": "Subject-Specific Academia",
    "subCategory": ""
  },
  {
    "description": "Teaches and conducts research in Geography at the college/university level, guiding students through advanced coursework and theses.",
    "simpleExplanation": "Eligibility differs by subject — some (like Law or Design) allow professional-practice routes in, while pure sciences and humanities generally require NET/PhD.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Master's in Geography",
      "NET/PhD (usually required for university-level appointment)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "research"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Faculty",
      "Department Head",
      "Academic Research Leadership"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA",
      "note": "Government UGC pay scales apply at most institutions; varies by seniority and institution type."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 4,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Master's + NET/PhD (5–8+ years after Bachelor's)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-professor-geography",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Geography Professor",
    "domain": "Education",
    "category": "Subject-Specific Academia",
    "subCategory": ""
  },
  {
    "description": "Teaches and conducts research in English/Literature at the college/university level, guiding students through advanced coursework and theses.",
    "simpleExplanation": "Eligibility differs by subject — some (like Law or Design) allow professional-practice routes in, while pure sciences and humanities generally require NET/PhD.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Master's in English/Literature",
      "NET/PhD (usually required for university-level appointment)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "research"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Faculty",
      "Department Head",
      "Academic Research Leadership"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA",
      "note": "Government UGC pay scales apply at most institutions; varies by seniority and institution type."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 4,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Master's + NET/PhD (5–8+ years after Bachelor's)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-professor-english-literature",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "English/Literature Professor",
    "domain": "Education",
    "category": "Subject-Specific Academia",
    "subCategory": ""
  },
  {
    "description": "Teaches and conducts research in Design at the college/university level, guiding students through advanced coursework and theses.",
    "simpleExplanation": "Eligibility differs by subject — some (like Law or Design) allow professional-practice routes in, while pure sciences and humanities generally require NET/PhD.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Master's in Design",
      "NET/PhD (usually required for university-level appointment)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "teach",
      "research"
    ],
    "interests": [],
    "strengths": [
      "teaching",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "classroom",
      "lab-research"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Faculty",
      "Department Head",
      "Academic Research Leadership"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA",
      "note": "Government UGC pay scales apply at most institutions; varies by seniority and institution type."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 4,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Master's + NET/PhD (5–8+ years after Bachelor's)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-professor-design",
    "parentId": "edu-a12-academia",
    "stage": "after12",
    "type": "Career",
    "title": "Design Professor",
    "domain": "Education",
    "category": "Subject-Specific Academia",
    "subCategory": ""
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a12-government",
    "parentId": null,
    "stage": "after12",
    "type": "Domain",
    "title": "Government & Public Service",
    "domain": "Government",
    "category": "Public Service",
    "subCategory": ""
  },
  {
    "description": "Administers government policy and public services at the district, state or national level, entered via the UPSC Civil Services Exam or state PSC exams.",
    "simpleExplanation": "Exact eligibility and the exact exam required vary by specific role — always confirm current official notifications.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "UPSC / State PSC / SSC (varies by role)"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "leadership"
    ],
    "workStyles": [],
    "environments": [
      "business-corp",
      "classroom"
    ],
    "values": [
      "stability",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Administrative Roles",
      "Specialized Government Departments"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹30 LPA",
      "note": "Government pay scales plus allowances and pension; varies by post and seniority."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 3,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Bachelor's degree minimum, plus exam preparation (timeline varies)",
    "riskLevel": "low",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "govt-civil-services",
    "parentId": "edu-a12-government",
    "stage": "after12",
    "type": "Career",
    "title": "Civil Services (IAS and allied)",
    "domain": "Government",
    "category": "Public Service",
    "subCategory": ""
  },
  {
    "description": "State-level administrative roles similar to IAS, entered via State Public Service Commission exams.",
    "simpleExplanation": "Exact eligibility and the exact exam required vary by specific role — always confirm current official notifications.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "UPSC / State PSC / SSC (varies by role)"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "leadership"
    ],
    "workStyles": [],
    "environments": [
      "business-corp",
      "classroom"
    ],
    "values": [
      "stability",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Administrative Roles",
      "Specialized Government Departments"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹30 LPA",
      "note": "Government pay scales plus allowances and pension; varies by post and seniority."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 3,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Bachelor's degree minimum, plus exam preparation (timeline varies)",
    "riskLevel": "low",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "govt-administrative-services",
    "parentId": "edu-a12-government",
    "stage": "after12",
    "type": "Career",
    "title": "State Administrative Services",
    "domain": "Government",
    "category": "Public Service",
    "subCategory": ""
  },
  {
    "description": "Leads and manages law enforcement, entered via UPSC (IPS) or state police recruitment exams.",
    "simpleExplanation": "Exact eligibility and the exact exam required vary by specific role — always confirm current official notifications.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "UPSC / State PSC / SSC (varies by role)"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "leadership"
    ],
    "workStyles": [],
    "environments": [
      "business-corp",
      "classroom"
    ],
    "values": [
      "stability",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Administrative Roles",
      "Specialized Government Departments"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹30 LPA",
      "note": "Government pay scales plus allowances and pension; varies by post and seniority."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 3,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Bachelor's degree minimum, plus exam preparation (timeline varies)",
    "riskLevel": "low",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "govt-police-services",
    "parentId": "edu-a12-government",
    "stage": "after12",
    "type": "Career",
    "title": "Police Services (IPS and allied)",
    "domain": "Government",
    "category": "Public Service",
    "subCategory": ""
  },
  {
    "description": "Represents India diplomatically abroad, entered via the UPSC Civil Services Exam.",
    "simpleExplanation": "Exact eligibility and the exact exam required vary by specific role — always confirm current official notifications.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "UPSC / State PSC / SSC (varies by role)"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "leadership"
    ],
    "workStyles": [],
    "environments": [
      "business-corp",
      "classroom"
    ],
    "values": [
      "stability",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Administrative Roles",
      "Specialized Government Departments"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹30 LPA",
      "note": "Government pay scales plus allowances and pension; varies by post and seniority."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 3,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Bachelor's degree minimum, plus exam preparation (timeline varies)",
    "riskLevel": "low",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "govt-foreign-services",
    "parentId": "edu-a12-government",
    "stage": "after12",
    "type": "Career",
    "title": "Foreign Services (IFS)",
    "domain": "Government",
    "category": "Public Service",
    "subCategory": ""
  },
  {
    "description": "Manages tax administration and revenue collection, entered via UPSC or SSC exams.",
    "simpleExplanation": "Exact eligibility and the exact exam required vary by specific role — always confirm current official notifications.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "UPSC / State PSC / SSC (varies by role)"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "leadership"
    ],
    "workStyles": [],
    "environments": [
      "business-corp",
      "classroom"
    ],
    "values": [
      "stability",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Administrative Roles",
      "Specialized Government Departments"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹30 LPA",
      "note": "Government pay scales plus allowances and pension; varies by post and seniority."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 3,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Bachelor's degree minimum, plus exam preparation (timeline varies)",
    "riskLevel": "low",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "govt-revenue-services",
    "parentId": "edu-a12-government",
    "stage": "after12",
    "type": "Career",
    "title": "Revenue Services (IRS and allied)",
    "domain": "Government",
    "category": "Public Service",
    "subCategory": ""
  },
  {
    "description": "A broad range of administrative, technical and clerical roles within state government departments.",
    "simpleExplanation": "Exact eligibility and the exact exam required vary by specific role — always confirm current official notifications.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "UPSC / State PSC / SSC (varies by role)"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "leadership"
    ],
    "workStyles": [],
    "environments": [
      "business-corp",
      "classroom"
    ],
    "values": [
      "stability",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Administrative Roles",
      "Specialized Government Departments"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹30 LPA",
      "note": "Government pay scales plus allowances and pension; varies by post and seniority."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 3,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Bachelor's degree minimum, plus exam preparation (timeline varies)",
    "riskLevel": "low",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "govt-state-govt-careers",
    "parentId": "edu-a12-government",
    "stage": "after12",
    "type": "Career",
    "title": "State Government Careers",
    "domain": "Government",
    "category": "Public Service",
    "subCategory": ""
  },
  {
    "description": "Manages government programs and public-sector operations.",
    "simpleExplanation": "Exact eligibility and the exact exam required vary by specific role — always confirm current official notifications.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "UPSC / State PSC / SSC (varies by role)"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "leadership"
    ],
    "workStyles": [],
    "environments": [
      "business-corp",
      "classroom"
    ],
    "values": [
      "stability",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Administrative Roles",
      "Specialized Government Departments"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹30 LPA",
      "note": "Government pay scales plus allowances and pension; varies by post and seniority."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 3,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Bachelor's degree minimum, plus exam preparation (timeline varies)",
    "riskLevel": "low",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "govt-public-administration-govt",
    "parentId": "edu-a12-government",
    "stage": "after12",
    "type": "Career",
    "title": "Public Administration Professional",
    "domain": "Government",
    "category": "Public Service",
    "subCategory": ""
  },
  {
    "description": "Roles in national intelligence and security agencies, with specific and often separate recruitment processes.",
    "simpleExplanation": "Exact eligibility and the exact exam required vary by specific role — always confirm current official notifications.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "UPSC / State PSC / SSC (varies by role)"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "leadership"
    ],
    "workStyles": [],
    "environments": [
      "business-corp",
      "classroom"
    ],
    "values": [
      "stability",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Administrative Roles",
      "Specialized Government Departments"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹30 LPA",
      "note": "Government pay scales plus allowances and pension; varies by post and seniority."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 3,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Bachelor's degree minimum, plus exam preparation (timeline varies)",
    "riskLevel": "low",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "govt-intelligence-careers",
    "parentId": "edu-a12-government",
    "stage": "after12",
    "type": "Career",
    "title": "Intelligence & Security Services",
    "domain": "Government",
    "category": "Public Service",
    "subCategory": ""
  },
  {
    "description": "Plans and coordinates responses to natural and man-made disasters.",
    "simpleExplanation": "Exact eligibility and the exact exam required vary by specific role — always confirm current official notifications.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "UPSC / State PSC / SSC (varies by role)"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "leadership"
    ],
    "workStyles": [],
    "environments": [
      "business-corp",
      "classroom"
    ],
    "values": [
      "stability",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Administrative Roles",
      "Specialized Government Departments"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹30 LPA",
      "note": "Government pay scales plus allowances and pension; varies by post and seniority."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 3,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Bachelor's degree minimum, plus exam preparation (timeline varies)",
    "riskLevel": "low",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "govt-disaster-management",
    "parentId": "edu-a12-government",
    "stage": "after12",
    "type": "Career",
    "title": "Disaster Management Professional",
    "domain": "Government",
    "category": "Public Service",
    "subCategory": ""
  },
  {
    "description": "Researches, designs and evaluates government policy.",
    "simpleExplanation": "Exact eligibility and the exact exam required vary by specific role — always confirm current official notifications.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "UPSC / State PSC / SSC (varies by role)"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "leadership"
    ],
    "workStyles": [],
    "environments": [
      "business-corp",
      "classroom"
    ],
    "values": [
      "stability",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Administrative Roles",
      "Specialized Government Departments"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹30 LPA",
      "note": "Government pay scales plus allowances and pension; varies by post and seniority."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 3,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Bachelor's degree minimum, plus exam preparation (timeline varies)",
    "riskLevel": "low",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "govt-public-policy",
    "parentId": "edu-a12-government",
    "stage": "after12",
    "type": "Career",
    "title": "Public Policy Professional",
    "domain": "Government",
    "category": "Public Service",
    "subCategory": ""
  },
  {
    "description": "Conducts research at government institutions such as ISRO, DRDO or CSIR labs.",
    "simpleExplanation": "Exact eligibility and the exact exam required vary by specific role — always confirm current official notifications.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "UPSC / State PSC / SSC (varies by role)"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "leadership"
    ],
    "workStyles": [],
    "environments": [
      "business-corp",
      "classroom"
    ],
    "values": [
      "stability",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Administrative Roles",
      "Specialized Government Departments"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹30 LPA",
      "note": "Government pay scales plus allowances and pension; varies by post and seniority."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 3,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Bachelor's degree minimum, plus exam preparation (timeline varies)",
    "riskLevel": "low",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "govt-government-research",
    "parentId": "edu-a12-government",
    "stage": "after12",
    "type": "Career",
    "title": "Government Research Scientist",
    "domain": "Government",
    "category": "Public Service",
    "subCategory": ""
  },
  {
    "description": "Technical/engineering roles within government departments and PSUs.",
    "simpleExplanation": "Exact eligibility and the exact exam required vary by specific role — always confirm current official notifications.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "UPSC / State PSC / SSC (varies by role)"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "leadership"
    ],
    "workStyles": [],
    "environments": [
      "business-corp",
      "classroom"
    ],
    "values": [
      "stability",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Administrative Roles",
      "Specialized Government Departments"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹30 LPA",
      "note": "Government pay scales plus allowances and pension; varies by post and seniority."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 3,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Bachelor's degree minimum, plus exam preparation (timeline varies)",
    "riskLevel": "low",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "govt-government-technical",
    "parentId": "edu-a12-government",
    "stage": "after12",
    "type": "Career",
    "title": "Government Technical Officer",
    "domain": "Government",
    "category": "Public Service",
    "subCategory": ""
  },
  {
    "description": "Careers in Public Sector Undertakings, entered via GATE, campus placement or direct recruitment exams.",
    "simpleExplanation": "Exact eligibility and the exact exam required vary by specific role — always confirm current official notifications.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "UPSC / State PSC / SSC (varies by role)"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people",
      "manage-projects"
    ],
    "interests": [],
    "strengths": [
      "organization",
      "leadership"
    ],
    "workStyles": [],
    "environments": [
      "business-corp",
      "classroom"
    ],
    "values": [
      "stability",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Administrative Roles",
      "Specialized Government Departments"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹4 LPA – ₹30 LPA",
      "note": "Government pay scales plus allowances and pension; varies by post and seniority."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 3,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Bachelor's degree minimum, plus exam preparation (timeline varies)",
    "riskLevel": "low",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "govt-psu-careers",
    "parentId": "edu-a12-government",
    "stage": "after12",
    "type": "Career",
    "title": "PSU Careers",
    "domain": "Government",
    "category": "Public Service",
    "subCategory": ""
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a12-defence",
    "parentId": null,
    "stage": "after12",
    "type": "Domain",
    "title": "Defence",
    "domain": "Government",
    "category": "Defence",
    "subCategory": ""
  },
  {
    "description": "Leads and manages army personnel and operations, entered via NDA, CDS or other officer entry schemes.",
    "simpleExplanation": "Eligibility (age, education, physical standards) differs significantly by entry route — NDA, CDS, AFCAT, technical entry, etc.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "NDA",
      "CDS",
      "AFCAT (varies by entry route)"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "lead-people",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "patience",
      "hands-on"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [
      "stability",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Higher Rank Progression",
      "Post-Retirement Government/Corporate Roles"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA+",
      "note": "Rank-based pay, plus housing, allowances and pension — non-cash value is significant."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies by entry route (post-12th to postgraduate entries exist)",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "defence-army-officer",
    "parentId": "edu-a12-defence",
    "stage": "after12",
    "type": "Career",
    "title": "Army Officer",
    "domain": "Government",
    "category": "Defence",
    "subCategory": ""
  },
  {
    "description": "Leads and manages naval personnel and operations, entered via NDA, CDS or specialized naval entries.",
    "simpleExplanation": "Eligibility (age, education, physical standards) differs significantly by entry route — NDA, CDS, AFCAT, technical entry, etc.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "NDA",
      "CDS",
      "AFCAT (varies by entry route)"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "lead-people",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "patience",
      "hands-on"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [
      "stability",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Higher Rank Progression",
      "Post-Retirement Government/Corporate Roles"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA+",
      "note": "Rank-based pay, plus housing, allowances and pension — non-cash value is significant."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies by entry route (post-12th to postgraduate entries exist)",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "defence-navy-officer",
    "parentId": "edu-a12-defence",
    "stage": "after12",
    "type": "Career",
    "title": "Navy Officer",
    "domain": "Government",
    "category": "Defence",
    "subCategory": ""
  },
  {
    "description": "Leads and manages air force personnel and operations, including flying and technical branches.",
    "simpleExplanation": "Eligibility (age, education, physical standards) differs significantly by entry route — NDA, CDS, AFCAT, technical entry, etc.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "NDA",
      "CDS",
      "AFCAT (varies by entry route)"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "lead-people",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "patience",
      "hands-on"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [
      "stability",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Higher Rank Progression",
      "Post-Retirement Government/Corporate Roles"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA+",
      "note": "Rank-based pay, plus housing, allowances and pension — non-cash value is significant."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies by entry route (post-12th to postgraduate entries exist)",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "defence-airforce-officer",
    "parentId": "edu-a12-defence",
    "stage": "after12",
    "type": "Career",
    "title": "Air Force Officer",
    "domain": "Government",
    "category": "Defence",
    "subCategory": ""
  },
  {
    "description": "Applies engineering expertise to military equipment, systems and infrastructure.",
    "simpleExplanation": "Eligibility (age, education, physical standards) differs significantly by entry route — NDA, CDS, AFCAT, technical entry, etc.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "NDA",
      "CDS",
      "AFCAT (varies by entry route)"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "lead-people",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "patience",
      "hands-on"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [
      "stability",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Higher Rank Progression",
      "Post-Retirement Government/Corporate Roles"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA+",
      "note": "Rank-based pay, plus housing, allowances and pension — non-cash value is significant."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies by entry route (post-12th to postgraduate entries exist)",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "defence-defence-engineering",
    "parentId": "edu-a12-defence",
    "stage": "after12",
    "type": "Career",
    "title": "Defence Engineering Officer",
    "domain": "Government",
    "category": "Defence",
    "subCategory": ""
  },
  {
    "description": "Works on the research, design or maintenance of defence technology systems.",
    "simpleExplanation": "Eligibility (age, education, physical standards) differs significantly by entry route — NDA, CDS, AFCAT, technical entry, etc.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "NDA",
      "CDS",
      "AFCAT (varies by entry route)"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "lead-people",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "patience",
      "hands-on"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [
      "stability",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Higher Rank Progression",
      "Post-Retirement Government/Corporate Roles"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA+",
      "note": "Rank-based pay, plus housing, allowances and pension — non-cash value is significant."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies by entry route (post-12th to postgraduate entries exist)",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "defence-defence-technology",
    "parentId": "edu-a12-defence",
    "stage": "after12",
    "type": "Career",
    "title": "Defence Technology Professional",
    "domain": "Government",
    "category": "Defence",
    "subCategory": ""
  },
  {
    "description": "Manages technical operations and equipment within the armed forces.",
    "simpleExplanation": "Eligibility (age, education, physical standards) differs significantly by entry route — NDA, CDS, AFCAT, technical entry, etc.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "NDA",
      "CDS",
      "AFCAT (varies by entry route)"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "lead-people",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "patience",
      "hands-on"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [
      "stability",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Higher Rank Progression",
      "Post-Retirement Government/Corporate Roles"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA+",
      "note": "Rank-based pay, plus housing, allowances and pension — non-cash value is significant."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies by entry route (post-12th to postgraduate entries exist)",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "defence-technical-officer-defence",
    "parentId": "edu-a12-defence",
    "stage": "after12",
    "type": "Career",
    "title": "Technical Officer (Defence)",
    "domain": "Government",
    "category": "Defence",
    "subCategory": ""
  },
  {
    "description": "Manages the supply chain and logistics for military operations.",
    "simpleExplanation": "Eligibility (age, education, physical standards) differs significantly by entry route — NDA, CDS, AFCAT, technical entry, etc.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "NDA",
      "CDS",
      "AFCAT (varies by entry route)"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "lead-people",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "patience",
      "hands-on"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [
      "stability",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Higher Rank Progression",
      "Post-Retirement Government/Corporate Roles"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA+",
      "note": "Rank-based pay, plus housing, allowances and pension — non-cash value is significant."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies by entry route (post-12th to postgraduate entries exist)",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "defence-defence-logistics",
    "parentId": "edu-a12-defence",
    "stage": "after12",
    "type": "Career",
    "title": "Defence Logistics Officer",
    "domain": "Government",
    "category": "Defence",
    "subCategory": ""
  },
  {
    "description": "Manages administrative operations within the armed forces.",
    "simpleExplanation": "Eligibility (age, education, physical standards) differs significantly by entry route — NDA, CDS, AFCAT, technical entry, etc.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "NDA",
      "CDS",
      "AFCAT (varies by entry route)"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "lead-people",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "patience",
      "hands-on"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [
      "stability",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Higher Rank Progression",
      "Post-Retirement Government/Corporate Roles"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA+",
      "note": "Rank-based pay, plus housing, allowances and pension — non-cash value is significant."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies by entry route (post-12th to postgraduate entries exist)",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "defence-defence-administration",
    "parentId": "edu-a12-defence",
    "stage": "after12",
    "type": "Career",
    "title": "Defence Administration Officer",
    "domain": "Government",
    "category": "Defence",
    "subCategory": ""
  },
  {
    "description": "Conducts research on defence technology, often at DRDO.",
    "simpleExplanation": "Eligibility (age, education, physical standards) differs significantly by entry route — NDA, CDS, AFCAT, technical entry, etc.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "NDA",
      "CDS",
      "AFCAT (varies by entry route)"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "lead-people",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "patience",
      "hands-on"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [
      "stability",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Higher Rank Progression",
      "Post-Retirement Government/Corporate Roles"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA+",
      "note": "Rank-based pay, plus housing, allowances and pension — non-cash value is significant."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies by entry route (post-12th to postgraduate entries exist)",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "defence-defence-research",
    "parentId": "edu-a12-defence",
    "stage": "after12",
    "type": "Career",
    "title": "Defence Research Scientist",
    "domain": "Government",
    "category": "Defence",
    "subCategory": ""
  },
  {
    "description": "Flying, technical and support roles specific to military aviation.",
    "simpleExplanation": "Eligibility (age, education, physical standards) differs significantly by entry route — NDA, CDS, AFCAT, technical entry, etc.",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "NDA",
      "CDS",
      "AFCAT (varies by entry route)"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "lead-people",
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "leadership",
      "patience",
      "hands-on"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [
      "stability",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Higher Rank Progression",
      "Post-Retirement Government/Corporate Roles"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹6 LPA – ₹30 LPA+",
      "note": "Rank-based pay, plus housing, allowances and pension — non-cash value is significant."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 4,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Varies by entry route (post-12th to postgraduate entries exist)",
    "riskLevel": "medium",
    "stabilityLevel": "high",
    "entrepreneurshipLevel": "low",
    "id": "defence-aviation-defence",
    "parentId": "edu-a12-defence",
    "stage": "after12",
    "type": "Career",
    "title": "Aviation (Defence) Careers",
    "domain": "Government",
    "category": "Defence",
    "subCategory": ""
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a12-agriculture",
    "parentId": null,
    "stage": "after12",
    "type": "Domain",
    "title": "Agriculture & Environment",
    "domain": "Agriculture",
    "category": "Agriculture",
    "subCategory": ""
  },
  {
    "description": "Applies agricultural science to crop production and farm management.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "biology"
    ],
    "skills": [],
    "activities": [
      "work-nature",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Government Agricultural Services",
      "Agribusiness",
      "Higher Research (M.Sc/PhD)"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹20 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (B.Sc Agriculture or related)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "agri-agriculture-general",
    "parentId": "edu-a12-agriculture",
    "stage": "after12",
    "type": "Career",
    "title": "Agriculture Professional",
    "domain": "Agriculture",
    "category": "Agriculture & Environment",
    "subCategory": ""
  },
  {
    "description": "Studies soil and crop science to improve farming productivity.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "biology"
    ],
    "skills": [],
    "activities": [
      "work-nature",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Government Agricultural Services",
      "Agribusiness",
      "Higher Research (M.Sc/PhD)"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹20 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (B.Sc Agriculture or related)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "agri-agronomy",
    "parentId": "edu-a12-agriculture",
    "stage": "after12",
    "type": "Career",
    "title": "Agronomist",
    "domain": "Agriculture",
    "category": "Agriculture & Environment",
    "subCategory": ""
  },
  {
    "description": "Specializes in growing fruits, vegetables, flowers and ornamental plants.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "biology"
    ],
    "skills": [],
    "activities": [
      "work-nature",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Government Agricultural Services",
      "Agribusiness",
      "Higher Research (M.Sc/PhD)"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹20 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (B.Sc Agriculture or related)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "agri-horticulture-a12",
    "parentId": "edu-a12-agriculture",
    "stage": "after12",
    "type": "Career",
    "title": "Horticulturist",
    "domain": "Agriculture",
    "category": "Agriculture & Environment",
    "subCategory": ""
  },
  {
    "description": "Manages and conserves forest resources.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "biology"
    ],
    "skills": [],
    "activities": [
      "work-nature",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Government Agricultural Services",
      "Agribusiness",
      "Higher Research (M.Sc/PhD)"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹20 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (B.Sc Agriculture or related)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "agri-forestry",
    "parentId": "edu-a12-agriculture",
    "stage": "after12",
    "type": "Career",
    "title": "Forestry Professional",
    "domain": "Agriculture",
    "category": "Agriculture & Environment",
    "subCategory": ""
  },
  {
    "description": "Manages fish farming and aquatic resource production.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "biology"
    ],
    "skills": [],
    "activities": [
      "work-nature",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Government Agricultural Services",
      "Agribusiness",
      "Higher Research (M.Sc/PhD)"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹20 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (B.Sc Agriculture or related)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "agri-fisheries",
    "parentId": "edu-a12-agriculture",
    "stage": "after12",
    "type": "Career",
    "title": "Fisheries Professional",
    "domain": "Agriculture",
    "category": "Agriculture & Environment",
    "subCategory": ""
  },
  {
    "description": "Manages dairy farming, processing and production.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "biology"
    ],
    "skills": [],
    "activities": [
      "work-nature",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Government Agricultural Services",
      "Agribusiness",
      "Higher Research (M.Sc/PhD)"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹20 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (B.Sc Agriculture or related)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "agri-dairy",
    "parentId": "edu-a12-agriculture",
    "stage": "after12",
    "type": "Career",
    "title": "Dairy Science Professional",
    "domain": "Agriculture",
    "category": "Agriculture & Environment",
    "subCategory": ""
  },
  {
    "description": "Conducts research to improve crops, yields and farming methods.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "biology"
    ],
    "skills": [],
    "activities": [
      "work-nature",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Government Agricultural Services",
      "Agribusiness",
      "Higher Research (M.Sc/PhD)"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹20 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (B.Sc Agriculture or related)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "agri-agri-research",
    "parentId": "edu-a12-agriculture",
    "stage": "after12",
    "type": "Career",
    "title": "Agricultural Research Scientist",
    "domain": "Agriculture",
    "category": "Agriculture & Environment",
    "subCategory": ""
  },
  {
    "description": "Applies engineering to farm equipment, irrigation and agri-infrastructure.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "biology"
    ],
    "skills": [],
    "activities": [
      "work-nature",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Government Agricultural Services",
      "Agribusiness",
      "Higher Research (M.Sc/PhD)"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹20 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (B.Sc Agriculture or related)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "agri-agri-engineering-career",
    "parentId": "edu-a12-agriculture",
    "stage": "after12",
    "type": "Career",
    "title": "Agricultural Engineer",
    "domain": "Agriculture",
    "category": "Agriculture & Environment",
    "subCategory": ""
  },
  {
    "description": "Develops and improves food processing and preservation methods.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "biology"
    ],
    "skills": [],
    "activities": [
      "work-nature",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Government Agricultural Services",
      "Agribusiness",
      "Higher Research (M.Sc/PhD)"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹20 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (B.Sc Agriculture or related)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "agri-food-technology-career",
    "parentId": "edu-a12-agriculture",
    "stage": "after12",
    "type": "Career",
    "title": "Food Technologist",
    "domain": "Agriculture",
    "category": "Agriculture & Environment",
    "subCategory": ""
  },
  {
    "description": "Manages the business side of farming, agri-trade and agri-supply chains.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "biology"
    ],
    "skills": [],
    "activities": [
      "work-nature",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Government Agricultural Services",
      "Agribusiness",
      "Higher Research (M.Sc/PhD)"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹20 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (B.Sc Agriculture or related)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "agri-agribusiness",
    "parentId": "edu-a12-agriculture",
    "stage": "after12",
    "type": "Career",
    "title": "Agribusiness Professional",
    "domain": "Agriculture",
    "category": "Agriculture & Environment",
    "subCategory": ""
  },
  {
    "description": "Practises and advises on chemical-free, sustainable farming methods.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "biology"
    ],
    "skills": [],
    "activities": [
      "work-nature",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Government Agricultural Services",
      "Agribusiness",
      "Higher Research (M.Sc/PhD)"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹20 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (B.Sc Agriculture or related)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "agri-organic-farming",
    "parentId": "edu-a12-agriculture",
    "stage": "after12",
    "type": "Career",
    "title": "Organic Farming Specialist",
    "domain": "Agriculture",
    "category": "Agriculture & Environment",
    "subCategory": ""
  },
  {
    "description": "Studies environmental problems and develops solutions.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "biology"
    ],
    "skills": [],
    "activities": [
      "work-nature",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Government Agricultural Services",
      "Agribusiness",
      "Higher Research (M.Sc/PhD)"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹20 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (B.Sc Agriculture or related)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "agri-environmental-science",
    "parentId": "edu-a12-agriculture",
    "stage": "after12",
    "type": "Career",
    "title": "Environmental Scientist",
    "domain": "Agriculture",
    "category": "Agriculture & Environment",
    "subCategory": ""
  },
  {
    "description": "Advises businesses/governments on environmental compliance and sustainability.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "biology"
    ],
    "skills": [],
    "activities": [
      "work-nature",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Government Agricultural Services",
      "Agribusiness",
      "Higher Research (M.Sc/PhD)"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹20 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (B.Sc Agriculture or related)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "agri-environmental-consulting",
    "parentId": "edu-a12-agriculture",
    "stage": "after12",
    "type": "Career",
    "title": "Environmental Consultant",
    "domain": "Agriculture",
    "category": "Agriculture & Environment",
    "subCategory": ""
  },
  {
    "description": "Studies and helps conserve wild animal populations and habitats.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "biology"
    ],
    "skills": [],
    "activities": [
      "work-nature",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Government Agricultural Services",
      "Agribusiness",
      "Higher Research (M.Sc/PhD)"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹20 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (B.Sc Agriculture or related)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "agri-wildlife",
    "parentId": "edu-a12-agriculture",
    "stage": "after12",
    "type": "Career",
    "title": "Wildlife Biologist",
    "domain": "Agriculture",
    "category": "Agriculture & Environment",
    "subCategory": ""
  },
  {
    "description": "Works to protect natural ecosystems and biodiversity.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "biology"
    ],
    "skills": [],
    "activities": [
      "work-nature",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Government Agricultural Services",
      "Agribusiness",
      "Higher Research (M.Sc/PhD)"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹20 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (B.Sc Agriculture or related)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "agri-conservation",
    "parentId": "edu-a12-agriculture",
    "stage": "after12",
    "type": "Career",
    "title": "Conservation Professional",
    "domain": "Agriculture",
    "category": "Agriculture & Environment",
    "subCategory": ""
  },
  {
    "description": "Works on climate research, policy or mitigation projects.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "biology"
    ],
    "skills": [],
    "activities": [
      "work-nature",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Government Agricultural Services",
      "Agribusiness",
      "Higher Research (M.Sc/PhD)"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹20 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (B.Sc Agriculture or related)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "agri-climate-careers",
    "parentId": "edu-a12-agriculture",
    "stage": "after12",
    "type": "Career",
    "title": "Climate Careers",
    "domain": "Agriculture",
    "category": "Agriculture & Environment",
    "subCategory": ""
  },
  {
    "description": "Helps organizations reduce environmental impact and adopt sustainable practices.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [
      "biology"
    ],
    "skills": [],
    "activities": [
      "work-nature",
      "research"
    ],
    "interests": [
      "biology"
    ],
    "strengths": [
      "patience",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Government Agricultural Services",
      "Agribusiness",
      "Higher Research (M.Sc/PhD)"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹20 LPA",
      "note": "Indicative range; varies by experience, employer, location and specialization."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 4,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "4 years (B.Sc Agriculture or related)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "agri-sustainability",
    "parentId": "edu-a12-agriculture",
    "stage": "after12",
    "type": "Career",
    "title": "Sustainability Professional",
    "domain": "Agriculture",
    "category": "Agriculture & Environment",
    "subCategory": ""
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a12-aviation",
    "parentId": null,
    "stage": "after12",
    "type": "Domain",
    "title": "Aviation",
    "domain": "Other",
    "category": "Aviation",
    "subCategory": ""
  },
  {
    "description": "Flies passenger or cargo aircraft, requiring a Commercial Pilot License (CPL).",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [
      "DGCA Exams",
      "CPL"
    ],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "technical",
      "attention-detail",
      "quick-learning"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Captain Roles",
      "Airline Management"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹1 Cr+",
      "note": "Junior roles start modestly; senior commercial pilots/captains sit at the very top of this range."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "1–3 years of specialized training (varies by role)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "aviation-commercial-pilot",
    "parentId": "edu-a12-aviation",
    "stage": "after12",
    "type": "Career",
    "title": "Commercial Pilot",
    "domain": "Other",
    "category": "Aviation",
    "subCategory": ""
  },
  {
    "description": "Trains new pilots, typically requiring significant flying experience.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "technical",
      "attention-detail",
      "quick-learning"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Captain Roles",
      "Airline Management"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹1 Cr+",
      "note": "Junior roles start modestly; senior commercial pilots/captains sit at the very top of this range."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "1–3 years of specialized training (varies by role)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "aviation-flight-instructor",
    "parentId": "edu-a12-aviation",
    "stage": "after12",
    "type": "Career",
    "title": "Flight Instructor",
    "domain": "Other",
    "category": "Aviation",
    "subCategory": ""
  },
  {
    "description": "Inspects, maintains and certifies aircraft for safe operation.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "technical",
      "attention-detail",
      "quick-learning"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Captain Roles",
      "Airline Management"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹1 Cr+",
      "note": "Junior roles start modestly; senior commercial pilots/captains sit at the very top of this range."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "1–3 years of specialized training (varies by role)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "aviation-aircraft-maintenance-engineer",
    "parentId": "edu-a12-aviation",
    "stage": "after12",
    "type": "Career",
    "title": "Aircraft Maintenance Engineer",
    "domain": "Other",
    "category": "Aviation",
    "subCategory": ""
  },
  {
    "description": "Performs hands-on maintenance and repair work on aircraft.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "technical",
      "attention-detail",
      "quick-learning"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Captain Roles",
      "Airline Management"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹1 Cr+",
      "note": "Junior roles start modestly; senior commercial pilots/captains sit at the very top of this range."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "1–3 years of specialized training (varies by role)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "aviation-aircraft-technician",
    "parentId": "edu-a12-aviation",
    "stage": "after12",
    "type": "Career",
    "title": "Aircraft Technician",
    "domain": "Other",
    "category": "Aviation",
    "subCategory": ""
  },
  {
    "description": "Directs aircraft movement to ensure safe and efficient air traffic.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "technical",
      "attention-detail",
      "quick-learning"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Captain Roles",
      "Airline Management"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹1 Cr+",
      "note": "Junior roles start modestly; senior commercial pilots/captains sit at the very top of this range."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "1–3 years of specialized training (varies by role)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "aviation-air-traffic-control",
    "parentId": "edu-a12-aviation",
    "stage": "after12",
    "type": "Career",
    "title": "Air Traffic Controller",
    "domain": "Other",
    "category": "Aviation",
    "subCategory": ""
  },
  {
    "description": "Manages the operations of an airport.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "technical",
      "attention-detail",
      "quick-learning"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Captain Roles",
      "Airline Management"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹1 Cr+",
      "note": "Junior roles start modestly; senior commercial pilots/captains sit at the very top of this range."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "1–3 years of specialized training (varies by role)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "aviation-airport-management",
    "parentId": "edu-a12-aviation",
    "stage": "after12",
    "type": "Career",
    "title": "Airport Manager",
    "domain": "Other",
    "category": "Aviation",
    "subCategory": ""
  },
  {
    "description": "Manages business and operational aspects of the aviation industry.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "technical",
      "attention-detail",
      "quick-learning"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Captain Roles",
      "Airline Management"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹1 Cr+",
      "note": "Junior roles start modestly; senior commercial pilots/captains sit at the very top of this range."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "1–3 years of specialized training (varies by role)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "aviation-aviation-management",
    "parentId": "edu-a12-aviation",
    "stage": "after12",
    "type": "Career",
    "title": "Aviation Management Professional",
    "domain": "Other",
    "category": "Aviation",
    "subCategory": ""
  },
  {
    "description": "Coordinates flight scheduling, ground operations and logistics.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "technical",
      "attention-detail",
      "quick-learning"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Captain Roles",
      "Airline Management"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹1 Cr+",
      "note": "Junior roles start modestly; senior commercial pilots/captains sit at the very top of this range."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "1–3 years of specialized training (varies by role)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "aviation-aviation-operations",
    "parentId": "edu-a12-aviation",
    "stage": "after12",
    "type": "Career",
    "title": "Aviation Operations Professional",
    "domain": "Other",
    "category": "Aviation",
    "subCategory": ""
  },
  {
    "description": "Ensures passenger safety and service during flights.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "work-machines"
    ],
    "interests": [],
    "strengths": [
      "technical",
      "attention-detail",
      "quick-learning"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Captain Roles",
      "Airline Management"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹3 LPA – ₹1 Cr+",
      "note": "Junior roles start modestly; senior commercial pilots/captains sit at the very top of this range."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 3,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "1–3 years of specialized training (varies by role)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "aviation-cabin-crew",
    "parentId": "edu-a12-aviation",
    "stage": "after12",
    "type": "Career",
    "title": "Cabin Crew",
    "domain": "Other",
    "category": "Aviation",
    "subCategory": ""
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a12-hospitality",
    "parentId": null,
    "stage": "after12",
    "type": "Domain",
    "title": "Hospitality & Tourism",
    "domain": "Other",
    "category": "Hospitality",
    "subCategory": ""
  },
  {
    "description": "Prepares and oversees the creation of food in professional kitchens.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people",
      "work-business"
    ],
    "interests": [],
    "strengths": [
      "communication",
      "organization",
      "people"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Management",
      "International Hospitality Roles"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹20 LPA",
      "note": "General Manager and international hotel-chain roles sit at the top end."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3 years (Hotel Management/Tourism degree or diploma)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "hospitality-chef",
    "parentId": "edu-a12-hospitality",
    "stage": "after12",
    "type": "Career",
    "title": "Chef",
    "domain": "Other",
    "category": "Hospitality & Tourism",
    "subCategory": ""
  },
  {
    "description": "Specializes in preparing baked goods such as bread and pastries.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people",
      "work-business"
    ],
    "interests": [],
    "strengths": [
      "communication",
      "organization",
      "people"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Management",
      "International Hospitality Roles"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹20 LPA",
      "note": "General Manager and international hotel-chain roles sit at the top end."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3 years (Hotel Management/Tourism degree or diploma)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "hospitality-baker",
    "parentId": "edu-a12-hospitality",
    "stage": "after12",
    "type": "Career",
    "title": "Baker",
    "domain": "Other",
    "category": "Hospitality & Tourism",
    "subCategory": ""
  },
  {
    "description": "Oversees the operations, staff and guest experience of a hotel.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people",
      "work-business"
    ],
    "interests": [],
    "strengths": [
      "communication",
      "organization",
      "people"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Management",
      "International Hospitality Roles"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹20 LPA",
      "note": "General Manager and international hotel-chain roles sit at the top end."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3 years (Hotel Management/Tourism degree or diploma)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "hospitality-hotel-management-career",
    "parentId": "edu-a12-hospitality",
    "stage": "after12",
    "type": "Career",
    "title": "Hotel Manager",
    "domain": "Other",
    "category": "Hospitality & Tourism",
    "subCategory": ""
  },
  {
    "description": "Manages the daily operations of a restaurant.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people",
      "work-business"
    ],
    "interests": [],
    "strengths": [
      "communication",
      "organization",
      "people"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Management",
      "International Hospitality Roles"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹20 LPA",
      "note": "General Manager and international hotel-chain roles sit at the top end."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3 years (Hotel Management/Tourism degree or diploma)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "hospitality-restaurant-management",
    "parentId": "edu-a12-hospitality",
    "stage": "after12",
    "type": "Career",
    "title": "Restaurant Manager",
    "domain": "Other",
    "category": "Hospitality & Tourism",
    "subCategory": ""
  },
  {
    "description": "Manages operations across hospitality venues such as hotels or resorts.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people",
      "work-business"
    ],
    "interests": [],
    "strengths": [
      "communication",
      "organization",
      "people"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Management",
      "International Hospitality Roles"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹20 LPA",
      "note": "General Manager and international hotel-chain roles sit at the top end."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3 years (Hotel Management/Tourism degree or diploma)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "hospitality-hospitality-management",
    "parentId": "edu-a12-hospitality",
    "stage": "after12",
    "type": "Career",
    "title": "Hospitality Manager",
    "domain": "Other",
    "category": "Hospitality & Tourism",
    "subCategory": ""
  },
  {
    "description": "Plans and executes events from conception to completion.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people",
      "work-business"
    ],
    "interests": [],
    "strengths": [
      "communication",
      "organization",
      "people"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Management",
      "International Hospitality Roles"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹20 LPA",
      "note": "General Manager and international hotel-chain roles sit at the top end."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3 years (Hotel Management/Tourism degree or diploma)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "hospitality-event-management",
    "parentId": "edu-a12-hospitality",
    "stage": "after12",
    "type": "Career",
    "title": "Event Manager",
    "domain": "Other",
    "category": "Hospitality & Tourism",
    "subCategory": ""
  },
  {
    "description": "Plans and coordinates weddings for clients.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people",
      "work-business"
    ],
    "interests": [],
    "strengths": [
      "communication",
      "organization",
      "people"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Management",
      "International Hospitality Roles"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹20 LPA",
      "note": "General Manager and international hotel-chain roles sit at the top end."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3 years (Hotel Management/Tourism degree or diploma)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "hospitality-wedding-planning",
    "parentId": "edu-a12-hospitality",
    "stage": "after12",
    "type": "Career",
    "title": "Wedding Planner",
    "domain": "Other",
    "category": "Hospitality & Tourism",
    "subCategory": ""
  },
  {
    "description": "Advises and books travel arrangements for clients.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people",
      "work-business"
    ],
    "interests": [],
    "strengths": [
      "communication",
      "organization",
      "people"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Management",
      "International Hospitality Roles"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹20 LPA",
      "note": "General Manager and international hotel-chain roles sit at the top end."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3 years (Hotel Management/Tourism degree or diploma)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "hospitality-travel-consultant",
    "parentId": "edu-a12-hospitality",
    "stage": "after12",
    "type": "Career",
    "title": "Travel Consultant",
    "domain": "Other",
    "category": "Hospitality & Tourism",
    "subCategory": ""
  },
  {
    "description": "Leads and informs groups of tourists at destinations.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people",
      "work-business"
    ],
    "interests": [],
    "strengths": [
      "communication",
      "organization",
      "people"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Management",
      "International Hospitality Roles"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹20 LPA",
      "note": "General Manager and international hotel-chain roles sit at the top end."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3 years (Hotel Management/Tourism degree or diploma)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "hospitality-tour-guide",
    "parentId": "edu-a12-hospitality",
    "stage": "after12",
    "type": "Career",
    "title": "Tour Guide",
    "domain": "Other",
    "category": "Hospitality & Tourism",
    "subCategory": ""
  },
  {
    "description": "Manages tourism operations, destinations or programs.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people",
      "work-business"
    ],
    "interests": [],
    "strengths": [
      "communication",
      "organization",
      "people"
    ],
    "workStyles": [],
    "environments": [
      "business-corp"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Senior Management",
      "International Hospitality Roles"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2.5 LPA – ₹20 LPA",
      "note": "General Manager and international hotel-chain roles sit at the top end."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 4,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 4,
    "educationLength": "3 years (Hotel Management/Tourism degree or diploma)",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "hospitality-tourism-management",
    "parentId": "edu-a12-hospitality",
    "stage": "after12",
    "type": "Career",
    "title": "Tourism Manager",
    "domain": "Other",
    "category": "Hospitality & Tourism",
    "subCategory": ""
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a12-sports",
    "parentId": null,
    "stage": "after12",
    "type": "Domain",
    "title": "Sports & Fitness",
    "domain": "Other",
    "category": "Sports",
    "subCategory": ""
  },
  {
    "description": "Competes professionally in a sport, with income from competition, salary and sponsorship.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people"
    ],
    "interests": [],
    "strengths": [
      "patience",
      "quick-learning"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Coaching/Management after competitive career",
      "Sports Business"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "Highly variable",
      "note": "From modest stipends to crore-level contracts/endorsements for top-tier athletes; most sports careers sit well below the top end."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 3,
    "educationLength": "Varies widely — from direct competition to sports-science degrees",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "sports-athlete",
    "parentId": "edu-a12-sports",
    "stage": "after12",
    "type": "Career",
    "title": "Professional Athlete",
    "domain": "Other",
    "category": "Sports & Fitness",
    "subCategory": ""
  },
  {
    "description": "Trains and guides athletes or teams to improve performance.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people"
    ],
    "interests": [],
    "strengths": [
      "patience",
      "quick-learning"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Coaching/Management after competitive career",
      "Sports Business"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "Highly variable",
      "note": "From modest stipends to crore-level contracts/endorsements for top-tier athletes; most sports careers sit well below the top end."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 3,
    "educationLength": "Varies widely — from direct competition to sports-science degrees",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "sports-sports-coach",
    "parentId": "edu-a12-sports",
    "stage": "after12",
    "type": "Career",
    "title": "Sports Coach",
    "domain": "Other",
    "category": "Sports & Fitness",
    "subCategory": ""
  },
  {
    "description": "Guides individuals or groups through fitness and exercise programs.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people"
    ],
    "interests": [],
    "strengths": [
      "patience",
      "quick-learning"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Coaching/Management after competitive career",
      "Sports Business"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "Highly variable",
      "note": "From modest stipends to crore-level contracts/endorsements for top-tier athletes; most sports careers sit well below the top end."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 3,
    "educationLength": "Varies widely — from direct competition to sports-science degrees",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "sports-fitness-trainer",
    "parentId": "edu-a12-sports",
    "stage": "after12",
    "type": "Career",
    "title": "Fitness Trainer",
    "domain": "Other",
    "category": "Sports & Fitness",
    "subCategory": ""
  },
  {
    "description": "Provides one-on-one fitness coaching tailored to individual clients.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people"
    ],
    "interests": [],
    "strengths": [
      "patience",
      "quick-learning"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Coaching/Management after competitive career",
      "Sports Business"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "Highly variable",
      "note": "From modest stipends to crore-level contracts/endorsements for top-tier athletes; most sports careers sit well below the top end."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 3,
    "educationLength": "Varies widely — from direct competition to sports-science degrees",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "sports-personal-trainer",
    "parentId": "edu-a12-sports",
    "stage": "after12",
    "type": "Career",
    "title": "Personal Trainer",
    "domain": "Other",
    "category": "Sports & Fitness",
    "subCategory": ""
  },
  {
    "description": "Teaches yoga practice for fitness, flexibility and wellbeing.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people"
    ],
    "interests": [],
    "strengths": [
      "patience",
      "quick-learning"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Coaching/Management after competitive career",
      "Sports Business"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "Highly variable",
      "note": "From modest stipends to crore-level contracts/endorsements for top-tier athletes; most sports careers sit well below the top end."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 3,
    "educationLength": "Varies widely — from direct competition to sports-science degrees",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "sports-yoga-instructor",
    "parentId": "edu-a12-sports",
    "stage": "after12",
    "type": "Career",
    "title": "Yoga Instructor",
    "domain": "Other",
    "category": "Sports & Fitness",
    "subCategory": ""
  },
  {
    "description": "Manages the business and operational side of sports teams or events.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people"
    ],
    "interests": [],
    "strengths": [
      "patience",
      "quick-learning"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Coaching/Management after competitive career",
      "Sports Business"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "Highly variable",
      "note": "From modest stipends to crore-level contracts/endorsements for top-tier athletes; most sports careers sit well below the top end."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 3,
    "educationLength": "Varies widely — from direct competition to sports-science degrees",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "sports-sports-manager",
    "parentId": "edu-a12-sports",
    "stage": "after12",
    "type": "Career",
    "title": "Sports Manager",
    "domain": "Other",
    "category": "Sports & Fitness",
    "subCategory": ""
  },
  {
    "description": "Analyzes sports performance data and provides commentary or insights.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people"
    ],
    "interests": [],
    "strengths": [
      "patience",
      "quick-learning"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Coaching/Management after competitive career",
      "Sports Business"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "Highly variable",
      "note": "From modest stipends to crore-level contracts/endorsements for top-tier athletes; most sports careers sit well below the top end."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 3,
    "educationLength": "Varies widely — from direct competition to sports-science degrees",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "sports-sports-analyst",
    "parentId": "edu-a12-sports",
    "stage": "after12",
    "type": "Career",
    "title": "Sports Analyst",
    "domain": "Other",
    "category": "Sports & Fitness",
    "subCategory": ""
  },
  {
    "description": "Treats and prevents sports-related injuries.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people"
    ],
    "interests": [],
    "strengths": [
      "patience",
      "quick-learning"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Coaching/Management after competitive career",
      "Sports Business"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "Highly variable",
      "note": "From modest stipends to crore-level contracts/endorsements for top-tier athletes; most sports careers sit well below the top end."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 3,
    "educationLength": "Varies widely — from direct competition to sports-science degrees",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "sports-sports-physiotherapy",
    "parentId": "edu-a12-sports",
    "stage": "after12",
    "type": "Career",
    "title": "Sports Physiotherapist",
    "domain": "Other",
    "category": "Sports & Fitness",
    "subCategory": ""
  },
  {
    "description": "Applies science to improve athletic training and performance.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people"
    ],
    "interests": [],
    "strengths": [
      "patience",
      "quick-learning"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Coaching/Management after competitive career",
      "Sports Business"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "Highly variable",
      "note": "From modest stipends to crore-level contracts/endorsements for top-tier athletes; most sports careers sit well below the top end."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 3,
    "educationLength": "Varies widely — from direct competition to sports-science degrees",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "sports-sports-science",
    "parentId": "edu-a12-sports",
    "stage": "after12",
    "type": "Career",
    "title": "Sports Scientist",
    "domain": "Other",
    "category": "Sports & Fitness",
    "subCategory": ""
  },
  {
    "description": "Creates content covering sports news, analysis or entertainment.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people"
    ],
    "interests": [],
    "strengths": [
      "patience",
      "quick-learning"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Coaching/Management after competitive career",
      "Sports Business"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "Highly variable",
      "note": "From modest stipends to crore-level contracts/endorsements for top-tier athletes; most sports careers sit well below the top end."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 3,
    "educationLength": "Varies widely — from direct competition to sports-science degrees",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "sports-sports-content-creator",
    "parentId": "edu-a12-sports",
    "stage": "after12",
    "type": "Career",
    "title": "Sports Content Creator",
    "domain": "Other",
    "category": "Sports & Fitness",
    "subCategory": ""
  },
  {
    "description": "Competes professionally in competitive video gaming.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people"
    ],
    "interests": [],
    "strengths": [
      "patience",
      "quick-learning"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Coaching/Management after competitive career",
      "Sports Business"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "Highly variable",
      "note": "From modest stipends to crore-level contracts/endorsements for top-tier athletes; most sports careers sit well below the top end."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 3,
    "educationLength": "Varies widely — from direct competition to sports-science degrees",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "sports-esports-player",
    "parentId": "edu-a12-sports",
    "stage": "after12",
    "type": "Career",
    "title": "Esports Player",
    "domain": "Other",
    "category": "Sports & Fitness",
    "subCategory": ""
  },
  {
    "description": "Trains and strategizes with competitive gaming teams.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "help-people"
    ],
    "interests": [],
    "strengths": [
      "patience",
      "quick-learning"
    ],
    "workStyles": [],
    "environments": [
      "outdoor-field"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [
      "Coaching/Management after competitive career",
      "Sports Business"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "Highly variable",
      "note": "From modest stipends to crore-level contracts/endorsements for top-tier athletes; most sports careers sit well below the top end."
    },
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 4,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 3,
    "educationLength": "Varies widely — from direct competition to sports-science degrees",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "sports-esports-coach",
    "parentId": "edu-a12-sports",
    "stage": "after12",
    "type": "Career",
    "title": "Esports Coach",
    "domain": "Other",
    "category": "Sports & Fitness",
    "subCategory": ""
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a12-trades-extra",
    "parentId": null,
    "stage": "afterCollege",
    "type": "Domain",
    "title": "Additional Skilled Trades",
    "domain": "Skilled Trades",
    "category": "Trades",
    "subCategory": ""
  },
  {
    "description": "Diagnoses and repairs smartphones and mobile devices.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Certificate/Diploma (few months to 1–2 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "build-things"
    ],
    "interests": [],
    "strengths": [
      "hands-on",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.5 LPA – ₹6 LPA",
      "note": "Self-employed tradespeople with a strong reputation/client base can earn more."
    },
    "challenges": [],
    "advantages": [
      "Fast entry into paid work",
      "Can go self-employed with experience"
    ],
    "tags": [
      "vocational",
      "skilled-trade"
    ],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 5,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "A few months to 2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "trade-extra-mobile-repair",
    "parentId": "edu-a12-trades-extra",
    "stage": "afterCollege",
    "type": "Career",
    "title": "Mobile Repair Technician",
    "domain": "Skilled Trades",
    "category": "Trade",
    "subCategory": ""
  },
  {
    "description": "Diagnoses and repairs computers and laptops.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Certificate/Diploma (few months to 1–2 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "build-things"
    ],
    "interests": [],
    "strengths": [
      "hands-on",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.5 LPA – ₹6 LPA",
      "note": "Self-employed tradespeople with a strong reputation/client base can earn more."
    },
    "challenges": [],
    "advantages": [
      "Fast entry into paid work",
      "Can go self-employed with experience"
    ],
    "tags": [
      "vocational",
      "skilled-trade"
    ],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 5,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "A few months to 2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "trade-extra-computer-repair",
    "parentId": "edu-a12-trades-extra",
    "stage": "afterCollege",
    "type": "Career",
    "title": "Computer Repair Technician",
    "domain": "Skilled Trades",
    "category": "Trade",
    "subCategory": ""
  },
  {
    "description": "Installs and maintains CCTV and security camera systems.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Certificate/Diploma (few months to 1–2 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "build-things"
    ],
    "interests": [],
    "strengths": [
      "hands-on",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.5 LPA – ₹6 LPA",
      "note": "Self-employed tradespeople with a strong reputation/client base can earn more."
    },
    "challenges": [],
    "advantages": [
      "Fast entry into paid work",
      "Can go self-employed with experience"
    ],
    "tags": [
      "vocational",
      "skilled-trade"
    ],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 5,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "A few months to 2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "trade-extra-cctv-technician",
    "parentId": "edu-a12-trades-extra",
    "stage": "afterCollege",
    "type": "Career",
    "title": "CCTV Technician",
    "domain": "Skilled Trades",
    "category": "Trade",
    "subCategory": ""
  },
  {
    "description": "Makes and alters clothing to fit individual clients.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Certificate/Diploma (few months to 1–2 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "build-things"
    ],
    "interests": [],
    "strengths": [
      "hands-on",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.5 LPA – ₹6 LPA",
      "note": "Self-employed tradespeople with a strong reputation/client base can earn more."
    },
    "challenges": [],
    "advantages": [
      "Fast entry into paid work",
      "Can go self-employed with experience"
    ],
    "tags": [
      "vocational",
      "skilled-trade"
    ],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 5,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "A few months to 2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "trade-extra-tailor",
    "parentId": "edu-a12-trades-extra",
    "stage": "afterCollege",
    "type": "Career",
    "title": "Tailor",
    "domain": "Skilled Trades",
    "category": "Trade",
    "subCategory": ""
  },
  {
    "description": "Cuts, styles and treats hair professionally.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Certificate/Diploma (few months to 1–2 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "build-things"
    ],
    "interests": [],
    "strengths": [
      "hands-on",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.5 LPA – ₹6 LPA",
      "note": "Self-employed tradespeople with a strong reputation/client base can earn more."
    },
    "challenges": [],
    "advantages": [
      "Fast entry into paid work",
      "Can go self-employed with experience"
    ],
    "tags": [
      "vocational",
      "skilled-trade"
    ],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 5,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "A few months to 2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "trade-extra-hair-stylist",
    "parentId": "edu-a12-trades-extra",
    "stage": "afterCollege",
    "type": "Career",
    "title": "Hair Stylist",
    "domain": "Skilled Trades",
    "category": "Trade",
    "subCategory": ""
  },
  {
    "description": "Applies makeup professionally for events, media or personal clients.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Certificate/Diploma (few months to 1–2 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "build-things"
    ],
    "interests": [],
    "strengths": [
      "hands-on",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.5 LPA – ₹6 LPA",
      "note": "Self-employed tradespeople with a strong reputation/client base can earn more."
    },
    "challenges": [],
    "advantages": [
      "Fast entry into paid work",
      "Can go self-employed with experience"
    ],
    "tags": [
      "vocational",
      "skilled-trade"
    ],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 5,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "A few months to 2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "trade-extra-makeup-artist",
    "parentId": "edu-a12-trades-extra",
    "stage": "afterCollege",
    "type": "Career",
    "title": "Makeup Artist",
    "domain": "Skilled Trades",
    "category": "Trade",
    "subCategory": ""
  },
  {
    "description": "Provides skincare, grooming and beauty services.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [
      "Certificate/Diploma (few months to 1–2 years)"
    ],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "build-things"
    ],
    "interests": [],
    "strengths": [
      "hands-on",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "workshop-eng"
    ],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹1.5 LPA – ₹6 LPA",
      "note": "Self-employed tradespeople with a strong reputation/client base can earn more."
    },
    "challenges": [],
    "advantages": [
      "Fast entry into paid work",
      "Can go self-employed with experience"
    ],
    "tags": [
      "vocational",
      "skilled-trade"
    ],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 5,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "A few months to 2 years",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "trade-extra-beauty-professional",
    "parentId": "edu-a12-trades-extra",
    "stage": "afterCollege",
    "type": "Career",
    "title": "Beauty Professional",
    "domain": "Skilled Trades",
    "category": "Trade",
    "subCategory": ""
  },
  {
    "description": "",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [],
    "interests": [],
    "strengths": [],
    "workStyles": [],
    "environments": [],
    "values": [],
    "relatedCareers": [],
    "nextPaths": [],
    "higherStudies": [],
    "earning": null,
    "challenges": [],
    "advantages": [],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 0,
    "communicationLevel": 0,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 0,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "edu-a12-performing-arts",
    "parentId": null,
    "stage": "after12",
    "type": "Domain",
    "title": "Performing Arts & Music",
    "domain": "Creative",
    "category": "Performing Arts",
    "subCategory": ""
  },
  {
    "description": "Performs music vocally live or in recordings, across genres from classical to playback/film.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [
      "art"
    ],
    "strengths": [
      "creativity",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [
      "creativity",
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Performer",
      "Teaching/Training",
      "Choreography or Direction",
      "Content Creation"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "Highly variable — ₹0 to crore-level for top performers",
      "note": "Depends heavily on skill level, reputation, city and whether work is steady employment, gigs, or a mix."
    },
    "challenges": [
      "Income is often irregular, especially early on",
      "Highly competitive to reach top-tier, well-paid work"
    ],
    "advantages": [
      "Direct creative fulfilment",
      "Growing opportunities via films, OTT, weddings, events and social media"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 3,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill/training-based — often years of practice; formal degrees (e.g. BPA, BFA) optional but common",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "perform-singer",
    "parentId": "edu-a12-performing-arts",
    "stage": "after12",
    "type": "Career",
    "title": "Singer / Vocalist",
    "domain": "Creative",
    "category": "Performing Arts",
    "subCategory": ""
  },
  {
    "description": "Records vocals for films, ads and other media, usually performed by actors on-screen.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [
      "art"
    ],
    "strengths": [
      "creativity",
      "technical"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [
      "creativity",
      "income"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Performer",
      "Teaching/Training",
      "Choreography or Direction",
      "Content Creation"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "Highly variable — ₹0 to crore-level for top performers",
      "note": "Depends heavily on skill level, reputation, city and whether work is steady employment, gigs, or a mix."
    },
    "challenges": [
      "Income is often irregular, especially early on",
      "Highly competitive to reach top-tier, well-paid work"
    ],
    "advantages": [
      "Direct creative fulfilment",
      "Growing opportunities via films, OTT, weddings, events and social media"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 3,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill/training-based — often years of practice; formal degrees (e.g. BPA, BFA) optional but common",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "perform-playback-singer",
    "parentId": "edu-a12-performing-arts",
    "stage": "after12",
    "type": "Career",
    "title": "Playback Singer",
    "domain": "Creative",
    "category": "Performing Arts",
    "subCategory": ""
  },
  {
    "description": "Performs music professionally on an instrument, live or in recordings.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [
      "art"
    ],
    "strengths": [
      "creativity",
      "patience"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [
      "creativity",
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Performer",
      "Teaching/Training",
      "Choreography or Direction",
      "Content Creation"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "Highly variable — ₹0 to crore-level for top performers",
      "note": "Depends heavily on skill level, reputation, city and whether work is steady employment, gigs, or a mix."
    },
    "challenges": [
      "Income is often irregular, especially early on",
      "Highly competitive to reach top-tier, well-paid work"
    ],
    "advantages": [
      "Direct creative fulfilment",
      "Growing opportunities via films, OTT, weddings, events and social media"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 3,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill/training-based — often years of practice; formal degrees (e.g. BPA, BFA) optional but common",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "perform-musician-instrumentalist",
    "parentId": "edu-a12-performing-arts",
    "stage": "after12",
    "type": "Career",
    "title": "Musician / Instrumentalist",
    "domain": "Creative",
    "category": "Performing Arts",
    "subCategory": ""
  },
  {
    "description": "Writes original musical scores for songs, films, ads or albums.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content",
      "writing"
    ],
    "interests": [
      "art"
    ],
    "strengths": [
      "creativity",
      "research"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [
      "creativity",
      "innovation"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Performer",
      "Teaching/Training",
      "Choreography or Direction",
      "Content Creation"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "Highly variable — ₹0 to crore-level for top performers",
      "note": "Depends heavily on skill level, reputation, city and whether work is steady employment, gigs, or a mix."
    },
    "challenges": [
      "Income is often irregular, especially early on",
      "Highly competitive to reach top-tier, well-paid work"
    ],
    "advantages": [
      "Direct creative fulfilment",
      "Growing opportunities via films, OTT, weddings, events and social media"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 3,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill/training-based — often years of practice; formal degrees (e.g. BPA, BFA) optional but common",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "perform-music-composer",
    "parentId": "edu-a12-performing-arts",
    "stage": "after12",
    "type": "Career",
    "title": "Music Composer",
    "domain": "Creative",
    "category": "Performing Arts",
    "subCategory": ""
  },
  {
    "description": "Performs dance professionally — classical, contemporary, folk or commercial styles.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [
      "art"
    ],
    "strengths": [
      "creativity",
      "hands-on"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [
      "creativity",
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Performer",
      "Teaching/Training",
      "Choreography or Direction",
      "Content Creation"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "Highly variable — ₹0 to crore-level for top performers",
      "note": "Depends heavily on skill level, reputation, city and whether work is steady employment, gigs, or a mix."
    },
    "challenges": [
      "Income is often irregular, especially early on",
      "Highly competitive to reach top-tier, well-paid work"
    ],
    "advantages": [
      "Direct creative fulfilment",
      "Growing opportunities via films, OTT, weddings, events and social media"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 3,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill/training-based — often years of practice; formal degrees (e.g. BPA, BFA) optional but common",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "perform-dancer",
    "parentId": "edu-a12-performing-arts",
    "stage": "after12",
    "type": "Career",
    "title": "Dancer",
    "domain": "Creative",
    "category": "Performing Arts",
    "subCategory": ""
  },
  {
    "description": "Designs and teaches dance sequences for performances, films or events.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content",
      "manage-projects"
    ],
    "interests": [
      "art"
    ],
    "strengths": [
      "creativity",
      "leadership"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [
      "creativity",
      "leadership"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Performer",
      "Teaching/Training",
      "Choreography or Direction",
      "Content Creation"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "Highly variable — ₹0 to crore-level for top performers",
      "note": "Depends heavily on skill level, reputation, city and whether work is steady employment, gigs, or a mix."
    },
    "challenges": [
      "Income is often irregular, especially early on",
      "Highly competitive to reach top-tier, well-paid work"
    ],
    "advantages": [
      "Direct creative fulfilment",
      "Growing opportunities via films, OTT, weddings, events and social media"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 3,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill/training-based — often years of practice; formal degrees (e.g. BPA, BFA) optional but common",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "perform-choreographer",
    "parentId": "edu-a12-performing-arts",
    "stage": "after12",
    "type": "Career",
    "title": "Choreographer",
    "domain": "Creative",
    "category": "Performing Arts",
    "subCategory": ""
  },
  {
    "description": "Performs roles in film, television, theatre or web content.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [
      "art"
    ],
    "strengths": [
      "creativity",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [
      "creativity",
      "freedom"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Performer",
      "Teaching/Training",
      "Choreography or Direction",
      "Content Creation"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "Highly variable — ₹0 to crore-level for top performers",
      "note": "Depends heavily on skill level, reputation, city and whether work is steady employment, gigs, or a mix."
    },
    "challenges": [
      "Income is often irregular, especially early on",
      "Highly competitive to reach top-tier, well-paid work"
    ],
    "advantages": [
      "Direct creative fulfilment",
      "Growing opportunities via films, OTT, weddings, events and social media"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 3,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill/training-based — often years of practice; formal degrees (e.g. BPA, BFA) optional but common",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "perform-actor",
    "parentId": "edu-a12-performing-arts",
    "stage": "after12",
    "type": "Career",
    "title": "Actor",
    "domain": "Creative",
    "category": "Performing Arts",
    "subCategory": ""
  },
  {
    "description": "Performs and/or produces live stage productions.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content"
    ],
    "interests": [
      "art"
    ],
    "strengths": [
      "creativity",
      "communication"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [
      "creativity",
      "social-impact"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Performer",
      "Teaching/Training",
      "Choreography or Direction",
      "Content Creation"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "freelance",
      "range": "Highly variable — ₹0 to crore-level for top performers",
      "note": "Depends heavily on skill level, reputation, city and whether work is steady employment, gigs, or a mix."
    },
    "challenges": [
      "Income is often irregular, especially early on",
      "Highly competitive to reach top-tier, well-paid work"
    ],
    "advantages": [
      "Direct creative fulfilment",
      "Growing opportunities via films, OTT, weddings, events and social media"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 3,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill/training-based — often years of practice; formal degrees (e.g. BPA, BFA) optional but common",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "perform-theatre-artist",
    "parentId": "edu-a12-performing-arts",
    "stage": "after12",
    "type": "Career",
    "title": "Theatre Artist",
    "domain": "Creative",
    "category": "Performing Arts",
    "subCategory": ""
  },
  {
    "description": "Teaches singing or an instrument to students of various levels.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content",
      "teach",
      "help-people"
    ],
    "interests": [
      "art"
    ],
    "strengths": [
      "creativity",
      "patience",
      "teaching"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [
      "creativity",
      "stability"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Performer",
      "Teaching/Training",
      "Choreography or Direction",
      "Content Creation"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2 LPA – ₹15 LPA",
      "note": "Depends heavily on skill level, reputation, city and whether work is steady employment, gigs, or a mix."
    },
    "challenges": [
      "Income is often irregular, especially early on",
      "Highly competitive to reach top-tier, well-paid work"
    ],
    "advantages": [
      "Direct creative fulfilment",
      "Growing opportunities via films, OTT, weddings, events and social media"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 3,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill/training-based — often years of practice; formal degrees (e.g. BPA, BFA) optional but common",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "perform-music-teacher",
    "parentId": "edu-a12-performing-arts",
    "stage": "after12",
    "type": "Career",
    "title": "Music Teacher",
    "domain": "Creative",
    "category": "Performing Arts",
    "subCategory": ""
  },
  {
    "description": "Teaches dance technique and choreography to students of various levels.",
    "simpleExplanation": "",
    "suitableStages": [],
    "educationPath": [],
    "eligibility": [],
    "entranceExams": [],
    "degrees": [],
    "specializations": [],
    "subjects": [],
    "skills": [],
    "activities": [
      "create-content",
      "teach",
      "help-people"
    ],
    "interests": [
      "art"
    ],
    "strengths": [
      "creativity",
      "patience",
      "teaching"
    ],
    "workStyles": [],
    "environments": [
      "creative-studio"
    ],
    "values": [
      "creativity",
      "stability"
    ],
    "relatedCareers": [],
    "nextPaths": [
      "Senior/Lead Performer",
      "Teaching/Training",
      "Choreography or Direction",
      "Content Creation"
    ],
    "higherStudies": [],
    "earning": {
      "country": "India",
      "type": "salary",
      "range": "₹2 LPA – ₹15 LPA",
      "note": "Depends heavily on skill level, reputation, city and whether work is steady employment, gigs, or a mix."
    },
    "challenges": [
      "Income is often irregular, especially early on",
      "Highly competitive to reach top-tier, well-paid work"
    ],
    "advantages": [
      "Direct creative fulfilment",
      "Growing opportunities via films, OTT, weddings, events and social media"
    ],
    "tags": [],
    "mathLevel": 0,
    "biologyLevel": 0,
    "technologyLevel": 0,
    "creativityLevel": 5,
    "communicationLevel": 3,
    "leadershipLevel": 0,
    "researchLevel": 0,
    "practicalLevel": 3,
    "theoreticalLevel": 0,
    "peopleInteractionLevel": 0,
    "educationLength": "Skill/training-based — often years of practice; formal degrees (e.g. BPA, BFA) optional but common",
    "riskLevel": "medium",
    "stabilityLevel": "medium",
    "entrepreneurshipLevel": "low",
    "id": "perform-dance-teacher",
    "parentId": "edu-a12-performing-arts",
    "stage": "after12",
    "type": "Career",
    "title": "Dance Teacher",
    "domain": "Creative",
    "category": "Performing Arts",
    "subCategory": ""
  }
]

// ---------------------------------------------------------------------------
// Lookup helpers
// ---------------------------------------------------------------------------
export const DB_BY_ID = Object.fromEntries(CAREER_DB.map((n) => [n.id, n]));

export function getNode(id) {
  return DB_BY_ID[id] || null;
}

export function childrenOf(id) {
  return CAREER_DB.filter((n) => n.parentId === id);
}

export function ancestorsOf(id) {
  const chain = [];
  let node = getNode(id);
  while (node && node.parentId) {
    node = getNode(node.parentId);
    if (node) chain.unshift(node);
  }
  return chain;
}

export function domainsOf(stage) {
  return CAREER_DB.filter((n) => n.stage === stage && n.parentId === null);
}

export function nodesByStage(stage) {
  return CAREER_DB.filter((n) => n.stage === stage);
}

export function careersOnly() {
  return CAREER_DB.filter((n) => n.type === "Career" || n.type === "Specialization");
}

export function searchDatabase(query) {
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  // Word-by-word matching (every word must appear somewhere) instead of exact-phrase substring
  // matching — "straighten teeth" should find "Straightens teeth..." and "bones and joints"
  // should find "...bone, joint, ligament..." even though the exact phrase never appears verbatim.
  // Also tries a simple singular/plural variant of each word ("bones" <-> "bone").
  function wordMatches(haystack, w) {
    if (haystack.includes(w)) return true;
    if (w.length > 3 && w.endsWith("s") && haystack.includes(w.slice(0, -1))) return true;
    if (w.length > 2 && haystack.includes(w + "s")) return true;
    return false;
  }
  return CAREER_DB
    .map((n) => {
      const title = n.title.toLowerCase();
      const haystack = `${title} ${n.description.toLowerCase()} ${n.domain.toLowerCase()} ${n.category.toLowerCase()}`;
      if (!words.every((w) => wordMatches(haystack, w))) return null;
      const rank = title.startsWith(words[0]) ? 0 : title.includes(words[0]) ? 1 : 2;
      return { node: n, rank };
    })
    .filter(Boolean)
    .sort((a, b) => a.rank - b.rank)
    .map((r) => r.node);
}

// Quick integrity check — safe to call in dev; does nothing in production.
export function validateDatabase() {
  const ids = new Set(CAREER_DB.map((n) => n.id));
  const problems = [];
  for (const n of CAREER_DB) {
    if (n.parentId && !ids.has(n.parentId)) problems.push(`Dangling parentId: ${n.id} -> ${n.parentId}`);
    if (!Object.values(STAGE_IDS).includes(n.stage)) problems.push(`Invalid stage: ${n.id} -> ${n.stage}`);
  }
  return problems;
}
