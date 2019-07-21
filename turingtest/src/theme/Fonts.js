import Metrics from "./Metrics";

const type = {
  bold: "Soleil-Bold",
  book: "Soleil-Book",
  light: "Soleil-Light",
  regular: "Soleil-Regular"
};

const size = {
  xxxSmall: Metrics.generatedFontSize(11),
  xxSmall: Metrics.generatedFontSize(13),
  xSmall: Metrics.generatedFontSize(14),
  small: Metrics.generatedFontSize(15),
  normal: Metrics.generatedFontSize(16),
  medium: Metrics.generatedFontSize(18),
  large: Metrics.generatedFontSize(20),
  xLarge: Metrics.generatedFontSize(22),
  xxLarge: Metrics.generatedFontSize(28),
  xxxLarge: Metrics.generatedFontSize(50)
};

export default {
  type,
  size
};
