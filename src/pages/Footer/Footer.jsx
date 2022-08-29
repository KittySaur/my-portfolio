import {
  StyledFooter,
  Links,
  Contacts,
  ContactLink,
  HiddenLink,
} from "./Footer.styled";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";

function Footer() {
  return (
    <StyledFooter>
      <Links>
        <Contacts>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/zarina-nugmanova-62a933113/"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            target="_blank"
            href="https://github.com/KittySaur"
            rel="noreferrer"
          >
            <FaGithub /> GitHub
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100008579494128"
            rel="noreferrer"
          >
            <FaFacebook /> Facebook
          </a>
        </Contacts>
        <Contacts>
          <h4>Contact me</h4>

          <ContactLink href="mailto:zarina.nnugmanova@gmail.com">
            zarina.nnugmanova@gmail.com
          </ContactLink>

          <HiddenLink href="mailto:zarina.nnugmanova@gmail.com">
            <SiGmail />
          </HiddenLink>

          <ContactLink href="tel: +1-617-581-3419">
            +1 (617)-581-3419
          </ContactLink>

          <HiddenLink href="tel: +1-617-581-3419">
            <FiPhoneCall />
          </HiddenLink>
        </Contacts>
      </Links>
    </StyledFooter>
  );
}

export default Footer;
