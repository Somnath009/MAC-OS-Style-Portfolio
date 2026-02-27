import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({ windowName, setWindowsState }) => {
  const commands = {
    menu: {
      description: "List all available custom commands",
      usage: "menu",
      fn: () =>
        `Available Commands:
  about       → About Somnath
  skills      → List of all tech skills
  projects    → Your featured GitHub projects
  social      → All social links
  contact     → Email & Phone
  education   → Academic background
  status      → Current role & opportunities
  clear       → Clear terminal (built-in)
  help        → Built-in react-console-emulator help`,
    },

    about: {
      description: "About Somnath",
      usage: "about",
      fn: () =>
        `Hi, I'm Somnath Paul 👋
BCA 3rd Year • Web Developer • AI Learner
Learning JavaScript, React, Tailwind, Node.js, Python & Generative AI.`,
    },

    skills: {
      description: "Show full skillset",
      usage: "skills",
      fn: () =>
        `Tech Stack:
Frontend: React, TailwindCSS, HTML, CSS
Backend: Node.js, Express.js, MongoDB, PostgreSQL
Languages: JavaScript, Python
Tools: Git, GitHub, VS Code, Docker (Basic)
Learning: LangChain, RAG, Generative AI`,
    },

    projects: {
      description: "Show Somnath's main projects",
      usage: "projects",
      fn: () =>
        `Top Projects:
1. Baby-Cursor CLI        → github.com/Somnath009/Baby-Cursor
2. A-Basic-Auth-System    → github.com/Somnath009/A-Basic-Auth-System
3. Calculator App         → github.com/Somnath009/Calculator`,
    },

    social: {
      description: "All social links",
      usage: "social",
      fn: () =>
        `Social Profiles:
GitHub   → https://github.com/Somnath009
LinkedIn → https://linkedin.com/in/somnath-paul-0a453322a`,
    },

    contact: {
      description: "Contact details",
      usage: "contact",
      fn: () =>
        `Contact Information:
Email: 08paulsomnath@gmail.com
Phone: 9875414864`,
    },

    education: {
      description: "Education history",
      usage: "education",
      fn: () =>
        `BCA (2022–2027)
Techno India University, Kolkata
Current CGPA: 7.23`,
    },

    status: {
      description: "Current role + opportunities",
      usage: "status",
      fn: () =>
        `Status:
- BCA 2nd Year Student
- Learning Web Dev + Generative AI
- Open to Internships & Opportunities`,
    },
  };

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={`Welcome To My Portfolio Terminal ⚡
Type "help" to view built-in commands.
Type "menu" to see all custom commands.
`}
          promptLabel={"somnath:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
