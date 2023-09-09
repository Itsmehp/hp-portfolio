import React, { useEffect } from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import { useState } from "react";
import WorksItems from "./WorksItems";
const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((projects) => {
        return projects.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);
  const clickHandler = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };
  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                clickHandler(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {" "}
        {projects.map((item) => {
          return <WorksItems item={item} key={item.id} />;
        })}{" "}
      </div>
    </div>
  );
};

export default Works;
