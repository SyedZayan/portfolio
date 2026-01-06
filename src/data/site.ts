export const site = {
  name: "Syed Zayan Ali",
  title: "Python Developer",
  subtitle: "ML • Web Scraping • Dashboards",
  location: "Pakistan (Remote)",
  email: "zayanali2003@gmail.com",
  socials: {
    github: "https://github.com/SyedZayan",
    linkedin: "https://www.linkedin.com/in/syed-zayanali/",
  },
};


export const skills = [
  "Python", "Pandas", "NumPy", "Web Scraping (Selenium/BS4)",
  "SQL", "APIs (FastAPI)", "Dashboards (Plotly/Dash)", "ML (sklearn)", "HTML","CSS",
];

export const services = [
  {
    icon: "🕸️",
    title: "Web Scraping & Data Extraction (Playwright/Selenium)",
    desc: "I extract large-scale data from websites, directories, and portals and deliver clean, structured Excel/CSV outputs ready for analysis or uploading.",
    bestFor: "Lead lists, product catalogs, property listings, competitor pricing, business directories",
    deliverables: [
      "Automated scraper (Python)",
      "Cleaned dataset (Excel/CSV)",
      "Folder-wise structured exports",
      "Re-run instructions / documentation",
    ],
  },
  {
    icon: "📊",
    title: "Dashboards & Business Reporting (Flask / SQL Server)",
    desc: "I build custom dashboards for operations and finance - with KPIs, filters, exports, role-based access, and reliable database-backed reporting.",
    bestFor: "Sales reporting, purchases, expenses, ledger tracking, inventory/valuation reports",
    deliverables: [
      "Dashboard UI + reports",
      "Database integration (SQL Server)",
      "Login + roles (if required)",
      "Deployment guide (local/cloud)",
    ],
  },
  {
    icon: "⚙️",
    title: "Python Automation & Data Pipelines (Excel/CSV/SQL)",
    desc: "I automate repetitive workflows: cleaning messy files, merging datasets, transforming formats, scheduled exports, and report generation.",
    bestFor: "Excel automation, recurring reports, ETL pipelines, data cleaning & transformation",
    deliverables: [
      "Automation script/tool",
      "Validation checks + error handling",
      "Output templates (Excel/CSV)",
      "Support for running again",
    ],
  },
  {
    icon: "🤖",
    title: "Machine Learning & Text Analytics (TF-IDF / ML Models)",
    desc: "I develop ML prototypes for classification/regression and text analytics - including feature engineering, model training, evaluation, and research-style reporting.",
    bestFor: "Text classification, authorship detection, churn/label prediction, baseline ML experiments",
    deliverables: [
      "ML notebook + pipeline",
      "Evaluation metrics + comparison",
      "Feature engineering (TF-IDF etc.)",
      "Technical report / documentation",
    ],
  },
];


export const projects = [
  {
    title: "120K Rows Web Scraping Automation (Playwright)",
    problem:
      "Client needed large-scale data extraction from ~500 pages where content was spread across multiple sections per page.",
    solution:
      "Built a Python Playwright automation to navigate pages, extract multi-section data reliably, clean unwanted fields, and export structured Excel files.",
    impact:
      "Extracted ~120,000 rows with consistent formatting. Delivered cleaned, organized output files in proper folders for immediate use.",
    highlights: [
      "~120,000 rows extracted",
      "~500 pages automated",
      "Multi-section parsing + cleaning",
      "Structured Excel export + folder organization",
    ],
    tech: ["Python", "Playwright", "Pandas", "Excel Automation"],
  },
  {
    title: "Poultry Farm ERP Dashboard (Flask + SQL Server)",
    problem:
      "Farm required a centralized system to manage accounts and operations (sales, purchases, expenses) with controlled access and reliable reporting.",
    solution:
      "Designed and developed a dashboard web app with authentication, roles, ledger entries, and core modules including Sales, Purchase, and Expense flows. Implemented FIFO logic for inventory/valuation workflows.",
    impact:
      "Enabled streamlined daily operations and accurate record keeping with a single system hosted on a local SQL Server environment.",
    highlights: [
      "Login + role-based access",
      "Ledger + Sales/Purchase/Expense modules",
      "SQL Server hosted on local server",
      "FIFO logic implementation",
    ],
    tech: ["Python", "Flask", "SQL Server", "HTML/CSS/JS"],
  },
  {
    title: "Authorship Detection Dissertation (Textual Analysis + ML/DL)",
    problem:
      "Needed to identify the author of text documents using textual features and machine learning/deep learning approaches.",
    solution:
      "Conducted end-to-end research: preprocessing, TF-IDF feature engineering, model training and evaluation across multiple algorithms, and dissertation write-up with experiments and results.",
    impact:
      "Delivered a complete research dissertation with comparative analysis across ML/DL models and documented methodology.",
    highlights: [
      "TF-IDF feature engineering",
      "Model comparison + evaluation",
      "Research methodology + dissertation",
      "End-to-end pipeline",
    ],
    tech: ["Python", "TF-IDF", "SVM", "Random Forest", "XGBoost", "Deep Learning"],
  },
];

export const stats = [
  { label: "Fast response", value: "< 12 hrs" },
  { label: "Deliverables", value: "Code + Docs" },
  { label: "Focus", value: "Python automation" },
  { label: "Work style", value: "Milestone-based" },
];

export const processSteps = [
  {
    title: "Requirements & Discovery",
    desc: "We start with requirements gathering: goal, data source/website, expected output (Excel/CSV/dashboard), and success criteria.",
  },
  {
    title: "Scope, Milestones & Estimate",
    desc: "I confirm project scope, timeline, milestones, and deliverables (code + dataset + documentation) so everything is clear before development.",
  },
  {
    title: "Development & Implementation",
    desc: "I build the solution in Python (web scraping, automation, dashboards, or ML prototype) with clean structure, logging, and error handling.",
  },
  {
    title: "Testing, QA & Refinements",
    desc: "We validate results with sample outputs, fix edge cases, and refine until the data quality and workflow match your requirements.",
  },
  {
    title: "Delivery, Deployment & Support",
    desc: "You receive final files, structured outputs, and a run guide. If needed, I help deploy (local/cloud) and provide post-delivery support.",
  },
];


export const testimonials = [
  {
    name: "Client / Colleague Name",
    role: "Role or Company",
    text: "Affan delivered exactly what we needed. Clear communication and clean output files.",
  },
  {
    name: "Client / Colleague Name",
    role: "Role or Company",
    text: "Very fast turnaround. The automation saved us hours every week.",
  },
];

export const faqs = [
  {
    q: "What do you need from me to start?",
    a: "Your target website/data source, expected output format (Excel/CSV/dashboard), and any examples of what “correct” looks like.",
  },
  {
    q: "Do you provide the full code?",
    a: "Yes — clean code + documentation + how to run it again (so you’re not dependent on me).",
  },
  {
    q: "Can you automate daily/weekly reports?",
    a: "Yes. I can schedule runs and auto-export to Excel/Google Drive/email (based on your setup).",
  },
  {
    q: "Do you do fixed price or hourly?",
    a: "Both. Small tasks can be fixed-price. Larger work is milestone-based so you stay in control.",
  },
];
