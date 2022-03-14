import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  max-width: 100vw;
  max-height: 100vh;

  width: 100%;
  height: 100%;
}

*,
button,
input {
  border: 0;
  background: none;

  font-family: "Poppins", sans-serif;
}

html {
  background: var(--gray);
}

/* MAIN ========================================= */
.container {
  width: calc(min(90vw, 1400px));
  margin: 0 auto;
}

.pointer {
  cursor: pointer;
}

.overdue {
  color: var(--red);
}

:root {
  --gray: #ebebeb;
  --green: #1bd273;
  --blue: #57d3ff;
  --text: #555;
  --red: #c51111;
  --background: #ffffff;
  --btnhover: #00ff7b;
}
`;

