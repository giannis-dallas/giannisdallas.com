import Typography from "typography";
import DeYoung from "typography-theme-de-young";
DeYoung.baseFontSize = '20px';
DeYoung.baseLineHeight = 1.65;
DeYoung.scaleRatio = 2;
DeYoung.overrideThemeStyles = ({ rhythm }, options) => ({
    'h1,h2,h3': {
      marginBottom: rhythm(1.625),
      marginTop: rhythm(0),
    }
  });
  const typography = new Typography(DeYoung);

export default typography;