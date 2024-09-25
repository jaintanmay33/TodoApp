import {StyleSheet} from 'react-native';
import {COLORS, APP_SIZES} from '../../utilities/constants';

const headerStyles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    top: APP_SIZES.size0,
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
