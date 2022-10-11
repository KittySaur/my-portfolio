import { Container } from '../../Styles'
import { Links } from './Contacts.styled'

function Contact() {
  return (
    <Container>
      <Links>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/zarina-nugmanova/"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a target="_blank" href="https://github.com/KittySaur" rel="noreferrer">
          GitHub
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100008579494128"
          rel="noreferrer"
        >
          Facebook
        </a>
        <a href="mailto:zarina.nnugmanova@gmail.com">
          zarina.nnugmanova@gmail.com
        </a>

        <a href="tel: +1-617-581-3419">+1 (617)-581-3419</a>
      </Links>
    </Container>
  )
}

export default Contact
