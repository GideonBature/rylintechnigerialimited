export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (p: string) => `${basePath}${p}`;

export const company = {
  name: "Rylin Tech Nigeria Limited",
  short: "Rylin Tech",
  rc: "RC 1809740",
  rcNumber: "1809740",
  address: "No. 6 Deraheems Street, Karatudu Gonin-Gora, Kaduna, Kaduna State",
  addressLines: ["No. 6 Deraheems Street,", "Karatudu Gonin-Gora,", "Kaduna, Kaduna State"],
  email: "rylintech@gmail.com",
  phones: [
    { display: "+234 814 080 2333", tel: "+2348140802333" },
    { display: "+234 802 364 0122", tel: "+2348023640122" },
  ],
  incorporated: "24 June 2021",
  map: "https://www.google.com/maps/search/?api=1&query=Deraheems+Street+Karatudu+Gonin+Gora+Kaduna",
};

export const stats = [
  { v: "5", l: "integrated divisions under one accountable company" },
  { v: "₦753M+", l: "in awarded contracts documented in our company profile" },
  { v: "2021", l: "incorporated under CAMA · RC 1809740" },
  { v: "8", l: "statutory certificates & registrations on file" },
];

export const divisions = [
  {
    id: "construction", n: "01", t: "Construction & Engineering", tag: "Buildings, structures, infrastructure",
    d: "Residential, commercial and industrial buildings, structural engineering, environmental and hydraulic works, water treatment, geotechnical investigation and foundations, infrastructure, renovation and rehabilitation — executed to safety standards, regulation and accepted best practice.",
    pts: ["Residential, commercial & industrial buildings", "Structural engineering works", "Environmental & hydraulic engineering, water treatment", "Geotechnical investigation & foundation works", "Infrastructure development", "Renovation & rehabilitation"],
  },
  {
    id: "consultancy", n: "02", t: "Consultancy", tag: "Advice from feasibility to completion",
    d: "Professional advisory that guides a client through every stage of a project, with technical accuracy, financial prudence and successful implementation.",
    pts: ["Feasibility studies", "Engineering design & structural analysis", "Project planning", "Contract administration", "Procurement advisory", "Overall project management"],
  },
  {
    id: "ict", n: "03", t: "Computer IT / ICT", tag: "Infrastructure, software, security",
    d: "A dedicated ICT division serving corporate organisations, government institutions and private clients — and wiring technology into construction so projects are documented, transparent and monitored in real time.",
    pts: ["IT infrastructure installation & maintenance", "Network design & management", "Software installation & integration", "Database management systems", "Website development & hosting", "Cybersecurity support", "CCTV & surveillance systems", "Solar-powered ICT solutions"],
  },
  {
    id: "supplies", n: "04", t: "General Supplies & Procurement", tag: "Sourcing, logistics, quality checks",
    d: "Engineering materials, industrial equipment, electrical and mechanical components, office equipment and ICT tools — sourced and delivered with logistics coordination, supply-chain management and quality verification.",
    pts: ["Engineering materials", "Industrial equipment", "Electrical & mechanical components", "Office equipment & ICT tools", "Furniture and school supplies", "Quality-verified delivery"],
  },
  {
    id: "contracts", n: "05", t: "General Contracts", tag: "Public & private sector",
    d: "Comprehensive contract solutions for government and private clients, under one structure, so there are fewer hand-offs between clients, consultants, contractors and technical advisers.",
    pts: ["Government & agency contracts", "Private-sector contracts", "Single point of accountability", "Planning through completion"],
  },
];

export const principles = [
  { t: "One structure, one accountable team", d: "Founded to cut the coordination problems between clients, consultants, contractors and technical advisers by offering a broad spectrum of services under one roof." },
  { t: "Technology on every site", d: "ICT is built into our engineering and construction work, improving efficiency, communication, monitoring, documentation and real-time project oversight." },
  { t: "Quality and safety are not optional", d: "Structured inspection, testing and compliance checks, with safety built into every operation to protect people and project assets." },
];

export const steps = [
  { t: "Plan", d: "Feasibility, engineering design, structural analysis and procurement advisory before work starts." },
  { t: "Assign", d: "Every project gets a qualified project manager for daily supervision, cost control, scheduling and client communication." },
  { t: "Build & install", d: "Technical teams execute with inspection systems and testing procedures, backed by digital tools and standard operating procedures." },
  { t: "Verify & hand over", d: "Compliance checks against contractual specifications, then handover with a certificate of practical completion." },
];

export const projects = [
  { client: "Benue State Universal Basic Education Board (SUBEB)", title: "Procurement of 80 steel double bed bunks with accessories — UBEC Smart School, Adaka, Makurdi", ref: "SUBEB/SCH/PRO/FIN/1483/1", date: "29 Apr 2026", value: 102445800, term: "3 months", status: "Awarded", sector: "Supply · Public" },
  { client: "Benue State Universal Basic Education Board (SUBEB)", title: "Construction and distribution of 2-seater dual desks (steel/wood) in 10 selected schools", ref: "SUBEB/SCH/PRO/FIN/1426/I", date: "11 Aug 2025", value: 97770660.46, term: "3 months", status: "Awarded", sector: "Supply · Public" },
  { client: "Brains & Hammers", title: "Renovation / rehabilitation of 3 no. 4-bedroom duplexes at APO 3, Abuja", ref: "Award 13 Oct 2022", date: "Oct 2022", value: 185500000, term: "3 months", status: "Completed · Jan 2023", sector: "Construction · Private" },
  { client: "Kaduna State Ministry of Works and Development", title: "Construction of administrative block complex, Primer Cap Production Line, Kachia", ref: "Award 12 Jul 2022", date: "Jul 2022", value: 367848675, term: "6 months", status: "Completed · Feb 2023", sector: "Construction · Public" },
];

export const fleet = [
  { n: 12, l: "Excavators" },
  { n: 6, l: "Pay-loaders" },
  { n: 6, l: "Concrete pumps (30 m³/hr)" },
  { n: 4, l: "Graders" },
  { n: 3, l: "Tilting concrete mixers" },
  { n: 2, l: "Levelling & survey instruments" },
];

export const credentials = [
  { k: "CAC", t: "Certificate of Incorporation", d: "RC 1809740 · 24 June 2021" },
  { k: "FIRS", t: "Tax Clearance Certificate" },
  { k: "PENCOM", t: "Pension compliance" },
  { k: "ITF", t: "Industrial Training Fund" },
  { k: "NSITF", t: "Employees' Compensation" },
  { k: "BPP", t: "Bureau of Public Procurement" },
  { k: "KADPPA", t: "Kaduna procurement authority" },
  { k: "BPC", t: "Business premises certificate" },
];

export const gallery = [
  { src: "/images/duplex-front.jpg", alt: "Two-storey duplex with stone and render finish and a grey steel gate, Abuja", cap: "Duplex rehabilitation · APO 3, Abuja" },
  { src: "/images/villa.jpg", alt: "Contemporary single-storey villa with paved driveway and palm trees", cap: "Residential delivery" },
  { src: "/images/duplex-gate.jpg", alt: "Modern two-storey home with feature wall and black gate", cap: "Residential delivery" },
  { src: "/images/duplex-side.jpg", alt: "Side view of a two-storey duplex with brick feature panel", cap: "Residential delivery" },
];

export const fmtNaira = (n: number) => "₦" + Math.round(n).toLocaleString("en-NG");
