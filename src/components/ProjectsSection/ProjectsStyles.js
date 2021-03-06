import styled from "styled-components";

export const ProjectsContainer = styled.div`
  padding: 100px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectsWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  }
`;

// this wrapper makes cards wrap, and centers evenly in the page
export const ProjectsSection = styled.div`
  padding: 100px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ProjectsH2 = styled.h2`
  line-height: 50px;
  font-size: 1.8rem;
  line-height: 1;

  @media screen and (max-width: 786px) {
    font-size: 1.6rem;
  }
`;

// export const ProjectsSqaure = styled.div`
//   height: 30px;
//   width: 35px;
//   background-color: green;
//   margin-right: 10px;
// `;

export const ProjectsTitle = styled.div`
  display: flex;
`;
