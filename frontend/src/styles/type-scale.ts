import { ScreenDimensions } from "hooks/useScreenDimensions";

import Fonts from './fonts';

const shortDimensionLength = Math.min(
  ScreenDimensions.height,
  ScreenDimensions.width,
);

const referenceShortDimensionLength = 375;
const dynamicTextScaleFactor =
  shortDimensionLength / referenceShortDimensionLength;

const scalableSize = (size: number): number => size * dynamicTextScaleFactor;

const TypeScale = {
  font: {
    graphik10: {
      fontFamily: Fonts.graphik,
      fontSize: 10,
      lineHeight: 13,
    },
    graphik11: {
      fontFamily: Fonts.graphik,
      fontSize: 12,
      lineHeight: 15.95,
    },
    graphik12: {
      fontFamily: Fonts.graphik,
      fontSize: 12,
      lineHeight: 15.6,
    },
    graphik14: {
      fontFamily: Fonts.graphik,
      fontSize: 14,
      lineHeight: 19.6,
    },
    graphik14H16: {
      fontFamily: Fonts.graphik,
      fontSize: 14,
      lineHeight: 16.1,
    },
    graphik16: {
      fontFamily: Fonts.graphik,
      fontSize: 16,
      lineHeight: 22.4,
    },
    graphik16H16: {
      fontFamily: Fonts.graphik,
      fontSize: 16,
      lineHeight: 16,
    },
    graphik18: {
      fontFamily: Fonts.graphik,
      fontSize: 18,
      lineHeight: 19.8,
    },
    graphik20: {
      fontFamily: Fonts.graphik,
      fontSize: 20,
      lineHeight: 22,
    },
    graphik24: {
      fontFamily: Fonts.graphik,
      fontSize: 24,
      lineHeight: 26.2,
    },
    graphik28: {
      fontFamily: Fonts.graphik,
      fontSize: 28,
      lineHeight: 36.4,
    },
    graphik30: {
      fontFamily: Fonts.graphik,
      fontSize: 30,
      lineHeight: 38.4,
    },
    graphik32: {
      fontFamily: Fonts.graphik,
      fontSize: 32,
      lineHeight: 35.2,
    },
    titlingGothic40: {
      fontFamily: Fonts.titlingGothic,
      fontSize: 40,
      lineHeight: 44,
    },
    titlingGothic48: {
      fontFamily: Fonts.titlingGothic,
      fontSize: 48,
      lineHeight: 52.8,
    },
    soulCycleNumbersStraight30: {
      fontFamily: Fonts.soulCycleNumbersStraight,
      fontSize: 30,
      lineHeight: 38.4,
    },
    soulCycleNumbersStraight36: {
      fontFamily: Fonts.soulCycleNumbersStraight,
      fontSize: 36,
      lineHeight: 39.2,
    },
    soulCycleNumbersStraight48: {
      fontFamily: Fonts.soulCycleNumbersStraight,
      fontSize: 48,
      lineHeight: 52.8,
    },
    displayH1: {
      fontFamily: Fonts.graphik,
      fontSize: scalableSize(54),
      lineHeight: scalableSize(54),
    },
    displayH5: {
      fontFamily: Fonts.graphik,
      fontSize: scalableSize(32),
      lineHeight: scalableSize(34),
    },
  },
  lineHeight: {
    size23: {
      lineHeight: 23,
    },
    size26: {
      lineHeight: 26,
    },
    size29: {
      lineHeight: 29,
    },
    size40: {
      lineHeight: 40,
    },
  },
};

export default TypeScale;
