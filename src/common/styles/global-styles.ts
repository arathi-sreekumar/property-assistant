import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-family: 'Georgia', serif;
    --font-family-alt: 'Helvetica', Arial, sans-serif;
    --font-weight: 400;
    --font-weight-bold: 700;
    --font-weight-black: 900;

    /* 3:4 perfect fourth scale */
    --font-size-x-display: 5.16rem;
    --font-size-display: 4.3rem;
    --font-size-xx-large: 3.583rem;
    --font-size-x-large: 2.488rem;
    --font-size-large: 1.728rem;
    --font-size-medium: 1.44rem;
    --font-size: 1.05rem;
    --font-size-small: 0.833rem;
    --font-size-x-small: 0.694rem;
    --font-size-xx-small: 0.579rem;
    --lineheight-text: 1.55;
    --lineheight-short: 1.2;

    --color-background: #Ffefdef;
    --color-base: #f9eaf0;
    --color-accent: #c42e66;
    --color-background-selection: #f9eaf0;
    --color-border: #9facdf;
    --color-text-default: #2b2b2b;
    --color-text-link: var(--color-accent);
    --color-text-link-active: var(--color-text-link);
    --color-text-link-focus: var(--color-text-link);
    --color-text-link-hover: #9d7ad4;
    --color-text-link-visited: var(--color-text-link);

    --color-button-default: var(--color-accent:);
    --color-button-border: var(--color-base);
    --color-button-text: #fff;

    --border-radius-x-small: .25rem;
    --border-radius-small: .5rem;
    --border-radius-medium: .75rem;
    --border-radius-large: 1.5rem;
    --border-radius-circle: 50%;
    --border-width-hairline: 0.5px;
    --border-width: 1px;
    --border-width-thin: 2px;
    --border-width-thick: 5px;

    --grid-64: 3fr 1fr 2fr 2fr 1fr 3fr;
    --grid-gap: 4vw;

    --max-width: 80rem;
    --spacing-xx-small: .125rem;
    --spacing-x-small: .25rem;
    --spacing-small: .5rem;
    --spacing: .75rem;
    --spacing-medium: 1rem;
    --spacing-large: 1.5rem;
    --spacing-x-large: 2rem;
    --spacing-xx-large: 3rem; 

    --duration-instantly: 0;
    --duration-immediately: 0.1s;
    --duration-quickly: 0.2s;
    --duration-promptly: 0.5s;
    --duration-slowly: 1s;
  }
`