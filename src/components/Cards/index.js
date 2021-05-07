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
} from "../Cards/CardsStyles";

export default function Cards() {
  return (
    <>
      <CardContainer>
        <CardWrapper id="projects">
          <CardH3>test</CardH3>
          <CardImg>
            {/* <a href={props.url}><img src={props.image} alt="MIA" /></a> */}
          </CardImg>
          <CardContent>
            <CardP>
              Built news feed, accessing multiple News APIs with Axios
            </CardP>

            <CardFooterWrapper>
              <CardCodeButton>
                <a href="https://github.com/sitek94/timestamp-microservice">
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
                  <a href="https://simple-timestamp-microservice.herokuapp.com/">
                    Project live
                  </a>
                </CardLiveButton>
                <CardTechIcons>
                  <CardIcon>ico</CardIcon>
                  <CardIcon>ico</CardIcon>
                  <CardIcon>ico</CardIcon>
                </CardTechIcons>
              </CardFooter>
            </CardFooterWrapper>
          </CardContent>
        </CardWrapper>
      </CardContainer>
    </>
  );
}
