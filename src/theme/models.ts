import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    viewPoints: {
      sm: string;
      md: string;
      lg: string;
    };
    colors: {
      white: string;
    };
  }
}
