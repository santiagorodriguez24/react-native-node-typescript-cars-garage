import merge from 'lodash/merge';
import { StyleSheet } from 'react-native';

import Colors from './colors';
import Dimensions from './dimensions';
import Fonts from './fonts';
import HitSlop from './hit-slop';
import Layouts from './layouts';
import Spacing from './spacing';
import TypeScale from './type-scale';

// Usefull to define themes
const styleSheetMerge = (baseStyle: any, ...diffStyles: any): any =>
    StyleSheet.create(merge({}, baseStyle, ...diffStyles));

export {
    Colors,
    Dimensions,
    Fonts,
    HitSlop,
    Layouts,
    Spacing,
    styleSheetMerge,
    TypeScale,
};