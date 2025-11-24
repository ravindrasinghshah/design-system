import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { designTokens } from "../tokens/design.tokens";
const cssThemePath = path.join(__dirname, "../styles/theme.css");

try {
  console.log("🤖 Generating CSS theme file at ", cssThemePath);

  // Generate @font-face declarations for all fonts
  const generateFontFaces = (): string => {
    let css = "";

    // Font configuration mapping: [fontFamilyName, fileName, fontWeight, fontStyle, isVariable]
    const fontConfigs = [
      ["Be Vietnam Pro", "BeVietnamPro_400Regular.ttf", "400", "normal", false],
      ["Be Vietnam Pro Bold", "BeVietnamPro_700Bold.ttf", "700", "normal", false],
      ["Oswald", "Oswald-Regular.ttf", "400", "normal", false],
      ["Alfa Slab One", "AlfaSlabOne-Regular.ttf", "400", "normal", false],
      ["Anton", "Anton-Regular.ttf", "400", "normal", false],
      ["Bodoni Moda", "BodoniModa_28pt-ExtraBold.ttf", "800", "normal", false],
      ["Cinzel", "Cinzel-VariableFont_wght.ttf", "400 900", "normal", true], // Variable font
      ["Creepster", "Creepster-Regular.ttf", "400", "normal", false],
      ["EB Garamond", "EBGaramond-Bold.ttf", "700", "normal", false],
      ["Lexend Deca", "LexendDeca-SemiBold.ttf", "600", "normal", false],
      ["Libre Barcode 128", "LibreBarcode128Text-Regular.ttf", "400", "normal", false],
      ["Libre Baskerville", "LibreBaskerville-Bold.ttf", "700", "normal", false],
      ["Modak", "Modak-Regular.ttf", "400", "normal", false],
      ["Righteous", "Righteous-Regular.ttf", "400", "normal", false],
      ["Rubik Glitch", "RubikGlitch-Regular.ttf", "400", "normal", false],
      ["Rubik Mono One", "RubikMonoOne-Regular.ttf", "400", "normal", false],
      ["Vivaldi", "Vivaldi Std Regular.otf", "400", "normal", false],
      ["Rubik Wet Paint", "RubikWetPaint-Regular.ttf", "400", "normal", false],
      ["PPEditorial New", "PPEditorialNew-Regular.otf", "400", "normal", false],
      ["ApfelGrotezk Brukt", "ApfelGrotezk-Brukt.otf", "400", "normal", false],
      ["Neue Haas Grotesk", "NeueHaasGrotTextRound-75Bold-Trial.otf", "700", "normal", false],
    ];

    for (const [fontFamily, fileName, fontWeight, fontStyle, isVariable] of fontConfigs) {
      const fileExtension = fileName.endsWith(".otf") ? "opentype" : "truetype";
      css += `@font-face {\n`;
      css += `  font-family: "${fontFamily}";\n`;
      css += `  src: url('../fonts/${fileName}') format('${fileExtension}');\n`;
      css += `  font-weight: ${fontWeight};\n`;
      css += `  font-style: ${fontStyle};\n`;
      if (isVariable) {
        css += `  font-variation-settings: "wght" 400;\n`;
      }
      css += `  font-display: swap;\n`;
      css += `}\n\n`;
    }

    return css;
  };

  // Generate CSS theme file for Tailwind v4 @theme directive
  const generateCssThemeColors = (
    colorObj: any,
    prefix: string = ""
  ): string => {
    let css = "";
    for (const [key, value] of Object.entries(colorObj)) {
      const varName = prefix ? `${prefix}-${key}` : key;
      if (typeof value === "string") {
        // It's a color value
        css += `  --color-${varName}: ${value};\n`;
      } else if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        // It's a nested object, recurse
        css += generateCssThemeColors(value, varName);
      }
    }
    return css;
  };

  // Generate spacing tokens for @theme
  const generateCssSpacing = (spacingObj: any): string => {
    let css = "";
    for (const [key, value] of Object.entries(spacingObj)) {
      if (typeof value === "string") {
        css += `  --spacing-${key}: ${value};\n`;
      }
    }
    return css;
  };

  // Generate typography tokens for @theme
  const generateCssTypography = (typographyObj: any): string => {
    let css = "";

    // Font families - convert array to string
    if (typographyObj.fontFamily) {
      for (const [key, value] of Object.entries(typographyObj.fontFamily)) {
        if (Array.isArray(value)) {
          css += `  --font-family-${key}: ${value.join(", ")};\n`;
        }
      }
    }

    // Font sizes - handle array format [size, { lineHeight }]
    if (typographyObj.fontSize) {
      for (const [key, value] of Object.entries(typographyObj.fontSize)) {
        if (Array.isArray(value)) {
          const size = value[0];
          const lineHeight = value[1]?.lineHeight || "1";
          css += `  --font-size-${key}: ${size};\n`;
          css += `  --line-height-${key}: ${lineHeight};\n`;
        }
      }
    }

    // Font weights
    if (typographyObj.fontWeight) {
      for (const [key, value] of Object.entries(typographyObj.fontWeight)) {
        if (typeof value === "string") {
          css += `  --font-weight-${key}: ${value};\n`;
        }
      }
    }

    return css;
  };

  // Generate breakpoints for @theme
  const generateCssBreakpoints = (breakpointsObj: any): string => {
    let css = "";
    for (const [key, value] of Object.entries(breakpointsObj)) {
      if (typeof value === "string") {
        css += `  --breakpoint-${key}: ${value};\n`;
      }
    }
    return css;
  };

  // Generate border radius for @theme
  const generateCssBorderRadius = (borderRadiusObj: any): string => {
    let css = "";
    for (const [key, value] of Object.entries(borderRadiusObj)) {
      if (typeof value === "string") {
        const varName = key === "DEFAULT" ? "DEFAULT" : key;
        css += `  --radius-${varName}: ${value};\n`;
      }
    }
    return css;
  };

  // Generate box shadow for @theme
  const generateCssBoxShadow = (boxShadowObj: any): string => {
    let css = "";
    for (const [key, value] of Object.entries(boxShadowObj)) {
      if (typeof value === "string") {
        const varName = key === "DEFAULT" ? "DEFAULT" : key;
        css += `  --shadow-${varName}: ${value};\n`;
      }
    }
    return css;
  };

  // Generate z-index for @theme
  const generateCssZIndex = (zIndexObj: any): string => {
    let css = "";
    for (const [key, value] of Object.entries(zIndexObj)) {
      if (typeof value === "string") {
        css += `  --z-${key}: ${value};\n`;
      }
    }
    return css;
  };

  // Generate transition for @theme
  const generateCssTransition = (transitionObj: any): string => {
    let css = "";

    if (transitionObj.duration) {
      for (const [key, value] of Object.entries(transitionObj.duration)) {
        if (typeof value === "string") {
          const varName = key === "DEFAULT" ? "DEFAULT" : key;
          css += `  --duration-${varName}: ${value};\n`;
        }
      }
    }

    if (transitionObj.timing) {
      for (const [key, value] of Object.entries(transitionObj.timing)) {
        if (typeof value === "string") {
          const varName = key === "DEFAULT" ? "DEFAULT" : key;
          css += `  --ease-${varName}: ${value};\n`;
        }
      }
    }

    return css;
  };

  let cssContent =
    "/* This file is automatically generated. Do not edit manually. */\n\n";
  
  // Add @font-face declarations at the top
  cssContent += generateFontFaces();
  
  cssContent += "@theme {\n";

  // Add all colors to @theme
  if (designTokens.color) {
    cssContent += generateCssThemeColors(designTokens.color);
  }

  // Add spacing
  if (designTokens.spacing) {
    cssContent += "\n  /* Spacing */\n";
    cssContent += generateCssSpacing(designTokens.spacing);
  }

  // Add typography
  if (designTokens.typography) {
    cssContent += "\n  /* Typography */\n";
    cssContent += generateCssTypography(designTokens.typography);
  }

  // Add breakpoints
  if (designTokens.breakpoints) {
    cssContent += "\n  /* Breakpoints */\n";
    cssContent += generateCssBreakpoints(designTokens.breakpoints);
  }

  // Add border radius
  if (designTokens.borderRadius) {
    cssContent += "\n  /* Border Radius */\n";
    cssContent += generateCssBorderRadius(designTokens.borderRadius);
  }

  // Add box shadow
  if (designTokens.boxShadow) {
    cssContent += "\n  /* Box Shadow */\n";
    cssContent += generateCssBoxShadow(designTokens.boxShadow);
  }

  // Add z-index
  if (designTokens.zIndex) {
    cssContent += "\n  /* Z-Index */\n";
    cssContent += generateCssZIndex(designTokens.zIndex);
  }

  // Add transition
  if (designTokens.transition) {
    cssContent += "\n  /* Transition */\n";
    cssContent += generateCssTransition(designTokens.transition);
  }

  cssContent += "}\n";

  fs.writeFileSync(cssThemePath, cssContent, "utf-8");
  console.log("✨ Successfully generated theme CSS file at ./styles/theme.css");
} catch (error) {
  console.error("Error processing tokens:", error);
  process.exit(1);
}
