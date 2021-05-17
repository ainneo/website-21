import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  AboutContent,
  // AboutSqaure,
  AboutSqaureContent,
  AboutSqaureContentText,
  AboutH1,
  AboutP,
} from "../AboutSection/AboutStyles";

export default function About() {
  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <AboutContent>
            <AboutSqaureContent>
              {/* <AboutSqaure></AboutSqaure> */}
              <AboutSqaureContentText>
                <AboutH1>Hello</AboutH1>
                <AboutH1>I'm Ainne</AboutH1>
              </AboutSqaureContentText>
            </AboutSqaureContent>
            <AboutP>
              I am a San Francisco based frontend engineer. My interest in web
              development started back in 2019 when I was building my own
              website - turns out hacking together a WordPress site taught me a
              lot about HTML & CSS! Today, I've had the privilege of working for
              Major League Hacking (MLH), contributing to numerous open source
              projects, and organizing and leading my local chapter of Women Who
              Code.
            </AboutP>
            <AboutP>
              I love working with CSS, JavaScript, and responsive design.
            </AboutP>
          </AboutContent>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
}
