import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  padding-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 500px) {
    height: 80vh;
    padding-top: 0px;
  }
`;

export const AboutWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0px 24px;
  }
`;

export const AboutContent = styled.div`
  width: 100%;
  max-width: 800px;
  }
`;

// export const AboutSqaure = styled.div`
//   height: 100px;
//   width: 35px;
//   background-color: green;
//   margin-right: 10px;
//   }
// `;

export const AboutSqaureContent = styled.div`
  display: flex;
  }
`;

export const AboutSqaureContentText = styled.div`
display: block
  }
`;

export const AboutH1 = styled.h1`
  margin-top: -6px;
  line-height: 50px;
  font-size: 3rem;
  line-height: 1;
  letter-spacing: -0.0225em;
  @media screen and (max-width: 786px) {
    font-size: 2.5rem;
  }
`;

export const AboutP = styled.p`
 padding: 20px 0px;
 font-size: 1rem;
 line-height: 1.5;
  }
`;
