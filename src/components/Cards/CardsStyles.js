import styled from "styled-components";

export const CardContainer = styled.div`
  display: block;
  margin: 10px 0px;
`;

export const CardWrapper = styled.div`
  width: 320px;
  &:hover * {
    background-color: #fff;
    color: black;
  }
  @media and screen {
    width: 500px;
  }
   {
    width: 365px;
  }
`;

export const CardImg = styled.div`
  padding: 5px 5px 0px;
  height: 40%;
  width: 100%;
  transition: opacity 500ms ease 0s;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center center;
`;

export const CardContent = styled.div`
  padding: 5px;
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardFooterWrapper = styled.div``;

export const CardH3 = styled.h3`
  font-size: 1rem;
`;

export const CardP = styled.p`
  font-size: 15px;
  color: #d4d4d4;
  line-height: 15px;
`;

export const CardCodeButton = styled.div`
  font-size: 16px;
  margin-bottom: -10px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardLiveButton = styled.div`
  font-size: 16px;
`;

export const CardTechIcons = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 5px;
`;

export const CardIcon = styled.div``;
