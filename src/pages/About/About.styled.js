import styled from "styled-components";
import { Link } from "react-router-dom";

export const AboutMe = styled.div`
  padding: 50px;
  p {
    font-size: 1.2rem;
    margin-bottom: 10px;
    text-indent: 25px;
  }
`;

export const Skills = styled.div`
  width: 100%;
  display: flex;
  padding: 50px;
  gap: 30px;
  justify-content: space-around;
`;

export const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  ul li::before {
    content: url("/img/check-icon.png");
    margin-right: 5px;
  }
`;

export const AboutLink = styled(Link)`
  color: #efa500;
`;
