import {StyleSheet} from 'react-native';
import COLORS from './COLORS';

const STYLES_CONSTANT = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.grey,
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  titleText: {
    lineHeight: 24,
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentText: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});

export default STYLES_CONSTANT;
