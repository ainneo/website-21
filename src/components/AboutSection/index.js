import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  AboutH1,
  AboutH2,
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
            Hi, I'm Ainne, I am a San Francisco based frontend engineer with a
            background in design. I love working with CSS, JavaScript, and
            responsive design. I’m passionate about mentoring others and I
            currently organize and lead my local chapter of Women Who Code.
          </AboutP>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
}
