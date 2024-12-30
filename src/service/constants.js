export const GOOGLE_DRIVE_FILE_URL =
  "https://drive.google.com/uc?export=download&id=1sCdAP071WcaKF1CDd_gwi8MpnjXZ8Wpb";

export const SYSTEM_PROMPT = (resumeContent) => `
    You are a specialized chatbot designed to provide information from my resume.
    Your role is to answer questions about my professional background based solely on the details provided in the document.  
    When responding, try to extract and share the relevant details, including dates, project names, tools and technologies, and accomplishments. 
    You are not intended to provide interpretations, inferences, or information beyond what is written in the resume. If you are unsure about the answer to a question or the resume doesn't clearly provide the information, respond with "I'm sorry, but my knowledge is limited to what's explicitly written in the Versha's resume, and I cannot answer that question."
    When asked about a skill or area of expertise, refer to the relevant section of the resume and name the section or job title you are quoting.
    Do not embellish or add any information not on my resume. The resume Content is a followed:
    ${resumeContent}`;

export const GROK_API =
  "https://api.x.ai/v1/chat/completions";

  export const RESUME_CONTENT = `Versha Yadav

Mahatma Gandhi Colony, Kota, 324002
 8529081632

# shonadeep607@gmail.com

ï linkedin.com/in/vershaYadav

§ github.com/vershat

Education
National Institute of Technology Patna
Bachelors of Technology in Electronics and communication

New Look Uchchtar Madhyamik Vidyalaya
Central Board of Secondary Education

Dec. 2021  June 2025
8.13 CGPA
July 2020
86.6%

Experience
Myntra HackerRamp Participant

April 2024
Tech-Stack Used: ReactJS, FireBase, ReduxToolkit
Patna, Bihar
• Proposed a impactful solution to implement fashion tips and Q&A page to improve user engagement issue by 20%.
• Selected in the Top 50 Teams among 400+ teams for the solution’s impact and innovation.
• Facilitated users to share fashion advice for events, enhancing interactive participation.

Software Developer (ThellaWallah App)

April. 2023
Patna, Bihar

ByteVerse Hackathon | Organized by Hackslash and GDSC Club, NITP
• TechStack used: Dart, Flutter, and Firebase
• Developed a mobile application that connects food sellers with tourists and locals, helping them to locate food stalls.
• Selected as one of the top 3 Teams by the incubation center for startup funding.

Projects
§ Gmail-Like Messenger | C++, Data Structures, Algorithms
June 2024
• Designed a system in C++ with account management and email functionality which supports single-session login.
• Supporting account creation, User login/logout, and message organization ( message star/unstar, read/unread, delete).
• Integrated doubly linked lists for managing user data, two singly linked lists for handling messages of a user.
• Introduced a feature to retrieve messages from Trash Bin using a vector, to recover deleted messages.
§ FOUNDiFY | ReactJS, TailwindCSS, NodeJS, ExpressJS, MongoDB | Deployed Link
August 2024
• Developed a Lost and Found portal to streamline the retrieval of lost items for NIT Patna students.
• Engineered an innovative reward system to encourage community participation, increasing user activity through daily
check-ins and item returns. Implemented real-time notification to ensure streamlined communication.
• Boosted user engagement by 20% with the introduction of competitive leaderboard ranking.
• Ensured secure access using NITP email authentication, providing a streamlined communication system.

Technical Skills
Programming Languages: C++, JavaScript, Java, Python
Frontend Technologies: HTML, CSS, ReactJS, TailwindCSS, Bootstrap
Databases: SQL, NoSQL (MongoDB)
Core Concepts: Data Structures, Algorithms, Object Oriented Programming, DBMS, Operating Systems
Version Control & Collaboration: Git, GitHub
Developer Tools: Visual Studio, Jupyter NoteBook
Soft Skills: Communication, Leadership, Management, Fluent in languages such as Hindi and English

Achievements
•

Top 3 Finalist, ByteVerse Hackathon, Collaborated with a team to develop a ThellaWallah App for public sector.

•

2nd Rank, in the code the uncoded coding competition organised by IEEE club, Nit Patna

•

2nd Position in basketball tournament organized by college and played the state level during school time.

•

Selected as a GHC Scholarship recipient, representing my commitment to diversity and growth in technology.

•

Participant#IncludeHer2.0, Member of Microsoft azure community

Positions of Responsibility
•

Teacher, at SANKALP, taught 15-20 students

•

Google Developer Student-Club, Member of DSA team (coding club).

•

Member, NIT Patna Basketball Team

`