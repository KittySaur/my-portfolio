import styled from "styled-components";

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 20px;
    gap: 15px;
  }

  @media (max-width: 730px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 10px;
  }
`;

export const GridItem = styled.div`
  min-width: 300px;
  min-height: 300px;
  border: 2px #000033 solid;
  transition: transform ease-in-out 0.5s;
  border-radius: 10px;
  background-color: #000033;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  &:hover {
    transform: scale(1.05);
  }

  p {
    font-style: italic;
    text-align: center;
  }
`;

export const ProjectImg = styled.img`
  width: 80%;
  flex: 1;
  border-radius: 5px;
`;

export const ProjectButton = styled.button`
  background-color: transparent;
  padding: 10px 20px;
  border-radius: 20px;
  font-family: inherit;
  font-size: 1rem;
  border: 2px solid #fff;

  a {
    color: #fff;
  }

  &:hover {
    transform: scale(1.05);
  }
`;
