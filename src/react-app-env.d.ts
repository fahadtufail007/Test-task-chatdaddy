/// <reference types="react-scripts" />

declare module "react/jsx-runtime" {
  export default any;
}

declare namespace JSX {
  interface IntrinsicElements {
    list: any;
  }
}
