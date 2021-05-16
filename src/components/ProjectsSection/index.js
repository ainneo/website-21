import React from "react";
import Cards from "../Cards";
import projects from "../data/projects.json";

import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsSection,
  ProjectsH2,
  ProjectsSqaure,
  ProjectsTitle,
} from "../ProjectsSection/ProjectsStyles";

export default function Projects() {
  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectsWrapper>
          <ProjectsTitle>
            <ProjectsSqaure></ProjectsSqaure>
            <ProjectsH2>Projects.</ProjectsH2>
          </ProjectsTitle>
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
