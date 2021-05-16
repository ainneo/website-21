import React from "react";
import Cards from "../Cards";
import projects from "../data/projects.json";

import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsSection,
  ProjectsH2,
  ProjectsP,
} from "../ProjectsSection/ProjectsStyles";

export default function Projects() {
  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectsWrapper>
          <ProjectsH2>Projects</ProjectsH2>
          <ProjectsP>...</ProjectsP>
          <ProjectsSection>
            {projects.map((project, index) => {
              // console.log(projects);
              return <Cards project={project} key={index} />;
            })}
          </ProjectsSection>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
}
