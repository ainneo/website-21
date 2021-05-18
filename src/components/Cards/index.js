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

export default function Cards({ project }) {
  return (
    <>
      <CardContainer>
        <CardWrapper id="projects">
          <CardImg>
            <a href={project.liveURL}>
              <CardImage src={project.image} alt="MIA" />
            </a>
          </CardImg>
          <CardContent>
            <CardH3>{project.title}</CardH3>
            <CardP>{project.description}</CardP>

            <CardFooterWrapper>
              {/* <CardCodeButton>
                <a href={project.codeURL}>SOURCE CODE</a>
              </CardCodeButton> */}
              <CardFooter>
                <CardLiveButton>
                  <a href={project.codeURL}>SOURCE CODE</a>
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
