//using times 2 or times 8 for the number
interface Spacing {
    space_8: number;
    space_16: number;
    space_24: number;
    space_32: number;
    space_40: number;
    space_48: number;
    space_56: number;
    space_64: number;
    space_72: number;
    space_80: number;
    space_88: number;
    space_96: number;
    space_104: number;
    space_112: number;
    space_120: number;
    space_128: number;
    space_136: number;
    space_144: number;
    space_152: number;
    space_160: number;
    space_168: number;
    space_176: number;
    space_184: number;
    space_192: number;
    space_200: number;
    space_208: number;
    space_216: number;
    space_224: number;
    space_232: number;
    space_240: number;
    space_248: number;
    space_256: number;
    space_264: number;
    space_272: number;
    space_280: number;
    space_288: number;
    space_296: number;
    space_304: number;
    space_312: number;
    space_320: number;
    space_328: number;
    space_336: number;
    space_344: number;
    space_352: number;
    space_360: number;
    space_368: number;
    space_376: number;
    space_384: number;
    space_392: number;
    space_400: number;
  }
  
  export const SPACING: Spacing = {
    space_8: 8,
    space_16: 16,
    space_24: 24,
    space_32: 32,
    space_40: 40,
    space_48: 48,
    space_56: 56,
    space_64: 64,
    space_72: 72,
    space_80: 80,
    space_88: 88,
    space_96: 96,
    space_104: 104,
    space_112: 112,
    space_120: 120,
    space_128: 128,
    space_136: 136,
    space_144: 144,
    space_152: 152,
    space_160: 160,
    space_168: 168,
    space_176: 176,
    space_184: 184,
    space_192: 192,
    space_200: 200,
    space_208: 208,
    space_216: 216,
    space_224: 224,
    space_232: 232,
    space_240: 240,
    space_248: 248,
    space_256: 256,
    space_264: 264,
    space_272: 272,
    space_280: 280,
    space_288: 288,
    space_296: 296,
    space_304: 304,
    space_312: 312,
    space_320: 320,
    space_328: 328,
    space_336: 336,
    space_344: 344,
    space_352: 352,
    space_360: 360,
    space_368: 368,
    space_376: 376,
    space_384: 384,
    space_392: 392,
    space_400: 400,
  };
  
  interface Color {
    primaryRedHex: string;
    primaryOrangeHex: string;
    primaryBlackHex: string;
    primaryDarkGreyHex: string;
    secondaryDarkGreyHex: string;
    primaryGreyHex: string;
    secondaryGreyHex: string;
    primaryLightGreyHex: string;
    secondaryLightGreyHex: string;
    primaryWhiteHex: string;
    primaryBlackRGBA: string;
    secondaryBlackRGBA: string;
    darkGreenHex: string;
    buttonColorHex: string;
    floatingInputBackground: string;
    primaryBorderColor: string;
    readMoreColor: string;
  
    typographyDefault: string;
  
    /**
     * System Design: Colours
     */
  
    /**
     * Primary
     */
    primary: {
      _900: string;
      _800: string;
      _700: string;
      _600: string;
      _500: string;
      _400: string;
      _300: string;
      _200: string;
      _100: string;
      _50: string;
    }
    
  
    /**
     * Secondary
     */
    secondaryBlue500: string;
    secondaryGreenLeaf500: string;
    secondaryLightGreen500:string;
    secondaryMidBlue500: string;
    secondaryLightBlue500: string;
  
    /**
     * Grayscale
     */
    grayscale: {
      _900: string;
      _800: string;
      _700: string;
      _600: string;
      _500: string;
      _400: string;
      _300: string;
      _200: string;
      _100: string;
      _50: string;
    }
  
    /**
     * Shade
     */
    shade: {
      black: string;
      white: string;
    }
  
    /**
     * Info
     */
    in_fo: {
      _900: string;
      _800: string;
      _700: string;
      _600: string;
      _500: string;
      _400: string;
      _300: string;
      _200: string;
      _100: string;
      _50: string;
    }
  
    /**
     * Success
     */
    success: {
      _900: string;
      _800: string;
      _700: string;
      _600: string;
      _500: string;
      _400: string;
      _300: string;
      _200: string;
      _100: string;
      _50: string;
    }
  
    /**
     * Warning
     */
    warning: {
      _900: string;
      _800: string;
      _700: string;
      _600: string;
      _500: string;
      _400: string;
      _300: string;
      _200: string;
      _100: string;
      _50: string;
    }
  
    /**
     * Error
     */
    error: {
      _900: string;
      _800: string;
      _700: string;
      _600: string;
      _500: string;
      _400: string;
      _300: string;
      _200: string;
      _100: string;
      _50: string;
    }
  
    button: {
      primary: string;
      hover: string;
      pressed: string;
      disabled: string;
    };
    link: {
      primary: string;
      disabled: string;
    }
    danger: string;
    lightDanger: string;
  }
  
  export const COLORS: Color = {
    primaryRedHex: "#DC3535",
    primaryOrangeHex: "#D17842",
    primaryBlackHex: "#0C0F14",
    primaryDarkGreyHex: "#141921",
    secondaryDarkGreyHex: "#21262E",
    primaryGreyHex: "#252A32",
    secondaryGreyHex: "#252A32",
    primaryLightGreyHex: "#52555A",
    secondaryLightGreyHex: "#AEAEAE",
    primaryWhiteHex: "#FFFFFF",
    primaryBlackRGBA: "rgba(12,15,20,0.5)",
    secondaryBlackRGBA: "rgba(0,0,0,0.7)",
    primaryBorderColor: "#C2C2C2",
    darkGreenHex: "#0098CC",
    buttonColorHex: "#0098CC",
    floatingInputBackground: "#F7F7F7",
    readMoreColor: "#2A8EF6",
  
    typographyDefault: "#1A1A1A",
  
  
    /**
     * System Design: Colours
     */
  
    /**
     * Primary
     */
    primary: {
      _900: "#002930",
      _800: "#003E48",
      _700: "#005260",
      _600: "#007E94",
      _500: "#00AAC8",
      _400: "#45C1D7",
      _300: "#78D1E1",
      _200: "##A1E1ED",
      _100: "#D6F1F6",
      _50: "#F6FEFF",
    },
    
  
    /**
     * Secondary
     */
    secondaryBlue500: "#002930",
    secondaryGreenLeaf500: "#4FAC33",
    secondaryLightGreen500: "#D0D500",
    secondaryMidBlue500: "#4BBBD1",
    secondaryLightBlue500: "#A7D8E4",
  
    /**
     * Grayscale
     */
    grayscale: {
      _900: "#404040",
      _800: "#525252",
      _700: "#6B6B6B",
      _600: "#7B7B7B",
      _500: "#8C8C8C",
      _400: "#A8A8A8",
      _300: "#C2C2C2",
      _200: "#D8D8D8",
      _100: "#EBEBEB",
      _50: "#F7F7F7",
    },
  
    /**
     * Shade
     */
    shade: {
      black: "#000000",
      white: "#FFFFFF",
    },
  
    /**
     * Info
     */
    in_fo: {
      _900: "#065EBB",
      _800: "#1073DB",
      _700: "#2A8EF6",
      _600: "#55A8FF",
      _500: "#7ABFFF",
      _400: "#9FD7FF",
      _300: "#BDEBFF",
      _200: "#D2F2FF",
      _100: "#B0D5FF",
      _50: "#B0D5FF",
    },
  
    /**
     * Success
     */
    success: {
      _900: "#0D9953",
      _800: "#0EB060",
      _700: "#1DC973",
      _600: "#2DDA84",
      _500: "#4CE99B",
      _400: "#73F1B2",
      _300: "#9FF0C8",
      _200: "#D0F7E1",
      _100: "#E1FCED",
      _50: "#F0FFF7",
    },
  
    /**
     * Warning
     */
    warning: {
      _900: "#C28200",
      _800: "#D89100",
      _700: "#F1A60C",
      _600: "#FFB726",
      _500: "#FFC755",
      _400: "#FFD580",
      _300: "#FFE2A7",
      _200: "#FFECD5",
      _100: "#FFF7ED",
      _50: "#FFFCF8",
    },
  
    /**
     * Error
     */
    error: {
      _900: "#D32D12",
      _800: "#EC381C",
      _700: "#F85439",
      _600: "#FE735C",
      _500: "#FF8E7B",
      _400: "#FFAFA3",
      _300: "#FFCCC4",
      _200: "#FFEAE8",
      _100: "#FFF2F1",
      _50: "#FFFAF9",
    },
  
    button: {
      primary: "#0098CC",
      hover: "#007E94",
      pressed: "#005260",
      disabled: "#C2C2C2"
    },
  
    link: {
      primary: "#0098CC",
      disabled: "#7B7B7B",
    },
  
    danger: "#F85439",
    lightDanger: "#FFEAE8",
  };
  
  interface FontFamily {
    PlusJakartaSans_black: string;
    PlusJakartaSans_bold: string;
    PlusJakartaSans_extrabold: string;
    PlusJakartaSans_extralight: string;
    PlusJakartaSans_light: string;
    PlusJakartaSans_medium: string;
    PlusJakartaSans_regular: string;
    PlusJakartaSans_semibold: string;
    PlusJakartaSans_thin: string;
  }
  
  // export const FONTFAMILY: FontFamily = {
  //   poppins_black: "Poppins-Black",
  //   poppins_bold: "Poppins-Bold",
  //   poppins_extrabold: "Poppins-ExtraBold",
  //   poppins_extralight: "Poppins-ExtraLight",
  //   poppins_light: "Poppins-Light",
  //   poppins_medium: "Poppins-Medium",
  //   poppins_regular: "Poppins-Regular",
  //   poppins_semibold: "Poppins-SemiBold",
  //   poppins_thin: "Poppins-Thin",
  // };
  
  export const FONTFAMILY: FontFamily = {
    PlusJakartaSans_black: "PlusJakartaSans-Black",
    PlusJakartaSans_bold: "PlusJakartaSans-Bold",
    PlusJakartaSans_extrabold: "PlusJakartaSans-ExtraBold",
    PlusJakartaSans_extralight: "PlusJakartaSans-ExtraLight",
    PlusJakartaSans_light: "PlusJakartaSans-Light",
    PlusJakartaSans_medium: "PlusJakartaSans-Medium",
    PlusJakartaSans_regular: "PlusJakartaSans-Regular",
    PlusJakartaSans_semibold: "PlusJakartaSans-SemiBold",
    PlusJakartaSans_thin: "PlusJakartaSans-Thin",
  };
  
  interface FontSize {
    size_8: number;
    size_10: number;
    size_12: number;
    size_14: number;
    size_16: number;
    size_18: number;
    size_20: number;
    size_24: number;
    size_28: number;
    size_30: number;
  }
  
  export const FONTSIZE: FontSize = {
    size_8: 8,
    size_10: 10,
    size_12: 12,
    size_14: 14,
    size_16: 16,
    size_18: 18,
    size_20: 20,
    size_24: 24,
    size_28: 28,
    size_30: 30,
  };
  
  interface BorderRadius {
    radius_2: number;
    radius_4: number;
    radius_6: number;
    radius_8: number;
    radius_10: number;
    radius_12: number;
    radius_14: number;
    radius_16: number;
    radius_18: number;
    radius_20: number;
    radius_22: number;
    radius_24: number;
    radius_26: number;
    radius_28: number;
    radius_30: number;
    radius_32: number;
    radius_34: number;
    radius_36: number;
    radius_38: number;
    radius_40: number;
    radius_42: number;
    radius_44: number;
    radius_46: number;
    radius_48: number;
    radius_50: number;
    radius_52: number;
    radius_54: number;
    radius_56: number;
    radius_58: number;
    radius_60: number;
    radius_62: number;
  }
  
  export const BORDERRADIUS: BorderRadius = {
    radius_2: 2,
    radius_4: 4,
    radius_6: 6,
    radius_8: 8,
    radius_10: 10,
    radius_12: 12,
    radius_14: 14,
    radius_16: 16,
    radius_18: 18,
    radius_20: 20,
    radius_22: 22,
    radius_24: 24,
    radius_26: 26,
    radius_28: 28,
    radius_30: 30,
    radius_32: 32,
    radius_34: 34,
    radius_36: 36,
    radius_38: 38,
    radius_40: 40,
    radius_42: 42,
    radius_44: 44,
    radius_46: 46,
    radius_48: 48,
    radius_50: 50,
    radius_52: 52,
    radius_54: 54,
    radius_56: 56,
    radius_58: 58,
    radius_60: 60,
    radius_62: 62,
  };
  
  interface Length {
    length_2: number;
    length_4: number;
    length_6: number;
    length_8: number;
    length_10: number;
    length_12: number;
    length_14: number;
    length_16: number;
    length_18: number;
    length_20: number;
    length_22: number;
    length_24: number;
    length_26: number;
    length_28: number;
    length_30: number;
    length_32: number;
    length_34: number;
    length_36: number;
    length_38: number;
    length_40: number;
    length_42: number;
    length_44: number;
    length_46: number;
    length_48: number;
    length_50: number;
    length_52: number;
    length_54: number;
    length_56: number;
    length_58: number;
    length_60: number;
    length_62: number;
    length_64: number;
    length_66: number;
    length_68: number;
    length_70: number;
    length_72: number;
    length_74: number;
    length_76: number;
    length_78: number;
    length_80: number;
    length_82: number;
    length_84: number;
    length_86: number;
    length_88: number;
    length_90: number;
    length_92: number;
    length_94: number;
    length_96: number;
    length_98: number;
    length_100: number;
    length_102: number;
    length_104: number;
    length_106: number;
    length_108: number;
    length_110: number;
    length_112: number;
    length_114: number;
    length_116: number;
    length_118: number;
    length_120: number;
    length_122: number;
    length_124: number;
    length_126: number;
    length_128: number;
    length_130: number;
    length_132: number;
    length_134: number;
    length_136: number;
    length_138: number;
    length_140: number;
    length_182: number;
    length_184: number;
    length_186: number;
    length_188: number;
    length_190: number;
    length_192: number;
    length_194: number;
    length_196: number;
    length_198: number;
    length_200: number;
    length_202: number;
    length_204: number;
    length_206: number;
    length_208: number;
    length_210: number;
    length_212: number;
    length_214: number;
    length_216: number;
    length_218: number;
    length_220: number;
    length_222: number;
    length_224: number;
    length_226: number;
    length_228: number;
    length_230: number;
    length_232: number;
    length_234: number;
    length_236: number;
    length_238: number;
    length_240: number;
    length_242: number;
    length_244: number;
    length_246: number;
    length_248: number;
    length_250: number;
    length_252: number;
    length_254: number;
    length_256: number;
    length_258: number;
    length_260: number;
    length_262: number;
    length_264: number;
    length_266: number;
    length_268: number;
    length_270: number;
    length_272: number;
    length_274: number;
    length_276: number;
    length_278: number;
    length_280: number;
    length_282: number;
    length_284: number;
    length_286: number;
    length_288: number;
    length_290: number;
    length_292: number;
    length_294: number;
    length_296: number;
    length_298: number;
    length_300: number;
    length_302: number;
    length_304: number;
    length_306: number;
    length_308: number;
    length_310: number;
    length_312: number;
    length_314: number;
    length_316: number;
    length_318: number;
    length_320: number;
    length_322: number;
    length_324: number;
    length_326: number;
    length_328: number;
    length_330: number;
    length_332: number;
    length_334: number;
    length_336: number;
    length_338: number;
    length_340: number;
    length_342: number;
    length_344: number;
    length_346: number;
    length_348: number;
    length_350: number;
  }
  
  export const LENGTH: Length = {
    length_2: 2,
    length_4: 4,
    length_6: 6,
    length_8: 8,
    length_10: 10,
    length_12: 12,
    length_14: 14,
    length_16: 16,
    length_18: 18,
    length_20: 20,
    length_22: 22,
    length_24: 24,
    length_26: 26,
    length_28: 28,
    length_30: 30,
    length_32: 32,
    length_34: 34,
    length_36: 36,
    length_38: 38,
    length_40: 40,
    length_42: 42,
    length_44: 44,
    length_46: 46,
    length_48: 48,
    length_50: 50,
    length_52: 52,
    length_54: 54,
    length_56: 56,
    length_58: 58,
    length_60: 60,
    length_62: 62,
    length_64: 64,
    length_66: 66,
    length_68: 68,
    length_70: 70,
    length_72: 72,
    length_74: 74,
    length_76: 76,
    length_78: 78,
    length_80: 80,
    length_82: 82,
    length_84: 84,
    length_86: 86,
    length_88: 88,
    length_90: 90,
    length_92: 92,
    length_94: 94,
    length_96: 96,
    length_98: 98,
    length_100: 100,
    length_102: 102,
    length_104: 104,
    length_106: 106,
    length_108: 108,
    length_110: 110,
    length_112: 112,
    length_114: 114,
    length_116: 116,
    length_118: 118,
    length_120: 120,
    length_122: 122,
    length_124: 124,
    length_126: 126,
    length_128: 128,
    length_130: 130,
    length_132: 132,
    length_134: 134,
    length_136: 136,
    length_138: 138,
    length_140: 140,
    length_182: 182,
    length_184: 184,
    length_186: 186,
    length_188: 188,
    length_190: 190,
    length_192: 192,
    length_194: 194,
    length_196: 196,
    length_198: 198,
    length_200: 200,
    length_202: 202,
    length_204: 204,
    length_206: 206,
    length_208: 208,
    length_210: 210,
    length_212: 212,
    length_214: 214,
    length_216: 216,
    length_218: 218,
    length_220: 220,
    length_222: 222,
    length_224: 224,
    length_226: 226,
    length_228: 228,
    length_230: 230,
    length_232: 232,
    length_234: 234,
    length_236: 236,
    length_238: 238,
    length_240: 240,
    length_242: 242,
    length_244: 244,
    length_246: 246,
    length_248: 248,
    length_250: 250,
    length_252: 252,
    length_254: 254,
    length_256: 256,
    length_258: 258,
    length_260: 260,
    length_262: 262,
    length_264: 264,
    length_266: 266,
    length_268: 268,
    length_270: 270,
    length_272: 272,
    length_274: 274,
    length_276: 276,
    length_278: 278,
    length_280: 280,
    length_282: 282,
    length_284: 284,
    length_286: 286,
    length_288: 288,
    length_290: 290,
    length_292: 292,
    length_294: 294,
    length_296: 296,
    length_298: 298,
    length_300: 300,
  };
  