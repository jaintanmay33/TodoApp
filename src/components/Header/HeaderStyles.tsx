import {StyleSheet} from 'react-native';
import {COLORS, APP_SIZES} from '../../utilities/constants';

const headerStyles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: APP_SIZES.size16,
    backgroundColor: COLORS.primaryColor,
  },
  headerTitle: {
    fontWeight: '700',
    color: COLORS.white,
    fontSize: APP_SIZES.size11,
  },
});

export default headerStyles;
