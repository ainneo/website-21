import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 0px 24px;
  }
`;

export const AboutH1 = styled.h1`
  line-height: 50px;
  font-size: 3.5rem;
  line-height: 1;
  letter-spacing: -0.0225em;
  @media screen and (max-width: 786px) {
    font-size: 2.5rem;
  }
`;

export const AboutP = styled.p`
 padding: 20px 0px;
 font-size: 1rem;
 &:nth-child(4) {
  padding: 40px 0px;
    color: #D4D4D4;
  }
  }
`;
