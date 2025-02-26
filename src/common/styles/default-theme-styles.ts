import { palette } from "./palette"

import { createGlobalStyle } from "styled-components"

export const ThemeStyles = createGlobalStyle`
  :root {
    --white-300: ${palette.white[300]};
    --white-600: ${palette.white[600]};
    --white-800: ${palette.white[800]};

    --grey-200: ${palette.grey[200]};
    --grey-300: ${palette.grey[300]};
    --grey-400: ${palette.grey[400]};
    --grey-500: ${palette.grey[500]};
    --grey-600: ${palette.grey[600]};

    --green-300: ${palette.green[300]};
    --green-600: ${palette.green[600]};
    --green-800: ${palette.green[800]};

    --yellow-300: ${palette.yellow[300]};
    --yellow-600: ${palette.yellow[600]};

    --primary-text: ${palette.grey[600]};

    --button-border-radius: 5px;

    --button-primary-text: ${palette.white[800]};
    --button-primary-background: ${palette.green[600]};
    --button-primary-active: ${palette.green[800]};
    --button-primary-diabled: ${palette.green[300]};

    --button-outlined-text: ${palette.grey[600]};
    --button-outlined-background: ${palette.white[800]};
    --button-outlined-active: ${palette.white[300]};

    --button-cancel-text: ${palette.white[800]};
    --button-cancel-background: ${palette.grey[500]};
    --button-cancel-active: ${palette.grey[600]};

    --button-option-text: ${palette.grey[600]};
    --button-option-background: ${palette.grey[200]};
    --button-option-active: ${palette.grey[300]};

    --light: ${palette.white[600]};
    --grey-border: ${palette.grey[200]};

    --chat-button-bg: ${palette.green[600]};
    --chat-button-color: ${palette.white[800]};

    --app-background: ${palette.white[600]}
  }
`