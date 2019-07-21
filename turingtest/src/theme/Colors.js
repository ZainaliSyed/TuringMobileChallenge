const white = "#FFFFFF";
const black = "#000000";
// const red = "#f6323d";
const red = "#c1272d";
// const pink = "#ed4585";
const pink = "#f6323d";

const blue = "#004286";

const grey = "#f7f7f7";
const darkGrey = "#a5a8af";
// const lightGrey = "#dddddd";
const lightGrey = "#CBCBCB";

const darkestGrey = "#3f3f3f";
const whiteSmoke = "#f6f6f6";
const azure = "#007aff";

const transparent = "rgba(0,0,0,0)";

const primary = white;
const secondary = black;
const tertiary = red;
const quaternary = blue;
const placeholder = darkGrey;

const background = {
  primary,
  secondary: grey,
  tertiary,
  quaternary,
  darkGrey
};

const text = {
  azure,
  primary: grey,
  secondary,
  tertiary: red,
  quaternary: blue,
  darkestGrey,
  black
};

const navbar = {
  background: primary,
  text: black,
  white
};

const border = darkestGrey;
const separator = lightGrey;
// const separator = red;

const error = red;
const success = text.quaternary;
const normal = text.primary;

const windowTint = "rgba(0, 0, 0, 0.4)";

export default {
  azure,
  white,
  black,
  grey,
  pink,
  darkGrey,
  lightGrey,
  transparent,
  whiteSmoke,

  red,
  primary,
  secondary,
  tertiary,
  quaternary,

  background,
  navbar,
  text,

  border,
  separator,
  windowTint,

  error,
  success,
  normal,
  blue,
  facebook: "#39579a",
  placeholder
};
