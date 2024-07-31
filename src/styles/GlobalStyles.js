import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --color-background: #212121;
  --color-white: #fff;
  --color-white-87: rgba(#fff, 0.87);
  --color-white-60: rgba(#fff, 0.6);
  --color-yellow: #e8b500;
  --color-yellow-light: #ffc800;
  --color-orange: #f6ad55;
  --color-blue: #039be5;
  --color-pink: #d81b60;
  --color-black: #000000;
  --color-black-87: rgba(#000, 0.87);
  --color-black-60: rgba(#000, 0.6);
  --color-black-32: rgba(#000, 0.32);
  --color-black-08: rgba(#000, 0.08);
}

$gridTemplate: 10% 60% 1fr;

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Mukta", sans-serif;
  color: var(--color-black);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100dvh;
  font-size: 1.8rem;
}

input,
button,
textarea,
select {
  font-size: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

button:disabled {
  background-color: var(--color-black-08);
  color: var(--color-black-60);
}

button:hover {
  background-color: var(--color-black-08);
}

*:disabled {
  cursor: not-allowed;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

h1,
h2,
h3 {
  font-family: "Playfair display", sans-serif;
}

h1 {
  font-size: 9.4rem;
  font-weight: bold;
}
h2 {
  font-size: 3.3rem;
  font-weight: bold;
}
h3 {
  font-size: 2rem;
  font-weight: bold;
}

`;

export default GlobalStyles;
