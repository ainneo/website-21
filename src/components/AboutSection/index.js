import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  AboutH1,
  AboutP,
} from "../AboutSection/AboutStyles";

export default function About() {
  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <AboutP>Hi, my name is</AboutP>
          <AboutH1>Ainne Oum</AboutH1>
          <AboutH1>I build things for the web.</AboutH1>
          <AboutP>
            I am a San Francisco based frontend engineer with a background in
            design. I love working with CSS, JavaScript, and responsive design.
            My interest in web development started back in 2019 when I was
            building my own website - turns out hacking together a WordPress
            site taught me a lot about HTML & CSS! Today, I've had the privilege
            of working for Major League Hacking (MLH), contributing to numerous
            open source projects, and organizing and leading my local chapter of
            Women Who Code.
          </AboutP>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
}
