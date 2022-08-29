import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #000033;
  width: 100vw;
  padding: 20px;
`;

export const Links = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  justify-content: space-evenly;
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 150px;

  a {
    color: #e6e6e6;
  }
`;

export const ContactLink = styled.a`
  color: #e6e6e6;

  @media (max-width: 540px) {
    display: none;
  }
`;

export const HiddenLink = styled.a`
  @media (min-width: 540px) {
    display: none;
  }
`;
