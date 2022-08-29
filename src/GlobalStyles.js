import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html,
body {

  font-family: 'Ubuntu', sans-serif;
  font-size: 1rem;
  line-height: 1.6;

    color: #E6E6E6;
  background-image:linear-gradient(0deg, rgba(22, 27, 64, 0.9), rgba(22, 27, 64, 0.7)), url('/img/background.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  cursor: pointer; 
}

button{
    cursor: pointer;
}

ul li {
  list-style: none;
}
`;

export default GlobalStyles;
