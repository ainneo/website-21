import React from "react";

import {
  CardContainer,
  CardWrapper,
  CardH3,
  CardImg,
  CardContent,
  CardP,
  CardCodeButton,
  CardFooterWrapper,
  CardFooter,
  CardLiveButton,
  CardTechIcons,
  CardIcon,
  CardImage,
} from "../Cards/CardsStyles";
import Projects from "../ProjectsSection";

export default function Cards({ project }) {
  return (
    <>
      <CardContainer>
        <CardWrapper id="projects">
          <CardH3>{project.title}</CardH3>
          <CardImg>
            <CardImage src={project.image} alt="MIA" />
          </CardImg>
          <CardContent>
            <CardP>{project.description}</CardP>

            <CardFooterWrapper>
              <CardCodeButton>
                <a href={project.codeURL}>
                  Source code
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="9"
                    viewBox="0 0 6 9"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      points="57 18 60.5 21.5 57 25"
                      transform="translate(-56 -17)"
                    ></polyline>
                  </svg>
                </a>
              </CardCodeButton>
              <CardFooter>
                <CardLiveButton>
                  <a href={project.liveURL}>Project live</a>
                </CardLiveButton>
                <CardTechIcons>
                  <CardIcon>
                    <img
                      width="30px"
                      height="30px"
                      src={project.icon1}
                      alt="icon"
                    ></img>
                  </CardIcon>
                  <CardIcon>
                    <img
                      width="30px"
                      height="30px"
                      src={project.icon2}
                      alt="icon"
                    ></img>
                  </CardIcon>
                  <CardIcon>
                    <img
                      width="30px"
                      height="30px"
                      src={project.icon3}
                      alt="icon"
                    ></img>
                  </CardIcon>
                </CardTechIcons>
              </CardFooter>
            </CardFooterWrapper>
          </CardContent>
        </CardWrapper>
      </CardContainer>
    </>
  );
}
