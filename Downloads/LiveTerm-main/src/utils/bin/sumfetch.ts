import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  return `
           ╭──────────────────────────────╮
           │    Tanay Sahajwalla          │
           │    Full Stack Developer      │
           ╰──────────────────────────────╯
           
           🎓 Education
           ├─ BTech in Computer Science
           │  ITM Skills University
           │
           💼 Experience
           ├─ Software Development Intern @ 8Bits
           ├─ Software Development Intern @ LetsUpgrade
           │
           🛠️ Technical Skills
           ├─ Languages: C++, Python, Java, JavaScript
           ├─ Frontend: ReactJS, HTML/CSS
           ├─ Backend: NodeJS, ExpressJS, Flask, Django
           ├─ Database: MongoDB, SQL/SQLite, Firebase
           │
           📫 Contact
           ├─ Email: ${config.email}
           ├─ GitHub: <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
           ├─ LinkedIn: <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
           │
           🏆 Achievements
           ├─ Best Website Developer (2023)
           ├─ Best React Application (2024)
           ├─ Solution App Developer (2023)
           ├─ International Maths Olympiad (Bronze)
           └─ National Cyber Olympiad (Silver)
  `;
};

export default sumfetch;
