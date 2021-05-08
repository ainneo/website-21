import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 10px;
  &:hover {
    transform: scale(1.3);
  }
`;

export const CardWrapper = styled.div`
  padding: 20px;
  border: solid 1px purple;
  height: 400px;
  width: 290px;
`;

export const CardImg = styled.div`
  height: 40%;
  width: 100%;
  background: blue;
  transition: opacity 500ms ease 0s;
  margin: 10px 0px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center center;
`;

export const CardContent = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardFooterWrapper = styled.div``;

export const CardH3 = styled.h3`
  font-size: 1rem;
`;

export const CardP = styled.p`
  font-size: 14px;
  color: #d4d4d4;
  line-height: 20px;
`;

export const CardCodeButton = styled.div``;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardLiveButton = styled.div``;

export const CardTechIcons = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 5px;
`;

export const CardIcon = styled.div``;
