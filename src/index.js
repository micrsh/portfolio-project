import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="image/avatar1.jpg" alt="micrsh" />;
}

function Intro() {
  return (
    <div>
      <h1>Pham Minh Hieu</h1>
      <p>
        Full-stack Developer with 3 years of experience developing and deploying
        RESTful web applications using Java, Javascript, Spring Boot, Spring
        MVC, Sencha ExtJS. Proficient in relational databases such as Oracle,
        SQL Server, and PostgreSQL. Excellent problem-solving and logical
        thinking skills, with the ability to work independently and
        collaboratively. Passionate about technology and always eager to learn
        new things.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} />
      ))}
    </ul>
  );
}

function Skill({ skillObj }) {
  const icon =
    (skillObj.level === "advanced" && "💪") ||
    (skillObj.level === "intermediate" && "👍") ||
    (skillObj.level === "beginner" && "👶");
  return (
    <li className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>
        {skillObj.skill}
        {icon}
      </span>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
