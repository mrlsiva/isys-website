const itProfessions = [
  { label: "Software Engineer", value: "Software Engineer" },
  { label: "Web Developer", value: "Web Developer" },
  { label: "Frontend Developer", value: "Frontend Developer" },
  { label: "Backend Developer", value: "Backend Developer" },
  { label: "Full Stack Developer", value: "Full Stack Developer" },
  { label: "Mobile App Developer", value: "Mobile App Developer" },
  { label: "DevOps Engineer", value: "DevOps Engineer" },
  { label: "Cloud Engineer", value: "Cloud Engineer" },
  { label: "Systems Administrator", value: "Systems Administrator" },
  { label: "Network Engineer", value: "Network Engineer" },
  { label: "Database Administrator", value: "Database Administrator" },
  { label: "Data Scientist", value: "Data Scientist" },
  { label: "Data Analyst", value: "Data Analyst" },
  { label: "Machine Learning Engineer", value: "Machine Learning Engineer" },
  { label: "AI Engineer", value: "AI Engineer" },
  { label: "Cybersecurity Specialist", value: "Cybersecurity Specialist" },
  { label: "Information Security Analyst", value: "Information Security Analyst" },
  { label: "IT Support Specialist", value: "IT Support Specialist" },
  { label: "Help Desk Technician", value: "Help Desk Technician" },
  { label: "UI/UX Designer", value: "UI/UX Designer" },
  { label: "Product Manager", value: "Product Manager" },
  { label: "IT Project Manager", value: "IT Project Manager" },
  { label: "Quality Assurance Engineer", value: "Quality Assurance Engineer" },
  { label: "Test Automation Engineer", value: "Test Automation Engineer" },
  { label: "Scrum Master", value: "Scrum Master" },
  { label: "Agile Coach", value: "Agile Coach" },
  { label: "Business Analyst", value: "Business Analyst" },
  { label: "Technical Writer", value: "Technical Writer" },
  { label: "IT Consultant", value: "IT Consultant" },
  { label: "Software Architect", value: "Software Architect" },
  { label: "Solution Architect", value: "Solution Architect" },
  { label: "Enterprise Architect", value: "Enterprise Architect" },
  { label: "Chief Information Officer (CIO)", value: "Chief Information Officer (CIO)" },
  { label: "Chief Technology Officer (CTO)", value: "Chief Technology Officer (CTO)" },
  { label: "Data Engineer", value: "Data Engineer" },
  { label: "Blockchain Developer", value: "Blockchain Developer" },
  { label: "Game Developer", value: "Game Developer" },
  { label: "Systems Analyst", value: "Systems Analyst" },
  { label: "Virtual Reality (VR) Developer", value: "Virtual Reality (VR) Developer" },
  { label: "Augmented Reality (AR) Developer", value: "Augmented Reality (AR) Developer" },
  { label: "Big Data Engineer", value: "Big Data Engineer" },
  { label: "Business Intelligence Analyst", value: "Business Intelligence Analyst" },
  { label: "IT Auditor", value: "IT Auditor" },
  { label: "IT Trainer", value: "IT Trainer" },
  { label: "Computer Vision Engineer", value: "Computer Vision Engineer" },
  { label: "Software Development Manager", value: "Software Development Manager" },
  { label: "Business Development Manager", value: "Business Development Manager" },
  { label: "Project Manager", value: "Project Manager" },
  { label: "Marketing Manager", value: "Marketing Manager" },
  { label: "Financial Analyst", value: "Financial Analyst" },
  { label: "Operations Manager", value: "Operations Manager" },
  { label: "Product Manager", value: "Product Manager" },
  { label: "Management Consultant", value: "Management Consultant" },
  { label: "Investment Banker", value: "Investment Banker" },
  { label: "Human Resources Manager", value: "Human Resources Manager" },
  { label: "Supply Chain Manager", value: "Supply Chain Manager" },
  { label: "Strategy Manager", value: "Strategy Manager" },
  { label: "Finance Manager", value: "Finance Manager" },
  { label: "Sales Manager", value: "Sales Manager" },
  { label: "Chief Executive Officer (CEO)", value: "Chief Executive Officer (CEO)" },
  { label: "Chief Financial Officer (CFO)", value: "Chief Financial Officer (CFO)" },
  { label: "Chief Operating Officer (COO)", value: "Chief Operating Officer (COO)" },
  { label: "Entrepreneur", value: "Entrepreneur" },
  { label: "Business Analyst", value: "Business Analyst" },
  { label: "Risk Manager", value: "Risk Manager" },
  { label: "Bank Manager", value: "Bank Manager" },
  { label: "Consulting Analyst", value: "Consulting Analyst" },
  { label: "Corporate Strategist", value: "Corporate Strategist" },
  { label: "Investment Manager", value: "Investment Manager" },
  { label: "Private Equity Analyst", value: "Private Equity Analyst" },
  { label: "Venture Capitalist", value: "Venture Capitalist" },
  { label: "Corporate Finance Manager", value: "Corporate Finance Manager" },
  { label: "Digital Marketing Manager", value: "Digital Marketing Manager" },
  { label: "Operations Consultant", value: "Operations Consultant" },
  { label: "Real Estate Manager", value: "Real Estate Manager" },
  { label: "Healthcare Administrator", value: "Healthcare Administrator" },
  { label: "Innovation Manager", value: "Innovation Manager" },
  { label: "Global Business Manager", value: "Global Business Manager" },
  { label: "E-commerce Manager", value: "E-commerce Manager" },
  { label: "Corporate Communications Manager", value: "Corporate Communications Manager" },
  { label: "Corporate Trainer", value: "Corporate Trainer" },
  { label: "Business Operations Manager", value: "Business Operations Manager" },
  { label: "Chief Marketing Officer (CMO)", value: "Chief Marketing Officer (CMO)" },
  { label: "Chief Information Officer (CIO)", value: "Chief Information Officer (CIO)" },
  { label: "Management Analyst", value: "Management Analyst" },
  { label: "Credit Analyst", value: "Credit Analyst" },
  { label: "Treasury Manager", value: "Treasury Manager" },
  { label: "Corporate Development Manager", value: "Corporate Development Manager" },
  { label: "Nonprofit Manager", value: "Nonprofit Manager" },
  { label: "Compliance Officer", value: "Compliance Officer" },
  { label: "Merger and Acquisition Analyst", value: "Merger and Acquisition Analyst" },
  { label: "Executive Director", value: "Executive Director" },
];
const allIndustryProfessions = [
  { label: "Automobile", value: "Automobile" },
  { label: "IT Industry", value: "IT Industry" },
  { label: "Banking", value: "Banking" },
  { label: "HealthCare", value: "HealthCare" },
  { label: "Capital Goals", value: "Capital Goals" },
  { label: "E-Commerce", value: "E-Commerce" },
  { label: "Manufacturing", value: "Manufacturing" },
  { label: "Construction", value: "Construction" },
  { label: "Biotechnology", value: "Biotechnology" },
  { label: "Financial Service", value: "Financial Service" },
  { label: "Aviation", value: "Aviation" },
];
const consultingAndITCompanies = [
  { label: "Wipro", value: "Wipro" },
  { label: "Accenture", value: "Accenture" },
  { label: "Tata Consultancy Services (TCS)", value: "Tata Consultancy Services (TCS)" },
  { label: "Infosys", value: "Infosys" },
  { label: "HCL Technologies", value: "HCL Technologies" },
  { label: "Cognizant", value: "Cognizant" },
  { label: "Capgemini", value: "Capgemini" },
  { label: "Tech Mahindra", value: "Tech Mahindra" },
  { label: "IBM", value: "IBM" },
  { label: "Deloitte", value: "Deloitte" },
  { label: "Ernst & Young (EY)", value: "Ernst & Young (EY)" },
  { label: "PwC", value: "PwC" },
  { label: "KPMG", value: "KPMG" },
  { label: "DXC Technology", value: "DXC Technology" },
  { label: "Larsen & Toubro Infotech (LTI)", value: "Larsen & Toubro Infotech (LTI)" },
  { label: "Mindtree", value: "Mindtree" },
  { label: "Oracle", value: "Oracle" },
  { label: "SAP", value: "SAP" },
  { label: "Hexaware Technologies", value: "Hexaware Technologies" },
  { label: "Mphasis", value: "Mphasis" },
  { label: "Atos", value: "Atos" },
  { label: "NTT Data", value: "NTT Data" },
  { label: "CGI", value: "CGI" },
  { label: "Syntel", value: "Syntel" },
  { label: "Persistent Systems", value: "Persistent Systems" },
  { label: "Zensar Technologies", value: "Zensar Technologies" },
  { label: "UST Global", value: "UST Global" },
  { label: "Virtusa", value: "Virtusa" },
  { label: "Birlasoft", value: "Birlasoft" },
  { label: "Harman International", value: "Harman International" },
  { label: "CitiusTech", value: "CitiusTech" },
  { label: "L&T Technology Services", value: "L&T Technology Services" },
];
const itIndustryRoles = [
  // Software Development
  { label: "Software Engineer", value: "Software Engineer" },
  { label: "Frontend Developer", value: "Frontend Developer" },
  { label: "Backend Developer", value: "Backend Developer" },
  { label: "Full Stack Developer", value: "Full Stack Developer" },
  { label: "Mobile App Developer", value: "Mobile App Developer" },
  { label: "DevOps Engineer", value: "DevOps Engineer" },
  { label: "QA Engineer", value: "QA Engineer" },
  { label: "Software Architect", value: "Software Architect" },
  { label: "Embedded Systems Engineer", value: "Embedded Systems Engineer" },

  // Data and Analytics
  { label: "Data Scientist", value: "Data Scientist" },
  { label: "Data Analyst", value: "Data Analyst" },
  { label: "Data Engineer", value: "Data Engineer" },
  { label: "Business Intelligence Analyst", value: "Business Intelligence Analyst" },
  { label: "Machine Learning Engineer", value: "Machine Learning Engineer" },
  { label: "AI Researcher", value: "AI Researcher" },

  // Cloud Computing
  { label: "Cloud Engineer", value: "Cloud Engineer" },
  { label: "Cloud Architect", value: "Cloud Architect" },
  { label: "Cloud Security Engineer", value: "Cloud Security Engineer" },
  { label: "Cloud Developer", value: "Cloud Developer" },
  { label: "Site Reliability Engineer (SRE)", value: "Site Reliability Engineer (SRE)" },

  // Cybersecurity
  { label: "Cybersecurity Analyst", value: "Cybersecurity Analyst" },
  { label: "Information Security Manager", value: "Information Security Manager" },
  { label: "Network Security Engineer", value: "Network Security Engineer" },
  { label: "Ethical Hacker", value: "Ethical Hacker" },
  { label: "Security Architect", value: "Security Architect" },

  // IT Infrastructure
  { label: "Network Engineer", value: "Network Engineer" },
  { label: "System Administrator", value: "System Administrator" },
  { label: "Database Administrator (DBA)", value: "Database Administrator (DBA)" },
  { label: "IT Support Specialist", value: "IT Support Specialist" },
  { label: "IT Manager", value: "IT Manager" },

  // Project Management and Business Analysis
  { label: "IT Project Manager", value: "IT Project Manager" },
  { label: "Scrum Master", value: "Scrum Master" },
  { label: "Product Manager", value: "Product Manager" },
  { label: "Business Analyst", value: "Business Analyst" },
  { label: "Agile Coach", value: "Agile Coach" },

  // UI/UX Design
  { label: "UI/UX Designer", value: "UI/UX Designer" },
  { label: "Graphic Designer", value: "Graphic Designer" },
  { label: "Interaction Designer", value: "Interaction Designer" },
  { label: "Visual Designer", value: "Visual Designer" },
  { label: "UX Researcher", value: "UX Researcher" },

  // Artificial Intelligence and Machine Learning
  { label: "AI/ML Engineer", value: "AI/ML Engineer" },
  { label: "Deep Learning Engineer", value: "Deep Learning Engineer" },
  { label: "NLP Engineer", value: "NLP Engineer" },
  { label: "Robotics Engineer", value: "Robotics Engineer" },

  // IT Consulting and Services
  { label: "IT Consultant", value: "IT Consultant" },
  { label: "Technical Consultant", value: "Technical Consultant" },
  { label: "Business Systems Analyst", value: "Business Systems Analyst" },
  { label: "Solutions Architect", value: "Solutions Architect" },
  { label: "Pre-Sales Engineer", value: "Pre-Sales Engineer" },

  // Other IT Roles
  { label: "Technical Writer", value: "Technical Writer" },
  { label: "IT Trainer", value: "IT Trainer" },
  { label: "Tech Support Engineer", value: "Tech Support Engineer" },
  { label: "Network Administrator", value: "Network Administrator" },
  { label: "System Analyst", value: "System Analyst" },
];
const industryDesignations = [
  // Executive and Senior Management
  { label: "Chief Executive Officer (CEO)", value: "Chief Executive Officer (CEO)" },
  { label: "Chief Operating Officer (COO)", value: "Chief Operating Officer (COO)" },
  { label: "Chief Financial Officer (CFO)", value: "Chief Financial Officer (CFO)" },
  { label: "Chief Technology Officer (CTO)", value: "Chief Technology Officer (CTO)" },
  { label: "Chief Information Officer (CIO)", value: "Chief Information Officer (CIO)" },
  { label: "Chief Marketing Officer (CMO)", value: "Chief Marketing Officer (CMO)" },
  { label: "Chief Human Resources Officer (CHRO)", value: "Chief Human Resources Officer (CHRO)" },
  { label: "Chief Compliance Officer (CCO)", value: "Chief Compliance Officer (CCO)" },
  { label: "President", value: "President" },
  { label: "Vice President", value: "Vice President" },
  { label: "Managing Director", value: "Managing Director" },
  { label: "General Manager", value: "General Manager" },
  { label: "Director", value: "Director" },

  // Middle Management
  { label: "Senior Manager", value: "Senior Manager" },
  { label: "Operations Manager", value: "Operations Manager" },
  { label: "Project Manager", value: "Project Manager" },
  { label: "Product Manager", value: "Product Manager" },
  { label: "HR Manager", value: "HR Manager" },
  { label: "Finance Manager", value: "Finance Manager" },
  { label: "Marketing Manager", value: "Marketing Manager" },
  { label: "Sales Manager", value: "Sales Manager" },
  { label: "IT Manager", value: "IT Manager" },
  { label: "Engineering Manager", value: "Engineering Manager" },
  { label: "Compliance Manager", value: "Compliance Manager" },
  { label: "Risk Manager", value: "Risk Manager" },

  // Supervisory Roles
  { label: "Team Lead", value: "Team Lead" },
  { label: "Supervisor", value: "Supervisor" },
  { label: "Shift Supervisor", value: "Shift Supervisor" },
  { label: "Department Head", value: "Department Head" },
  { label: "Branch Manager", value: "Branch Manager" },
  { label: "Unit Manager", value: "Unit Manager" },

  // Technical and Specialist Roles
  { label: "Software Developer", value: "Software Developer" },
  { label: "Systems Analyst", value: "Systems Analyst" },
  { label: "Network Administrator", value: "Network Administrator" },
  { label: "Database Administrator", value: "Database Administrator" },
  { label: "QA Tester", value: "QA Tester" },
  { label: "Data Scientist", value: "Data Scientist" },
  { label: "Business Analyst", value: "Business Analyst" },
  { label: "Technical Architect", value: "Technical Architect" },
  { label: "DevOps Engineer", value: "DevOps Engineer" },
  { label: "Security Analyst", value: "Security Analyst" },

  // Entry-Level and Associate Roles
  { label: "Analyst", value: "Analyst" },
  { label: "Associate", value: "Associate" },
  { label: "Junior Developer", value: "Junior Developer" },
  { label: "Assistant Manager", value: "Assistant Manager" },
  { label: "Coordinator", value: "Coordinator" },
  { label: "Intern", value: "Intern" },
  { label: "Trainee", value: "Trainee" },
  { label: "Support Engineer", value: "Support Engineer" },

  // Administrative Roles
  { label: "Administrative Assistant", value: "Administrative Assistant" },
  { label: "Executive Assistant", value: "Executive Assistant" },
  { label: "Office Manager", value: "Office Manager" },
  { label: "Receptionist", value: "Receptionist" },
  { label: "Clerk", value: "Clerk" },
  { label: "Secretary", value: "Secretary" },

  // Other Industry-Specific Designations
  { label: "Legal Counsel", value: "Legal Counsel" },
  { label: "Physician", value: "Physician" },
  { label: "Nurse Practitioner", value: "Nurse Practitioner" },
  { label: "Mechanical Engineer", value: "Mechanical Engineer" },
  { label: "Civil Engineer", value: "Civil Engineer" },
  { label: "Research Scientist", value: "Research Scientist" },
  { label: "Architect", value: "Architect" },
  { label: "Pharmacist", value: "Pharmacist" },
  { label: "Accountant", value: "Accountant" },
  { label: "Auditor", value: "Auditor" },
  { label: "Consultant", value: "Consultant" },
];
const itQualifications = [
  // Engineering Qualifications
  { label: "Bachelor of Engineering (B.E.)", value: "Bachelor of Engineering (B.E.)" },
  { label: "Bachelor of Technology (B.Tech.)", value: "Bachelor of Technology (B.Tech.)" },
  { label: "Master of Engineering (M.E.)", value: "Master of Engineering (M.E.)" },
  { label: "Master of Technology (M.Tech.)", value: "Master of Technology (M.Tech.)" },
  { label: "Diploma in Engineering", value: "Diploma in Engineering" },
  { label: "Doctor of Philosophy (Ph.D.) in Engineering", value: "Doctor of Philosophy (Ph.D.) in Engineering" },

  // Management Qualifications
  { label: "Master of Business Administration (MBA)", value: "Master of Business Administration (MBA)" },
  { label: "Bachelor of Business Administration (BBA)", value: "Bachelor of Business Administration (BBA)" },
  { label: "Executive MBA", value: "Executive MBA" },
  { label: "Post Graduate Diploma in Management (PGDM)", value: "Post Graduate Diploma in Management (PGDM)" },
  { label: "Doctor of Philosophy (Ph.D.) in Management", value: "Doctor of Philosophy (Ph.D.) in Management" },

  // Science and Technology Qualifications
  { label: "Bachelor of Science (B.Sc.)", value: "Bachelor of Science (B.Sc.)" },
  { label: "Master of Science (M.Sc.)", value: "Master of Science (M.Sc.)" },
  { label: "Bachelor of Computer Applications (BCA)", value: "Bachelor of Computer Applications (BCA)" },
  { label: "Master of Computer Applications (MCA)", value: "Master of Computer Applications (MCA)" },
  { label: "Doctor of Philosophy (Ph.D.) in Science", value: "Doctor of Philosophy (Ph.D.) in Science" },

  // Technical and Vocational Qualifications
  { label: "Diploma in Computer Science", value: "Diploma in Computer Science" },
  { label: "Diploma in Information Technology", value: "Diploma in Information Technology" },
  { label: "Advanced Diploma in Software Engineering", value: "Advanced Diploma in Software Engineering" },
  { label: "Certification in Networking", value: "Certification in Networking" },
  { label: "Certification in Cybersecurity", value: "Certification in Cybersecurity" },

  // Medical and Healthcare Qualifications
  { label: "Bachelor of Medicine, Bachelor of Surgery (MBBS)", value: "Bachelor of Medicine, Bachelor of Surgery (MBBS)" },
  { label: "Bachelor of Dental Surgery (BDS)", value: "Bachelor of Dental Surgery (BDS)" },
  { label: "Bachelor of Pharmacy (B.Pharm.)", value: "Bachelor of Pharmacy (B.Pharm.)" },
  { label: "Master of Pharmacy (M.Pharm.)", value: "Master of Pharmacy (M.Pharm.)" },
  { label: "Doctor of Medicine (MD)", value: "Doctor of Medicine (MD)" },
  { label: "Doctor of Pharmacy (Pharm.D)", value: "Doctor of Pharmacy (Pharm.D)" },
];
const indianInstitutes = [
  // Engineering Institutes
  { label: "Indian Institute of Technology (IIT) Bombay", value: "IIT Bombay" },
  { label: "Indian Institute of Technology (IIT) Delhi", value: "IIT Delhi" },
  { label: "Indian Institute of Technology (IIT) Kanpur", value: "IIT Kanpur" },
  { label: "Indian Institute of Technology (IIT) Madras", value: "IIT Madras" },
  { label: "Indian Institute of Technology (IIT) Kharagpur", value: "IIT Kharagpur" },
  { label: "Indian Institute of Technology (IIT) Guwahati", value: "IIT Guwahati" },
  { label: "Indian Institute of Technology (IIT) Hyderabad", value: "IIT Hyderabad" },
  { label: "Indian Institute of Technology (IIT) Ropar", value: "IIT Ropar" },
  { label: "National Institute of Technology (NIT) Trichy", value: "NIT Trichy" },
  { label: "National Institute of Technology (NIT) Surathkal", value: "NIT Surathkal" },
  { label: "Indian Institute of Information Technology (IIIT) Hyderabad", value: "IIIT Hyderabad" },
  { label: "Bharat Institute of Technology (BIT) Mesra", value: "BIT Mesra" },

  // Management Institutes
  { label: "Indian Institute of Management (IIM) Ahmedabad", value: "IIM Ahmedabad" },
  { label: "Indian Institute of Management (IIM) Bangalore", value: "IIM Bangalore" },
  { label: "Indian Institute of Management (IIM) Calcutta", value: "IIM Calcutta" },
  { label: "Indian Institute of Management (IIM) Lucknow", value: "IIM Lucknow" },
  { label: "Indian Institute of Management (IIM) Kozhikode", value: "IIM Kozhikode" },
  { label: "Indian Institute of Management (IIM) Indore", value: "IIM Indore" },
  { label: "Xavier Labour Relations Institute (XLRI) Jamshedpur", value: "XLRI Jamshedpur" },
  { label: "Indian School of Business (ISB) Hyderabad", value: "ISB Hyderabad" },
  { label: "Management Development Institute (MDI) Gurgaon", value: "MDI Gurgaon" },
  { label: "SP Jain Institute of Management and Research (SPJIMR) Mumbai", value: "SPJIMR Mumbai" },

  // Technical Institutes
  { label: "Delhi Technological University (DTU)", value: "DTU" },
  { label: "Jawaharlal Nehru Technological University (JNTU) Hyderabad", value: "JNTU Hyderabad" },
  { label: "Vellore Institute of Technology (VIT) Vellore", value: "VIT Vellore" },
  { label: "Manipal Institute of Technology (MIT) Manipal", value: "MIT Manipal" },
  { label: "Indian Institute of Engineering Science and Technology (IIEST) Shibpur", value: "IIEST Shibpur" },

  // Medical and Healthcare Institutes
  { label: "All India Institute of Medical Sciences (AIIMS) New Delhi", value: "AIIMS New Delhi" },
  { label: "Postgraduate Institute of Medical Education and Research (PGIMER) Chandigarh", value: "PGIMER Chandigarh" },
  { label: "Jawaharlal Institute of Postgraduate Medical Education and Research (JIPMER) Puducherry", value: "JIPMER Puducherry" },
  { label: "King Edward Memorial Hospital (KEM) Mumbai", value: "KEM Mumbai" },
  { label: "Christian Medical College (CMC) Vellore", value: "CMC Vellore" },
  { label: "National Institute of Mental Health and Neurosciences (NIMHANS) Bengaluru", value: "NIMHANS Bengaluru" },

  // Other Notable Institutes
  { label: "University of Delhi", value: "University of Delhi" },
  { label: "Jawaharlal Nehru University (JNU)", value: "JNU" },
  { label: "University of Mumbai", value: "University of Mumbai" },
  { label: "Banaras Hindu University (BHU)", value: "BHU" },
  { label: "University of Calcutta", value: "University of Calcutta" },
  { label: "Panjab University", value: "Panjab University" },
  { label: "Osmania University", value: "Osmania University" },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  itProfessions,
  allIndustryProfessions,
  consultingAndITCompanies,
  itIndustryRoles,
  industryDesignations,
  itQualifications,
  indianInstitutes
};