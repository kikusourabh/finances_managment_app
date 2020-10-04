import COLORS from '../../config/COLORS';

const {StyleSheet, Dimensions} = require('react-native');

export const styles = StyleSheet.create({
  latestContainer: {
    flex: 1,
    width: Dimensions.get('window').width - 16 * 4,
    height: 154,
    borderRadius: 22,
    backgroundColor: COLORS.acent,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
