import React from "react";
import Cards from "../Cards";

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
          <ProjectsP>Filter there projects here</ProjectsP>
          <ProjectsSection>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </ProjectsSection>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
}
