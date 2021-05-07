import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 5px;
`;

export const CardWrapper = styled.div`
border: solid 1px purple;
height: 300px;
  width: 300px;
  max-width: 1000px;
  }
`;

export const CardH2 = styled.h2`
  font-size: 1rem;
  @media screen and (max-width: 786px) {
    font-size: 0.5rem;
  }
`;

export const CardP = styled.p`
  font-size: 1rem;
  color: #d4d4d4;
`;
