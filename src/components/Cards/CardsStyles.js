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
  @media screen and (min-width: 500px) {
    width: 380px;
  }
`;

export const CardImg = styled.div`
  padding: 5px 5px 0px;
  height: 60%;
  width: 100%;
  transition: opacity 500ms ease 0s;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  object-position: center center;
`;

export const CardContent = styled.div`
  padding: 5px;
  width: 100%;
  height: 98px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardFooterWrapper = styled.div``;

export const CardH3 = styled.h3`
  font-size: 1rem;
`;

export const CardP = styled.p`
  margin-top: -10px;
  font-size: 14px;
  color: rgba(92, 92, 92, 0.9);
  line-height: 15px;
`;

export const CardCodeButton = styled.div`
  > * {
    font-size: 16px;
    color: rgba(92, 92, 92, 0.9);
  }
  margin-bottom: -10px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardLiveButton = styled.div`
  > * {
    font-size: 16px;
    color: rgba(92, 92, 92, 0.9);
  }
`;

export const CardTechIcons = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 5px;
`;

export const CardIcon = styled.div``;
