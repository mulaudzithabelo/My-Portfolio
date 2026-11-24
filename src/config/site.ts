/**
 * Professional profile content for Thabelo Andrew Mulaudzi.
 * Curated from details supplied by the portfolio owner.
 * Empty URLs are deliberately hidden rather than displayed as broken buttons.
 */
export const site = {
  name: "Thabelo Andrew Mulaudzi",
  role: "Computer Science Honours Candidate · Student Researcher",
  location: "South Africa",
  email: "mulaudzithabelo82@gmail.com", // Add a public contact email before publishing an email link.
  links: {
    linkedin: "https://www.linkedin.com/in/thabelo-andrew-mulaudzi-5aa4a2215/",
    instagram: "https://www.instagram.com/_andrewthabelo?jplx=cDRsd2F5aTJqcnBy", // Optional: Add your public Instagram profile URL.
    facebook: "https://www.facebook.com/thabelo.andrew.mulaudzi", // Optional: Add your public Facebook profile URL.
    github: "https://github.com/mulaudzithabelo", // Add your public GitHub profile URL.
    DSFSI: "https://www.dsfsi.co.za/members/thabelo-andrew-mulaudzi/",
    twitter: "https://x.com/thabelo_02?s=11", // Optional: Add your public Twitter profile URL.
    scholar: "", // Optional: Google Scholar profile URL.
  },
  hero: {
    eyebrow: "Hello, I'm Thabelo Andrew Mulaudzi",
    headline: "Building practical solutions with data and technology.",
    summary:
      "Computer Science graduate, Computer Science honours student and student researcher with interests in machine learning, natural language processing, cybersecurity and software development.",
  },
  about: [
    "I'm Thabelo Andrew Mulaudzi, a Computer Science Honours candidate at the University of Pretoria, based in Gauteng, South Africa. I am passionate about programming, web development, and building scalable solutions to address real-world problems.",
    "I hold an undergraduate degree from the University of Venda in Limpopo. Since 2026, I have been part of the Data Science for Social Impact (DSFSI) research group as a student researcher, focusing on Natural Language Processing (NLP) and Aspect-Based Sentiment Analysis (ABSA).",
    "My passion for continuous learning drives me to expand my technical expertise, explore emerging technologies, and stay up to date with the latest industry trends and development frameworks.",
  ],
  education: [
    {
      qualification: "Bachelor of Science Honours in Computer Science",
      focus: "Postgraduate degree",
      institution: "University of Pretoria",
      status: "Currently pursuing",
    },
    {
      qualification: "Bachelor of Science in Computer Science",
      focus: "Undergraduate degree",
      institution: "University of Venda",
      status: "Completed",
    },
  ],
  research: {
    role: "Student Researcher",
    group: "Data Science for Social Impact (DSFSI)",
    institution: "University of Pretoria",
    profileUrl: "https://www.dsfsi.co.za/members/thabelo-andrew-mulaudzi/",
    topic: "Aspect-Based Sentiment Analysis of Higher-Education Student Feedback",
    description:
      "Investigating NLP approaches for identifying both explicit and implicit aspects in course, teaching staff and university reviews, with the goal of understanding student opinions at a more detailed level than overall sentiment alone.",
    highlights: [
      "Explore machine learning and transformer-based approaches such as BERT, Bi-LSTM, T5 and RoBERTa.",
      "Study explicit aspects, implicit aspects and reviews that contain both types.",
      "Evaluate and compare models using reproducible experiments and classification metrics.",
      "Consider how fine-grained feedback analysis can support decisions across higher education.",
    ],
    // No thesis title, publication, supervisor, research start date or award has been asserted.
    publications: [] as { title: string; venue: string; year: string; url?: string }[],
  },
  projects: [
    {
      id: "insider-threat",
      category: "Machine Learning · Cybersecurity",
      title: "AI-Powered Threat Detection System",
      period: "Feb 2026 – May 2026",
      description:
        "The AI-Powered Insider Threat Detection System is a web-based application developed to identify potentially malicious insider activity from employee behavioural data using machine learning. Built with Python and Streamlit, the system allows users to upload CSV datasets or analyze sample employee profiles, automatically preprocessing the data and generating risk predictions using an XGBoost model. To promote transparency, it integrates SHAP explainability to highlight the key factors influencing each prediction and presents interactive visualizations, including risk scores, confidence levels, model performance metrics, and confusion matrices. This project demonstrates the application of software engineering principles, machine learning, and explainable AI to support informed cybersecurity decision-making.",
      highlights: [
        "Import CSV datasets or analyse example employee profiles",
        "Preprocess uploaded data and generate risk predictions",
        "Explain model outputs using SHAP feature contributions",
        "Explore risk scores, confidence levels, performance metrics and confusion matrices",
      ],
      technologies: ["Python", "Streamlit", "XGBoost", "SHAP", "Machine Learning"],
      repositoryUrl: "",
      demoLabel: "Streamlit",
      demoUrl: "https://ai-powered-insider-threat-detection-r0fz.onrender.com/",
    },
    {
      id: "csv-converter",
      category: "Web Development · Data Processing",
      title: "CSV-to-HTML Table Converter",
      period: "May 2025 – Jun 2025",
      description:
        "The CSV to HTML Table Converter is a simple web tool that lets you quickly turn CSV files into clean, interactive HTML tables. You can upload a CSV by dragging and dropping, selecting a file, or using a URL, and the data is instantly displayed in table form. The tool includes useful features like filtering, sorting, pagination, and even chart creation for visualization. It also allows exporting results in formats such as JSON, Excel, PDF, or plain HTML, making it practical for both data analysis and sharing.",
      highlights: [
        "Load CSV data by drag-and-drop, file selection or URL",
        "Search, filter, sort and paginate table contents",
        "Create charts to visualise the data",
        "Export to JSON, Excel, PDF or HTML",
      ],
      technologies: [
        "HTML",
        "JavaScript",
        "CSV",
        "Interactive Tables",
        "Data Visualisation",
        "Web Development",
      ],
      repositoryUrl: "",
      demoLabel: "CSV to HTML Table Converter",
      demoUrl: "https://csvfile-to-htmltable-converter.netlify.app/",
    },
  ],
  gallery: [
    {
      collection: "Research",
      src: "/gallery/research/dsfsi-research-group.jpeg",
      alt: "Students and researchers gathered outside a University of Pretoria building with a clock tower.",
      caption:
        "With the Data Science for Social Impact (DSFSI) community at the University of Pretoria during the 2026 Lab Orientation and Induction.",
    },
    {
      collection: "Research",
      src: "/gallery/research/research.jpeg",
      alt: "Photo from Thabelo's research journey.",
      caption:
        "Attending lab orientation and induction with the Data Science for Social Impact (DSFSI) research group at the University of Pretoria.",
    },
    {
      collection: "Research",
      src: "/gallery/research/research-poster-day.jpeg",
      alt: "Photo from research poster day.",
      caption: "Presenting our research project during the University of Pretoria's Poster Day.",
    },
    {
      collection: "Research",
      src: "/gallery/research/research-1.jpeg",
      alt: "Photo from Thabelo's research journey.",
      caption: "Attending a lecture on Finding and Evaluating Relevant Academic Literature.",
    },
    {
      collection: "Refreshment",
      src: "/gallery/refreshment/refreshment-1.jpeg",
      alt: "Refreshment gathering photo 1.",
      caption: "Taking a study break to grab a Frappuccino.",
    },
    {
      collection: "Refreshment",
      src: "/gallery/refreshment/refreshment-2.jpeg",
      alt: "Refreshment gathering photo 2.",
      caption: "Having a cappuccino and a cookie.",
    },
    {
      collection: "Refreshment",
      src: "/gallery/refreshment/refreshment-3.jpeg",
      alt: "Refreshment gathering photo 3.",
      caption: "Sipping on a cappuccino",
    },
    {
      collection: "Refreshment",
      src: "/gallery/refreshment/refreshment-4.jpeg",
      alt: "Refreshment gathering photo 4.",
      caption: "A little dose of caffeine",
    },
    {
      collection: "Refreshment",
      src: "/gallery/refreshment/refreshment-5.jpeg",
      alt: "Refreshment gathering photo 5.",
      caption: "Starbucks my dearr!",
    },
    {
      collection: "Refreshment",
      src: "/gallery/refreshment/refreshment-6.jpeg",
      alt: "Refreshment gathering photo 6.",
      caption: "Even the walls have something inspiring to say.",
    },
  ] as {
    collection: string;
    src: string;
    alt: string;
    caption: string;
  }[],
  skills: [
    {
      title: "Programming Languages",
      items: ["Python", "TypeScript", "JavaScript", "HTML", "CSS", "Java", "SQL", "C++"],
    },
    {
      title: "Tools & Models",
      items: ["MySQL", "Streamlit", "BERT", "Bi-LSTM", "T5", "RoBERTa", "XGBoost", "SHAP"],
    },
    {
      title: "Concepts & Domains",
      items: [
        "CSV Processing",
        "Machine Learning",
        "Aspect-Based Sentiment Analysis",
        "Data Preprocessing",
        "Data Visualisation",
        "Interactive Web Tools",
        "Model Evaluation",
        "Networking Fundamentals",
        "Cybersecurity",
        "Data Privacy",
        "Risk Management",
        "Cryptography",
      ],
    },
  ],
  certifications: [
    {
      title: "Generative AI for Software Engineers",
      issuer: "WeThinkCode",
      issued: "Apr 2026",
      skills: ["AI-Assisted Development", "Software Development"],
      url: "",
    },
    {
      title: "Introduction to Cybersecurity: StaySafeOnline",
      issuer: "The Open University",
      issued: "Apr 2026",
      skills: ["Malware", "Cryptography"],
      url: "",
    },
    {
      title: "Risk Management",
      issuer: "The Open University",
      issued: "Apr 2026",
      skills: ["ISO 31000:2018 Risk Management Standard"],
      url: "",
    },
    {
      title: "Cybersecurity and Data",
      issuer: "IBM",
      issued: "Apr 2026",
      skills: ["Data Privacy", "Data Breach"],
      url: "",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Networking Professional",
      issuer: "Oracle",
      issued: "Sep 2025",
      expires: "Sep 2027",
      skills: [],
      url: "",
    },
    {
      title: "Certificate of Completion – Cybersecurity",
      issuer: "CODECRAFT INFOTECH",
      issued: "Aug 2025",
      credentialId: "CTJUL251700",
      skills: ["Python (Programming Language)"],
      url: "",
    },
    {
      title: "MySQL Explorer",
      issuer: "Oracle",
      issued: "Jul 2025",
      skills: ["SQL Queries", "Database Management – MySQL"],
      url: "",
    },
  ],
};
